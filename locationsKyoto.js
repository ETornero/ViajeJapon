const locations = {
    "popularSites": [
        {
            "id": "0",
            "name": "Fushimi Inari Taisha",
            "japanese_name": "伏見稲荷大社",
            "services": ["temple", "natural"],
            "type": "important",
            "distance": "low",
            "description": "Fushimi Inari Taisha es famoso por sus miles de torii rojos que forman senderos a través de los bosques de la montaña Inari.",
            "maps": "https://maps.app.goo.gl/v3HzHhLuSRHWPUNH6",
            "coords": {"lat": 34.9671, "lng": 135.7727}
        },
        {
            "id": "1",
            "name": "Kinkaku-ji",
            "japanese_name": "金閣寺",
            "services": ["temple", "natural"],
            "type": "important",
            "distance": "medium",
            "description": "Kinkaku-ji, también conocido como el Pabellón de Oro, es un impresionante templo recubierto de pan de oro, situado en medio de un hermoso jardín.",
            "maps": "https://maps.app.goo.gl/qeicyxSntQzuNQkJ7",
            "coords": {"lat": 35.0394, "lng": 135.7292}
        },
        {
            "id": "2",
            "name": "Gion",
            "japanese_name": "祇園",
            "services": ["leisure", "shop", "food"],
            "type": "important",
            "distance": "low",
            "description": "Gion es el famoso distrito de geishas de Kioto, conocido por sus casas de té, tiendas tradicionales y restaurantes de alta cocina.",
            "maps": "https://maps.app.goo.gl/63x6L6FgtHsHr9p77",
            "coords": {"lat": 35.0037, "lng": 135.7786}
        },
        {
            "id": "3",
            "name": "Arashiyama Bamboo Grove",
            "japanese_name": "嵐山竹林",
            "services": ["natural"],
            "type": "important",
            "distance": "medium",
            "description": "El Bosque de Bambú de Arashiyama es un lugar icónico de Kioto, con senderos rodeados de altos bambús que crean una atmósfera mágica.",
            "maps": "https://maps.app.goo.gl/1zngy4WzeL1HWvD6A",
            "coords": {"lat": 35.0094, "lng": 135.6675}
        },
        {
            "id": "4",
            "name": "Kiyomizu-dera",
            "japanese_name": "清水寺",
            "services": ["temple", "natural"],
            "type": "important",
            "distance": "low",
            "description": "Kiyomizu-dera es un templo budista famoso por su terraza de madera que ofrece vistas panorámicas de la ciudad de Kioto.",
            "maps": "https://maps.app.goo.gl/XiJZ9396XzU9nziv5",
            "coords": {"lat": 34.9949, "lng": 135.7850}
        },
        {
            "id": "5",
            "name": "Nijo Castle",
            "japanese_name": "二条城",
            "services": ["temple", "natural"],
            "type": "important",
            "distance": "low",
            "description": "El Castillo Nijo es un antiguo castillo que sirvió como residencia para los shogunes Tokugawa, conocido por sus jardines y arquitectura histórica.",
            "maps": "https://maps.app.goo.gl/q5o1nh7J88pUBWZ28",
            "coords": {"lat": 35.0142, "lng": 135.7480}
        },
        {
            "id": "6",
            "name": "Ryoan-ji",
            "japanese_name": "龍安寺",
            "services": ["temple", "natural"],
            "type": "important",
            "distance": "medium",
            "description": "Ryoan-ji es famoso por su jardín zen de rocas, uno de los ejemplos más conocidos de karesansui (jardín seco) en Japón.",
            "maps": "https://maps.app.goo.gl/P1yoZshZMWAHGDob7",
            "coords": {"lat": 35.0345, "lng": 135.7181}
        }
    ],
    "notPopularSites": [
        {
            "id": "7",
            "name": "Kyoto Imperial Palace",
            "japanese_name": "京都御所",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "low",
            "description": "El Palacio Imperial de Kioto es la antigua residencia de la familia imperial japonesa, ubicado en un gran parque con jardines paisajísticos.",
            "maps": "https://maps.app.goo.gl/uvTwXx4J3N4FfJrYA",
            "coords": {"lat": 35.0250, "lng": 135.7622}
        },
        {
            "id": "8",
            "name": "Nishiki Market",
            "japanese_name": "錦市場",
            "services": ["shop", "food"],
            "type": "shop",
            "distance": "low",
            "description": "El Mercado Nishiki es un animado mercado cubierto conocido como la cocina de Kioto, donde se venden productos frescos, alimentos preparados y productos locales.",
            "maps": "https://maps.app.goo.gl/ozJXMkcuA3TVrPc47",
            "coords": {"lat": 35.0050, "lng": 135.7645}
        },
        {
            "id": "9",
            "name": "Honen-in",
            "japanese_name": "法然院",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "medium",
            "description": "Honen-in es un templo budista menos conocido, rodeado de un tranquilo jardín y famoso por su atmósfera serena y hermosa puerta de entrada.",
            "maps": "https://maps.app.goo.gl/xQRxhYKqfwojAcEw9",
            "coords": {"lat": 35.0231, "lng": 135.7940}
        },
        {
            "id": "10",
            "name": "Kurama-dera",
            "japanese_name": "鞍馬寺",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "high",
            "description": "Kurama-dera es un templo en la montaña Kurama, accesible a través de una pintoresca ruta de senderismo, conocido por su atmósfera mística.",
            "maps": "https://maps.app.goo.gl/UdtJYA6YjcRjPezq6",
            "coords": {"lat": 35.1344, "lng": 135.7692}
        },
        {
            "id": "11",
            "name": "Otagi Nenbutsu-ji",
            "japanese_name": "愛宕念仏寺",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "high",
            "description": "Otagi Nenbutsu-ji es un pequeño templo conocido por sus cientos de estatuas de rakan (discípulos de Buda) esculpidas por artistas aficionados.",
            "maps": "https://maps.app.goo.gl/83ZyePP3KEgsj6zGA",
            "coords": {"lat": 35.0246, "lng": 135.6434}
        },
        {
            "id": "12",
            "name": "Tofuku-ji",
            "japanese_name": "東福寺",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "medium",
            "description": "Tofuku-ji es un templo zen famoso por sus hermosos jardines, especialmente en otoño cuando los arces se vuelven de un rojo vibrante.",
            "maps": "",
            "coords": {"lat": 34.9818, "lng": 135.7680}
        },
        {
            "id": "13",
            "name": "Shosei-en Garden",
            "japanese_name": "渉成園",
            "services": ["natural"],
            "type": "natural",
            "distance": "low",
            "description": "El Jardín Shosei-en es un tranquilo jardín paisajístico cerca de la estación de Kioto, conocido por sus estanques, puentes y hermosas vistas.",
            "maps": "https://maps.app.goo.gl/XG9x7R2cWAhAxGvq5",
            "coords": {"lat": 34.9899, "lng": 135.7585}
        },
        {
            "id": "14",
            "name": "Kifune Shrine",
            "japanese_name": "貴船神社",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "high",
            "description": "El Santuario Kifune, ubicado en un valle arbolado, es famoso por sus lámparas de piedra y la tradición de flotación de papel para adivinar.",
            "maps": "https://maps.app.goo.gl/Uh5Uq3HFXmv25iCX9",
            "coords": {"lat": 35.1336, "lng": 135.7623}
        },
        {
            "id": "15",
            "name": "Hirano Shrine",
            "japanese_name": "平野神社",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "medium",
            "description": "El Santuario Hirano es conocido por sus cerezos en flor, atrayendo a muchos visitantes durante la temporada de sakura.",
            "maps": "https://maps.app.goo.gl/aDYgmjr8cpVbJ8jE8",
            "coords": {"lat": 35.0288, "lng": 135.7388}
        },
        {
            "id": "16",
            "name": "Kyoto Botanical Gardens",
            "japanese_name": "京都府立植物園",
            "services": ["natural"],
            "type": "natural",
            "distance": "medium",
            "description": "El Jardín Botánico de Kioto es el jardín botánico más antiguo de Japón, hogar de una vasta colección de plantas y flores.",
            "maps": "https://maps.app.goo.gl/VcSuCEbUpDPMUaLw9",
            "coords": {"lat": 35.0369, "lng": 135.7578}
        },
        {
            "id": "17",
            "name": "Yasaka Shrine",
            "japanese_name": "八坂神社",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "low",
            "description": "El Santuario Yasaka es un importante santuario sintoísta en Gion, conocido por el festival Gion Matsuri y su hermosa arquitectura.",
            "maps": "https://maps.app.goo.gl/uAqYfCYHNRSbb1eCA",
            "coords": {"lat": 35.0036, "lng": 135.7781}
        },
        {
            "id": "18",
            "name": "Fushimi Sake District",
            "japanese_name": "伏見酒蔵",
            "services": ["food", "leisure"],
            "type": "leisure",
            "distance": "medium",
            "description": "El Distrito de Sake de Fushimi es famoso por sus numerosas cervecerías de sake, ofreciendo tours y degustaciones de sake tradicional japonés.",
            "maps": "https://maps.app.goo.gl/CJBVV9BEe2gsyMeV7",
            "coords": {"lat": 34.9360, "lng": 135.7543}
        },
        {
            "id": "19",
            "name": "Nanzen-ji",
            "japanese_name": "南禅寺",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "low",
            "description": "Nanzen-ji es un importante templo zen con impresionantes jardines, un acueducto de ladrillo rojo y una puerta de entrada monumental.",
            "maps": "https://maps.app.goo.gl/6EVCrtYpfchdYkXX9",
            "coords": {"lat": 35.0116, "lng": 135.7980}
        },
        {
            "id": "20",
            "name": "Shugakuin Imperial Villa",
            "japanese_name": "修学院離宮",
            "services": ["natural", "leisure"],
            "type": "natural",
            "distance": "high",
            "description": "La Villa Imperial Shugakuin es una villa de retiro con magníficos jardines paisajísticos y vistas impresionantes, accesible solo con una visita guiada.",
            "maps": "https://maps.app.goo.gl/tjbEFpWWtHUBEkbf7",
            "coords": {"lat": 35.0515, "lng": 135.7943}
        },
        {
            "id": "21",
            "name": "Pontocho",
            "japanese_name": "先斗町",
            "services": ["food", "leisure"],
            "type": "leisure",
            "distance": "low",
            "description": "Pontocho es un estrecho callejón a lo largo del río Kamogawa, conocido por sus tradicionales casas de té y restaurantes.",
            "maps": "https://maps.app.goo.gl/XnGH5sFmfJZyaAUz6",
            "coords": {"lat": 35.0054, "lng": 135.7681}
        },
        {
            "id": "22",
            "name": "Suntory Yamazaki Distillery",
            "japanese_name": "サントリー 山崎蒸溜所",
            "services": ["night", "leisure"],
            "type": "leisure",
            "distance": "high",
            "description": "La Suntory Yamazaki Distillery es la primera destilería de whisky de malta de Japón.",
            "maps": "https://maps.app.goo.gl/N2bQPhgVMQhu47729",
            "coords": {"lat": 34.8928, "lng": 135.6744}
        }
    ],
    "food": [
        {
            "id": "23",
            "name": "Kikunoi Honten",
            "japanese_name": "菊乃井 本店",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Kikunoi Honten es un restaurante kaiseki de alta gama que ofrece cocina tradicional japonesa elaborada con ingredientes frescos y de temporada.",
            "maps": "https://maps.app.goo.gl/LkjGWTmZR1fLFRdw5",
            "coords": {"lat": 35.0023, "lng": 135.7777}
        },
        {
            "id": "24",
            "name": "Nishiki Warai",
            "japanese_name": "錦笑い",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Nishiki Warai es un restaurante famoso por su okonomiyaki, una especie de panqueque japonés relleno de diversos ingredientes.",
            "maps": "https://maps.app.goo.gl/hUMfYxxgGu7N2AxZ7",
            "coords": {"lat": 35.0043, "lng": 135.7643}
        },
        {
            "id": "25",
            "name": "Giro Giro Hitoshina",
            "japanese_name": "ぎろぎろ ひとしな",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Giro Giro Hitoshina ofrece una versión moderna del kaiseki, combinando técnicas tradicionales con un enfoque contemporáneo.",
            "maps": "https://maps.app.goo.gl/Fiyvid4AtczeV4pr8",
            "coords": {"lat": 35.0038, "lng": 135.7632}
        },
        {
            "id": "26",
            "name": "Sushi Iwa",
            "japanese_name": "鮨岩",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Sushi Iwa es un restaurante de sushi de alta calidad que ofrece pescados y mariscos frescos en un ambiente elegante.",
            "maps": "https://maps.app.goo.gl/AVrobLVehVfvB1Le9",
            "coords": {"lat": 35.0020, "lng": 135.7674}
        },
        {
            "id": "27",
            "name": "Hyotei",
            "japanese_name": "瓢亭",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "medium",
            "description": "Hyotei es un restaurante kaiseki con una historia de más de 400 años, conocido por su atención al detalle y su presentación impecable.",
            "maps": "https://maps.app.goo.gl/itnqBUUn1vwtEsrT8",
            "coords": {"lat": 35.0118, "lng": 135.7952}
        },
        {
            "id": "28",
            "name": "Honke Owariya",
            "japanese_name": "本家尾張屋",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Honke Owariya es una tienda de soba histórica que ha estado sirviendo fideos de soba desde el período Edo.",
            "maps": "https://maps.app.goo.gl/X4mDYNUrJqjWjWmx6",
            "coords": {"lat": 35.0110, "lng": 135.7570}
        },
        {
            "id": "29",
            "name": "Kaiseki Mizuki",
            "japanese_name": "懐石 水暉",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Kaiseki Mizuki ofrece una experiencia gastronómica de lujo con vistas espectaculares del jardín japonés del Ritz-Carlton Kyoto.",
            "maps": "https://maps.app.goo.gl/BFLHi1k1MqAiCqp9A",
            "coords": {"lat": 35.0094, "lng": 135.7702}
        },
        {
            "id": "30",
            "name": "Omen",
            "japanese_name": "おめん",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Omen es conocido por sus deliciosos fideos udon servidos con una variedad de guarniciones frescas y sabrosas.",
            "maps": "https://maps.app.goo.gl/nLaMdrsdExjT8Dt4A",
            "coords": {"lat": 35.0111, "lng": 135.7831}
        },
        {
            "id": "31",
            "name": "Gion Kappa",
            "japanese_name": "祇園かっぱ",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Gion Kappa es un restaurante informal de izakaya en el corazón de Gion, conocido por sus tapas japonesas y ambiente acogedor.",
            "maps": "https://maps.app.goo.gl/x14qua7kjqtxEzG48",
            "coords": {"lat": 35.0037, "lng": 135.7786}
        },
        {
            "id": "32",
            "name": "Menbaka Fire Ramen",
            "japanese_name": "麺馬火",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Menbaka Fire Ramen ofrece una experiencia única donde el ramen es encendido en llamas justo frente a los comensales.",
            "maps": "https://maps.app.goo.gl/KbyEBUXFow1hZsjv7",
            "coords": {"lat": 35.0286, "lng": 135.7517}
        }
    ],
    "hotel": [
        {
            "id": "33",
            "name": "Kioto Hotel",
            "japanese_name": "ホテル",
            "services": [],
            "type": "hotel",
            "distance": "low",
            "description": "Este es nuestro hotel ubicado en Kioto.",
            "maps": "https://maps.app.goo.gl/4SECTTeU7qwCNHim9",
            "coords": { "lat": 34.9833, "lng": 135.7577}
        }
    ]
};

function instanceLocationElements() {
    const popularContainer = document.getElementById('popular');
    const notPopularContainer = document.getElementById('not-popular');
    const foodContainer = document.getElementById('food');
    const hotelContainer = document.getElementById('hotel');

    if (!popularContainer || !notPopularContainer) {
        console.error("Containers 'popular' or 'not-popular' not found.");
        return;
    }

    function createDivElement(site) {
        const div = document.createElement('div');
        div.className = 'point';
        div.id = site.id;
        div.setAttribute('type', 'all,' + site.services);

        const backgroundDiv = document.createElement('div');
        backgroundDiv.className = 'background';
        backgroundDiv.style.backgroundImage = `url(./img/${site.name.replace(/\s+/g, '')}.jpg)`;
        div.appendChild(backgroundDiv);

        const distanceDiv = document.createElement('div');
        distanceDiv.className = 'distance '+site.distance;

        const focusDiv = document.createElement('div');
        focusDiv.className = 'focus-map';
        
        const mapIcone = document.createElement('img');
        mapIcone.src = './img/mapsIcone.png';

        focusDiv.appendChild(mapIcone);

        backgroundDiv.appendChild(distanceDiv); 
        backgroundDiv.appendChild(focusDiv);

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

        focusDiv.addEventListener('click', (event) => {
           
            focusLocation(site.coords.lat, site.coords.lng);
            event.stopPropagation();
        });

        return div;
    }

    locations.popularSites.forEach(site => {
        console.log('entra');
        popularContainer.appendChild(createDivElement(site));
    });

    locations.notPopularSites.forEach(site => {
        notPopularContainer.appendChild(createDivElement(site));
    });

    locations.food.forEach(site => {
        foodContainer.appendChild(createDivElement(site));
    });

    locations.hotel.forEach(site => {
        hotelContainer.appendChild(createDivElement(site));
    });
    
}

document.addEventListener('DOMContentLoaded', (event) => {
    instanceLocationElements();
});

let loadedMap = null;

function addMarkersToMap(map) {

    locations.popularSites.forEach(site => {

        let pointer = {
            url: './img/'+site.type+'Pointer.png',
            scaledSize: new google.maps.Size(48, 48),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 32)
        };

        var ubication = { lat: site.coords.lat, lng: site.coords.lng };
    
        var ubicationMarker = new google.maps.Marker({
            position: ubication,
            map: map,
            title: site.name,
            icon: pointer,
            siteType: site.type
        });

        ubicationMarker.addListener('click', function() {

            var element = document.getElementById(site.id);

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center', 
                inline: 'center'
            });

            if(document.querySelector('.focus') != null) document.querySelector('.focus').classList.remove('focus');
            element.classList.add('focus');
        });
    });
    

    locations.notPopularSites.forEach(site => {

        let pointer = {
            url: './img/'+site.type+'Pointer.png',
            scaledSize: new google.maps.Size(48, 48),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 32)
        };

        var ubication = { lat: site.coords.lat, lng: site.coords.lng };
    
        var ubicationMarker = new google.maps.Marker({
            position: ubication,
            map: map,
            title: site.name,
            icon: pointer,
            siteType: site.type
        });

        ubicationMarker.addListener('click', function() {

            var element = document.getElementById(site.id);

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Ajusta 'block' según dónde quieres que aparezca el elemento
                inline: 'center' // Ajusta 'inline' según dónde quieres que aparezca el elemento
            });
            
            if(document.querySelector('.focus') != null) document.querySelector('.focus').classList.remove('focus');
            element.classList.add('focus');
        });
    });

    locations.food.forEach(site => {

        let pointer = {
            url: './img/'+site.type+'Pointer.png',
            scaledSize: new google.maps.Size(48, 48),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 32)
        };

        var ubication = { lat: site.coords.lat, lng: site.coords.lng };
    
        var ubicationMarker = new google.maps.Marker({
            position: ubication,
            map: map,
            title: site.name,
            icon: pointer,
            siteType: site.type
        });

        ubicationMarker.addListener('click', function() {

            var element = document.getElementById(site.id);

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Ajusta 'block' según dónde quieres que aparezca el elemento
                inline: 'center' // Ajusta 'inline' según dónde quieres que aparezca el elemento
            });
            
            if(document.querySelector('.focus') != null) document.querySelector('.focus').classList.remove('focus');
            element.classList.add('focus');
        });
    });

    locations.hotel.forEach(site => {

        let pointer = {
            url: './img/'+site.type+'Pointer.png',
            scaledSize: new google.maps.Size(48, 48),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 32)
        };

        var ubication = { lat: site.coords.lat, lng: site.coords.lng };
    
        var ubicationMarker = new google.maps.Marker({
            position: ubication,
            map: map,
            title: site.name,
            icon: pointer,
            siteType: site.type
        });

        ubicationMarker.addListener('click', function() {

            var element = document.getElementById(site.id);

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Ajusta 'block' según dónde quieres que aparezca el elemento
                inline: 'center' // Ajusta 'inline' según dónde quieres que aparezca el elemento
            });
            
            if(document.querySelector('.focus') != null) document.querySelector('.focus').classList.remove('focus');
            element.classList.add('focus');
        });
    });

    loadedMap = map;
}

function focusLocation(focusLat, focusLng) {

    var mapElement = document.getElementById('map');

    mapElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center', 
        inline: 'center'
    });

    var pos = {
        lat: focusLat,
        lng: focusLng
    };

    loadedMap.setZoom(17);
    loadedMap.setCenter(pos);
}