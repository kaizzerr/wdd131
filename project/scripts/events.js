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

const events = [
    {
        eventName: "Calgary Stampede",
        location: "Downtown Calgary",
        date: "July 4 - 13, 2025",
        description: "The Calgary Stampede, known as 'The Greatest Outdoor Show on Earth,' is a legendary celebration of Western culture. All ages may enjoy an amazing experience with its exciting rodeo events, live music, cultural exhibits, and a busy midway. Take in all of the lively energy of this ten-day event.",
        imageUrl: "https://cdn.sanity.io/images/lr9tta69/production/69deef1663597c7451e3530483a6c7737534861b-640x480.jpg?fmt=webp&fit=crop&w=640&h=480"
    },
    {
        eventName: "GlobalFest",
        location: "Elliston Park, Calgary",
        date: "August 14 - 23, 2025 (with select nights during that week)",
        description: "Calgary's top multicultural celebration, GlobalFest, combines foreign cuisine, energetic acts, and spectacular fireworks. This must-see summer festival, which takes place in Elliston Park, celebrates diversity with cultural pavilions and captivating night skies.",
        imageUrl: "https://smartcdn.gprod.postmedia.digital/calgaryherald/wp-content/uploads/2023/07/GlobalFest-fireworks-main-1000-x-750.jpg?quality=90&strip=all&w=564&h=423&type=webp&sig=zked7gXuBLPqQwqHXGKDMQ"
    },
    {
        eventName: "Airdrie Festival of Lights",
        location: "Nose Creek Park, 1701 Main Street South, Airdrie",
        date: "December 1 - 31, 2025",
        description: "With its mesmerizing light displays and festive atmosphere, the Airdrie Festival of Lights turns Nose Creek Park into a winter wonderland. Along with train rides, hot chocolate, and Christmas games, the event is ideal for family vacations and leaves a lasting impression on guests of all ages.",
        imageUrl: "https://airdrielights.com/wp-content/uploads/2019/07/AFOL-Lights-Instagram9-500x500.jpg"
    },
    {
        eventName: "Calgary International Film Festival (CIFF)",
        location: "Downtown Calgary",
        date: "September 18 - 28, 2025",
        description: "With more than ten days of screenings, panel discussions, and special activities, CIFF presents the finest in Canadian and foreign film. With its selection of entertaining dramas and thought-provoking documentaries, this festival is a sanctuary for both storytellers and moviegoers.",
        imageUrl: "https://www.ciffcalgary.ca/assets/8825844311/1_CIFF2019_Day9THUR.27.jpg"
    },
    {
        eventName: "Calgary Expo",
        location: "Stampede Park, Calgary",
        date: "April 24 - 27, 2025",
        description: "Comic book, science fiction, anime, and video game enthusiasts come together at Calgary Expo, a pop culture festival. Attend interactive seminars, browse artist shops, meet celebrities, and purchase one-of-a-kind goods. For fans and cosplayers, this four-day event is a haven.",
        imageUrl: "https://knect365.imgix.net/uploads/MAIN-EVENTS---AUTOGRAPH-SESSIONS-10f053fbb307daa51dcda1234bf6766b.png?auto=format&fit=max&w=412&dpr=5"
    },
    {
        eventName: "Taste of Calgary",
        location: "Lot 6 - 311 8 Street SW, Calgary",
        date: "July 31 - August 1 - 4, 2025",
        description: "Taste of Calgary provides a delicious exploration of the city's varied culinary offerings. Savor delicacies from several neighborhood restaurants, drink tasty drinks, and take in live music in a vibrant outdoor environment. Foodies won't want to miss this sensory extravaganza.",
        imageUrl: "https://dpdajlq3ew794.cloudfront.net/20230721135351/Taste-of-Calgary.jpg?format=auto&width=1920"
    }
];


createEventsCard(events);

function createEventsCard(events) {
    const eventContainer = document.querySelector("#event-container");

    events.forEach(event => {
        if (!event.eventName) return;

        let card = document.createElement("section");
        card.classList.add("event-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let date = document.createElement("p");
        let description = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = event.eventName;
        location.innerHTML = `<span class="label"><b>Location: </b></span> ${event.location}`;
        date.innerHTML = `<span class="label"><b>Date: </b></span> ${event.date}`;
        description.innerHTML = `<span class="label"><b>Description: </b></span> ${event.description}`;
        img.setAttribute("src", event.imageUrl);
        img.setAttribute("alt", `${event.eventName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(date);
        card.appendChild(description);
        card.appendChild(img);

        eventContainer.appendChild(card);
    });
}