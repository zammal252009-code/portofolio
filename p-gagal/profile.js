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


    
