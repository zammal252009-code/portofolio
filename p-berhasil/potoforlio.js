var typed = new Typed(".text", {
     strings:["frontend developer", "Designer", "Web Developer"],
     typeSpeed:100,
     backSpeed:60,
     backDelay:1000,
     loop:true
});


const MySchool = [
    {
        Image:"../img/sd.png",
        Year:"2015-2021",
        Name:"SDIT ARRISALAH AL ATTSARI",
    },
    {
        Image:"../img/smp.png",
        Year:"2021-2024",
        Name:"PONDOK PESANTREN TAHFIDZUL QURAN ADDAWAA",
    },
    {
        Image:"../img/smk.png",
        Year:"2024-Sekarang",
        Name:"SMA IT HSI BOARDING SCHOOL",
    },
];

const container8 = document.getElementById("container8");

for (let i = 0; i < MySchool.length; i++) {
    let school = MySchool[i];

    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.src = school.Image;
    img.alt = school.Name;
    img.className = "card-image";

    let Name = document.createElement("p");
    Name.textContent = school.Name;
    Name.className = "card-name";

    let year = document.createElement("p");
    year.textContent = school.Year;
    year.className = "card-year";

    card.appendChild(img);
    card.appendChild(Name);
    card.appendChild(year);

    container8.appendChild(card);
}

const scrollElements = document.querySelectorAll(
    '.container2, .container4, .container5, .container6, .container7 .project, .card'
);

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset);
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el, 150)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

    
