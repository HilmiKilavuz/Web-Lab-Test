interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
}

const skills: Skill[] = [
  { name: "HTML5", level: "advanced" },
  { name: "CSS3", level: "advanced" },
  { name: "JavaScript", level: "intermediate" },
  { name: "React", level: "intermediate" },
  { name: "TypeScript", level: "intermediate" },
  { name: "Tailwind CSS", level: "intermediate" },
  { name: "Java", level: "intermediate" },
  { name: "Kotlin", level: "beginner" },
  { name: "C#", level: "intermediate" },
  { name: "Git", level: "intermediate" },
];

const levelColors = {
  beginner: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  advanced: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

const levelLabels = {
  beginner: "Başlangıç",
  intermediate: "Orta",
  advanced: "İleri",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-4"
      aria-labelledby="skills-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="skills-title"
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
          Yeteneklerim
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${levelColors[skill.level]}`}
              >
                {levelLabels[skill.level]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
