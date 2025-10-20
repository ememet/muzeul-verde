// Main JavaScript file for Muzeul Verde

// Smooth scroll for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes when elements come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all interactive sections
    const sections = document.querySelectorAll('.interactive-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });

    // Initialize quiz functionality
    initQuiz();

    // Load saved promises
    loadPromises();
});

// Quiz functionality for Room 2
function initQuiz() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizResult = document.getElementById('quizResult');

    if (!quizOptions.length || !quizResult) return;

    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const answer = this.getAttribute('data-answer');
            showQuizResult(answer, quizResult);
        });
    });
}

function showQuizResult(answer, resultElement) {
    const responses = {
        fossil: {
            text: "Combustibilii fosili sunt sursa predominantă de energie în România, dar acestea contribuie semnificativ la poluare. Hai să explorăm împreună alternativele verzi! 💚",
            emoji: "🏭"
        },
        solar: {
            text: "Extraordinar! 🌟 Folosești energie solară! Ești un pionier al energiei curate. Panourile solare sunt viitorul energiei sustenabile!",
            emoji: "☀️"
        },
        wind: {
            text: "Fantastic! 💨 Energia eoliană este una dintre cele mai curate surse de energie. Contribui activ la protejarea planetei!",
            emoji: "🌬️"
        },
        hydro: {
            text: "Foarte bine! 💧 Energia hidro este o sursă regenerabilă importantă. România are un potențial hidro semnificativ!",
            emoji: "💦"
        },
        mixed: {
            text: "Bine! ⚡ Un mix energetic este realitatea multor gospodării. Important este să creștem ponderea surselor regenerabile!",
            emoji: "🔋"
        },
        unknown: {
            text: "Nu-i problemă! ❓ E important să începi să te informezi. Verifică factura de energie sau întreabă furnizorul tău!",
            emoji: "📊"
        }
    };

    const response = responses[answer] || responses.unknown;

    resultElement.innerHTML = `
        <div style="font-size: 3em; margin-bottom: 10px;">${response.emoji}</div>
        <p style="font-size: 1.2em; line-height: 1.6;">${response.text}</p>
    `;
    resultElement.classList.add('show');

    // Scroll to result
    resultElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Promise wall functionality for Room 4
function addPromise() {
    const nameInput = document.getElementById('userName');
    const promiseInput = document.getElementById('userPromise');
    const promisesWall = document.getElementById('promisesWall');

    if (!nameInput || !promiseInput || !promisesWall) return;

    const name = nameInput.value.trim();
    const promise = promiseInput.value.trim();

    if (!name || !promise) {
        alert('Te rog completează ambele câmpuri! 📝');
        return;
    }

    // Create new promise card
    const promiseCard = document.createElement('div');
    promiseCard.className = 'promise-card';
    promiseCard.style.animation = 'fadeIn 0.5s ease';
    promiseCard.innerHTML = `
        <p class="promise-text">"${promise}"</p>
        <p class="promise-author">- ${name}</p>
    `;

    // Add to wall
    promisesWall.insertBefore(promiseCard, promisesWall.firstChild);

    // Save to localStorage
    savePromise(name, promise);

    // Clear inputs
    nameInput.value = '';
    promiseInput.value = '';

    // Show success message
    showMessage('Promisiunea ta a fost adăugată! 🌱', 'success');

    // Scroll to the new promise
    promiseCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function savePromise(name, promise) {
    let promises = JSON.parse(localStorage.getItem('greenPromises') || '[]');
    promises.unshift({ name, promise, date: new Date().toISOString() });

    // Keep only last 50 promises
    if (promises.length > 50) {
        promises = promises.slice(0, 50);
    }

    localStorage.setItem('greenPromises', JSON.stringify(promises));
}

function loadPromises() {
    const promisesWall = document.getElementById('promisesWall');
    if (!promisesWall) return;

    const promises = JSON.parse(localStorage.getItem('greenPromises') || '[]');

    // Load only first 10 saved promises
    promises.slice(0, 10).forEach(item => {
        const promiseCard = document.createElement('div');
        promiseCard.className = 'promise-card';
        promiseCard.innerHTML = `
            <p class="promise-text">"${item.promise}"</p>
            <p class="promise-author">- ${item.name}</p>
        `;
        promisesWall.appendChild(promiseCard);
    });
}

// Share functionality
function shareMuseum() {
    const shareData = {
        title: 'Muzeul Verde - O călătorie pentru Planetă',
        text: 'Descoperă Muzeul Verde creat de elevii Liceului Tehnologic Nicolae Titulescu! Un proiect despre protejarea mediului. 🌍🌱',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showMessage('Mulțumim pentru distribuire! 🌟', 'success'))
            .catch(() => showMessage('Distribuirea a fost anulată.', 'info'));
    } else {
        // Fallback for browsers that don't support Web Share API
        copyLink();
    }
}

function copyLink() {
    const url = window.location.origin + window.location.pathname;

    // Create temporary input
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        document.execCommand('copy');
        showMessage('Link copiat în clipboard! 📋 Distribuie-l cu prietenii tăi!', 'success');
    } catch (err) {
        showMessage('Nu s-a putut copia linkul. Încearcă din nou.', 'error');
    }

    document.body.removeChild(tempInput);
}

// Show message function
function showMessage(message, type) {
    const messageElement = document.getElementById('shareMessage');
    if (!messageElement) {
        alert(message);
        return;
    }

    messageElement.textContent = message;
    messageElement.style.display = 'block';
    messageElement.style.padding = '15px';
    messageElement.style.borderRadius = '10px';
    messageElement.style.marginTop = '15px';
    messageElement.style.fontWeight = '600';

    if (type === 'success') {
        messageElement.style.background = 'linear-gradient(135deg, #4CAF50, #81C784)';
        messageElement.style.color = 'white';
    } else if (type === 'error') {
        messageElement.style.background = 'linear-gradient(135deg, #f44336, #ef5350)';
        messageElement.style.color = 'white';
    } else {
        messageElement.style.background = 'linear-gradient(135deg, #2196F3, #64B5F6)';
        messageElement.style.color = 'white';
    }

    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 5000);
}

// Image lazy loading optimization
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});

// Add smooth scrolling to all internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Add hover effects to room cards on home page
document.addEventListener('DOMContentLoaded', function() {
    const roomCards = document.querySelectorAll('.room-card');

    roomCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Gallery image modal (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-item img, .collage-item img');

    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });
});

function openImageModal(src, alt) {
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
    `;

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    `;

    modal.appendChild(img);
    document.body.appendChild(modal);

    // Close modal on click
    modal.addEventListener('click', function() {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => document.body.removeChild(modal), 300);
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            modal.click();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Add fade-out animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Progress indicator for page scroll
document.addEventListener('DOMContentLoaded', function() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #4CAF50, #81C784);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// Log visitor (optional - for demonstration)
console.log('%c🌱 Bine ai venit la Muzeul Verde! 🌍', 'color: #4CAF50; font-size: 20px; font-weight: bold;');
console.log('%cProiect realizat de elevii Liceului Tehnologic Nicolae Titulescu, Medgidia', 'color: #2e7d32; font-size: 14px;');
console.log('%cPlatform: ETwinning | Proiect: Green Routinators', 'color: #558b2f; font-size: 12px;');
