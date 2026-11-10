// Franklin — Birthday Edition
// Config: set your birthday date here (local timezone)
// Format: 'YYYY-MM-DD' or 'YYYY-MM-DDTHH:MM:SS'
const BIRTHDAY_DATE = '2026-11-10';

const SOCIAL_URLS = {
    instagram: '#',
    facebook: '#',
    tiktok: '#',
    linkedin: '#'
};

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navMenu.classList.toggle('active');
    });
    navLinks.forEach(l => l.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }));
}

// Countdown
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secsEl = document.getElementById('seconds');
const statusEl = document.getElementById('countdownStatus');

function updateCountdown() {
    if (!BIRTHDAY_DATE) {
        if (statusEl) statusEl.textContent = 'A special day is coming';
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minsEl) minsEl.textContent = '00';
        if (secsEl) secsEl.textContent = '00';
        return;
    }
    const b = new Date(BIRTHDAY_DATE + (BIRTHDAY_DATE.includes('T') ? '' : 'T00:00:00'));
    if (isNaN(b.getTime())) {
        if (statusEl) statusEl.textContent = 'A special day is coming';
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minsEl) minsEl.textContent = '00';
        if (secsEl) secsEl.textContent = '00';
        return;
    }
    const now = new Date();
    const diff = b - now;
    if (diff <= 0) {
        if (statusEl) statusEl.textContent = 'Happy Birthday to You "Franklin"!';
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minsEl) minsEl.textContent = '00';
        if (secsEl) secsEl.textContent = '00';
        return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
    if (statusEl) statusEl.textContent = '';
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Gallery
const items = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const overlay = document.getElementById('lightboxOverlay');
const closeBtn = document.getElementById('lightboxClose');
const imgEl = document.getElementById('lightboxImg');

const images = [
    'assets/images/WhatsApp Image 2026-11-09 at 11.08.55 AM.jpeg',
    'assets/images/WhatsApp Image 2026-11-09 at 11.08.57 AM.jpeg',
    'assets/images/WhatsApp Image 2026-11-09 at 11.08.58 AM.jpeg',
    'assets/images/WhatsApp Image 2026-10-27 at 3.02.41 AM.jpeg',
    'assets/images/WhatsApp Image 2026-10-26 at 8.06.50 AM.jpeg',
    'assets/images/WhatsApp Image 2026-10-27 at 3.02.45 AM.jpeg'
];

items.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (lightbox && imgEl) {
            imgEl.src = images[i];
            imgEl.alt = 'Gallery image';
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (closeBtn) closeBtn.focus();
        }
    });
});

function closeLb() {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
if (closeBtn) closeBtn.addEventListener('click', closeLb);
if (overlay) overlay.addEventListener('click', closeLb);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLb();
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Sharing
const shareWA = document.getElementById('shareWA');
const copyLink = document.getElementById('copyLink');
const url = location.href;
const text = 'Franklin — Birthday Celebration | Another year. A greater vision.';

if (shareWA) {
    shareWA.addEventListener('click', async () => {
        const wa = 'https://wa.me/?text=' + encodeURIComponent(text + ' ' + url);
        if (navigator.share) {
            try {
                await navigator.share({ title: 'Franklin — Birthday Edition', text, url });
                return;
            } catch (e) {}
        }
        window.open(wa, '_blank', 'noopener,noreferrer');
    });
}

if (copyLink) {
    copyLink.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(url);
            const old = copyLink.textContent;
            copyLink.textContent = 'Copied!';
            setTimeout(() => copyLink.textContent = old, 1500);
        } catch (e) {
            alert('Copy: ' + url);
        }
    });
}

// Social
const set = (el, u) => { if (!el) return; if (u && u !== '#') el.href = u; else el.style.display = 'none'; };
set(document.getElementById('ig'), SOCIAL_URLS.instagram);
set(document.getElementById('fb'), SOCIAL_URLS.facebook);
set(document.getElementById('tt'), SOCIAL_URLS.tiktok);
set(document.getElementById('ln'), SOCIAL_URLS.linkedin);

// Footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const t = document.querySelector(id);
        if (t) {
            e.preventDefault();
            const navH = document.querySelector('.nav')?.offsetHeight || 70;
            const pos = t.getBoundingClientRect().top + pageYOffset - navH;
            scrollTo({ top: pos, behavior: 'smooth' });
        }
    });
});
