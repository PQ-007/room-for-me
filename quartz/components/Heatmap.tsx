import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/heatmap.scss"
// @ts-ignore
import script from "./scripts/heatmap.inline"

const Heatmap: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <section class={`heatmap-section ${displayClass ?? ""}`}>
      <p class="section-label" data-i18n="activity_label">Activity</p>
      <h2 class="section-title" data-i18n="activity_title">Learning Streak</h2>
      <div class="heatmap-meta">
        <div class="heatmap-stat">
          <span id="heatmap-count">—</span>
          <span class="heatmap-stat-label" data-i18n="contributions">contributions this year</span>
        </div>
        <div class="heatmap-legend">
          <span>less</span>
          <div class="heatmap-legend-cells">
            <div class="heatmap-cell" style="width:10px;height:10px;"></div>
            <div class="heatmap-cell" data-level="1" style="width:10px;height:10px;"></div>
            <div class="heatmap-cell" data-level="2" style="width:10px;height:10px;"></div>
            <div class="heatmap-cell" data-level="3" style="width:10px;height:10px;"></div>
            <div class="heatmap-cell" data-level="4" style="width:10px;height:10px;"></div>
          </div>
          <span>more</span>
        </div>
      </div>
      <div class="heatmap-wrap">
        <div id="heatmap-months" class="heatmap-months"></div>
        <div id="heatmap" class="heatmap"></div>
      </div>
    </section>
  )
}

Heatmap.css = style
Heatmap.afterDOMLoaded = script

export default (() => Heatmap) satisfies QuartzComponentConstructor
