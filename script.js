document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Preloader Logic (Minimum Delay) ---
    const preloader = document.getElementById('preloader');

    if (preloader) {
        if (typeof gsap === 'undefined') {
            console.error("GSAP is not loaded! Preloader will not hide.");
            preloader.style.display = 'none';
            heroEntryAnimation();
            setupScrollAnimations(); // Attempt setup
            return;
        }

        gsap.timeline()
            .to(preloader, {
                opacity: 0,
                duration: 0.5,
                delay: 0.2,
                onComplete: () => {
                    preloader.style.visibility = 'hidden';
                    preloader.style.display = 'none';
                    heroEntryAnimation();
                    setupScrollAnimations(); // Setup after preloader
                }
            });
    } else {
        heroEntryAnimation();
        setupScrollAnimations(); // Setup directly
    }

    // --- 2. Hero Entry Animation ---
    function heroEntryAnimation() {
        const heroGlassContainer = document.querySelector('.hero-glass-container');
        if (heroGlassContainer) heroGlassContainer.style.opacity = 1;
        typeRoles();
    }


    // --- 3. Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }


    // --- 4. Typed Text Logic ---
    const heroContent = document.querySelector('.hero-content');
    let typedTextSpan = null;

    if (heroContent) {
        const typedH2 = document.createElement('h2');
        typedH2.id = 'typed-text';
        typedH2.className = 'hero-typed';

        const heroName = document.querySelector('.hero-name');
        if (heroName) {
            heroName.insertAdjacentElement('afterend', typedH2);
            typedTextSpan = document.getElementById("typed-text");
        }

        const roles = ["Full Stack Developer", "Python Developer", "AIML Engineer"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeRoles() {
            if (!typedTextSpan) return;
            const currentRole = roles[roleIndex];
            typedTextSpan.textContent = currentRole.substring(0, charIndex);
            if (!isDeleting && charIndex < currentRole.length) {
                charIndex++;
                setTimeout(typeRoles, 90);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setTimeout(typeRoles, 45);
            } else {
                isDeleting = !isDeleting;
                if (!isDeleting) {
                    roleIndex = (roleIndex + 1) % roles.length;
                }
                setTimeout(typeRoles, 1100);
            }
        }
    }


    // --- 6. Project Video Hover Logic ---
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const video = card.querySelector('.project-video');
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.load();
                video.play().catch(e => console.log("Video play interrupted or failed:", e));
            });
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });


   
}); // End of DOMContentLoaded
/* --- START: Honeycomb Grid JS --- */

const grid = document.getElementById('grid');

// Check karein ki 'grid' element page par hai ya nahi
if (grid) {
    const imageFileNames = [
        "Screenshot 2025-10-29 144116.png",
        "Screenshot 2025-10-29 144141.png",
        "Screenshot 2025-10-29 144155.png",
        "Screenshot 2025-10-29 144217.png",
        "Screenshot 2025-10-29 144232.png",
        "Screenshot 2025-10-29 144243.png",
        "Screenshot 2025-10-29 144256.png",
        "Screenshot 2025-10-29 144309.png",
        "Screenshot 2025-10-29 144330.png",
        "Screenshot 2025-10-29 144342.png",
        "Screenshot 2025-10-29 144400.png",
        "Screenshot 2025-10-29 144451.png",
        "Screenshot 2025-10-29 144508.png",
        "Screenshot 2025-10-29 144523.png",
        "Screenshot 2025-10-29 144536.png",
        "Screenshot 2025-10-29 144551.png",
        "Screenshot 2025-10-29 144701.png",
        "Screenshot 2025-10-29 144716.png",
        "Screenshot 2025-10-29 144729.png","WhatsApp Image 2025-10-29 at 14.34.24_2866e5e8.jpg",
         "WhatsApp Image 2025-10-29 at 14.34.23_54248de3.jpg",
        "WhatsApp Image 2025-10-29 at 14.34.24_937f8280.jpg",
        
        "Screenshot 2025-10-29 144742.png",  
        "Screenshot 2025-10-29 144758.png",
        "Screenshot 2025-10-29 144811.png",
        "Screenshot 2025-10-29 144823.png",
        "Screenshot 2025-10-29 144837.png",
        "Screenshot 2025-10-29 144852.png",
        "Screenshot 2025-10-29 144905.png",
        "Screenshot 2025-10-29 144937.png",
        "Screenshot 2025-10-29 144949.png",
        "Screenshot 2025-10-29 145002.png",
        "Screenshot 2025-10-29 145014.png",
        "Screenshot 2025-10-29 145028.png","WhatsApp Image 2025-10-29 at 14.34.23_ce849eb5.jpg",             
        "Screenshot 2025-10-29 145043.png",
        "Screenshot 2025-10-29 145057.png",
        "Screenshot 2025-10-29 145109.png",
        "Screenshot 2025-10-29 145122.png",
        "Screenshot 2025-10-29 145136.png",
        "Screenshot 2025-10-29 145155.png", 
        "Screenshot 2025-10-29 145212.png",
        "Screenshot 2025-10-29 145225.png",
        "Screenshot 2025-10-29 145239.png",
        "Screenshot 2025-10-29 145254.png",
        "Screenshot 2025-10-29 145307.png",
        "Screenshot 2025-10-29 145319.png",
        "Screenshot 2025-10-29 145332.png",
        "Screenshot 2025-10-29 145344.png",
        "Screenshot 2025-10-29 145356.png",
        "Screenshot 2025-10-29 145407.png",
        "Screenshot 2025-10-29 145417.png",
        "Screenshot 2025-10-29 145428.png",
      
       
       
    ];
    
   imageFileNames.forEach(fileName => {
    let hex = document.createElement('div');
    hex.className = 'hexagon';
    
    // YAHAN PAR CHANGE HAI:
    // "cer/" aur fileName ko jodo
    let imgSrc = "cer/" + fileName; 
    
    hex.innerHTML = `<img src="${imgSrc}" alt="${fileName}">`;

    grid.appendChild(hex);
});
}

/* --- END: Honeycomb Grid JS --- */