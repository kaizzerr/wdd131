document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
const hamburger = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
hamburger.addEventListener('click', () => {
    header.classList.toggle('open');
    hamburger.classList.toggle('open');
    burger.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8456.jpg"
    },
    {
        templeName: "London England",
        location: "Surrey, England, United Kingdom",
        dedicated: "1958, September, 7",
        area: 42652,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/914ec5701c2435b4cfa50668de85df2aebf68f26/full/640%2C/0/default"
    },
    {
        templeName: "Praia Cape Verde",
        location: "Praia, Santiago, Cape Verde",
        dedicated: "2022, June, 19",
        area: 8759,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/978860bab5c311ec9b2deeeeac1efb02ff7625cc/full/640%2C/0/default"
    },
];

createTempleCard(temples);

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");

oldLink.addEventListener("click", () => {
    clearTempleCards();
    const oldTemples = temples.filter(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        return year < 1900;
    });
    createTempleCard(oldTemples);
});

newLink.addEventListener("click", () => {
    clearTempleCards();
    const newTemples = temples.filter(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        return year > 2000;
    });
    createTempleCard(newTemples);
});

largeLink.addEventListener("click", () => {
    clearTempleCards();
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
});

smallLink.addEventListener("click", () => {
    clearTempleCards();
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
});

homeLink.addEventListener("click", () => {
    clearTempleCards();
    createTempleCard(temples);
});

function clearTempleCards() {
    const templeContainer = document.querySelector("#temple-container");
    while (templeContainer.firstChild) {
        templeContainer.removeChild(templeContainer.firstChild);
    }
}

function createTempleCard(filteredTemples) {
    const templeContainer = document.querySelector("#temple-container");
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templeContainer.appendChild(card);
    });
}