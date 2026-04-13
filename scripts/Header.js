export function headerEffect() {
	let lastScroll = 0
	const header = document.querySelector('[data-js-header]')

	if (!header) return

	window.addEventListener('scroll', () => {
		const currentScroll = window.scrollY

		if (Math.abs(currentScroll - lastScroll) < 5) return

		if (currentScroll <= 0) {
			header.classList.remove('hide')
			return
		}

		if (currentScroll > lastScroll) {
			header.classList.add('hide')
		} else {
			header.classList.remove('hide')
		}

		lastScroll = currentScroll
	})
}

export function headerNavigation() {
	const links = document.querySelectorAll('[data-js-nav] a')

	let currentPage = window.location.pathname.split('/').pop()

	if (currentPage === '') {
		currentPage = 'index.html'
	}

	const normalize = path => path.replace('.html', '')

	links.forEach(link => {
		const linkPage = link.getAttribute('href')
		if (!linkPage) return

		if (normalize(currentPage).includes(normalize(linkPage))) {
			link.classList.add('active')
		}
	})
}
