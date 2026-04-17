// js/script.js

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    let windowHeight = window.innerHeight;

    // 1. التحكم في Fade كلمة "تروجينا" ليكون أبطأ (Slow Fade)
    // الرقم 0.0015 هو اللي يتحكم في السرعة، صغره أكثر لو تبغاه أبطأ
    let heroOpacity = 1 - (scrollPos * 0.0015); 
    if (heroOpacity >= 0) {
        document.querySelector(".hero-overlay").style.opacity = heroOpacity;
    }

    // 2. كود البارالاكس للصور في الأسفل
    document.querySelectorAll(".parallax").forEach(img => {
        let speed = 0.3;
        let offset = (scrollPos - windowHeight) * speed; // يبدأ الحساب بعد تجاوز الهيرو
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