document.addEventListener("DOMContentLoaded", () => {
    // 1. Автоматический премиальный слайдер для главного экрана (смена 3 фоновых фото)
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000);
    }

    // 2. Плавное появление элементов снизу вверх при прокрутке страницы
    const elements = document.querySelectorAll(".gallery-item, .review-card, .contact-info, .map-container");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(el);
    });

    // 3. Лайтбокс: открытие бьюти-карточек на весь экран при тапе/клике
    const lightbox = document.createElement("div");
    lightbox.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:2000;display:none;justify-content:center;align-items:center;cursor:zoom-out;";
    
    const bigImg = document.createElement("img");
    bigImg.style.cssText = "max-width:92%;max-height:90%;object-fit:contain;border:1px solid rgba(212, 175, 55, 0.3);box-shadow: 0 0 30px rgba(0,0,0,0.8);";
    
    lightbox.appendChild(bigImg);
    document.body.appendChild(lightbox);

    const galleryGrid = document.getElementById("galleryGrid");
    if (galleryGrid) {
        galleryGrid.addEventListener("click", e => {
            const clickedImg = e.target.closest(".gallery-item img");
            if (clickedImg) {
                bigImg.src = clickedImg.src;
                lightbox.style.display = "flex";
            }
        });
    }

    lightbox.addEventListener("click", () => lightbox.style.display = "none");
});
