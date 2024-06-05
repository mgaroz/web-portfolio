const saved_theme = localStorage.getItem('theme')
if (saved_theme) {
  document.documentElement.classList.add("dark")
} else {
  const prefers_dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = prefers_dark ? "dark" : "light"
  document.documentElement.classList.add(theme)
  localStorage.setItem("theme", theme)
  console.log(prefers_dark)
}