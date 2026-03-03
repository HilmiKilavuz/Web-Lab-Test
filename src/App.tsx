import { useState } from 'react'
import type { FormEvent } from 'react'
import profilePhoto from './photos/IMG_20240608_2219153.jpg'
import './App.css'

function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basit bir simülasyon
    console.log('Form verileri:', data);
    setFormStatus('success');

    // 3 saniye sonra mesajı temizle
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="app-container">
      {/* Erişilebilirlik: İçeriğe Atla Linki */}
      <a href="#main-content" className="skip-link">Ana İçeriğe Atla</a>

      {/* Semantik Header */}
      <header>
        <div className="logo" aria-hidden="true">MK</div>
        <nav aria-label="Ana Navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Semantik Main */}
      <main id="main-content">

        {/* Hero Section */}
        <section className="hero" aria-labelledby="hero-title">
          <h1 id="hero-title">Muhammed Hilmi Kılavuz</h1>
          <p>Yazılım Geliştirici & Tasarımcı</p>
        </section>

        {/* Hakkımda Section */}
        <section id="hakkimda" aria-labelledby="hakkimda-title">
          <h2 id="hakkimda-title">Hakkımda</h2>
          <div className="about-grid">
            <figure className="profile-container">
              <img
                src={profilePhoto}
                alt="Muhammed Hilmi Kılavuz'un profil fotoğrafı"
              />
              <figcaption>Software Developer</figcaption>
            </figure>
            <div className="about-text">
              <p>
                3.sınıf Yazılım Mühendisliği öğrencisiyim. Yazılım geliştirme konusunda deneyim kazanırken, son dönemde özellikle siber
                güvenlik alanına ilgi duymaya başladım.Bu alanda kendimi geliştirmek, temel eğitimleri almak ve staj yoluyla gerçek
                deneyim kazanmak istiyorum. C#, Java ve Kotlin ile uygulamalar geliştirdim. Mobil geliştirme ve veritabanı yönetimi
                alanlarında projeler yaptım.Anlık olarak siber güvenlik alanında kendimi geliştirmeyi hedefliyorum .Takım çalışmasına
                uyumlu, ekip liderliği konusunda başarılı ve teknolojinin her alanında kendini geliştirmeye adayan bir mühendis adayıyım.
              </p>

              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>Kotlin</li>
                <li>C#</li>
                <li>Git</li>
              </ul>

              <p style={{ marginTop: '1.5rem' }}>
                Bu web sitesi, Web Tasarımı ve Programlama dersi LAB-3 kapsamında
                modern CSS (Flexbox/Grid/Tokens) kurallarına uygun olarak güncellenmiştir.
              </p>
            </div>
          </div>
        </section>

        {/* Projelerim Section */}
        <section id="projeler" aria-labelledby="projeler-title">
          <h2 id="projeler-title">Projelerim</h2>
          <div className="projects-grid">

            <article className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop" alt="E-Ticaret Sitesi projesi ekran görüntüsü" />
              </div>
              <div className="project-content">
                <h3>E-Ticaret Platformu</h3>
                <p>Modern bir alışveriş deneyimi sunan, React ve TypeScript ile geliştirilmiş responsive web uygulaması.</p>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop" alt="Hava Durumu Uygulaması projesi ekran görüntüsü" />
              </div>
              <div className="project-content">
                <h3>Hava Durumu Paneli</h3>
                <p>Global hava durumu verilerini anlık olarak çeken ve görselleştiren dinamik bir dashboard uygulaması.</p>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop" alt="Blog Portalı projesi ekran görüntüsü" />
              </div>
              <div className="project-content">
                <h3>Blog Portalı</h3>
                <p>İçerik yönetim sistemi ve kullanıcı etkileşimi odaklı, semantik yapılı blog platformu.</p>
              </div>
            </article>

          </div>
        </section>

        {/* İletişim Section */}
        <section id="iletisim" aria-labelledby="iletisim-title">
          <h2 id="iletisim-title">İletişim</h2>

          {formStatus === 'success' && (
            <div className="form-message success" role="alert">
              Mesajınız başarıyla gönderildi!
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>İletişim Bilgileri ve Mesaj</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  minLength={3}
                  placeholder="Örn: Ahmet Yılmaz"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta Adresi</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  placeholder="Örn: ahmet@mail.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <select id="subject" name="subject" required aria-required="true">
                  <option value="">Lütfen seçiniz</option>
                  <option value="genel">Genel Sorular</option>
                  <option value="is">İş Teklifi</option>
                  <option value="isbirligi">İş Birliği</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  minLength={10}
                  placeholder="Bana bir mesaj bırakın..."
                ></textarea>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>

        </section>

      </main>

      {/* Semantik Footer */}
      <footer>
        <p>&copy; 2025 Muhammed Hilmi Kılavuz. Tüm hakları saklıdır.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          Web LAB-2: Semantik HTML & Erişilebilirlik
        </p>
      </footer>
    </div>
  )
}

export default App
