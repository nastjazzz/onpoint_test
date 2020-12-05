let currentTab = 1;

const showCurrentTab = (n) => {
    showTab(currentTab = n);
}

const showTab = (n) => {
    let i;
    let tabs = document.querySelectorAll('.section');
    let dots = document.querySelectorAll('.control-dot');

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[currentTab - 1].className += " active";
    tabs[currentTab - 1].scrollIntoView({block: "center", behavior: "smooth"});
}

const slider = document.querySelector('.slider');

slider.addEventListener("input", (e) => {
    let slides = document.querySelectorAll('.slide');

    if (e.target.value === '3') {
        slides[2].scrollIntoView({block: "end", behavior: "smooth"});
    } else if (e.target.value === '2') {
        slides[1].scrollIntoView({block: "end", behavior: "smooth"});
    } else if (e.target.value === '1') {
        slides[0].scrollIntoView({block: "end", behavior: "smooth"});
    }
})

