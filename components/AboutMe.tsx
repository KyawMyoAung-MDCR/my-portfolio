import { aboutMeData } from '@/data/portfolioData';

export default function AboutMe() {
  return (
    <section className="py-12 border-t border-gray-200 animate-fadeIn text-gray-100">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">About Me</h2>
      
      <div className="flex flex-col gap-6">
        
        <div>
          <p className="leading-relaxed text-base text-gray-300">
            {aboutMeData.text}
          </p>
        </div>

        {/* Quick Info Card */}
        <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 space-y-4 w-full">
          <h3 className="text-lg font-semibold text-blue-400 border-b border-gray-700 pb-2">
            Quick Info
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Email */}
            <div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Email</span>
              <a href={`mailto:${aboutMeData.email}`} className="text-sm text-blue-400 hover:underline break-all">
                {aboutMeData.email}
              </a>
            </div>

           {/* University & Degree */}
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">University</span>
                <span className="text-sm font-semibold text-gray-200 block">
                  {aboutMeData.university}
                </span>
                {aboutMeData.degree && (
                  <span className="text-xs text-blue-400 font-medium block mt-0.5">
                    {aboutMeData.degree}
                  </span>
                )}
              </div>


            {/* Graduation Thesis */}
            {aboutMeData.thesis && (
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Graduation Thesis</span>
                <p className="text-xs italic text-gray-300 mt-0.5 leading-relaxed">
                  {`"${aboutMeData.thesis}"`}
                </p>
              </div>
            )}

            {/* Languages */}
            <div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Languages</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {aboutMeData.languages?.map((lang, index) => (
                  <span key={index} className="text-xs px-2 py-0.5 bg-gray-700 text-gray-200 border border-gray-600 rounded-md">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}