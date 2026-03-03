# CSS Kararları

## 1. Breakpoint Seçimi
- **640px (Tablet):** Büyük telefonlar ve tabletler için geçiş noktası. Bu noktada menü dikeyden yataya geçiyor, hizalamalar sola yaslanıyor ve `about-grid` iki sütunlu yapıya bürünüyor.
- **1024px (Masaüstü):** Geniş ekranlı monitörler için belirlendi. `main` kapsayıcısının `max-width` değeri 1200px'e çıkarıldı ve proje kartları 3 sütunlu sabit ızgara düzenine sabitlendi.

## 2. Layout Tercihleri
- **Header:** Elemanları hizalamak için **Flexbox** seçildi. Mobilde (varsayılan) dikey dizilim, tablette (640px+) ise yatay dizilim uygulanarak responsive esneklik sağlandı.
- **Proje Kartları:** Karmaşık ızgara yapısı için **CSS Grid** kullanıldı. `repeat(auto-fit, minmax(280px, 1fr))` ile esnek bir yapı kuruldu, 1024px+ ekranlarda ise `repeat(3, 1fr)` ile 3 sütun garantiye alındı.

## 3. Design Tokens
- **Renk Paleti:** Modern ve profesyonel bir görünüm için koyu bir tema (Slate/Blue) seçildi.
- **Spacing:** `rem` tabanlı tutarlı bir skala kullanıldı.
- **Fluid Typography:** `clamp()` fonksiyonu ile metin boyutlarının ekran genişliğine göre akıcı ölçeklenmesi sağlandı.

## 4. Responsive Stratejiler
- **Mobile-First:** Tüm CSS yazımı mobilden başlayarak (`min-width` queryler ile) büyütüldü. Bu sayede gereksiz kod yükü engellendi ve performans optimize edildi.
- **Görsel Boyutları:** `max-width: 100%` ve `object-fit: cover` ile görsellerin her cihazda oranını koruması sağlandı.
