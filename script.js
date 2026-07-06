document.addEventListener("DOMContentLoaded", () => {
    // 1. ДАННЫЕ ОДТЕЛОВ (ДЛЯ ОТДЕЛЬНЫХ СТРАНИЦ)
    const categoriesData = {
        hair: {
            title: "Отдел Стилистов (Волосы)",
            desc: "Наши мастера международного уровня создают шедевры колористики и стрижек, используя люксовые бренды ухода.",
            prices: [
                {name: "Airtouch / Сложное окрашивание", val: "от 8 500 ₽"},
                {name: "Кератиновое восстановление волос", val: "от 6 000 ₽"},
                {name: "Авторская женская стрижка", val: "от 3 500 ₽"},
                {name: "Укладка «Голливудская волна»", val: "от 4 000 ₽"}
            ]
        },
        nails: {
            title: "Ногтевой Сервис",
            desc: "Безупречная стерилизация инструментов, огромная палитра премиальных покрытий и медицинский подход к педикюру.",
            prices: [
                {name: "Японский эко-маникюр", val: "от 3 000 ₽"},
                {name: "Премиальный френч", val: "от 3 500 ₽"},
                {name: "Аппаратный Smart-педикюр", val: "от 4 500 ₽"},
                {name: "Авторский нейл-арт (1 ногть)", val: "от 300 ₽"}
            ]
        },
        makeup: {
            title: "Визаж и Брови",
            desc: "Подчеркнем вашу естественную красоту для любого важного события или создадим идеальную архитектуру взгляда.",
            prices: [
                {name: "Вечерний макияж (Smoky / Лифтинг)", val: "от 5 000 ₽"},
                {name: "Свадебный образ (Nude макияж)", val: "от 6 000 ₽"},
                {name: "Ламинирование и архитектура бровей", val: "от 2 500 ₽"},
                {name: "Пудровое напыление (Перманент)", val: "от 9 000 ₽"}
            ]
        }
    };

    // 2. ДАННЫЕ МАСТЕРОВ (МЕСТО ДЛЯ ФОТО И ОПИСАНИЯ)
    const team = [
        {name: "Елена Вернер", role: "Топ-Колорист", desc: "Опыт 8 лет. Проходила стажировку в Париже. Эксперт в техниках Airtouch и Шатуш.", img: "hair-1.jpg"},
        {name: "Кристина Ли", role: "Нейл-Арбитр", desc: "Опыт 5 лет. Скорость работы до 1 часа без потери качества. Создает сложную графику на ногтях.", img: "nails-1.jpg"},
        {name: "Анна Дюпон", role: "Топ-Визажист", desc: "Опыт 6 лет. Работает на модных показах. Специализируется на стойких свадебных образах.", img: "makeup-1.jpg"},
        {name: "Лилия Маер", role: "Бровист-Лешмейкер", desc: "Опыт 4 года. Находит идеальную форму бровей под любую геометрию лица. Гуру ламинирования.", img: "makeup-3.jpg"}
    ];

    // 12 ФОТО ДЛЯ ГЛАВНОЙ ГАЛЕРЕИ
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

    // 10 ЖИВЫХ ОТЗЫВОВ
    const reviews = [
        {name:'Александра М.', stars:5, text:'Любимый салон! Хожу сюда со дня открытия в 2023 году. Сервис всегда на высоте.'},
        {name:'Ирина К.', stars:5, text:'Делала сложное окрашивание у Елены. Это магия! Волосы сияют, цвет дорогой.'},
        {name:'Ксения Т.', stars:4, text:'Отличный ногтевой сервис. Записываться нужно сильно заранее, плотная запись.'},
        {name:'Виктория Б.', stars:5, text:'Le Prestige — любовь с первой процедуры. Атмосфера полного люкса и релакса.'},
        {name:'Мария П.', stars:5, text:'Анна создала идеальный свадебный образ. Макияж продержался весь день!'},
        {name:'Елена Ж.', stars:5, text:'Уже 3 года доверяю свои брови только Лилии Маер. Ламинирование идеальное.'},
        {name:'Ольга С.', stars:4, text:'Прекрасный салон на Арбате. Маникюр супер, но тяжело найти парковку.'},
        {name:'Наталья В.', stars:5, text:'Smart-педикюр у Ольги — спасение. Очень профессиональный подход к эстетике.'},
        {name:'Татьяна К.', stars:5, text:'Трендовое каре от Дениса изменило жизнь! Потрясающий мастер с видением.'},
        {name:'Диана Д.', stars:5, text:'Прихожу сюда отдохнуть. Всегда люкс материалы и безупречная стерилизация.'}
    ];

    // ГЕНЕРАЦИЯ ЭЛЕМЕНТОВ
    const grid = document.getElementById('galleryGrid');
    function renderGallery(f = 'all') {
        grid.innerHTML = '';
        photos.forEach(p => { if (f === 'all' || p.cat === f) {
            const i = document.createElement('div'); i.className = 'gallery-item';
            i.innerHTML = `<img src="img/${p.img}" alt="${p.t}"><div class="gallery-overlay"><h3>${p.t}</h3><p>Мастер: ${p.m}</p></div>`;
            grid.appendChild(i);
        }});
    }
    renderGallery();

    window.filterGallery = function(cat) { renderGallery(cat); };

    // Рендер команды мастеров
    const teamGrid = document.getElementById('teamGrid');
    team.forEach(m => {
        const c = document.createElement('div'); c.className = 'team-card';
        c.innerHTML = `<div class="team-img-wrap"><img src="img/${m.img}" alt="${m.name}"></div><h3>${m.name}</h3><div class="team-role">${m.role}</div><p class="team-desc">${m.desc}</p>`;
        teamGrid.appendChild(c);
    });

    // Рендер 10 отзывов
    const revContainer = document.getElementById('reviewsContainer');
    reviews.forEach(r => {
        const card = document.createElement('div'); card.className = 'review-card'; let s = '';
        for (let i=0; i<r.stars; i++) s += '<i class="fa-solid fa-star"></i>';
        card.innerHTML = `<div class="stars">${s}</div><p class="review-text">«${r.text}»</p><div class="review-author">${r.name}</div>`;
        revContainer.appendChild(card);
    });

    // ОТКРЫТИЕ ОТДЕЛЬНЫХ СТРАНИЦ
    window.openCategoryPage = function(cat) {
        const data = categoriesData[cat]; const modal = document.getElementById('categoryModal');
        let pList = ''; data.prices.forEach(p => pList += `<div class="price-item"><span class="price-name">${p.name}</span><span class="price-val">${p.val}</span></div>`);
        document.getElementById('modalInnerData').innerHTML = `<h2 class="modal-title">${data.title}</h2><p class="modal-desc">${data.desc}</p><div class="price-list">${pList}</div>`;
        modal.classList.add('active');
    };
    window.closeCategoryPage = function() { document.getElementById('categoryModal').classList.remove('active'); };

    // СЛАЙДЕР ГЛАВНОГО ЭКРАНА
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) { let cur = 0; setInterval(() => { slides[cur].classList.remove('active'); cur = (cur + 1) % slides.length; slides[cur].classList.add('active'); }, 4000); }
});
