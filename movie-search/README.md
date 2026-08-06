🎬 Movie Search (Kino Axtarış) Tətbiqi
OMDb (Open Movie Database) API inteqrasiyası ilə filmlərin axtarılması, nəticələrin kart formasında nümayiş etdirilməsi və səhifələnməsini (Pagination) təmin edən müasir React tətbiqi.

🚀 Texnologiya Steki
React 19 (v19.2.8) - UI komponentlərinin qurulması və vəziyyət idarəetməsi
Vite 8 (v8.2.0) - Sürətli tərtibat və modulların toplanması
JavaScript (ES6+) - Tətbiqin məntiqi və asynchronous API sorğuları
Vanilla CSS - Grid layout və responsiv dizayn
ESLint 10 - Kod keyfiyyəti və standartlaşdırma
📁 Layihə Strukturu və Fayl Arxitekturası

movie-search/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── hooks/
    │   └── useFetch.js
    └── components/
        ├── SearchBar.jsx
        ├── Card.jsx
        ├── ResultsList.jsx
        └── Pagination.jsx
Faylların Təyinatı:
App.jsx
: Əsas konteyner komponenti (query və page state-lərini saxlayır və UI vəziyyətlərini idarə edir).
useFetch.js
: API inteqrasiyası üçün Custom React Hook. Debouncing (500ms) və AbortController istifadə edir.
SearchBar.jsx
: Film adının daxil edilməsi üçün axtarış sahəsi.
Card.jsx
: Filmin posteri, adı və ilini göstərən kart komponenti (Poster olmadıqda fallback şəkil nümayiş etdirir).
ResultsList.jsx
: Filmləri CSS Grid daxilində nümayiş etdirən komponent.
Pagination.jsx
: Səhifələr arası keçid idarəetməsi.
index.css
: Responsiv dizayn və tətbiqin ümumi CSS stilləri.
⚡ Əsas Texniki Xüsusiyyətlər
Debouncing (500ms): Axtarış zamanı serverə həddən artıq sorğu göndərilməsinin qarşısını almaq üçün keyup gecikməsi.
AbortController: Yeni axtarış başladıqda əvvəlki işləyən sorğunun ləğv edilməsi (Race condition qoruması).
UI Status İdarəetməsi: Yüklənmə (isLoading), Xəta (error) və Boş nəticə hallarının aydın vizual nümayişi.
Fallback Image: Film posteri mövcud olmadıqda (N/A) alternativ şəkildən istifadə.