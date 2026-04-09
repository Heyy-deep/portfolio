import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projectsList = [
    {
      title: "Arduino Radar System",
      category: "Hardware Engineering",
      description: "Designed and implemented an Arduino-based model for a radar system, demonstrating practical sensor and micro-controller integration.",
      tech: ["Arduino", "C", "Hardware"],
    },
    {
      title: "Personal Portfolio",
      category: "Web Development",
      description: "Designed and built a responsive portfolio website to showcase academic achievements, projects, and technical skills.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  const certificationsList = [
    {
      title: "Google Cloud Study Jams 2025 Tier 1",
      category: "Google Cloud (2025)",
      description: "Successfully completed Tier 1 of the Google Cloud Study Jams, mastering core cloud infrastructure, networking, and deployment concepts on GCP.",
      tech: ["Google Cloud Platform", "Infrastructure", "Qwiklabs"],
    },
    {
      title: "AI Fundamentals",
      category: "Google (2026)",
      description: "Completed comprehensive training on core Artificial Intelligence and Machine Learning paradigms, led by Google.",
      tech: ["Artificial Intelligence", "Machine Learning", "Google"],
    },
    {
      title: "Introduction to DevOps",
      category: "IBM (2026)",
      description: "Mastered essential DevOps philosophies, including Continuous Integration / Continuous Deployment (CI/CD) pipelines and Agile practices.",
      tech: ["DevOps", "CI/CD", "Agile", "IBM"],
    },
    {
      title: "Gemini Certified Student",
      category: "Google for Education (2026)",
      description: "Achieved university-level certification showcasing proficiency and applied engineering using Google's generative AI tooling.",
      tech: ["Generative AI", "LLMs", "Google Workspace"],
    },
    {
      title: "Advanced System Security Topics",
      category: "University of Colorado System (2024)",
      description: "Completed advanced coursework covering network security, cryptography, and modern protocol vulnerabilities.",
      tech: ["Cybersecurity", "Cryptography", "Network Security"],
    },
    {
      title: "Information Theory",
      category: "The Chinese University of Hong Kong (2025)",
      description: "Studied the mathematical foundations of information compression, signal transmission, and entropy.",
      tech: ["Mathematics", "Data Theory", "Algorithms"],
    }
  ];

  const renderCard = (item: any, idx: number) => (
    <div
      key={idx}
      className="group relative flex flex-col rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/[0.05] p-6 md:p-10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.15] hover:-translate-y-2 lg:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <p className="text-xs md:text-sm font-medium text-gray-400 mb-2 md:mb-3 tracking-wider uppercase">
          {item.category}
        </p>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
          {item.title}
        </h3>
        <p className="text-gray-300 md:text-gray-400 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">
          {item.description}
        </p>
      </div>

      <div className="mt-auto relative z-10 flex items-end justify-between">
        <div className="flex flex-wrap gap-2">
          {item.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium text-gray-300 bg-white/[0.05] border border-white/[0.05]"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="p-2 rounded-full bg-white text-black hover:scale-110 transition-transform">
             <Github size={18} />
          </button>
          <button className="p-2 rounded-full bg-white text-black hover:scale-110 transition-transform">
             <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-[#121212] py-20 md:py-32 px-4 md:px-12 lg:px-24 z-20">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Projects Space */}
        <div>
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 md:mb-6">
              Featured Projects
            </h2>
            <div className="h-1 w-16 md:w-24 bg-white/20 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {projectsList.map(renderCard)}
          </div>
        </div>

        {/* Certifications Space */}
        <div>
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 md:mb-6">
              Certifications
            </h2>
            <div className="h-1 w-16 md:w-24 bg-white/20 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {certificationsList.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
