import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/languageSwitcher.scss"
// @ts-ignore
import script from "./scripts/languageSwitcher.inline"

const LanguageSwitcher: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`language-switcher ${displayClass ?? ""}`} aria-label="Language selector">
      <button class="lang-btn" data-lang="mn" aria-label="Монгол хэл">МН</button>
      <button class="lang-btn" data-lang="en" aria-label="English">EN</button>
      <button class="lang-btn" data-lang="ja" aria-label="日本語">JP</button>
    </div>
  )
}

LanguageSwitcher.css = style
LanguageSwitcher.afterDOMLoaded = script

export default (() => LanguageSwitcher) satisfies QuartzComponentConstructor
