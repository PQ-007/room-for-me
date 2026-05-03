import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Гарчиггүй",
    description: "Тайлбар байхгүй",
  },
  components: {
    callout: {
      note: "Тэмдэглэл",
      abstract: "Хураангуй",
      info: "Мэдээлэл",
      todo: "Хийх зүйл",
      tip: "Зөвлөгөө",
      success: "Амжилт",
      question: "Асуулт",
      warning: "Анхааруулга",
      failure: "Алдаа",
      danger: "Аюул",
      bug: "Алдаа (Bug)",
      example: "Жишээ",
      quote: "Иш татгалт",
    },
    backlinks: {
      title: "Буцах холбоосууд",
      noBacklinksFound: "Буцах холбоос олдсонгүй",
    },
    themeToggle: {
      lightMode: "Цайвар горим",
      darkMode: "Харанхуй горим",
    },
    readerMode: {
      title: "Уншигчийн горим",
    },
    explorer: {
      title: "Хайгч",
    },
    footer: {
      createdWith: "Бүтээгдсэн",
    },
    graph: {
      title: "График харагдац",
    },
    recentNotes: {
      title: "Сүүлийн тэмдэглэлүүд",
      seeRemainingMore: ({ remaining }) => `Дараачийн ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `${targetSlug}-ын хураангуй`,
      linkToOriginal: "Эх сурвалж руу холбоос",
    },
    search: {
      title: "Хайлт",
      searchBarPlaceholder: "Хайх...",
    },
    tableOfContents: {
      title: "Агуулга",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} мин унших`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Сүүлийн тэмдэглэлүүд",
      lastFewNotes: ({ count }) => `Сүүлийн ${count} тэмдэглэл`,
    },
    error: {
      title: "Олдсонгүй",
      notFound: "Хуудас олдсонгүй эсвэл нууцлагдсан байна.",
      home: "Нүүр хуудас руу буцах",
    },
    folderContent: {
      folder: "Хавтас",
      itemsUnderFolder: ({ count }) => `${count} хуудас`,
    },
    tagContent: {
      tag: "Шошго",
      tagIndex: "Шошгын жагсаалт",
      itemsUnderTag: ({ count }) => `${count} хуудас`,
      showingFirst: ({ count }) => `Эхний ${count} харагдаж байна`,
      totalTags: ({ count }) => `Нийт ${count} шошго`,
    },
  },
} as const satisfies Translation
