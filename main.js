(function () {
    'use strict';

    /* ----------------------------------------------------------------
       Локализация (русский / казахский)
       ---------------------------------------------------------------- */
    const LANG_KEY = 'flowtech-lang';

    const I18N = {
        ru: {
            'meta.title': 'FlowTech — интеграция ИИ в бизнес-процессы',
            'nav.solutions': 'Решения',
            'nav.stack': 'Технологии',
            'nav.projects': 'Наши проекты',
            'nav.assistant': 'AI-ассистент',
            'nav.contact': 'Контакты',
            'header.cta': 'Обсудить проект',
            'theme.toLight': 'Переключить светлую тему',
            'theme.toDark': 'Переключить тёмную тему',
            'lang.toggle': 'Переключить язык',
            'nav.toggle': 'Открыть меню',
            'hero.line1': 'Подключаем ИИ',
            'hero.line2': 'к процессам, которые',
            'hero.line3': 'уже приносят деньги',
            'hero.lead': 'Не меняем вашу систему целиком — встраиваем ИИ в существующие CRM, сайты и внутренние процессы. Быстрее обрабатываете заявки, меньше рутины у команды, решения на основе данных, а не интуиции.',
            'hero.btnPrimary': 'Оставить заявку',
            'hero.btnOutline': 'Спросить AI-ассистента',
            'diagram.input1': 'Заявки с сайта',
            'diagram.input3': 'Звонки, чаты',
            'diagram.core': 'ядро',
            'diagram.output1': 'Приоритизация',
            'diagram.output2': 'Отчёты',
            'diagram.output3': 'Авто-ответы',
            'solutions.title': 'Что мы внедряем',
            'solutions.a.title': 'AI-ассистенты для клиентов',
            'solutions.a.text': 'Чат-бот на сайте или в WhatsApp, который отвечает на вопросы, консультирует по услугам и передаёт тёплые заявки менеджеру — без потери контекста диалога.',
            'solutions.b.title': 'Автоматизация рутинных процессов',
            'solutions.b.text': 'Классификация обращений, заполнение карточек в CRM, сортировка заявок по приоритету — то, что раньше делал человек вручную, теперь делает модель.',
            'solutions.c.title': 'Интеграция ИИ в CRM / ERP',
            'solutions.c.text': 'Подключаем модели к вашей текущей системе: не меняем инфраструктуру, а встраиваем ИИ-слой поверх процессов, которые уже работают.',
            'solutions.d.title': 'Аналитика и прогнозирование',
            'solutions.d.text': 'Прогноз спроса, оценка оттока клиентов, поиск аномалий в данных — отчёты, которые готовятся автоматически и обновляются каждый день.',
            'stack.title': 'На чём это работает',
            'stack.prev': 'Прокрутить назад',
            'stack.next': 'Прокрутить вперёд',
            'stack.llm.title': 'LLM и NLP',
            'stack.llm.text': 'Большие языковые модели для диалогов, обработки текста и работы со знаниями компании.',
            'stack.cv.text': 'Распознавание изображений и документов — контроль качества, автоматическая проверка.',
            'stack.cloud.title': 'Облачная инфраструктура',
            'stack.cloud.text': 'Развёртывание на AWS, GCP, Azure или на серверах заказчика — с учётом требований к данным.',
            'stack.security.title': 'Безопасность данных',
            'stack.security.text': 'Шифрование, разграничение доступа и хранение чувствительных данных по вашим правилам.',
            'stack.java.text': 'Надёжный серверный слой для интеграций с CRM, ERP и внутренними API компании.',
            'stack.api.title': 'API-интеграции',
            'stack.api.text': 'Подключение ИИ к 1С, amoCRM, Bitrix24 и другим системам через REST/webhook.',
            'projects.title': 'Что мы уже сделали',
            'projects.alt1': 'Проект 1', 'projects.alt2': 'Проект 2', 'projects.alt3': 'Проект 3',
            'projects.alt4': 'Проект 4', 'projects.alt5': 'Проект 5', 'projects.alt6': 'Проект 6',
            'stats.integrations': 'внедрённых интеграции',
            'stats.experience': 'лет опыта в ИИ и разработке',
            'stats.retention': 'клиентов продлевают сотрудничество',
            'stats.team': 'инженеров и дата-специалистов',
            'assistant.title': 'Спросите прямо сейчас',
            'assistant.lead': 'Это работающий демо-ассистент нашего бэкенда на Spring Boot. Спросите про стоимость, сроки или конкретную задачу — и посмотрите, как он ведёт диалог.',
            'chat.greeting': 'Здравствуйте! Расскажите, какую задачу бизнеса хотите автоматизировать — подскажу подходящее решение.',
            'chat.placeholder': 'Например: сколько стоит чат-бот?',
            'chat.send': 'Отправить',
            'chat.error': 'Сейчас не получается ответить — попробуйте чуть позже.',
            'contact.title': 'Обсудим вашу задачу',
            'contact.lead': 'Опишите процесс, который хотите автоматизировать — мы предложим, с какой стороны к нему подступиться, и оценим сроки.',
            'contact.name': 'Имя',
            'contact.phone': 'Телефон',
            'contact.company': 'Компания',
            'contact.optional': '(необязательно)',
            'contact.message': 'Задача',
            'contact.messagePlaceholder': 'Что хотите автоматизировать?',
            'contact.submit': 'Отправить заявку',
            'form.ok': 'Заявка отправлена. Мы свяжемся с вами в ближайшее время.',
            'form.errValidation': 'Проверьте поля формы.',
            'form.errNetwork': 'Не удалось отправить заявку. Попробуйте ещё раз.',
            'footer.tagline': 'Встраиваем ИИ в процессы, которые уже работают.',
            'footer.copy': '© 2026 FlowTech. Все права защищены.',
        },
        kk: {
            'meta.title': 'FlowTech — бизнес-процестерге ИИ интеграциясы',
            'nav.solutions': 'Шешімдер',
            'nav.stack': 'Технологиялар',
            'nav.projects': 'Біздің жобалар',
            'nav.assistant': 'AI-ассистент',
            'nav.contact': 'Байланыс',
            'header.cta': 'Жобаны талқылау',
            'theme.toLight': 'Жарық тақырыпқа ауыстыру',
            'theme.toDark': 'Қараңғы тақырыпқа ауыстыру',
            'lang.toggle': 'Тілді ауыстыру',
            'nav.toggle': 'Мәзірді ашу',
            'hero.line1': 'ИИ-ды қазірдің өзінде',
            'hero.line2': 'табыс әкеліп жатқан',
            'hero.line3': 'процестерге қосамыз',
            'hero.lead': 'Жүйеңізді толығымен ауыстырмаймыз — ИИ-ды қолданыстағы CRM, сайттар мен ішкі процестерге енгіземіз. Өтінімдерді жылдамырақ өңдейсіз, команданың рутинасы азаяды, шешімдер интуицияға емес, деректерге негізделеді.',
            'hero.btnPrimary': 'Өтінім қалдыру',
            'hero.btnOutline': 'AI-ассистенттен сұрау',
            'diagram.input1': 'Сайттан өтінімдер',
            'diagram.input3': 'Қоңыраулар, чаттар',
            'diagram.core': 'өзек',
            'diagram.output1': 'Басымдау',
            'diagram.output2': 'Есептер',
            'diagram.output3': 'Авто-жауаптар',
            'diagram.caption': 'СУР. 01 — ИИ-ды ағымдағы процестерге интеграциялау схемасы',
            'solutions.title': 'Біз нені енгіземіз',
            'solutions.a.title': 'Клиенттерге арналған AI-ассистенттер',
            'solutions.a.text': 'Сайтта немесе WhatsApp-та сұрақтарға жауап беретін, қызметтер бойынша кеңес беретін және «жылы» өтінімдерді сөйлесу контекстін жоғалтпай менеджерге беретін чат-бот.',
            'solutions.b.title': 'Күнделікті процестерді автоматтандыру',
            'solutions.b.text': 'Өтінімдерді жіктеу, CRM-де карточкаларды толтыру, өтінімдерді басымдық бойынша сұрыптау — бұрын адам қолмен жасайтын жұмысты енді модель орындайды.',
            'solutions.c.title': 'ИИ-ды CRM / ERP жүйесіне интеграциялау',
            'solutions.c.text': 'Модельдерді сіздің ағымдағы жүйеңізге қосамыз: инфрақұрылымды ауыстырмаймыз, керісінше, қазірдің өзінде жұмыс істеп тұрған процестердің үстіне ИИ қабатын енгіземіз.',
            'solutions.d.title': 'Аналитика және болжау',
            'solutions.d.text': 'Сұранысты болжау, клиенттердің кетуін бағалау, деректердегі ауытқуларды анықтау — автоматты түрде дайындалып, күн сайын жаңарып отыратын есептер.',
            'stack.title': 'Бұл не арқылы жұмыс істейді',
            'stack.prev': 'Артқа айналдыру',
            'stack.next': 'Алға айналдыру',
            'stack.llm.title': 'LLM және NLP',
            'stack.llm.text': 'Компанияның диалогтары, мәтінді өңдеу және білімдермен жұмыс істеу үшін үлкен тілдік модельдер.',
            'stack.cv.text': 'Суреттер мен құжаттарды тану — сапаны бақылау, автоматты тексеру.',
            'stack.cloud.title': 'Бұлтты инфрақұрылым',
            'stack.cloud.text': 'AWS, GCP, Azure платформаларында немесе тапсырыс берушінің серверлерінде деректерге қойылатын талаптарды ескере отырып орналастыру.',
            'stack.security.title': 'Деректер қауіпсіздігі',
            'stack.security.text': 'Шифрлау, қолжетімділікті шектеу және құпия деректерді сіздің ережелеріңіз бойынша сақтау.',
            'stack.java.text': 'Компанияның CRM, ERP және ішкі API-леріне интеграциялауға арналған сенімді сервер қабаты.',
            'stack.api.title': 'API-интеграциялар',
            'stack.api.text': 'ИИ-ды 1С, amoCRM, Bitrix24 және басқа жүйелерге REST/webhook арқылы қосу.',
            'projects.title': 'Біз қазірдің өзінде не жасадық',
            'projects.alt1': 'Жоба 1', 'projects.alt2': 'Жоба 2', 'projects.alt3': 'Жоба 3',
            'projects.alt4': 'Жоба 4', 'projects.alt5': 'Жоба 5', 'projects.alt6': 'Жоба 6',
            'stats.integrations': 'енгізілген интеграция',
            'stats.experience': 'ИИ және әзірлеу саласындағы тәжірибе жылы',
            'stats.retention': 'клиент серіктестікті жалғастырады',
            'stats.team': 'инженер және дата-маман',
            'assistant.title': 'Дәл қазір сұраңыз',
            'assistant.lead': 'Бұл — Spring Boot негізіндегі бэкендіміздің жұмыс істейтін демо-ассистенті. Құны, мерзімдері немесе нақты міндет туралы сұраңыз — және оның қалай сөйлесетінін көріңіз.',
            'chat.greeting': 'Сәлеметсіз бе! Бизнесте қандай міндетті автоматтандырғыңыз келетінін айтыңыз — сізге қолайлы шешімді ұсынамын.',
            'chat.placeholder': 'Мысалы: чат-бот қанша тұрады?',
            'chat.send': 'Жіберу',
            'chat.error': 'Қазір жауап беру мүмкін болмай тұр — сәл кейінірек көріңіз.',
            'contact.title': 'Міндетіңізді талқылайық',
            'contact.lead': 'Автоматтандырғыңыз келетін процесті сипаттаңыз — біз оған қалай кірісу керектігін ұсынып, мерзімдерін бағалаймыз.',
            'contact.name': 'Аты-жөні',
            'contact.phone': 'Телефон',
            'contact.company': 'Компания',
            'contact.optional': '(міндетті емес)',
            'contact.message': 'Міндет',
            'contact.messagePlaceholder': 'Нені автоматтандырғыңыз келеді?',
            'contact.submit': 'Өтінімді жіберу',
            'form.ok': 'Өтінім жіберілді. Жақын арада сізбен хабарласамыз.',
            'form.errValidation': 'Форма өрістерін тексеріңіз.',
            'form.errNetwork': 'Өтінімді жіберу мүмкін болмады. Қайта көріңіз.',
            'footer.tagline': 'Қазірдің өзінде жұмыс істеп тұрған процестерге ИИ-ды енгіземіз.',
            'footer.copy': '© 2026 FlowTech. Жобаның демонстрациялық қаңқасы.',
        },
    };

    function getLang() {
        try {
            const saved = localStorage.getItem(LANG_KEY);
            if (saved === 'ru' || saved === 'kk') return saved;
        } catch (e) { /* localStorage недоступен */ }
        return document.documentElement.getAttribute('lang') === 'kk' ? 'kk' : 'ru';
    }

    function t(key, lang) {
        const dict = I18N[lang] || I18N.ru;
        return dict[key] !== undefined ? dict[key] : (I18N.ru[key] !== undefined ? I18N.ru[key] : key);
    }

    let currentLang = getLang();

    function applyLanguage(lang) {
        currentLang = lang === 'kk' ? 'kk' : 'ru';
        document.documentElement.setAttribute('lang', currentLang);
        document.title = t('meta.title', currentLang);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            el.textContent = t(el.getAttribute('data-i18n'), currentLang);
        });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            el.innerHTML = t(el.getAttribute('data-i18n-html'), currentLang);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder'), currentLang));
        });
        document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
            el.setAttribute('alt', t(el.getAttribute('data-i18n-alt'), currentLang));
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), currentLang));
        });

        const langLabel = document.getElementById('lang-toggle-label');
        if (langLabel) langLabel.textContent = currentLang === 'ru' ? 'ҚАЗ' : 'РУС';

        if (themeToggleEl) {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            themeToggleEl.setAttribute('aria-label', t(isLight ? 'theme.toDark' : 'theme.toLight', currentLang));
        }
    }

    const themeToggleEl = document.getElementById('theme-toggle');
    const langToggleEl = document.getElementById('lang-toggle');

    applyLanguage(currentLang);

    if (langToggleEl) {
        langToggleEl.addEventListener('click', () => {
            const next = currentLang === 'ru' ? 'kk' : 'ru';
            try {
                localStorage.setItem(LANG_KEY, next);
            } catch (e) { /* localStorage недоступен — просто не сохраняем выбор */ }
            applyLanguage(next);
        });
    }

    /* ----------------------------------------------------------------
       Переключение темы (тёмная / светлая)
       ---------------------------------------------------------------- */
    const THEME_KEY = 'flowtech-theme';
    const themeToggle = themeToggleEl;

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeToggle) {
            const isLight = theme === 'light';
            themeToggle.setAttribute('aria-pressed', String(isLight));
            themeToggle.setAttribute('aria-label', t(isLight ? 'theme.toDark' : 'theme.toLight', currentLang));
        }
    }

    if (themeToggle) {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(current);

        themeToggle.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            try {
                localStorage.setItem(THEME_KEY, next);
            } catch (e) { /* localStorage недоступен — просто не сохраняем выбор */ }
            applyTheme(next);
        });
    }

    /* ----------------------------------------------------------------
       Мобильное меню (гамбургер)
       ---------------------------------------------------------------- */
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        mainNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ----------------------------------------------------------------
       Карусель «Технологии» — прокрутка стрелками
       ---------------------------------------------------------------- */
    const stackTrack = document.getElementById('stack-track');
    const stackPrev = document.getElementById('stack-prev');
    const stackNext = document.getElementById('stack-next');

    if (stackTrack && stackPrev && stackNext && !stackTrack.dataset.initialized) {
        stackTrack.dataset.initialized = 'true';

        const originalItems = Array.from(stackTrack.querySelectorAll('.stack-item:not([aria-hidden])'));
        const GAP = 24;

        // Удаляем старые клоны если есть (защита от двойной инициализации)
        stackTrack.querySelectorAll('[aria-hidden="true"]').forEach(el => el.remove());

        const cloneSet = () => originalItems.map((item) => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            clone.setAttribute('tabindex', '-1');
            return clone;
        });

        const beforeClones = cloneSet();
        const afterClones = cloneSet();
        beforeClones.reverse().forEach((clone) => stackTrack.insertBefore(clone, stackTrack.firstChild));
        afterClones.forEach((clone) => stackTrack.appendChild(clone));

        const stackItems = stackTrack.querySelectorAll('.stack-item');

        let setWidth = 0;
        let isJumping = false;

        const measureSetWidth = () => {
            if (!originalItems.length) return;
            const first = originalItems[0];
            const last = originalItems[originalItems.length - 1];
            setWidth = (last.offsetLeft + last.offsetWidth) - first.offsetLeft + GAP;
        };

        const jumpTo = (scrollLeft) => {
            isJumping = true;
            stackTrack.style.scrollBehavior = 'auto';
            stackTrack.scrollLeft = scrollLeft;
            requestAnimationFrame(() => {
                stackTrack.style.scrollBehavior = '';
                isJumping = false;
            });
        };

        const scrollByCard = () => {
            const card = originalItems[0];
            return card ? card.getBoundingClientRect().width + GAP : 380;
        };

        let scaleRaf = null;

        const applyStackScale = () => {
            const trackRect = stackTrack.getBoundingClientRect();
            const centerX = trackRect.left + trackRect.width / 2;

            stackItems.forEach((item) => {
                const itemRect = item.getBoundingClientRect();
                const itemCenter = itemRect.left + itemRect.width / 2;
                const distance = Math.abs(itemCenter - centerX);
                const maxDistance = trackRect.width / 2 + itemRect.width / 2;
                const ratio = Math.max(0, 1 - distance / maxDistance);
                const scale = 0.82 + ratio * 0.28;
                item.style.transform = `scale(${scale.toFixed(3)})`;
                item.style.opacity = (0.5 + ratio * 0.5).toFixed(2);
                item.style.zIndex = String(Math.round(ratio * 10));
            });
        };

        const maintainLoop = () => {
            if (!setWidth || isJumping) return;
            if (stackTrack.scrollLeft < setWidth * 0.5) {
                jumpTo(stackTrack.scrollLeft + setWidth);
            } else if (stackTrack.scrollLeft > setWidth * 1.5) {
                jumpTo(stackTrack.scrollLeft - setWidth);
            }
        };

        const requestFrame = () => {
            if (scaleRaf) return;
            scaleRaf = requestAnimationFrame(() => {
                applyStackScale();
                maintainLoop();
                scaleRaf = null;
            });
        };

        stackPrev.addEventListener('click', () => {
            stackTrack.scrollBy({ left: -scrollByCard(), behavior: 'smooth' });
        });
        stackNext.addEventListener('click', () => {
            stackTrack.scrollBy({ left: scrollByCard(), behavior: 'smooth' });
        });
        stackTrack.addEventListener('scroll', requestFrame);
        window.addEventListener('resize', () => {
            measureSetWidth();
            requestFrame();
        });

        requestAnimationFrame(() => {
            measureSetWidth();
            jumpTo(setWidth);
            applyStackScale();
        });
    }

    /* ----------------------------------------------------------------
       Анимация счётчиков в блоке статистики (запускается при появлении)
       ---------------------------------------------------------------- */
    const statValues = document.querySelectorAll('.stat-value');

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10) || 0;
        const suffix = el.dataset.suffix || '';
        const duration = 1200;
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);
            el.textContent = value + suffix;
            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        }
        requestAnimationFrame(tick);
    }

    if ('IntersectionObserver' in window && statValues.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        statValues.forEach((el) => observer.observe(el));
    } else {
        statValues.forEach(animateCounter);
    }

    /* ----------------------------------------------------------------
       Форма заявки -> POST /api/leads
       ---------------------------------------------------------------- */
    const leadForm = document.getElementById('lead-form');
    const formStatus = document.getElementById('form-status');

    function clearFieldErrors() {
        document.querySelectorAll('.field-error').forEach((el) => (el.textContent = ''));
    }

    if (leadForm) {
        leadForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            clearFieldErrors();
            formStatus.textContent = '';
            formStatus.className = 'form-status';

            const payload = {
                name: leadForm.name.value.trim(),
                phone: leadForm.phone.value.trim(),
                company: leadForm.company.value.trim(),
                message: leadForm.message.value.trim(),
            };

            const submitBtn = leadForm.querySelector('.form-submit');
            submitBtn.disabled = true;

            try {
                const response = await fetch('/api/leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });

                if (response.status === 201) {
                    formStatus.textContent = t('form.ok', currentLang);
                    formStatus.classList.add('ok');
                    leadForm.reset();
                } else if (response.status === 400) {
                    const errors = await response.json();
                    Object.entries(errors).forEach(([field, msg]) => {
                        const el = document.querySelector(`.field-error[data-for="${field}"]`);
                        if (el) el.textContent = msg;
                    });
                    formStatus.textContent = t('form.errValidation', currentLang);
                    formStatus.classList.add('err');
                } else {
                    throw new Error('Unexpected status ' + response.status);
                }
            } catch (err) {
                formStatus.textContent = t('form.errNetwork', currentLang);
                formStatus.classList.add('err');
            } finally {
                submitBtn.disabled = false;
            }
        });
    }

    /* ----------------------------------------------------------------
       AI-чат -> POST /api/chat
       ---------------------------------------------------------------- */
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatLog = document.getElementById('chat-log');
    let sessionId = null;

    function appendMessage(role, text) {
        const bubble = document.createElement('div');
        bubble.className = 'chat-msg ' + (role === 'user' ? 'chat-msg-user' : 'chat-msg-assistant');
        bubble.textContent = text;
        chatLog.appendChild(bubble);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    if (chatForm) {
        chatForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;

            appendMessage('user', text);
            chatInput.value = '';
            chatInput.disabled = true;

            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: text, sessionId }),
                });

                if (!response.ok) throw new Error('Chat request failed');

                const data = await response.json();
                sessionId = data.sessionId;
                appendMessage('assistant', data.reply);
            } catch (err) {
                appendMessage('assistant', t('chat.error', currentLang));
            } finally {
                chatInput.disabled = false;
                chatInput.focus();
            }
        });
    }
})();