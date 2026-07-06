document.addEventListener("DOMContentLoaded", () => {
    // 1. БАЗА ДАННЫХ САЛОНА (12 РАБОТ И 10 ЖИВЫХ ОТЗЫВОВ ЗА 3 ГОДА РАБОТЫ)
    const photos = [
        {img:'hair-1.jpg', t:'Airtouch окрашивание', m:'Елена Вернер', cat:'hair'},
        {img:'hair-2.jpg', t:'Кератиновое восстановление', m:'Елена Вернер', cat:'hair'},
        {img:'hair-3.jpg', t:'Голливудская волна', m:'Елена Вернер', cat:'hair'},
        {img:'hair-4.jpg', t:'Трендовое каре', m:'Денис Кинг', cat:'hair'},
        {img:'nails-1.jpg', t:'Японский эко-маникюр', m:'Кристина Ли', cat:'nails'},
        {img:'nails-2.jpg', t:'Премиальный френч', m:'Кристина Ли', cat:'nails'},
        {img:'nails-3.jpg', t:'Smart-педикюр', m:'Ольга Власова', cat:'nails'},
        {img:'nails-4.jpg', t:'Авторский нейл-арт', m:'Кристина Ли', cat:'nails'},
        {img:'makeup-1.jpg', t:'Вечерний образ', m:'Анна Дюпон', cat:'makeup'},
        {img:'makeup-2.jpg', t:'Свадебный образ Nude', m:'Анна Дюпон', cat:'makeup'},
        {img:'makeup-3.jpg', t:'Архитектура бровей', m:'Лилия Маер', cat:'makeup'},
        {img:'makeup-4.jpg', t:'Пудровое напыление', m:'Лилия Маер', cat:'makeup'}
    ];

    const reviews = [
        {name:'Александра М.', stars:5, text:'Любимый салон бьюти-индустрии! Хожу сюда со дня открытия в 2023 году. Сервис всегда на высочайшем уровне, а кофе с сиропом — отдельный вид удовольствия.'},
        {name:'Ирина Колесникова', stars:5, text:'Делала сложное окрашивание у Елены Вернер. Это просто магия! Волосы сияют, цвет получился дорогой и глубокий. Стоит каждого рубля.'},
        {name:'Ксения Т.', stars:4, text:'Отличный ногтевой сервис, очень чистая студия. Записываться нужно сильно заранее, так как у Кристины всегда плотная запись на недели вперед.'},
        {name:'Виктория Б.', stars:5, text:'Le Prestige — это любовь с первой процедуры. Девочки на ресепшн невероятно милые, атмосфера полного люкса и расслабления.'},
        {name:'Мария Павлова', stars:5, text:'Анна Дюпон создала для меня идеальный свадебный образ. Макияж продержался весь день и собрал сотни комплиментов. Спасибо!'},
        {name:'Елена Ж.', stars:5, text:'Уже 3 года доверяю свои брови только Лилии Маер. Ламинирование держится идеально, форма всегда симметричная и естественная.'},
        {name:'Ольга Степанова', stars:4, text:'Прекрасный салон на Арбате. Маникюр сделали быстро и качественно. Снижаю оценку на один балл только из-за того, что тяжело найти парковку рядом.'},
        {name:'Наталья В.', stars:5, text:'Smart-педикюр у Ольги — это спасение для моих ног. Очень профессиональный медицинский подход к эстетике. Рекомендую!'},
        {name:'Татьяна К.', stars:5, text:'Трендовое каре от Дениса Кинга изменило мою жизнь! Потрясающий мастер с уникальным видением формы и стиля.'},
        {name:'Диана Д.', stars:5, text:'Прихожу сюда как в тихую гавань. Всегда премиальные материалы, безупречная стерилизация инструментов и очень вежливый персонал.'}
    ];

    // 2. ГЕНЕРАЦИЯ ПОРТФОЛИО
    const grid = document.getElementById('galleryGrid');
    function renderGallery(filter = 'all') {
        grid.innerHTML = '';
        photos.forEach(p => {
            if (filter === 'all' || p.cat === filter) {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.innerHTML = `<img src="img/${p.img}" alt="${p.t}"><div class="gallery-overlay"><h3>${p.t}</h3><p>Мастер: ${p.m}</p></div>`;
                grid.appendChild(item);
            }
        });
    }
    renderGallery();

    // Экспортируем функцию фильтрации в глобальную видимость для кнопок HTML
    window.filterGallery = function(category) {
        renderGallery(category);
        document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
        event.currentTarget.classList.add('active');
    };

    // 3. ГЕНЕРАЦИЯ 10 ЖИВЫХ ОТЗЫВОВ
    const revContainer = document.getElementById('reviewsContainer');
    reviews.forEach(r => {
        const card = document.createElement('div');
        card.className = 'review-card';
        let starIcons = '';
        for (let i = 0; i < r.stars; i++) starIcons += '<i class="fa-solid fa-star"></i>';
        card.innerHTML = `<div class="stars">${starIcons}</div><p class="review-text">«${r.text}»</p><div class="review-author">${r.name}</div>`;
        revContainer.appendChild(card);
    });

    // 4. ПРЕМИАЛЬНЫЙ АВТОСЛАЙДЕР (ФОНЫ ГЛАВНОГО ЭКРАНА)
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000);
    }

    // 5. ИНТЕРАКТИВНЫЙ ЛАЙТБОКС ДЛЯ ФОТОГРАФИЙ
    const lightbox = document.createElement("div");
    lightbox.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(13,9,11,0.96);z-index:2000;display:none;justify-content:center;align-items:center;cursor:zoom-out;";
    const bigImg = document.createElement("img");
    bigImg.style.cssText = "max-width:92%;max-height:85%;object-fit:contain;border:1px solid rgba(244,167,185,0.3);box-shadow:0 0 30px rgba(0,0,0,0.9);";
    lightbox.appendChild(bigImg);
    document.body.appendChild(lightbox);

    grid.addEventListener("click", e => {
        const clickedImg = e.target.closest(".gallery-item img");
        if (clickedImg) {
            bigImg.src = clickedImg.src;
            lightbox.style.display = "flex";
        }
    });
    lightbox.addEventListener("click", () => lightbox.style.display = "none");
});
