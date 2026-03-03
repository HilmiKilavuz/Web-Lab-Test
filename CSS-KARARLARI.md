# CSS Kararları

## 1. Breakpoint Seçimi
- **640px (Mobile-to-Tablet):** Büyük telefonlar ve küçük tabletler için geçiş noktası olarak belirlendi. Bu noktada menü dikeyden yataya geçiyor ve padding değerleri artıyor.
- **1024px (Tablet-to-Desktop):** Masaüstü görünümü için belirlendi. İçerik genişliği (max-width) sınırlandı ve proje kartları 3 sütunlu sabit düzene geçti.

## 2. Layout Tercihleri
- **Header:** Elemanları (Logo ve Navigasyon) ana eksen boyunca kolayca hizalamak ve mobilde dikey yığına çevirmek için **Flexbox** seçildi.
- **Proje Kartları:** İki boyutlu (satır ve sütun) bir düzen gerektiği için **CSS Grid** seçildi.
- **auto-fit:** Kartların ekranı en verimli şekilde kaplaması için `auto-fit` kullanıldı. Bu sayede az sayıda kart olduğunda bile kartlar genişleyerek boşlukları kapatabiliyor.

## 3. Design Tokens
- **Renk Paleti:** Modern ve profesyonel bir görünüm için koyu bir tema (Slate/Blue) seçildi.
- **Spacing:** `rem` tabanlı (4px-64px arası) bir skala belirlenerek tüm boşlukların tutarlı olması sağlandı.
- **Fluid Typography:** `clamp()` fonksiyonu ile minimum 1rem, maksimum 3.5rem arasında ekran genişliğine göre akıcı şekilde ölçeklenen bir sistem kuruldu.

## 4. Responsive Stratejiler
- **Mobile-First:** CSS yazımına en küçük ekranlardan başlandı (`min-width` queryler kullanıldı). Bu sayede mobil cihazlar daha az kod işledi ve performans arttı.
- **Görsel Boyutları:** `max-width: 100%` ve `height: auto` kullanılarak görsellerin taşması engellendi. `object-fit: cover` ile oran bozulmadan kırpma yapıldı.
