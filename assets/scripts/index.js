const handleMobileNav = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileNavBtn = document.querySelector(".navbar__item#mobile-btn");
    const icon = document.querySelector(".fa-bars#mobile-btn");
    console.log(icon)
    console.log(mobileNavBtn)
    if (!mobileNav.classList.contains("active")) {
        mobileNavBtn.style.cursor = "not-allowed";
        icon.style.pointerEvents = "none";
        icon.style.color = "#ffffff";
        mobileNav.classList.add("active");
        setTimeout(() => {
            mobileNav.style.transition = "right 0.75s linear";
            icon.removeAttribute("style");
            mobileNavBtn.removeAttribute("style");
        }, 500);
    } else {
        mobileNavBtn.style.cursor = "not-allowed";
        icon.style.pointerEvents = "none";
        icon.style.color = "#ffffff";
        mobileNav.classList.remove("active");
        setTimeout(() => {
            mobileNav.removeAttribute("style");
            setTimeout(() => {
                icon.removeAttribute("style");
                mobileNavBtn.removeAttribute("style");
            }, 650);
        }, 100);
    }
};

