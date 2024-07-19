const locations = {
    "popularSites": [
        {
            "id": "0",
            "name": "Osaka Castle",
            "japanese_name": "大阪城",
            "services": ["temple", "natural"],
            "type": "important",
            "distance": "low",
            "description": "El Castillo de Osaka es uno de los castillos más famosos de Japón, conocido por su imponente estructura y sus hermosos jardines.",
            "maps": "https://maps.app.goo.gl/A3FtBidihsjRNzyU7",
            "coords": { "lat": 34.6873, "lng": 135.5262 }
        },
        {
            "id": "1",
            "name": "Dotonbori",
            "japanese_name": "道頓堀",
            "services": ["food", "shop", "leisure"],
            "type": "important",
            "distance": "low",
            "description": "Dotonbori es una calle vibrante famosa por su vida nocturna, restaurantes y teatros. Es conocido por sus luces de neón y el famoso cartel del corredor de Glico.",
            "maps": "https://maps.app.goo.gl/wgRgtD9ekjBZfWW37",
            "coords": { "lat": 34.6687, "lng": 135.5019 }
        },
        {
            "id": "2",
            "name": "Shinsaibashi",
            "japanese_name": "心斎橋",
            "services": ["shop", "food"],
            "type": "important",
            "distance": "low",
            "description": "Shinsaibashi es una popular área comercial en Osaka, conocida por sus tiendas de moda, boutiques y grandes almacenes.",
            "maps": "https://maps.app.goo.gl/sa1PYbrpvtcRLhbV9",
            "coords": { "lat": 34.674, "lng": 135.5011 }
        },
        {
            "id": "4",
            "name": "Umeda Sky Building",
            "japanese_name": "梅田スカイビル",
            "services": ["leisure"],
            "type": "important",
            "distance": "low",
            "description": "El Umeda Sky Building es un rascacielos emblemático de Osaka, conocido por su observatorio al aire libre que ofrece vistas panorámicas de la ciudad.",
            "maps": "https://maps.app.goo.gl/rJhdh2fewCRGCrHr6",
            "coords": { "lat": 34.7056, "lng": 135.4894 }
        },
        {
            "id": "5",
            "name": "Kuromon Ichiba Market",
            "japanese_name": "黒門市場",
            "services": ["food", "shop"],
            "type": "important",
            "distance": "low",
            "description": "El Mercado Kuromon Ichiba es un mercado tradicional conocido por sus productos frescos, especialmente mariscos, frutas y verduras. Es un paraíso para los amantes de la comida.",
            "maps": "https://maps.app.goo.gl/kTLjj33ZonitHm556",
            "coords": { "lat": 34.6682, "lng": 135.5065 }
        },
        {
            "id": "6",
            "name": "America-Mura",
            "japanese_name": "アメリカ村",
            "services": ["shop", "leisure", "food"],
            "type": "important",
            "distance": "low",
            "description": "America-Mura, o American Village, es un área vibrante en Osaka conocida por su influencia occidental, con numerosas tiendas de ropa, cafés y vida nocturna animada.",
            "maps": "https://maps.app.goo.gl/HpGkSNtuRTiGqQT86",
            "coords": { "lat": 34.6688, "lng": 135.4948 }
        },
        {
            "id": "7",
            "name": "Tsutenkaku",
            "japanese_name": "通天閣",
            "services": ["leisure"],
            "type": "important",
            "distance": "medium",
            "description": "Tsutenkaku es una torre de observación en el distrito de Shinsekai, famosa por sus vistas panorámicas de Osaka y su ambiente retro.",
            "maps": "https://maps.app.goo.gl/Tp5SJq5hWBTcrPjp7",
            "coords": { "lat": 34.6526, "lng": 135.5062 }
        },
        {
            "id": "8",
            "name": "Sumiyoshi Taisha",
            "japanese_name": "住吉大社",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "high",
            "description": "Sumiyoshi Taisha es uno de los santuarios sintoístas más antiguos de Japón, conocido por su arquitectura única y su hermoso entorno natural.",
            "maps": "https://maps.app.goo.gl/j2dhKr3k5C2hLT8LA",
            "coords": { "lat": 34.6122, "lng": 135.4944 }
        },
        {
            "id": "9",
            "name": "Hozenji Yokocho",
            "japanese_name": "法善寺横丁",
            "services": ["food", "shop", "leisure"],
            "type": "important",
            "distance": "low",
            "description": "Hozenji Yokocho es un pintoresco callejón empedrado cerca de Dotonbori, famoso por sus pequeños restaurantes y el santuario Hozenji.",
            "maps": "https://maps.app.goo.gl/Z5tpXvuedmXepqAb9",
            "coords": { "lat": 34.6684, "lng": 135.5044 }
        },
        {
            "id": "10",
            "name": "Shitennoji Temple",
            "japanese_name": "四天王寺",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "medium",
            "description": "El Templo Shitennoji es uno de los templos budistas más antiguos de Japón, conocido por su arquitectura histórica y sus tranquilos jardines.",
            "maps": "https://maps.app.goo.gl/nzaCMS48L5vAgyuS6",
            "coords": { "lat": 34.6545, "lng": 135.5168 }
        },
        {
            "id": "11",
            "name": "Osaka Tenmangu Shrine",
            "japanese_name": "大阪天満宮",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "low",
            "description": "El Santuario Osaka Tenmangu es un importante santuario sintoísta dedicado a Sugawara no Michizane, conocido por su festival Tenjin Matsuri, uno de los más grandes de Japón.",
            "maps": "https://maps.app.goo.gl/BLVJDDoE2Pp7HT5eA",
            "coords": { "lat": 34.7035, "lng": 135.5104 }
        },
        {
            "id": "12",
            "name": "Tombori River Cruise",
            "japanese_name": "とんぼりリバークルーズ",
            "services": ["leisure"],
            "type": "leisure",
            "distance": "low",
            "description": "El Tombori River Cruise ofrece un paseo en barco por el canal Dotonbori, proporcionando vistas únicas de los famosos letreros de neón y la animada vida nocturna de Osaka.",
            "maps": "https://maps.app.goo.gl/kJnB3QyoLSvmHzhu7",
            "coords": { "lat": 34.6688, "lng": 135.5031 }
        },
    ],
    "notPopularSites": [
        {
            "id": "13",
            "name": "Minoo Park",
            "japanese_name": "箕面公園",
            "services": ["natural"],
            "type": "natural",
            "distance": "high",
            "description": "El Parque Minoo es un hermoso parque natural en las afueras de Osaka, conocido por su cascada de Minoo y sus pintorescos senderos de hiking.",
            "maps": "https://maps.app.goo.gl/qhKLZZii4oVobiyb6",
            "coords": { "lat": 34.8374, "lng": 135.4707 }
        },
        {
            "id": "14",
            "name": "Nakazakicho",
            "japanese_name": "中崎町",
            "services": ["food", "shop", "leisure"],
            "type": "leisure",
            "distance": "low",
            "description": "Nakazakicho es un barrio retro en Osaka conocido por sus pequeñas tiendas, cafeterías y casas tradicionales, ofreciendo una atmósfera nostálgica y artística.",
            "maps": "https://maps.app.goo.gl/rqVNkP2QHeFfrVgJ7",
            "coords": { "lat": 34.7055, "lng": 135.5078 }
        },
        {
            "id": "15",
            "name": "Universal Studios Japan",
            "japanese_name": "ユニバーサル・スタジオ・ジャパン",
            "services": ["leisure"],
            "type": "leisure",
            "distance": "medium",
            "description": "Universal Studios Japan es un parque temático que ofrece atracciones basadas en películas famosas, espectáculos en vivo y entretenimiento para toda la familia.",
            "maps": "https://maps.app.goo.gl/bX5LkY9CsYA3AGEK6",
            "coords": { "lat": 34.6654, "lng": 135.4323 }
        },
        {
            "id": "16",
            "name": "Namba Parks",
            "japanese_name": "なんばパークス",
            "services": ["shop", "leisure"],
            "type": "leisure",
            "distance": "medium",
            "description": "Namba Parks es un centro comercial y complejo de entretenimiento con una arquitectura única y un jardín en la azotea, ofreciendo una experiencia de compras y ocio inigualable.",
            "maps": "https://maps.app.goo.gl/GFMu41S4TdUbnTc38",
            "coords": { "lat": 34.6621, "lng": 135.4993 }
        },
        {
            "id": "17",
            "name": "Osaka Aquarium Kaiyukan",
            "japanese_name": "海遊館",
            "services": ["leisure", "natural"],
            "type": "leisure",
            "distance": "medium",
            "description": "El Acuario Kaiyukan de Osaka es uno de los acuarios más grandes del mundo, hogar de una amplia variedad de vida marina y conocido por su tanque central masivo.",
            "maps": "https://maps.app.goo.gl/uve2FvSkJhR1D38u7",
            "coords": { "lat": 34.6545, "lng": 135.4284 }
        },
        {
            "id": "18",
            "name": "Hankyu Umeda Main Store",
            "japanese_name": "阪急うめだ本店",
            "services": ["shop"],
            "type": "shop",
            "distance": "low",
            "description": "La tienda principal de Hankyu Umeda es un lujoso gran almacén en el distrito de Umeda, ofreciendo una amplia gama de productos de alta calidad y marcas exclusivas.",
            "maps": "https://maps.app.goo.gl/jL3W1PhBLkfzGrwB7",
            "coords": { "lat": 34.7025, "lng": 135.4968 }
        },
        {
            "id": "19",
            "name": "Tennoji Park",
            "japanese_name": "天王寺公園",
            "services": ["natural", "leisure"],
            "type": "natural",
            "distance": "medium",
            "description": "Tennoji Park es un extenso parque en Osaka que alberga el zoológico de Tennoji, el Museo de Bellas Artes de Osaka y hermosos jardines japoneses.",
            "maps": "https://maps.app.goo.gl/9DjyVWsr2CukZvKE8",
            "coords": { "lat": 34.6525, "lng": 135.5102 }
        },
        {
            "id": "20",
            "name": "Nakanoshima Park",
            "japanese_name": "中之島公園",
            "services": ["natural", "leisure"],
            "type": "natural",
            "distance": "low",
            "description": "Nakanoshima Park es un hermoso parque ubicado en una isla entre los ríos Dojima y Tosabori, ofreciendo jardines paisajísticos, espacios verdes y vistas pintorescas.",
            "maps": "https://maps.app.goo.gl/uMZ9aZogHfccs1uA8",
            "coords": { "lat": 34.6917, "lng": 135.5063 }
        },
        {
            "id": "21",
            "name": "Spa World",
            "japanese_name": "スパワールド",
            "services": ["leisure", "water"],
            "type": "water",
            "distance": "medium",
            "description": "Spa World es un complejo de baños termales en Osaka que ofrece una variedad de baños temáticos de diferentes países, junto con piscinas y otras instalaciones recreativas.",
            "maps": "https://maps.app.goo.gl/jWgATktW86QJtviJA",
            "coords": { "lat": 34.6527, "lng": 135.5047 }
        },
        {
            "id": "22",
            "name": "Osaka Museum of History",
            "japanese_name": "大阪歴史博物館",
            "services": ["leisure"],
            "type": "leisure",
            "distance": "low",
            "description": "El Museo de Historia de Osaka ofrece una visión fascinante de la historia de la ciudad desde tiempos antiguos hasta la era moderna, con exhibiciones interactivas y panorámicas vistas del Castillo de Osaka.",
            "maps": "https://maps.app.goo.gl/MqzE7YWHQG2VMqrx5",
            "coords": { "lat": 34.6819, "lng": 135.5201 }
        },
        {
            "id": "23",
            "name": "Horie",
            "japanese_name": "堀江",
            "services": ["shop", "food", "leisure"],
            "type": "shop",
            "distance": "low",
            "description": "Horie es un barrio moderno y elegante conocido por sus tiendas de moda, boutiques, cafeterías y restaurantes de alta gama, atrayendo a los jóvenes y fashionistas.",
            "maps": "https://maps.app.goo.gl/vGx3sefjMYdJFkdBA",
            "coords": { "lat": 34.6702, "lng": 135.4935 }
        },
        {
            "id": "24",
            "name": "Sennichimae Doguyasuji Shopping Street",
            "japanese_name": "千日前道具屋筋商店街",
            "services": ["shop", "food"],
            "type": "shop",
            "distance": "medium",
            "description": "Sennichimae Doguyasuji es una calle comercial especializada en utensilios de cocina, donde los chefs y entusiastas de la cocina pueden encontrar todo tipo de herramientas y equipos.",
            "maps": "https://maps.app.goo.gl/7bvqhuQdKUXn3yrr6",
            "coords": { "lat": 34.6667, "lng": 135.5037 }
        },
    ],
    "food": [
        {
            "id": "25",
            "name": "Ichiran Ramen",
            "japanese_name": "一蘭",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Ichiran Ramen es famoso por su tonkotsu ramen. Ofrecen una experiencia única donde puedes disfrutar de tu ramen en cubículos individuales.",
            "maps": "https://maps.app.goo.gl/vjw9F5i4SeigHPHG6",
            "coords": { "lat": 34.6692, "lng": 135.5011 }
        },
        {
            "id": "26",
            "name": "Mizuno",
            "japanese_name": "美津の",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Mizuno es un restaurante popular especializado en okonomiyaki, una especie de tortilla japonesa con una variedad de ingredientes.",
            "maps": "https://maps.app.goo.gl/5oBXpxtedWK2pbv66",
            "coords": { "lat": 34.6685, "lng": 135.5014 }
        },
        {
            "id": "27",
            "name": "Dotonbori Imai",
            "japanese_name": "道頓堀 今井",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Dotonbori Imai es conocido por su delicioso udon y ambiente tradicional. Está ubicado en el corazón de Dotonbori.",
            "maps": "https://maps.app.goo.gl/g3K6bP3bvdpWtoEd6",
            "coords": { "lat": 34.6686, "lng": 135.5024 }
        },
        {
            "id": "28",
            "name": "Yakiniku M Dotonbori",
            "japanese_name": "焼肉エム 道頓堀",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Yakiniku M Dotonbori ofrece carne wagyu de alta calidad en un ambiente moderno y acogedor, perfecto para los amantes del yakiniku.",
            "maps": "https://maps.app.goo.gl/vB7fKc7L3NDFXiEd8",
            "coords": { "lat": 34.6683, "lng": 135.5018 }
        },
        {
            "id": "29",
            "name": "Harukoma Sushi",
            "japanese_name": "春駒",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "low",
            "description": "Harukoma Sushi es conocido por su sushi fresco y asequible. Es un lugar popular entre los locales y turistas.",
            "maps": "https://maps.app.goo.gl/uQACxHuPzQEksG8s9",
            "coords": { "lat": 34.7053, "lng": 135.5067 }
        },
        {
            "id": "30",
            "name": "Endo Sushi",
            "japanese_name": "ゑんどう寿司",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "medium",
            "description": "Endo Sushi, ubicado en el mercado de pescado de Osaka, ofrece sushi de alta calidad con ingredientes frescos y deliciosos.",
            "maps": "https://maps.app.goo.gl/mc5hdcfunMZEJVhi6",
            "coords": { "lat": 34.6707, "lng": 135.4391 }
        },
    ],
    "hotel": [
        {
            "id": "31",
            "name": "Osaka Hotel",
            "japanese_name": "ホテル",
            "services": [],
            "type": "hotel",
            "distance": "low",
            "description": "Este es nuestro hotel ubicado en Osaka.",
            "maps": "https://maps.app.goo.gl/iT6Xt7SneqEpwJ3p8",
            "coords": { "lat": 34.6901, "lng": 135.5068}
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

