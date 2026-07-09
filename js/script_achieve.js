// Achievements Page Scroll Animation
window.addEventListener("scroll", function() {

    const achievementsPages = document.querySelectorAll(".achievements-page");
    
    // HTML mein class 'skills-cta' hai, isliye selector ko update kiya
    const achievementsCta = document.querySelector(".skills-cta"); 
    
    // Trigger point thoda upar rakha hai taaki smooth dikhe
    const screenPosition = window.innerHeight / 1.15;
    
    // Loop for multiple sections
    achievementsPages.forEach(page => {
        if (page.getBoundingClientRect().top < screenPosition) {
            page.classList.add("show");
        }
    });
    
    // Variable name yahan theek kiya gaya hai (achieveCta -> achievementsCta)
    if (achievementsCta) {
        if (achievementsCta.getBoundingClientRect().top < screenPosition) {
            achievementsCta.classList.add("show");
        }
    }
    
});

// Trigger scroll check on load just in case elements are already in view
window.dispatchEvent(new Event('scroll'));