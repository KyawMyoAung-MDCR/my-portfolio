import { projectsData, skillsData, universityProjectsData } from '@/data/portfolioData';

export default function Projects() {
  return (
    <section className="py-12 border-t border-gray-200">
      {/* Skills Section  */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skillsData.map((skill) => (
            <span key={skill} className="px-3 py-1 text-gray-100 text-sm font-medium rounded-full border border-gray-200">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Side by Side Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* ----------------- Current Projects ----------------- */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-500 pb-2 border-b border-gray-100">
            Current Project
          </h2>
          <div className="space-y-6">
            {projectsData.map((project, idx) => (
              <div key={idx} className=" bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 space-y-4 w-full">
                <div>
                  <h3 className="text-lg font-bold text-gray-100">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="mt-4">
                    <span className="text-xs font-semibold text-gray-400 block mb-1.5">Specialization Stack:</span>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-xs font-semibold px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {project.githubUrl && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"         
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-800 hover:underline gap-1"
                    >
                      View on GitHub {">>>"}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

  {/* ----------------- Graduation Thesis ----------------- */}
        <div className="space-y-6">
  <h2 className="text-2xl font-bold text-blue-500 pb-2 border-b border-gray-100">
    Graduation Thesis
  </h2>
  
  <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 space-y-4 w-full">
    <div className="space-y-4">
      {universityProjectsData.map((project, idx) => (
        <div key={idx} className="flex flex-col justify-between"> 
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              University of Technology (Yatanarpon Cyber City)
            </span>
            <h3 className="text-lg font-bold text-gray-100">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.description}</p>
            
            <div className="mt-4">
              <span className="text-xs font-semibold text-gray-400 block mb-1.5">Specialization Stack:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-semibold px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-6 pt-4 border-t border-gray-100">
      <span className="text-xs text-gray-400 block">Status: Completed (Graduation Project)</span>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
