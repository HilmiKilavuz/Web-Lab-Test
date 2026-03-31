import profilePhoto from "../../photos/IMG_20240608_2219153.jpg";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Java",
  "Kotlin",
  "C#",
  "Git",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900/40"
      aria-labelledby="about-title"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <figure className="shrink-0">
          <img
            src={profilePhoto}
            alt="Muhammed Hilmi Kılavuz'un profil fotoğrafı"
            className="w-40 h-40 rounded-full object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
          />
          <figcaption className="text-center mt-2 text-sm text-gray-500">
            Software Developer
          </figcaption>
        </figure>

        <div>
          <h2
            id="about-title"
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left"
          >
            Hakkımda
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            3.sınıf Yazılım Mühendisliği öğrencisiyim. Yazılım geliştirme
            konusunda deneyim kazanırken, son dönemde özellikle siber güvenlik
            alanına ilgi duymaya başladım. C#, Java ve Kotlin ile uygulamalar
            geliştirdim. Takım çalışmasına uyumlu, ekip liderliği konusunda
            başarılı ve teknolojinin her alanında kendini geliştirmeye adayan
            bir mühendis adayıyım.
          </p>
          <ul
            className="flex flex-wrap gap-2 justify-center md:justify-start"
            role="list"
            aria-label="Beceri etiketleri"
          >
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
