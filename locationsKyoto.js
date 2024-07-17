const locations = {
    "popularSites": [
        {
            "name": "Fushimi Inari Taisha",
            "japanese_name": "伏見稲荷大社",
            "services": ["temple", "natural"],
            "distance": "low",
            "description": "Fushimi Inari Taisha es famoso por sus miles de torii rojos que forman senderos a través de los bosques de la montaña Inari.",
            "maps": "https://maps.app.goo.gl/v3HzHhLuSRHWPUNH6"
        },
        {
            "name": "Kinkaku-ji",
            "japanese_name": "金閣寺",
            "services": ["temple", "natural"],
            "distance": "medium",
            "description": "Kinkaku-ji, también conocido como el Pabellón de Oro, es un impresionante templo recubierto de pan de oro, situado en medio de un hermoso jardín.",
            "maps": "https://maps.app.goo.gl/qeicyxSntQzuNQkJ7"
        },
        {
            "name": "Gion",
            "japanese_name": "祇園",
            "services": ["leisure", "shop", "food"],
            "distance": "low",
            "description": "Gion es el famoso distrito de geishas de Kioto, conocido por sus casas de té, tiendas tradicionales y restaurantes de alta cocina.",
            "maps": "https://maps.app.goo.gl/63x6L6FgtHsHr9p77"
        },
        {
            "name": "Arashiyama Bamboo Grove",
            "japanese_name": "嵐山竹林",
            "services": ["natural"],
            "distance": "medium",
            "description": "El Bosque de Bambú de Arashiyama es un lugar icónico de Kioto, con senderos rodeados de altos bambús que crean una atmósfera mágica.",
            "maps": "https://maps.app.goo.gl/1zngy4WzeL1HWvD6A"
        },
        {
            "name": "Kiyomizu-dera",
            "japanese_name": "清水寺",
            "services": ["temple", "natural"],
            "distance": "low",
            "description": "Kiyomizu-dera es un templo budista famoso por su terraza de madera que ofrece vistas panorámicas de la ciudad de Kioto.",
            "maps": "https://maps.app.goo.gl/XiJZ9396XzU9nziv5"
        },
        {
            "name": "Nijo Castle",
            "japanese_name": "二条城",
            "services": ["temple", "natural"],
            "distance": "low",
            "description": "El Castillo Nijo es un antiguo castillo que sirvió como residencia para los shogunes Tokugawa, conocido por sus jardines y arquitectura histórica.",
            "maps": "https://maps.app.goo.gl/q5o1nh7J88pUBWZ28"
        },
        {
            "name": "Kyoto Imperial Palace",
            "japanese_name": "京都御所",
            "services": ["temple", "natural"],
            "distance": "low",
            "description": "El Palacio Imperial de Kioto es la antigua residencia de la familia imperial japonesa, ubicado en un gran parque con jardines paisajísticos.",
            "maps": "https://maps.app.goo.gl/uvTwXx4J3N4FfJrYA"
        },
        {
            "name": "Nishiki Market",
            "japanese_name": "錦市場",
            "services": ["shop", "food"],
            "distance": "low",
            "description": "El Mercado Nishiki es un animado mercado cubierto conocido como la cocina de Kioto, donde se venden productos frescos, alimentos preparados y productos locales.",
            "maps": "https://maps.app.goo.gl/ozJXMkcuA3TVrPc47"
        },
        {
            "name": "Ryoan-ji",
            "japanese_name": "龍安寺",
            "services": ["temple", "natural"],
            "distance": "medium",
            "description": "Ryoan-ji es famoso por su jardín zen de rocas, uno de los ejemplos más conocidos de karesansui (jardín seco) en Japón.",
            "maps": "https://maps.app.goo.gl/P1yoZshZMWAHGDob7"
        }
    ],
    "notPopularSites": [
        {
            "name": "Honen-in",
            "japanese_name": "法然院",
            "services": ["temple", "natural"],
            "distance": "medium",
            "description": "Honen-in es un templo budista menos conocido, rodeado de un tranquilo jardín y famoso por su atmósfera serena y hermosa puerta de entrada.",
            "maps": "https://maps.app.goo.gl/xQRxhYKqfwojAcEw9"
        },
        {
            "name": "Kurama-dera",
            "japanese_name": "鞍馬寺",
            "services": ["temple", "natural"],
            "distance": "high",
            "description": "Kurama-dera es un templo en la montaña Kurama, accesible a través de una pintoresca ruta de senderismo, conocido por su atmósfera mística.",
            "maps": "https://maps.app.goo.gl/UdtJYA6YjcRjPezq6"
        },
        {
            "name": "Otagi Nenbutsu-ji",
            "japanese_name": "愛宕念仏寺",
            "services": ["temple", "natural"],
            "distance": "high",
            "description": "Otagi Nenbutsu-ji es un pequeño templo conocido por sus cientos de estatuas de rakan (discípulos de Buda) esculpidas por artistas aficionados.",
            "maps": "https://maps.app.goo.gl/83ZyePP3KEgsj6zGA"
        },
        {
            "name": "Tofuku-ji",
            "japanese_name": "東福寺",
            "services": ["temple", "natural"],
            "distance": "medium",
            "description": "Tofuku-ji es un templo zen famoso por sus hermosos jardines, especialmente en otoño cuando los arces se vuelven de un rojo vibrante.",
            "maps": ""
        },
        {
            "name": "Shosei-en Garden",
            "japanese_name": "渉成園",
            "services": ["natural"],
            "distance": "low",
            "description": "El Jardín Shosei-en es un tranquilo jardín paisajístico cerca de la estación de Kioto, conocido por sus estanques, puentes y hermosas vistas.",
            "maps": "https://maps.app.goo.gl/XG9x7R2cWAhAxGvq5"
        },
        {
            "name": "Kifune Shrine",
            "japanese_name": "貴船神社",
            "services": ["temple", "natural"],
            "distance": "high",
            "description": "El Santuario Kifune, ubicado en un valle arbolado, es famoso por sus lámparas de piedra y la tradición de flotación de papel para adivinar.",
            "maps": "https://maps.app.goo.gl/Uh5Uq3HFXmv25iCX9"
        },
        {
            "name": "Hirano Shrine",
            "japanese_name": "平野神社",
            "services": ["temple", "natural"],
            "distance": "medium",
            "description": "El Santuario Hirano es conocido por sus cerezos en flor, atrayendo a muchos visitantes durante la temporada de sakura.",
            "maps": "https://maps.app.goo.gl/aDYgmjr8cpVbJ8jE8"
        },
        {
            "name": "Kyoto Botanical Gardens",
            "japanese_name": "京都府立植物園",
            "services": ["natural"],
            "distance": "medium",
            "description": "El Jardín Botánico de Kioto es el jardín botánico más antiguo de Japón, hogar de una vasta colección de plantas y flores.",
            "maps": "https://maps.app.goo.gl/VcSuCEbUpDPMUaLw9"
        },
        {
            "name": "Yasaka Shrine",
            "japanese_name": "八坂神社",
            "services": ["temple", "natural"],
            "distance": "low",
            "description": "El Santuario Yasaka es un importante santuario sintoísta en Gion, conocido por el festival Gion Matsuri y su hermosa arquitectura.",
            "maps": "https://maps.app.goo.gl/uAqYfCYHNRSbb1eCA"
        },
        {
            "name": "Fushimi Sake District",
            "japanese_name": "伏見酒蔵",
            "services": ["food", "leisure"],
            "distance": "medium",
            "description": "El Distrito de Sake de Fushimi es famoso por sus numerosas cervecerías de sake, ofreciendo tours y degustaciones de sake tradicional japonés.",
            "maps": "https://maps.app.goo.gl/CJBVV9BEe2gsyMeV7"
        },
        {
            "name": "Nanzen-ji",
            "japanese_name": "南禅寺",
            "services": ["temple", "natural"],
            "distance": "low",
            "description": "Nanzen-ji es un importante templo zen con impresionantes jardines, un acueducto de ladrillo rojo y una puerta de entrada monumental.",
            "maps": "https://maps.app.goo.gl/6EVCrtYpfchdYkXX9"
        },
        {
            "name": "Shugakuin Imperial Villa",
            "japanese_name": "修学院離宮",
            "services": ["natural", "leisure"],
            "distance": "high",
            "description": "La Villa Imperial Shugakuin es una villa de retiro con magníficos jardines paisajísticos y vistas impresionantes, accesible solo con una visita guiada.",
            "maps": "https://maps.app.goo.gl/tjbEFpWWtHUBEkbf7"
        },
        {
            "name": "Pontocho",
            "japanese_name": "先斗町",
            "services": ["food", "leisure"],
            "distance": "low",
            "description": "Pontocho es un estrecho callejón a lo largo del río Kamogawa, conocido por sus tradicionales casas de té y restaurantes.",
            "maps": "https://maps.app.goo.gl/XnGH5sFmfJZyaAUz6"
        }
    ]
};


function instanceTokioElements() {
    const popularContainer = document.getElementById('popular');
    const notPopularContainer = document.getElementById('not-popular');

    if (!popularContainer || !notPopularContainer) {
        console.error("Containers 'popular' or 'not-popular' not found.");
        return;
    }

    function createDivElement(site) {
        const div = document.createElement('div');
        div.className = 'point';
        div.setAttribute('type', 'all,' + site.services);

        const backgroundDiv = document.createElement('div');
        backgroundDiv.className = 'background';
        backgroundDiv.style.backgroundImage = `url(./img/${site.name.replace(/\s+/g, '')}.jpg)`;
        div.appendChild(backgroundDiv);

        const distanceDiv = document.createElement('div');
        distanceDiv.className = 'distance '+site.distance;

        backgroundDiv.appendChild(distanceDiv);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        const titlesDiv = document.createElement('div');
        titlesDiv.className = 'titles';

        const titleP = document.createElement('p');
        titleP.className = 'title';
        titleP.textContent = site.name;
        titlesDiv.appendChild(titleP);

        const subtitleP = document.createElement('p');
        subtitleP.className = 'subtitle';
        subtitleP.textContent = site.japanese_name;
        titlesDiv.appendChild(subtitleP);

        contentDiv.appendChild(titlesDiv);

        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';

        const servicesDiv = document.createElement('div');
        servicesDiv.className = 'services';

        site.services.forEach(service => {
            const img = document.createElement('img');
            img.src = `./img/${service}Icone.png`;
            img.loading = 'lazy';
            servicesDiv.appendChild(img);
        });

        infoDiv.appendChild(servicesDiv);

        const arriveDiv = document.createElement('a');
        arriveDiv.target = '_blank'
        arriveDiv.href = site.maps;
        arriveDiv.className = 'arrive';

        const arriveP = document.createElement('p');
        arriveP.textContent = 'Como llegar';
        arriveDiv.appendChild(arriveP);

        const arriveImg = document.createElement('img');
        arriveImg.src = './img/go.png';
        arriveImg.loading = "lazy";
        arriveDiv.appendChild(arriveImg);

        infoDiv.appendChild(arriveDiv);

        contentDiv.appendChild(infoDiv);

        div.appendChild(contentDiv);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description';

        const descriptionText = document.createElement('p');
        descriptionText.textContent = site.description;

        descriptionDiv.appendChild(descriptionText);

        div.appendChild(descriptionDiv);

        div.addEventListener('click', () => {

            div.classList.toggle('active');
        });

        arriveDiv.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        return div;
    }

    locations.popularSites.forEach(site => {
        popularContainer.appendChild(createDivElement(site));
    });

    locations.notPopularSites.forEach(site => {
        notPopularContainer.appendChild(createDivElement(site));
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    instanceTokioElements();

    const allFilter = document.getElementById('all-filter');
    const cafeFilter = document.getElementById('cafe-filter');
    const foodFilter = document.getElementById('food-filter');
    const shopFilter = document.getElementById('shop-filter');
    const templeFilter = document.getElementById('temple-filter');
    const restaurantFilter = document.getElementById('restaurant-filter');
    const naturalFilter = document.getElementById('natural-filter');
    const leisureFilter = document.getElementById('leisure-filter');
    const waterFilter = document.getElementById('water-filter');
    const gachaFilter = document.getElementById('gacha-filter');
    const animeFilter = document.getElementById('anime-filter');
    const nightFilter = document.getElementById('night-filter');

    function handleFilterClick(event) {
        const filterType = this.id.replace(/-filter$/, '');

        const pointsOfInterest = document.querySelectorAll('.interes-point .point');

        pointsOfInterest.forEach(point => {
            const types = point.getAttribute('type').split(',');
            if (types.includes(filterType)) {
                point.classList.remove('hiden'); // Mostrar el punto si incluye el tipo de filtro
            } else {
                point.classList.add('hiden'); // Ocultar el punto si no incluye el tipo de filtro
            }
        });
    }

    allFilter.addEventListener('click', handleFilterClick);
    cafeFilter.addEventListener('click', handleFilterClick);
    foodFilter.addEventListener('click', handleFilterClick);
    shopFilter.addEventListener('click', handleFilterClick);
    templeFilter.addEventListener('click', handleFilterClick);
    restaurantFilter.addEventListener('click', handleFilterClick);
    naturalFilter.addEventListener('click', handleFilterClick);
    leisureFilter.addEventListener('click', handleFilterClick);
    waterFilter.addEventListener('click', handleFilterClick);
    gachaFilter.addEventListener('click', handleFilterClick);
    animeFilter.addEventListener('click', handleFilterClick);
    nightFilter.addEventListener('click', handleFilterClick);
});

