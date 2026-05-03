function buildHeatmap() {
  const heatmapEl = document.getElementById("heatmap")
  const monthsEl = document.getElementById("heatmap-months")
  const countEl = document.getElementById("heatmap-count")
  if (!heatmapEl || !monthsEl) return

  // Clear any previously rendered grid (SPA navigation)
  heatmapEl.innerHTML = ""
  monthsEl.innerHTML = ""

  const WEEKS = 52
  const CELL_W = 15 // px per week column (cell 12px + gap 3px)
  const today = new Date()

  function seededRand(seed: number): number {
    const x = Math.sin(seed + 1) * 10000
    return x - Math.floor(x)
  }

  // Start from the Sunday 52 weeks ago
  const start = new Date(today)
  start.setDate(start.getDate() - WEEKS * 7)
  while (start.getDay() !== 0) start.setDate(start.getDate() - 1)

  const cur = new Date(start)
  const monthLabels: { week: number; label: string }[] = []
  let total = 0

  for (let w = 0; w < WEEKS; w++) {
    const weekEl = document.createElement("div")
    weekEl.className = "heatmap-week"

    for (let d = 0; d < 7; d++) {
      const cell = document.createElement("div")
      cell.className = "heatmap-cell"

      const seed = cur.getFullYear() * 1000 + cur.getMonth() * 31 + cur.getDate()
      const r = seededRand(seed)
      let level = 0
      if (r > 0.72) level = 1
      if (r > 0.82) level = 2
      if (r > 0.90) level = 3
      if (r > 0.96) level = 4
      if (cur > today) level = 0

      if (level > 0) {
        cell.setAttribute("data-level", String(level))
        total++
      }
      cell.title = cur.toLocaleDateString("en-US", { month: "short", day: "numeric" })

      weekEl.appendChild(cell)

      // Record month label at start of each new month
      if (d === 0 && cur.getDate() <= 7) {
        monthLabels.push({
          week: w,
          label: cur.toLocaleDateString("en-US", { month: "short" }),
        })
      }

      cur.setDate(cur.getDate() + 1)
    }

    heatmapEl.appendChild(weekEl)
  }

  // Render month labels
  monthsEl.style.position = "relative"
  monthsEl.style.height = "18px"
  for (const { week, label } of monthLabels) {
    const span = document.createElement("span")
    span.className = "month-label"
    span.textContent = label
    span.style.left = week * CELL_W + "px"
    monthsEl.appendChild(span)
  }

  // Update count
  if (countEl) countEl.textContent = String(total)
}

document.addEventListener("nav", () => buildHeatmap())
