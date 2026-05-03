type LangCode = "mn" | "en" | "ja"

const translations: Record<LangCode, Record<string, string>> = {
  mn: {
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
  },
  en: {
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
  },
  ja: {
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
  },
}

function applyTranslations(lang: LangCode) {
  const dict = translations[lang]

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
}

document.addEventListener("nav", () => setupLanguageSwitcher())
