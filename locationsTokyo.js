const locations = {
    "popularSites": [
        {
            "id": "0",
            "name": "Templo Senso-ji",
            "japanese_name": "浅草寺",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "high",
            "description": "El Templo Senso-ji es un antiguo templo budista situado en Asakusa, es el templo más antiguo de Tokio y uno de los más significativos.",
            "maps": "https://maps.app.goo.gl/PsCftuVGeyQqgD11A",
            "coords": { "lat": 35.7146, "lng": 139.7965 }
        },
        {
            "id": "1",
            "name": "Torre de Tokio",
            "japanese_name": "東京タワー",
            "services": ["shop", "food", "leisure"],
            "type": "important",
            "distance": "low",
            "description": "La Torre de Tokio es una torre de comunicación y observación situada en el distrito de Shiba-Koen, Minato. Es uno de los símbolos más emblemáticos de Tokio.",
            "maps": "https://maps.app.goo.gl/e1cxzeMX9AnWVfep9",
            "coords": { "lat": 35.6586, "lng": 139.7454 }
        },
        {
            "id": "2",
            "name": "Shibuya Crossing",
            "japanese_name": "渋谷スクランブル交差点",
            "services": ["shop", "food", "leisure"],
            "type": "important",
            "distance": "medium",
            "description": "El Shibuya Crossing es uno de los cruces peatonales más transitados del mundo, famoso por su señalización y su frenética actividad.",
            "maps": "https://maps.app.goo.gl/G6cWhxJR85Lf7yJbA",
            "coords": { "lat": 35.6614, "lng": 139.7041 }
        },
        {
            "id": "3",
            "name": "Santuario Meiji",
            "japanese_name": "明治神宮",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "medium",
            "description": "El Santuario Meiji es un santuario sintoísta dedicado a los espíritus deificados del Emperador Meiji y su consorte, la Emperatriz Shoken.",
            "maps": "https://maps.app.goo.gl/LjbSYQh7a2DmSdhi7",
            "coords": { "lat": 35.6764, "lng": 139.6993 }
        },
        {
            "id": "4",
            "name": "Palacio Imperial",
            "japanese_name": "皇居",
            "services": ["temple", "natural"],
            "type": "temple",
            "distance": "low",
            "description": "El Palacio Imperial es la residencia principal del Emperador de Japón, situada en un gran parque en el centro de Tokio, cerca de la estación de Tokio.",
            "maps": "https://maps.app.goo.gl/q55hW8Hw6BfBhEQ9A",
            "coords": { "lat": 35.6852, "lng": 139.7528 }
        },
        {
            "id": "5",
            "name": "Akihabara",
            "japanese_name": "秋葉原",
            "services": ["shop", "anime", "gacha"],
            "type": "shop",
            "distance": "medium",
            "description": "Akihabara es famoso por ser el centro de la cultura otaku y electrónica en Tokio. Aquí puedes encontrar tiendas de anime, manga, electrónicos y cafés temáticos.",
            "maps": "https://maps.app.goo.gl/Ayh5EshEZ93GVu6LA",
            "coords": { "lat": 35.6997, "lng": 139.771 }
        },
        {
            "id": "6",
            "name": "Harajuku",
            "japanese_name": "原宿",
            "services": ["shop", "cafe"],
            "type": "shop",
            "distance": "medium",
            "description": "Harajuku es conocido por su moda callejera única y colorida. Además de tiendas de moda, encontrarás cafés temáticos y tiendas kawaii.",
            "maps": "https://maps.app.goo.gl/SA734sdVdHfWvPpw5",
            "coords": { "lat": 35.6718, "lng": 139.7035 }
        },
        {
            "id": "7",
            "name": "Tsukiji Fish Market",
            "japanese_name": "築地市場",
            "services": ["food"],
            "type": "food",
            "distance": "medium",
            "description": "El Mercado de Pescado de Tsukiji es famoso por su fresco sushi y mariscos. Un lugar imperdible para los amantes de la comida japonesa.",
            "maps": "https://maps.app.goo.gl/LCpyWxXrbKofJKsa8",
            "coords": { "lat": 35.6666, "lng": 139.7707 }
        },
        {
            "id": "8",
            "name": "Robot Restaurant",
            "japanese_name": "ロボットレストラン",
            "services": ["food", "leisure", "restaurant"],
            "type": "restaurant",
            "distance": "medium",
            "description": "El Robot Restaurant en Shinjuku ofrece una experiencia única con actuaciones de robots y una cena extravagante.",
            "maps": "https://maps.app.goo.gl/AhkPKCSVNLyjezBF9",
            "coords": { "lat": 35.6944, "lng": 139.702 }
        },
        {
            "id": "9",
            "name": "Odaiba",
            "japanese_name": "お台場",
            "services": ["shop", "food", "leisure"],
            "type": "shop",
            "distance": "high",
            "description": "Odaiba es una isla artificial en la bahía de Tokio, conocida por sus centros comerciales, parques temáticos y vistas panorámicas.",
            "maps": "https://maps.app.goo.gl/yYSEKAwpXc9UXJFm9",
            "coords": { "lat": 35.619, "lng": 139.7798 }
        },
        {
            "id": "10",
            "name": "Ichiran Ramen",
            "japanese_name": "一蘭",
            "services": ["food", "restaurant"],
            "type": "food",
            "distance": "medium",
            "description": "Ichiran Ramen es conocido por su ramen tonkotsu con fideos finos y sabor intenso. Ofrecen una experiencia única donde puedes disfrutar de tu ramen en cubículos individuales.",
            "maps": "https://maps.app.goo.gl/HCT3MMZAvtABUdpX6",
            "coords": { "lat": 35.6912, "lng": 139.7022 }
        },
        {
            "id": "11",
            "name": "Sushi Dai",
            "japanese_name": "寿司大",
            "services": ["food", "restaurant"],
            "type": "food",
            "distance": "medium",
            "description": "Sushi Dai es famoso por su sushi fresco y de alta calidad en el Mercado de Pescado de Tsukiji. Es conocido por sus largas colas, pero vale la pena la espera.",
            "maps": "https://maps.app.goo.gl/ibtzpYJWkwon14QE6",
            "coords": { "lat": 35.6655, "lng": 139.7706 }
        },
        {
            "id": "12",
            "name": "Escaleras de Your Name",
            "japanese_name": "君の名はの階段",
            "services": ["leisure"],
            "type": "important",
            "distance": "medium",
            "description": "Las escaleras de Your Name son un lugar icónico ubicado en Shinjuku, Tokio, famosas por su aparición en la película anime 'Your Name'. Son visitadas por fans de todo el mundo.",
            "maps": "https://maps.app.goo.gl/pNmSUneYdyeoSTSq6",
            "coords": { "lat": 35.6926, "lng": 139.7028 }
        }
    ],
    "notPopularSites": [
        {
            "id": "13",
            "name": "Yanaka Ginza",
            "japanese_name": "谷中銀座",
            "services": ["shop", "food", "leisure"],
            "type": "shop",
            "distance": "high",
            "description": "Yanaka Ginza es una encantadora calle comercial en el barrio de Yanaka, conocida por su atmósfera nostálgica y sus tiendas tradicionales.",
            "maps": "https://maps.app.goo.gl/iiVU1hynAbzaWf9TA",
            "coords": { "lat": 35.7284, "lng": 139.7685 }
        },
        {
            "id": "14",
            "name": "Oedo Onsen Monogatari",
            "japanese_name": "大江戸温泉物語",
            "services": ["temple", "water"],
            "type": "water",
            "distance": "medium",
            "description": "Oedo Onsen Monogatari es un complejo de aguas termales temático que recrea el ambiente del periodo Edo, ofreciendo una experiencia única de baños japoneses.",
            "maps": "https://maps.app.goo.gl/DEpw449RgQ8WYk8q9",
            "coords": { "lat": 35.6297, "lng": 139.7756 }
        },
        {
            "id": "15",
            "name": "Todoroki Valley",
            "japanese_name": "等々力渓谷",
            "services": ["natural"],
            "type": "natural",
            "distance": "medium",
            "description": "El Valle de Todoroki es un oasis natural en la ciudad de Tokio, conocido por su sendero junto al río y su tranquilo entorno natural.",
            "maps": "https://maps.app.goo.gl/2YohbraLSnRvH1um9",
            "coords": { "lat": 35.6194, "lng": 139.6469 }
        },
        {
            "id": "16",
            "name": "Nakano Broadway",
            "japanese_name": "中野ブロードウェイ",
            "services": ["shop", "leisure"],
            "type": "leisure",
            "distance": "high",
            "description": "Nakano Broadway es un centro comercial en el distrito de Nakano, famoso por sus tiendas de anime, manga y artículos coleccionables.",
            "maps": "https://maps.app.goo.gl/SBYZAtKESsXVZA646",
            "coords": { "lat": 35.7055, "lng": 139.6651 }
        },
        {
            "id": "17",
            "name": "Koenji",
            "japanese_name": "高円寺",
            "services": ["food", "shop", "leisure"],
            "type": "leisure",
            "distance": "high",
            "description": "Koenji es un barrio conocido por su animada escena musical, tiendas vintage y ambiente bohemio.",
            "maps": "https://maps.app.goo.gl/SzcWTycvNrxXY2cZ6",
            "coords": { "lat": 35.7049, "lng": 139.649 }
        },
        {
            "id": "18",
            "name": "Shimokitazawa",
            "japanese_name": "下北沢",
            "services": ["food", "shop", "leisure"],
            "type": "cafe",
            "distance": "high",
            "description": "Shimokitazawa es un barrio vibrante y artístico, conocido por sus pequeñas tiendas, cafés acogedores y teatros independientes.",
            "maps": "https://maps.app.goo.gl/AaNHfcQ9B1wYh4WMA",
            "coords": { "lat": 35.6627, "lng": 139.6664 }
        },
        {
            "id": "19",
            "name": "Museo Ghibli",
            "japanese_name": "三鷹の森ジブリ美術館",
            "services": ["leisure"],
            "type": "leisure",
            "distance": "medium",
            "description": "El Museo Ghibli es un museo dedicado a las obras del estudio de animación Studio Ghibli, ofreciendo una experiencia mágica y creativa para los visitantes.",
            "maps": "https://maps.app.goo.gl/Xi1u4ZosgR3E1p1Q7",
            "coords": { "lat": 35.6963, "lng": 139.5704 }
        },
        {
            "id": "20",
            "name": "Animate Ikebukuro",
            "japanese_name": "アニメイト池袋",
            "services": ["shop", "anime"],
            "type": "anime",
            "distance": "medium",
            "description": "Animate Ikebukuro es una tienda especializada en anime y manga, con una amplia gama de productos de tus series favoritas, desde figuras hasta mercancía exclusiva.",
            "maps": "https://maps.app.goo.gl/i2hpgugMpZwBq1hf7",
            "coords": { "lat": 35.7295, "lng": 139.7109 }
        },
        {
            "id": "21",
            "name": "Golden Gai",
            "japanese_name": "ゴールデン街",
            "services": ["food", "night"],
            "type": "night",
            "distance": "medium",
            "description": "Golden Gai en Shinjuku es famoso por sus diminutos bares y pubs temáticos, ofreciendo una experiencia única de vida nocturna en Tokio.",
            "maps": "https://maps.app.goo.gl/WqFtcKXUDY33XQSV8",
            "coords": { "lat": 35.6935, "lng": 139.7041 }
        },
        {
            "id": "22",
            "name": "Shin-Okubo Koreatown",
            "japanese_name": "新大久保",
            "services": ["food", "shop"],
            "type": "food",
            "distance": "medium",
            "description": "Shin-Okubo es conocido como Koreatown en Tokio, famoso por sus restaurantes coreanos, tiendas de K-pop y cultura coreana.",
            "maps": "https://maps.app.goo.gl/7HzK2sHGaiQ9hRKk6",
            "coords": { "lat": 35.7015, "lng": 139.7002 }
        },
        {
            "id": "23",
            "name": "Jimbocho Book Town",
            "japanese_name": "神保町",
            "services": ["shop", "anime"],
            "type": "anime",
            "distance": "medium",
            "description": "Jimbocho es el paraíso de los libros en Tokio, con numerosas librerías antiguas y tiendas de libros usados que atraen a los amantes de la lectura y la cultura.",
            "maps": "https://maps.app.goo.gl/ipZ9agf8giWVQggo9",
            "coords": { "lat": 35.6954, "lng": 139.7574 }
        },
        {
            "id": "24",
            "name": "Piss Alley",
            "japanese_name": "思い出横丁",
            "services": ["food", "night"],
            "type": "night",
            "distance": "medium",
            "description": "Piss Alley en Shinjuku es famoso por sus pequeños restaurantes y bares tradicionales japoneses, ofreciendo una auténtica experiencia culinaria.",
            "maps": "https://maps.app.goo.gl/3K4H8YzwzLAeH7Da8",
            "coords": { "lat": 35.6932, "lng": 139.7026 }
        },
        {
            "id": "25",
            "name": "Menya Musashi",
            "japanese_name": "麺屋武蔵",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "medium",
            "description": "Menya Musashi es conocido por su ramen tsukemen, donde los fideos se sirven por separado para mojar en caldo espeso y sabroso. Es una experiencia única para los amantes del ramen.",
            "maps": "https://maps.app.goo.gl/wh4s5BH9HWnTRcT27",
            "coords": { "lat": 35.6865, "lng": 139.699 }
        },
        {
            "id": "26",
            "name": "Sushi Saito",
            "japanese_name": "鮨 さいとう",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "medium",
            "description": "Sushi Saito es uno de los mejores restaurantes de sushi en Tokio, dirigido por el famoso chef Takashi Saito. Es conocido por su sushi meticulosamente preparado con ingredientes frescos.",
            "maps": "https://maps.app.goo.gl/RVyodrBvN8LC1xup6",
            "coords": { "lat": 35.6754, "lng": 139.7636 }
        },
        {
            "id": "27",
            "name": "Sumibiyakiniku Nakahara",
            "japanese_name": "炭火焼肉 中原",
            "services": ["food", "restaurant"],
            "type": "restaurant",
            "distance": "medium",
            "description": "Sumibiyakiniku Nakahara es famoso por su yakiniku, carne japonesa a la parrilla estilo coreano. Utilizan carne wagyu de alta calidad y ofrecen una experiencia gastronómica excepcional.",
            "maps": "https://maps.app.goo.gl/CEmL8SXJMjTkcDDt6",
            "coords": { "lat": 35.6915, "lng": 139.7016 }
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
            icon: pointer
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
            icon: pointer
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
