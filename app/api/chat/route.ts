import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  aboutMeData,
  experiencesData,
  heroData,
  projectsData,
  skillsData,
} from '@/data/portfolioData';

const apiKey = process.env.GEMINI_API_KEY ?? '';
const modelName = process.env.GEMINI_MODEL ?? 'gemini-2.5-flash';

function buildSystemPrompt(): string {
  const experienceSummary = experiencesData
    .map(
      (exp) =>
        `- ${exp.role} at ${exp.company} (${exp.duration}): ${exp.description.join(' ')}`
    )
    .join('\n');

  const projectSummary = projectsData
    .map(
      (project) =>
        `- ${project.title}: ${project.description} [${project.techStack.join(', ')}]`
    )
    .join('\n');

  return `You are the AI personal assistant for ${heroData.name}, a ${heroData.title}.

About: ${heroData.bio}
${aboutMeData.text}

Skills: ${skillsData.join(', ')}

Work experience:
${experienceSummary}

Projects:
${projectSummary}

Answer professionally and in a friendly tone. Only share information about ${heroData.name} based on the context above. If asked something outside this scope, politely say you can only answer questions about ${heroData.name}'s portfolio, skills, experience, and projects. Keep answers concise.`;
}

export async function POST(req: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Gemini API key is not configured. Add GEMINI_API_KEY to .env.local.' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: modelName,
      systemInstruction: buildSystemPrompt(),
    });

    const result = await model.generateContent(message);
    const responseText = result.response.text();

    if (!responseText) {
      return NextResponse.json(
        { error: 'The assistant returned an empty response. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply: responseText });
  } catch (error) {
    console.error('Gemini API Error:', error);

    const message =
      error instanceof Error ? error.message : 'Unknown error from Gemini API';

    if (message.includes('404') || message.includes('not found')) {
      return NextResponse.json(
        {
          error: `Model "${modelName}" is unavailable. Set GEMINI_MODEL in .env.local (e.g. gemini-2.5-flash).`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to get a response from the assistant. Please try again.' },
      { status: 500 }
    );
  }
}
