import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Room For Me",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "none",
    },
    locale: "mn-MN",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["Private", "Misc", "Excalidraw", ".obsidian", ".trash", "**/*.excalidraw.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8fafc",
          lightgray: "#e2e8f0",
          gray: "#94a3b8",
          darkgray: "#475569",
          dark: "#0f172a",
          secondary: "#0284c7",
          tertiary: "#7c3aed",
          highlight: "rgba(2, 132, 199, 0.1)",
          textHighlight: "#fde04788",
        },
        darkMode: {
          light: "#0d1117",
          lightgray: "#1c2027",
          gray: "#6e7681",
          darkgray: "#cdd9e5",
          dark: "#e6edf3",
          secondary: "#38bdf8",
          tertiary: "#a78bfa",
          highlight: "rgba(56, 189, 248, 0.1)",
          textHighlight: "#fbbf2444",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
