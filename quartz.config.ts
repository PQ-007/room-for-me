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
    ignorePatterns: [
      "Private",
      "Misc/**/*.md",
      "Excalidraw",
      ".obsidian",
      ".trash",
      "**/*.excalidraw.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f7fb",
          lightgray: "#d8e0f0",
          gray: "#9aaccc",
          darkgray: "#4a5568",
          dark: "#0f1624",
          secondary: "#2563eb",
          tertiary: "#7c3aed",
          highlight: "rgba(37, 99, 235, 0.1)",
          textHighlight: "#dbeafe88",
        },
        darkMode: {
          light: "#0d1117",
          lightgray: "#1e2d45",
          gray: "#4a5a7a",
          darkgray: "#8b98b5",
          dark: "#e8edf8",
          secondary: "#3b82f6",
          tertiary: "#a78bfa",
          highlight: "rgba(59, 130, 246, 0.1)",
          textHighlight: "#1e3a5f88",
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
