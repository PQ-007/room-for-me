type LangCode = "mn" | "en" | "ja"

const translations: Record<LangCode, Record<string, string>> = {
  mn: {
    // Quartz UI
    "search.title": "Хайлт",
    "search.searchBarPlaceholder": "Хайх...",
    "graph.title": "График харагдац",
    "tableOfContents.title": "Агуулга",
    "backlinks.title": "Буцах холбоосууд",
    "backlinks.noBacklinksFound": "Буцах холбоос олдсонгүй",
    "explorer.title": "Хайгч",
    "footer.createdWith": "Бүтээгдсэн",
    "themeToggle.darkMode": "Харанхуй горим",
    "themeToggle.lightMode": "Цайвар горим",
    "readerMode.title": "Уншигчийн горим",
    // Homepage hero
    "hero_eyebrow": "KOSEN Оюутан · Монгол",
    "hero_tagline": "ML суралцагч, бүтээгч, бичигч. Сурсан зүйлээ хуваалцдаг — код, ном, санаа.",
    "hero_cta1": "Төслүүд",
    "hero_cta2": "Блог",
    "tag1": "Машин сургалт",
    "tag2": "Япон N2",
    "tag3": "Fl4shc4rd",
    "tag4": "Нийтэд бүтээх",
    // Homepage sections
    "working_label": "Одоо хийж буй",
    "working_title": "Явагдаж буй",
    "work1_title": "ML A-Z Машин сургалт",
    "work1_desc": "Хянаж, хянагдалгүй, бэхжүүлэх суралцахыг хамарсан.",
    "work2_title": "Япон хэл N2 дүрэм",
    "work2_desc": "文法勉強中 — N2 шалгалтанд зориулсан дүрмийн загвар.",
    "work3_title": "Fl4shc4rd",
    "work3_desc": "KOSEN дипломын флэшкард апп. Девлог, туршилт.",
    // Library cards
    "lib_blog_title": "Нийтлэл",
    "lib_blog_desc": "Дадлагын тэмдэглэл, эргэцүүлэл, техникийн нийтлэлүүд",
    "lib_books_title": "Номын тэмдэглэл",
    "lib_books_desc": "Гүн сургалт, биологи — миний уншиж буй ном",
    "lib_lessons_title": "Хичээлийн тэмдэглэл",
    "lib_lessons_desc": "ML A-Z, Япон N2 дүрмийн тэмдэглэл",
    "lib_projects_title": "Төслүүд",
    "lib_projects_desc": "Fl4shc4rd дипломын апп, девлог, туршилт",
    // Heatmap
    "activity_label": "Үйл ажиллагаа",
    "activity_title": "Суралцах дараалал",
    "contributions": "оролцоо энэ жил",
  },
  en: {
    // Quartz UI
    "search.title": "Search",
    "search.searchBarPlaceholder": "Search...",
    "graph.title": "Graph View",
    "tableOfContents.title": "Table of Contents",
    "backlinks.title": "Backlinks",
    "backlinks.noBacklinksFound": "No backlinks found",
    "explorer.title": "Explorer",
    "footer.createdWith": "Created with",
    "themeToggle.darkMode": "Dark Mode",
    "themeToggle.lightMode": "Light Mode",
    "readerMode.title": "Reader Mode",
    // Homepage hero
    "hero_eyebrow": "KOSEN Student · Mongolia",
    "hero_tagline": "ML learner, builder, and writer. I share what I learn — code, books, ideas.",
    "hero_cta1": "Projects",
    "hero_cta2": "Blog",
    "tag1": "Machine Learning",
    "tag2": "Japanese N2",
    "tag3": "Fl4shc4rd",
    "tag4": "Building in public",
    // Homepage sections
    "working_label": "Currently Working On",
    "working_title": "In Progress",
    "work1_title": "Machine Learning A-Z",
    "work1_desc": "Covering supervised, unsupervised, and reinforcement learning.",
    "work2_title": "Japanese N2 Grammar",
    "work2_desc": "文法勉強中 — Studying grammar patterns and reading comprehension.",
    "work3_title": "Fl4shc4rd",
    "work3_desc": "KOSEN diploma flashcard app. Devlogs and experiments.",
    // Library cards
    "lib_blog_title": "Blog",
    "lib_blog_desc": "Internship logs, reflections, and tech essays",
    "lib_books_title": "Book Notes",
    "lib_books_desc": "Deep Learning, biology — what I'm reading",
    "lib_lessons_title": "Lesson Notes",
    "lib_lessons_desc": "ML A-Z, Japanese N2 grammar notes",
    "lib_projects_title": "Projects",
    "lib_projects_desc": "Fl4shc4rd diploma app, devlogs, experiments",
    // Heatmap
    "activity_label": "Activity",
    "activity_title": "Learning Streak",
    "contributions": "contributions this year",
  },
  ja: {
    // Quartz UI
    "search.title": "検索",
    "search.searchBarPlaceholder": "検索ワードを入力",
    "graph.title": "グラフビュー",
    "tableOfContents.title": "目次",
    "backlinks.title": "バックリンク",
    "backlinks.noBacklinksFound": "バックリンクはありません",
    "explorer.title": "エクスプローラー",
    "footer.createdWith": "作成",
    "themeToggle.darkMode": "ダークモード",
    "themeToggle.lightMode": "ライトモード",
    "readerMode.title": "リーダーモード",
    // Homepage hero
    "hero_eyebrow": "KOSENの学生 · モンゴル",
    "hero_tagline": "ML学習者・ビルダー・ライター。コード、本、アイデアを共有します。",
    "hero_cta1": "制作物",
    "hero_cta2": "ブログ",
    "tag1": "機械学習",
    "tag2": "日本語N2",
    "tag3": "Fl4shc4rd",
    "tag4": "公開製作中",
    // Homepage sections
    "working_label": "現在取り組んでいること",
    "working_title": "進行中",
    "work1_title": "ML A-Z 機械学習",
    "work1_desc": "教師あり・なし・強化学習を網羅。ゼロから深層学習。",
    "work2_title": "日本語N2文法",
    "work2_desc": "文法勉強中 — N2試験に向けて文法と読解を学習。",
    "work3_title": "Fl4shc4rd",
    "work3_desc": "KOSENの卒業制作フラッシュカードアプリ。",
    // Library cards
    "lib_blog_title": "ブログ",
    "lib_blog_desc": "研修ログ、振り返り、技術エッセイ",
    "lib_books_title": "読書ノート",
    "lib_books_desc": "深層学習、生物学 — 読んでいる本",
    "lib_lessons_title": "レッスンノート",
    "lib_lessons_desc": "ML A-Z、日本語N2文法ノート",
    "lib_projects_title": "制作物",
    "lib_projects_desc": "Fl4shc4rd卒業制作アプリ、開発ログ、実験",
    // Heatmap
    "activity_label": "活動",
    "activity_title": "学習ストリーク",
    "contributions": "コントリビューション（今年）",
  },
}

// Folder name translations — keyed by the folder's English/default title.
// The Explorer renders folder names from the index.md frontmatter title.
const folderTranslations: Record<string, Record<LangCode, string>> = {
  Blog: { mn: "Нийтлэл", en: "Blog", ja: "ブログ" },
  "Book Notes": { mn: "Номын тэмдэглэл", en: "Book Notes", ja: "読書ノート" },
  "Lesson Notes": { mn: "Хичээлийн тэмдэглэл", en: "Lesson Notes", ja: "レッスンノート" },
  Projects: { mn: "Төслүүд", en: "Projects", ja: "制作物" },
  // Folder slugs (when no index.md title is present, Explorer falls back to slug)
  "Book Note": { mn: "Номын тэмдэглэл", en: "Book Notes", ja: "読書ノート" },
  "Lesson Note": { mn: "Хичээлийн тэмдэглэл", en: "Lesson Notes", ja: "レッスンノート" },
  "Project Log": { mn: "Төслүүд", en: "Projects", ja: "制作物" },
}

// Cache the original folder name on each Explorer node so language switches
// can re-translate from the source rather than from a previously translated value.
function translateExplorerFolders(lang: LangCode) {
  document
    .querySelectorAll<HTMLElement>(".explorer-content .folder-button span")
    .forEach((span) => {
      let key = span.dataset.i18nFolder
      if (!key) {
        key = span.textContent?.trim() ?? ""
        span.dataset.i18nFolder = key
      }
      const t = folderTranslations[key]
      if (t && t[lang]) span.textContent = t[lang]
    })
}

function applyTranslations(lang: LangCode) {
  const dict = translations[lang]
  document.documentElement.setAttribute("lang", lang === "ja" ? "ja" : lang === "mn" ? "mn" : "en")

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n")!
    if (dict[key] !== undefined) el.textContent = dict[key]
  })

  document.querySelectorAll<HTMLInputElement>("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder")!
    if (dict[key] !== undefined) {
      el.placeholder = dict[key]
      el.setAttribute("aria-label", dict[key])
    }
  })

  document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria")!
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key])
  })

  // Explorer folder names — single language at a time, not concatenated
  translateExplorerFolders(lang)

  // Hero name (Latin/Cyrillic swap)
  const latinName = document.getElementById("heroNameLatin")
  if (latinName) {
    if (lang === "mn") {
      latinName.innerHTML = "Билгүүн<em>тушиг</em>"
    } else if (lang === "ja") {
      latinName.innerHTML = "Bilguun<em>tushig</em>"
    } else {
      latinName.innerHTML = "Bilguun<em>tushig</em>"
    }
  }

  // Mark active button
  document.querySelectorAll<HTMLButtonElement>(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang)
  })

  localStorage.setItem("preferred-lang", lang)
}

function setupLanguageSwitcher() {
  const savedLang = (localStorage.getItem("preferred-lang") as LangCode | null) ?? "mn"
  applyTranslations(savedLang)

  document.querySelectorAll<HTMLButtonElement>(".lang-btn").forEach((btn) => {
    const handler = () => {
      const lang = btn.getAttribute("data-lang") as LangCode
      if (lang && translations[lang]) applyTranslations(lang)
    }
    btn.addEventListener("click", handler)
    window.addCleanup(() => btn.removeEventListener("click", handler))
  })

  // Explorer is rendered after the nav event when the file tree script runs;
  // re-translate folders once the explorer mounts.
  const obs = new MutationObserver(() => {
    const lang = (localStorage.getItem("preferred-lang") as LangCode | null) ?? savedLang
    translateExplorerFolders(lang)
  })
  const explorer = document.querySelector(".explorer-content")
  if (explorer) obs.observe(explorer, { childList: true, subtree: true })
  window.addCleanup(() => obs.disconnect())
}

document.addEventListener("nav", () => setupLanguageSwitcher())
