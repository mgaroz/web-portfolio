if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  document.documentElement.classList.remove('light')
  localStorage.setItem('theme', 'dark')
} else {
  document.documentElement.classList.remove('dark')
  document.documentElement.classList.add('light')
  localStorage.setItem('theme', 'light')
}