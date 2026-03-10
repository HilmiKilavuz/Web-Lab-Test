import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

export default function UIKit() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDark = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">

      {/* ── Üst Bar ─────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">🎨 UI Kit</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">LAB-4 — Tailwind CSS Component Kütüphanesi</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Portföye Dön
            </a>
            <button
              onClick={toggleDark}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200
                         px-3 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition-transform"
              aria-label="Tema değiştir"
            >
              <span className="dark:hidden">🌙 Dark</span>
              <span className="hidden dark:inline">☀️ Light</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── İçerik ──────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* ════════════════════════════════════════
            BÖLÜM 1: BUTTONS
            Varyant 1 → 4 renk (primary/secondary/danger/ghost)
            Varyant 2 → 3 boyut (sm/md/lg)
            Varyant 3 → disabled durumu
            ════════════════════════════════════════ */}
        <section className="space-y-6" aria-labelledby="btn-title">
          <h2 id="btn-title" className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
            Button — Varyantlar
          </h2>

          {/* Renk Varyantları */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Renk Varyantları (Varyant 1–4)
            </h3>
            <div className="flex flex-wrap items-center gap-3 p-5 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Button variant="primary">Primary</Button>       {/* Varyant 1 */}
              <Button variant="secondary">Secondary</Button>   {/* Varyant 2 */}
              <Button variant="danger">Danger</Button>         {/* Varyant 3 */}
              <Button variant="ghost">Ghost</Button>           {/* Varyant 4 */}
            </div>
          </div>

          {/* Boyut Varyantları */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Boyut Varyantları (sm / md / lg)
            </h3>
            <div className="flex flex-wrap items-end gap-3 p-5 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Button size="sm">Küçük (sm)</Button>
              <Button size="md">Orta (md)</Button>
              <Button size="lg">Büyük (lg)</Button>
            </div>
          </div>

          {/* Disabled Durumu */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Disabled Durumu
            </h3>
            <div className="flex flex-wrap gap-3 p-5 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Button variant="primary" disabled>Disabled Primary</Button>
              <Button variant="danger" disabled>Disabled Danger</Button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            BÖLÜM 2: INPUTS
            Varyant 5 → Normal
            Varyant 6 → Hatalı (error)
            Varyant 7 → Help text
            Varyant 8 → Disabled
            ════════════════════════════════════════ */}
        <section className="space-y-6" aria-labelledby="input-title">
          <h2 id="input-title" className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
            Input — Varyantlar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 bg-gray-50 dark:bg-gray-800 rounded-xl">
            {/* Varyant 5 */}
            <Input id="ui-normal" label="Normal Input" placeholder="Bir şey yazın..." />

            {/* Varyant 6 */}
            <Input id="ui-error" label="Hatalı Input" error="Bu alan zorunludur, lütfen doldurun." />

            {/* Varyant 7 */}
            <Input id="ui-help" label="Help Text Input" type="email" helpText="Örnek: ad@mail.com" placeholder="E-posta adresiniz" />

            {/* Varyant 8 */}
            <Input id="ui-disabled" label="Disabled Input" disabled value="Düzenlenemez alan" onChange={() => {}} />
          </div>
        </section>

        {/* ════════════════════════════════════════
            BÖLÜM 3: CARDS
            Varyant 9  → Elevated (gölgeli)
            Varyant 10 → Outlined (çerçeveli)
            Varyant 11 → Filled (dolgulu)
            ════════════════════════════════════════ */}
        <section className="space-y-6" aria-labelledby="card-title">
          <h2 id="card-title" className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
            Card — Varyantlar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Varyant 9 */}
            <Card
              variant="elevated"
              title="Elevated Card"
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop"
              imageAlt="Kod ekranı"
              footer={<Button size="sm" variant="primary">İncele</Button>}
            >
              <p className="text-sm">Gölge (shadow) ile yükseltilmiş kart. Hover'da gölge büyür.</p>
            </Card>

            {/* Varyant 10 */}
            <Card
              variant="outlined"
              title="Outlined Card"
              footer={<Button size="sm" variant="secondary">İncele</Button>}
            >
              <p className="text-sm">Çerçeveli kart. Kenarlıkla ayrıştırılmış, sade tasarım.</p>
            </Card>

            {/* Varyant 11 */}
            <Card
              variant="filled"
              title="Filled Card"
              footer={<Button size="sm" variant="ghost">İncele</Button>}
            >
              <p className="text-sm">Dolgulu arka plan ile oluşturulmuş kart varyantı.</p>
            </Card>
          </div>
        </section>

        {/* ════════════════════════════════════════
            BÖLÜM 4: ALERTS
            Varyant 12 → info
            Varyant 13 → success
            Varyant 14 → warning
            Varyant 15 → error (dismissible)
            ════════════════════════════════════════ */}
        <section className="space-y-6" aria-labelledby="alert-title">
          <h2 id="alert-title" className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
            Alert — Varyantlar
          </h2>
          <div className="space-y-3 max-w-xl p-5 bg-gray-50 dark:bg-gray-800 rounded-xl">
            {/* Varyant 12 */}
            <Alert variant="info" title="Bilgi">
              Formunuz taslak olarak kaydedildi.
            </Alert>

            {/* Varyant 13 */}
            <Alert variant="success" title="Başarılı!">
              İşlem tamamlandı, değişiklikler yayında.
            </Alert>

            {/* Varyant 14 */}
            <Alert variant="warning" title="Uyarı">
              Oturumunuz 5 dakika içinde sona erecek.
            </Alert>

            {/* Varyant 15 — dismissible */}
            <Alert variant="error" title="Hata" dismissible>
              Bağlantı kurulamadı. Lütfen tekrar deneyin.
            </Alert>
          </div>
        </section>

        {/* ── Varyant Özeti ─────────────────────────────── */}
        <section className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-4">
            📋 Varyant Özeti (15 / min. 8)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-blue-700 dark:text-blue-300">
            {[
              { label: 'Button Primary',   num: 1 },
              { label: 'Button Secondary', num: 2 },
              { label: 'Button Danger',    num: 3 },
              { label: 'Button Ghost',     num: 4 },
              { label: 'Input Normal',     num: 5 },
              { label: 'Input Error',      num: 6 },
              { label: 'Input Help',       num: 7 },
              { label: 'Input Disabled',   num: 8 },
              { label: 'Card Elevated',    num: 9 },
              { label: 'Card Outlined',    num: 10 },
              { label: 'Card Filled',      num: 11 },
              { label: 'Alert Info',       num: 12 },
              { label: 'Alert Success',    num: 13 },
              { label: 'Alert Warning',    num: 14 },
              { label: 'Alert Error',      num: 15 },
            ].map(({ label, num }) => (
              <div key={num} className="flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center font-bold shrink-0">
                  {num}
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="text-center py-6 text-sm text-gray-400 dark:text-gray-600 border-t border-gray-100 dark:border-gray-800">
        LAB-4 UI Kit · Muhammed Hilmi Kılavuz · 2025
      </footer>
    </div>
  )
}
