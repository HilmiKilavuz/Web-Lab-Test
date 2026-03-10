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
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode)
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
      desc: 'Modern bir alışveriş deneyimi sunan, React ve TypeScript ile geliştirilmiş responsive web uygulaması.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop',
      alt: 'E-Ticaret Sitesi projesi ekran görüntüsü',
    },
    {
      title: 'Hava Durumu Paneli',
      desc: 'Global hava durumu verilerini anlık olarak çeken ve görselleştiren dinamik bir dashboard uygulaması.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop',
      alt: 'Hava Durumu Uygulaması projesi ekran görüntüsü',
    },
    {
      title: 'Blog Portalı',
      desc: 'İçerik yönetim sistemi ve kullanıcı etkileşimi odaklı, semantik yapılı blog platformu.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop',
      alt: 'Blog Portalı projesi ekran görüntüsü',
    },
  ]

  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Java', 'Kotlin', 'C#', 'Git']

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">

      {/* ── Erişilebilirlik: İçeriğe Atla ─────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
      >
        Ana İçeriğe Atla
      </a>

      {/* ── Dark Mode Toggle ───────────────────────────────── */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
                   p-2 rounded-full shadow-lg hover:scale-110 transition-transform w-10 h-10
                   flex items-center justify-center text-lg"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xl font-bold text-blue-400 tracking-wide" aria-hidden="true">MHK</div>
          <nav aria-label="Ana Navigasyon">
            <ul className="flex flex-wrap gap-1">
              {[
                { href: '#hakkimda', label: 'Hakkımda' },
                { href: '#projeler', label: 'Projeler' },
                { href: '#iletisim', label: 'İletişim' },
                { href: '/uikit', label: '🎨 UI Kit', isPage: true },
              ].map(({ href, label, isPage }) => (
                <li key={href}>
                  {isPage ? (
                    <a
                      href={href}
                      className="px-3 py-1.5 rounded-md text-sm text-slate-300 hover:bg-blue-600 hover:text-white transition-colors font-medium"
                    >
                      {label}
                    </a>
                  ) : (
                    <a
                      href={href}
                      className="px-3 py-1.5 rounded-md text-sm text-slate-300 hover:bg-slate-700 hover:text-white dark:hover:bg-slate-600 transition-colors"
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Main ───────────────────────────────────────────── */}
      <main id="main-content">

        {/* Hero */}
        <section
          className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16"
          aria-labelledby="hero-title"
        >
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4
                       bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
          >
            Muhammed Hilmi Kılavuz
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-xl">
            Yazılım Geliştirici &amp; Tasarımcı
          </p>
        </section>

        {/* Hakkımda */}
        <section
          id="hakkimda"
          className="py-16 px-4 bg-slate-900/40"
          aria-labelledby="hakkimda-title"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src={profilePhoto}
                alt="Muhammed Hilmi Kılavuz'un profil fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
              />
              <figcaption className="text-center mt-2 text-sm text-slate-400">Software Developer</figcaption>
            </figure>

            <div>
              <h2
                id="hakkimda-title"
                className="text-3xl font-bold text-white mb-4 text-center md:text-left"
              >
                Hakkımda
              </h2>
              <p className="text-slate-400 mb-4 leading-relaxed">
                3.sınıf Yazılım Mühendisliği öğrencisiyim. Yazılım geliştirme konusunda deneyim kazanırken,
                son dönemde özellikle siber güvenlik alanına ilgi duymaya başladım. C#, Java ve Kotlin ile
                uygulamalar geliştirdim. Takım çalışmasına uyumlu, ekip liderliği konusunda başarılı ve
                teknolojinin her alanında kendini geliştirmeye adayan bir mühendis adayıyım.
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
              <p className="mt-6 text-sm text-slate-500">
                Bu web sitesi, Web Tasarımı ve Programlama dersi LAB-4 kapsamında
                Tailwind CSS v4 ile yeniden stillendirilmiştir.
              </p>
            </div>
          </div>
        </section>

        {/* Projelerim */}
        <section
          id="projeler"
          className="py-16 px-4"
          aria-labelledby="projeler-title"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="projeler-title"
              className="text-3xl font-bold text-center text-white mb-10"
            >
              Projelerim
            </h2>
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
                      Detaylar
                    </Button>
                  }
                >
                  <p className="text-sm leading-relaxed">{project.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section
          id="iletisim"
          className="py-16 px-4 bg-slate-900/40"
          aria-labelledby="iletisim-title"
        >
          <div className="max-w-lg mx-auto">
            <h2
              id="iletisim-title"
              className="text-3xl font-bold text-center text-white mb-8"
            >
              İletişim
            </h2>

            {formStatus === 'success' && (
              <div className="mb-4">
                <Alert variant="success" title="Mesaj Gönderildi!" dismissible>
                  Mesajınız başarıyla iletildi. En kısa sürede geri döneceğim.
                </Alert>
              </div>
            )}

            <form
              className="space-y-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              onSubmit={handleSubmit}
            >
              <fieldset className="space-y-4">
                <legend className="text-lg font-semibold text-blue-400 text-center mb-4">
                  İletişim Bilgileri ve Mesaj
                </legend>

                <Input
                  id="name"
                  label="Ad Soyad"
                  placeholder="Örn: Ahmet Yılmaz"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  id="email"
                  label="E-posta Adresi"
                  type="email"
                  placeholder="Örn: ahmet@mail.com"
                  required
                  helpText="Spam göndermiyoruz, söz!"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                {/* Konu - native select */}
                <div className="space-y-1">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-600
                               bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500
                               transition-colors"
                  >
                    <option value="">Lütfen seçiniz</option>
                    <option value="genel">Genel Sorular</option>
                    <option value="is">İş Teklifi</option>
                    <option value="isbirligi">İş Birliği</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                {/* Mesaj - native textarea */}
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Bana bir mesaj bırakın..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-600
                               bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500
                               transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Gönder
                </Button>
              </fieldset>
            </form>
          </div>
        </section>

      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-slate-900 border-t border-slate-700 text-center py-6 px-4 text-slate-500 text-sm">
        <p>&copy; 2025 Muhammed Hilmi Kılavuz. Tüm hakları saklıdır.</p>
        <p className="mt-1 text-xs text-slate-600">
          Web LAB-4: Tailwind CSS v4 · Component Yaklaşımı · Dark Mode
        </p>
      </footer>

    </div>
  )
}

export default App
