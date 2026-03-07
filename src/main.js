import './style.css'

// Navbar Scroll Effect
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal')

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4
    
    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top
        if (elTop < triggerBottom) {
            el.classList.add('active')
        }
    })
}

// Initial check and event listener
window.addEventListener('scroll', revealOnScroll)
revealOnScroll() // Run on load

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const targetId = this.getAttribute('href')
        if (targetId === '#') return
        
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            })
        }
    })
})

// Log a cool message to console
console.log('%c Portfolio Starter Booted! ', 'background: #6366f1; color: #fff; padding: 5px; border-radius: 5px;')
