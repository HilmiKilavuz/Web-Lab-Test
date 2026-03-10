import { useState } from 'react'
import type { FormEvent } from 'react'
import profilePhoto from './photos/IMG_20240608_2219153.jpg'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import Alert from './components/Alert'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const toggleDark = () => {
    const next = !darkMode
    setDarkMode(next)
    document.documentElement.classList.toggle('dark', next)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form verileri:', formData)
    setFormStatus('success')
    setTimeout(() => setFormStatus('idle'), 4000)
  }

  const projects = [
    {
      title: 'E-Ticaret Platformu',
      desc: 'React ve TypeScript ile geliştirilmiş, modern ve responsive alışveriş uygulaması.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop',
      alt: 'E-Ticaret Sitesi projesi',
    },
    {
      title: 'Hava Durumu Paneli',
      desc: 'Global hava durumu verilerini anlık çeken ve görselleştiren dinamik dashboard.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop',
      alt: 'Hava Durumu Paneli projesi',
    },
    {
      title: 'Blog Portalı',
      desc: 'İçerik yönetim sistemi ve kullanıcı etkileşimi odaklı, semantik yapılı blog platformu.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop',
      alt: 'Blog Portalı projesi',
    },
  ]

  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Java', 'Kotlin', 'C#', 'Git']

  const navLinks = [
    { href: '#hakkimda', label: 'Hakkımda' },
    { href: '#projeler', label: 'Projeler' },
    { href: '#iletisim', label: 'İletişim' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* ── Erişilebilirlik: Skip Link ──────────────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2
                   bg-blue-600 text-white px-4 py-2 rounded-lg z-[100] font-medium"
      >
        Ana İçeriğe Atla
      </a>

      {/* ══════════════════════════════════════════════════════════
          HEADER — logo · nav · dark toggle (hepsi tek satırda)
          ══════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <span className="text-lg font-bold text-blue-400 tracking-widest shrink-0">MHK</span>

          {/* Nav */}
          <nav aria-label="Ana Navigasyon">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="px-4 py-2 rounded-md text-sm font-medium text-slate-300
                               hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/uikit"
                  className="ml-2 px-4 py-2 rounded-md text-sm font-medium text-blue-400 border border-blue-800
                             hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-colors"
                >
                  UI Kit
                </a>
              </li>
            </ul>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            aria-label="Tema değiştir"
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg
                       bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white
                       transition-colors text-base"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          MAIN
          ══════════════════════════════════════════════════════════ */}
      <main id="main-content">

        {/* ── HERO ───────────────────────────────────────────────── */}
        <section
          aria-labelledby="hero-title"
          className="py-28 px-6 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Portföy · LAB-4
            </p>
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6
                         bg-gradient-to-br from-white via-slate-200 to-blue-400
                         bg-clip-text text-transparent"
            >
              Muhammed Hilmi Kılavuz
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-8">
              Yazılım Geliştirici &amp; Tasarımcı
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="primary" size="lg">
                <a href="#projeler">Projelerimi Gör</a>
              </Button>
              <Button variant="ghost" size="lg">
                <a href="#iletisim">İletişim</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── HAKKIMDA ───────────────────────────────────────────── */}
        <section
          id="hakkimda"
          aria-labelledby="hakkimda-title"
          className="py-20 px-6 bg-slate-900"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="hakkimda-title"
              className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center"
            >
              Hakkımda
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Fotoğraf */}
              <figure className="shrink-0 text-center">
                <img
                  src={profilePhoto}
                  alt="Muhammed Hilmi Kılavuz profil fotoğrafı"
                  className="w-36 h-36 rounded-full object-cover border-4 border-blue-600
                             grayscale hover:grayscale-0 transition-all duration-300 mx-auto"
                />
                <figcaption className="mt-3 text-sm text-slate-400">Software Developer</figcaption>
              </figure>

              {/* Metin */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-slate-300 leading-relaxed mb-6">
                  3. sınıf Yazılım Mühendisliği öğrencisiyim. Yazılım geliştirme konusunda
                  deneyim kazanırken son dönemde özellikle siber güvenlik alanına ilgi duymaya
                  başladım. C#, Java ve Kotlin ile uygulamalar geliştirdim; mobil geliştirme ve
                  veritabanı yönetimi projelerinde yer aldım.
                </p>

                {/* Skill Tags */}
                <ul
                  className="flex flex-wrap gap-2 justify-center md:justify-start"
                  role="list"
                  aria-label="Beceri etiketleri"
                >
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1 bg-blue-900/60 text-blue-300 border border-blue-700
                                 rounded-full text-sm font-medium hover:bg-blue-700 hover:text-white
                                 transition-colors cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJELERİM ─────────────────────────────────────────── */}
        <section
          id="projeler"
          aria-labelledby="projeler-title"
          className="py-20 px-6"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="projeler-title"
              className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center"
            >
              Projelerim
            </h2>

            {/* Mobil: 1 sütun · Tablet: 2 sütun · Masaüstü: 3 sütun */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  variant="elevated"
                  title={project.title}
                  image={project.image}
                  imageAlt={project.alt}
                  footer={
                    <Button size="sm" variant="secondary">
                      Detayları Gör
                    </Button>
                  }
                >
                  <p className="text-sm leading-relaxed">{project.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── İLETİŞİM ───────────────────────────────────────────── */}
        <section
          id="iletisim"
          aria-labelledby="iletisim-title"
          className="py-20 px-6 bg-slate-900"
        >
          <div className="max-w-xl mx-auto">
            <h2
              id="iletisim-title"
              className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center"
            >
              İletişim
            </h2>
            <p className="text-slate-400 text-center mb-10 text-sm">
              Bir fikriniz mi var? Birlikte çalışalım.
            </p>

            {/* Başarı mesajı */}
            {formStatus === 'success' && (
              <div className="mb-6">
                <Alert variant="success" title="Mesaj Gönderildi!" dismissible>
                  En kısa sürede geri döneceğim. Teşekkürler!
                </Alert>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <fieldset className="space-y-5 border-0 m-0 p-0">
                <legend className="sr-only">İletişim Formu</legend>

                {/* Ad Soyad + E-posta — yan yana (tablet+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    id="contact-name"
                    label="Ad Soyad"
                    placeholder="Ahmet Yılmaz"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    id="contact-email"
                    label="E-posta"
                    type="email"
                    placeholder="ahmet@mail.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Konu */}
                <div className="space-y-1">
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Konu
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-600
                               bg-slate-700 text-slate-100
                               focus:outline-none focus:ring-2 focus:ring-blue-500
                               transition-colors"
                  >
                    <option value="">Seçiniz…</option>
                    <option value="genel">Genel Sorular</option>
                    <option value="is">İş Teklifi</option>
                    <option value="isbirligi">İş Birliği</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                {/* Mesaj */}
                <div className="space-y-1">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="Mesajınızı buraya yazın…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-600
                               bg-slate-700 text-slate-100 resize-none
                               focus:outline-none focus:ring-2 focus:ring-blue-500
                               transition-colors"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Mesaj Gönder →
                </Button>
              </fieldset>
            </form>
          </div>
        </section>

      </main>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════════════ */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
        <p className="text-slate-300 font-medium mb-1">
          &copy; 2025 Muhammed Hilmi Kılavuz
        </p>
        <p className="text-xs">
          Web Tasarımı ve Programlama · LAB-4 · Tailwind CSS v4
        </p>
      </footer>

    </div>
  )
}

export default App
