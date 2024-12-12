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

const place = [
    {
        placeName: "Calgary Tower",
        location: "101 9 Ave SW, Calgary",
        population: "N/A",
        distance: "N/A",
        description: "A defining landmark in Calgary's skyline, the Calgary Tower offers breathtaking 360° views of the cityscape, the majestic Rocky Mountains, the foothills, and sprawling prairies. The Observation Deck features a glass floor experience and is perfect for capturing stunning photos or enjoying a unique dining experience at the revolving restaurant.",
        imageUrl: "https://cdn.activifinder.com/media/activities/activities/gallery/calgary-tower-calgary3.full.webp"
    },
    {
        placeName: "Calgary Zoo",
        location: "210 St. George's Drive NE, Calgary",
        population: "N/A",
        distance: "N/A",
        description: "Home to over 4,000 animals from more than 100 species, the Calgary Zoo offers an unforgettable wildlife experience. Visitors can explore themed exhibits such as the Land of Lemurs and Destination Africa, and learn about conservation efforts by the Wilder Institute. It's a perfect destination for families and nature enthusiasts.",
        imageUrl: "https://www.calgaryzoo.com/wp-content/uploads/2023/09/20220805_WilderInstituteCalgaryZoo_Day2_1967_FIN-1024x768.jpg"
    },
    {
        placeName: "Prince's Island Park",
        location: "698 Eau Claire Ave SW, Calgary",
        population: "N/A",
        distance: "N/A",
        description: "An urban oasis in the heart of Calgary, Prince's Island Park is a favorite retreat for locals and visitors alike. It features scenic walking trails, picnic spots, and the Chevron Learning Pathway for environmental education. The park is also home to year-round festivals and events, making it a vibrant community hub.",
        imageUrl: "https://www.calgary.ca/content/dam/www/csps/parks/publishingimages/hero-banners/princes-island-park-banner.JPG"
    },
    {
        placeName: "Banff National Park and Townsite",
        location: "110 Bear St, Banff, AB",
        population: "8,305",
        distance: "129 kilometers West of Calgary (1 hour and 28 minutes)",
        description: "Nestled in the Canadian Rockies, Banff National Park is a world-renowned destination known for its turquoise lakes, towering peaks, and abundant outdoor adventures. The charming town of Banff offers cozy shops, cafes, and a convenient transit system for exploring nearby attractions like the Banff Gondola and Bow Falls.",
        imageUrl: "https://banfflakelouise.bynder.com/m/75af179b9b922d9d/2000x1080_jpg-2019_BanffAve_Winter_PaulZizka.jpg"
    },
    {
        placeName: "Lake Louise",
        location: "Lake Louise Lakeshore Trail, Lake Louise, Alberta",
        population: "1,050",
        distance: "183 kilometers West of Calgary (1 hour and 55 minutes)",
        description: "Lake Louise is an iconic gem of the Canadian Rockies, celebrated for its brilliant turquoise waters framed by glacial peaks. Visitors can explore hiking trails like the Lake Agnes Tea House trail, enjoy canoeing on the lake, or take in panoramic views from the nearby ski resort's gondola.",
        imageUrl: "https://mountaineerlodge.com/uploads/images/_smallCrop/2-areas-of-LL.f1643569788.jpg?v=1732141079%2C0.5%2C0.5"
    },
    {
        placeName: "Canmore",
        location: "Canmore, Alberta",
        population: "15,990",
        distance: "105 kilometers West of Calgary (1 hour and 8 minutes)",
        description: "Set against the stunning backdrop of Kananaskis Country, Canmore is a vibrant mountain town that offers endless opportunities for outdoor adventure. From scenic hiking and biking trails to boutique shops and art galleries, Canmore seamlessly blends natural beauty with cultural charm.",
        imageUrl: "https://canmorealberta.com/assets/images/_640x480_crop_center-center_none/Canmore.ThingsToDo.3_summer_aerial.f1662145541.jpg"
    },
    {
        placeName: "Golden",
        location: "Golden, British Columbia",
        population: "3,986",
        distance: "264 kilometers West of Calgary (2 hour and 50 minutes)",
        description: "Golden is a gateway to outdoor exploration, surrounded by six national parks and home to Canada’s highest suspension bridge at the Golden Skybridge. The town celebrates its rich cultural heritage and offers thrilling activities like whitewater rafting, mountain biking, and wildlife tours.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfgmQtfg9I9_WcXeAzhpBYP-sPnJAegKW_w&s"
    },
    {
        placeName: "Drumheller",
        location: "Drumheller, Alberta",
        population: "7,909",
        distance: "110 kilometres Northeast of Calgary (1 hour and 14 minutes)",
        description: "Known as the Dinosaur Capital of the World, Drumheller is a fascinating hub for exploring the Canadian Badlands. Highlights include the Royal Tyrrell Museum, the Hoodoos, and Dinosaur Provincial Park, offering an unparalleled glimpse into prehistoric times and unique landscapes.",
        imageUrl: "https://roadtripalberta.com/wp-content/uploads/2019/10/Welcome-to-Drumheller.jpg"
    },
    {
        placeName: "Waterton Park",
        location: "Waterton Park, Alberta",
        population: "132",
        distance: "275 kilometers South of Calgary (3 hours)",
        description: "A hidden gem where the prairies meet the Rockies, Waterton Lakes National Park is known for its breathtaking natural beauty. Visitors can marvel at clear lakes, cascading waterfalls, and unique wildlife. The small village of Waterton offers cozy accommodations and a welcoming atmosphere for adventurers.",
        imageUrl: "https://cdn.elebase.io/48f2d2e2-227a-4dfc-b2d3-d99715fd23cd/1c11da3d-0374-495b-b19f-358359c9ce16-watcd16239677b251472.jpg?w=680&h=382&fit=crop&rot=auto&dpr=2&q=75"
    }
];

createPlacesCard(place);

function createPlacesCard(place) {
    const attractionContainer = document.querySelector("#attractions-container");

    place.forEach(place => {
        if (!place.placeName) return;

        let card = document.createElement("section");
        card.classList.add("attractions-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let population = document.createElement("p");
        let distance = document.createElement("p");
        let description = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = place.placeName;
        location.innerHTML = `<span class="label"><b>Location: </b></span> ${place.location}`;
        population.innerHTML = `<span class="label"><b>Population: </b></span> ${place.population}`;
        distance.innerHTML = `<span class="label"><b>Distance from Calgary: </b></span> ${place.distance}`
        description.innerHTML = `<span class="label"><b>Description: </b></span> ${place.description}`;
        img.setAttribute("src", place.imageUrl);
        img.setAttribute("alt", `${place.placeName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(population);
        card.appendChild(distance);
        card.appendChild(description);
        card.appendChild(img);

        attractionContainer.appendChild(card);
    });
}