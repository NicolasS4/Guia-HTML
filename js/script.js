// DOM Elements
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeStylesheet = document.getElementById('dark-mode');

// Verificar preferência de tema
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        enableDarkMode();
    }
}

// Ativar dark mode
function enableDarkMode() {
    darkModeStylesheet.disabled = false;
    localStorage.setItem('theme', 'dark');
    if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Desativar dark mode
function disableDarkMode() {
    darkModeStylesheet.disabled = true;
    localStorage.setItem('theme', 'light');
    if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Funcionalidade do botão
function toggleDarkMode() {
    if (darkModeStylesheet.disabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Iniciar o thema
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // verificador de theme
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    //Verificador de animação
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        animateOnScroll.observe(el);
    });
});

// Voltar o botão
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
});

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});