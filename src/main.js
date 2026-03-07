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

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
} else if (systemDark) {
    body.setAttribute('data-theme', 'dark');
} else {
    body.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Smooth transition for Lucide replacement
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Log a cool message to console
console.log('%c Portfolio Starter Booted! ', 'background: #6366f1; color: #fff; padding: 5px; border-radius: 5px;')
