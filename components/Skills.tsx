export default function Skills() {
  const skillCategories = [
    {
      title: "</> Languages",
      isPrimary: false,
      skills: ["JAVA", "Python", "SQL"],
    },
    {
      title: "💻 Web Development",
      isPrimary: true,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "REST APIs",
        "ASP.NET",
      ],
    },
    {
      title: "📊 ML & Analytics",
      isPrimary: false,
      skills: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Statistical Modelling",
        "LLM",
        "NLP",
      ],
    },
    {
      title: "🛠️ Tools & Technologies",
      isPrimary: false,
      skills: ["Git", "Postman", "Spyder", "JIRA"],
    },
    {
      title: "🖧 Networking & Systems",
      isPrimary: false,
      skills: [
        "Computer Hardware",
        "Networking Fundamentals",
        "Routers",
        "Switches",
        "Firewalls",
      ],
    },
    {
      title: "🤖 AI Tools",
      isPrimary: false,
      skills: ["Claude AI", "Blackbox AI"],
    },
  ];

  return (
    <section className="relative w-full bg-[#121212] py-20 px-4 md:px-12 lg:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Skills & Tools
          </h2>
          <div className="h-1 w-16 md:w-24 bg-white/20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`flex flex-col rounded-2xl bg-white/[0.03] border p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] ${
                category.isPrimary
                  ? "border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/5 hover:border-blue-500/50"
                  : "border-white/[0.05] hover:border-white/[0.15]"
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 tracking-wide">
                {category.title}
              </h3>
              
              <div className="mt-auto flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-400 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
