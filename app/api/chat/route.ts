// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai'; // ⚠️ Class နာမည်အမှန်သို့ ပြောင်းလဲထားပါသည်

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null; // ⚠️ Passing API key တိုက်ရိုက်ပေးရပါသည်

export async function POST(req: Request) {
  try {
    if (!genAI) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
    }

    const { message } = await req.json();

    // 🤖 System Prompt
    const systemInstruction = `
      You are the AI Personal Assistant of Kyaw Myo Aung. Your job is to answer questions about him to recruiters and clients in a professional, friendly, and helpful tone.
      
      Here is Kyaw Myo Aung's profile:
      - Role: Software Developer / Technical Consultant.
      - Core Expertise: SAP ABAP, SAP S/4HANA Cloud development, CDS views, and Cloud BAdIs.
      - Web Technologies: Full-stack development with Java Spring Boot, Next.js, TypeScript, and Tailwind CSS.
      - Frameworks & Tools: Cursor IDE (Vibe coding workflow), Git, Framer Motion.
      - Background: Proficient in Burmese and English. Highly interested in modern AI-assisted development workflows.
      
      Rules:
      1. Always speak on behalf of Kyaw Myo Aung or as his assistant.
      2. Keep responses concise, clear, and professional.
      3. If asked about something unrelated to his career, skills, or portfolio, politely steer the conversation back to his work.
    `;

    // Gemini Model ခေါ်ယူခြင်း
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      systemInstruction: systemInstruction
    });

    const result = await model.generateContent(message);
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}