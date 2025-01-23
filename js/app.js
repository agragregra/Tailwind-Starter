// Custom Scripts



// Tailwind Theme Mode Switch with localStorage

const switchButtons = document.querySelectorAll('[data-mode]')
const setTheme = (mode) => {
	localStorage.theme = mode
	const systemTheme = matchMedia('(prefers-color-scheme: dark)')
	const applyTheme = () => document.documentElement.className = mode === 'auto' ? (systemTheme.matches ? 'dark' : 'light') : mode
	systemTheme.onchange = mode === 'auto' ? applyTheme : null
	switchButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode))
	applyTheme()
}
document.addEventListener('click', ({ target }) => target.closest('[data-mode]')?.dataset.mode && setTheme(target.closest('[data-mode]').dataset.mode))
setTheme(localStorage.theme || 'auto')
