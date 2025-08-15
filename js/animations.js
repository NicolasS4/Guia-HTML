// Animação na rolagem
document.addEventListener('DOMContentLoaded', function() {
    // Animar elementos quando eles aparecem
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    //Efeito de paralaxe para seção de hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
    
    // Efeitos de foco para cartões
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });
    
    // Efeito de máquina de escrever para texto de hero
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(el => {
        const text = el.getAttribute('data-text');
        let i = 0;
        const speed = 50; // velocidade de escrita
        
        function typeWriter() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        typeWriter();
    });
    
    //Elementos flutuantes
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(el => {
        el.style.animationDelay = `${Math.random() * 2}s`;
    });
    
    //Animação de barras de progresso
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
            bar.style.transition = 'width 1.5s ease-out';
        }, 500);
    });
});