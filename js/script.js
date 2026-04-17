// js/script.js

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    let windowHeight = window.innerHeight;

    // 1. التحكم في Fade كلمة "تروجينا"
    let heroOverlay = document.querySelector(".hero-overlay");
    if (heroOverlay) {
        let heroOpacity = 1 - (scrollPos * 0.0015); 
        heroOverlay.style.opacity = Math.max(heroOpacity, 0);
    }

    // 2. كود البارالاكس للصور (تعديل ليكون أخف في الجوال)
    let isMobile = window.innerWidth < 768;
    let speed = isMobile ? 0.1 : 0.3; // سرعة أخف للجوال عشان ما يقطع

    document.querySelectorAll(".parallax").forEach(img => {
        let offset = (scrollPos - windowHeight) * speed; 
        if (scrollPos > windowHeight * 0.5) {
            img.style.transform = `translateY(${offset}px)`;
        }
    });
});

// 3. كود الـ Fade للأقسام (Intersection Observer)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('.content').forEach(el => {
    observer.observe(el);
});