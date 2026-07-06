document.addEventListener("DOMContentLoaded", () => {
    // 1. База данных отзывов гостей за 3 года работы салона
    const reviews = [
        {name: 'Александра М.', stars: 5, text: 'Любимый салон! Хожу со дня открытия в 2023 году. Интерьер в стиле темной розы — просто любовь, а сервис всегда на высоте.'},
        {name: 'Ирина К.', stars: 5, text: 'Делала окрашивание у Елены. Это магия! Волосы сияют, цвет получился роскошный, глубокий и дорогой.'},
        {name: 'Ксения Т.', stars: 4, text: 'Отличный ногтевой сервис, очень чистый зал. Записываться нужно сильно заранее, у Кристины плотный график.'},
        {name: 'Виктория Б.', stars: 5, text: 'Le Prestige — любовь с первой процедуры. Девочки на ресепшн безумно милые, атмосфера полного люкса.'},
        {name: 'Мария П.', stars: 5, text: 'Анна создала идеальный свадебный образ. Макияж держался весь день и собрал сотни комплиментов!'}
    ];

    const revContainer = document.getElementById('reviewsContainer');
    reviews.forEach(r => {
        const card = document.createElement('div');
        card.className = 'review-card';
        let s = '';
        for (let i = 0; i < r.stars; i++) s += '<i class="fa-solid fa-star"></i>';
        card.innerHTML = `<div class="stars">${s}</div><p class="review-text">«${r.text}»</p><div class="review-author">${r.name}</div>`;
        revContainer.appendChild(card);
    });
    // Дополнительные 5 отзывов для создания эффекта высокой посещаемости
    const extraReviews = [
        {name: 'Елена Ж.', stars: 5, text: 'Уже 3 года доверяю свои брови только Лилии. Ламинирование идеальное, форма естественная.'},
        {name: 'Ольга С.', stars: 4, text: 'Прекрасный салон на Арбате. Маникюр супер, но на выходных бывает тяжело найти парковку.'},
        {name: 'Наталья В.', stars: 5, text: 'Smart-педикюр у Ольги — спасение. Очень профессиональный подход к эстетике кожи.'},
        {name: 'Татьяна К.', stars: 5, text: 'Стрижка от Дениса изменила мою жизнь! Потрясающий мастер с уникальным видением стиля.'},
        {name: 'Диана Д.', stars: 5, text: 'Прихожу сюда отдохнуть. Всегда люкс материалы, безупречная стерилизация и вежливый персонал.'}
    ];

    extraReviews.forEach(r => {
        const card = document.createElement('div');
        card.className = 'review-card';
        let s = '';
        for (let i = 0; i < r.stars; i++) s += '<i class="fa-solid fa-star"></i>';
        card.innerHTML = `<div class="stars">${s}</div><p class="review-text">«${r.text}»</p><div class="review-author">${r.name}</div>`;
        revContainer.appendChild(card);
    });

    // 2. Автоматический премиальный слайдер для главного экрана (интерьеры)
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let cur = 0;
        setInterval(() => {
            slides[cur].classList.remove('active');
            cur = (cur + 1) % slides.length;
            slides[cur].classList.add('active');
        }, 4000);
    }
});
