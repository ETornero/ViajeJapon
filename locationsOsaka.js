const locations = {
    "popularSites": [
        {
            "name": "Osaka Castle",
            "japanese_name": "大阪城",
            "services": ["temple", "natural"],
            "distance": "low",
            "description": "El Castillo de Osaka es uno de los castillos más famosos de Japón, conocido por su imponente estructura y sus hermosos jardines.",
            "maps": "https://maps.app.goo.gl/A3FtBidihsjRNzyU7"
        },
        {
            "name": "Dotonbori",
            "japanese_name": "道頓堀",
            "services": ["food", "shop", "leisure"],
            "distance": "low",
            "description": "Dotonbori es una calle vibrante famosa por su vida nocturna, restaurantes y teatros. Es conocido por sus luces de neón y el famoso cartel del corredor de Glico.",
            "maps": "https://maps.app.goo.gl/wgRgtD9ekjBZfWW37"
        },
        {
            "name": "Shinsaibashi",
            "japanese_name": "心斎橋",
            "services": ["shop", "food"],
            "distance": "low",
            "description": "Shinsaibashi es una popular área comercial en Osaka, conocida por sus tiendas de moda, boutiques y grandes almacenes.",
            "maps": "https://maps.app.goo.gl/sa1PYbrpvtcRLhbV9"
        },
        {
            "name": "Universal Studios Japan",
            "japanese_name": "ユニバーサル・スタジオ・ジャパン",
            "services": ["leisure"],
            "distance": "medium",
            "description": "Universal Studios Japan es un parque temático que ofrece atracciones basadas en películas famosas, espectáculos en vivo y entretenimiento para toda la familia.",
            "maps": "https://maps.app.goo.gl/bX5LkY9CsYA3AGEK6"
        },
        {
            "name": "Umeda Sky Building",
            "japanese_name": "梅田スカイビル",
            "services": ["leisure"],
            "distance": "medium",
            "description": "El Umeda Sky Building es un rascacielos emblemático de Osaka, conocido por su observatorio al aire libre que ofrece vistas panorámicas de la ciudad.",
            "maps": "https://maps.app.goo.gl/rJhdh2fewCRGCrHr6"
        },
        {
            "name": "Kuromon Ichiba Market",
            "japanese_name": "黒門市場",
            "services": ["food", "shop"],
            "distance": "low",
            "description": "El Mercado Kuromon Ichiba es un mercado tradicional conocido por sus productos frescos, especialmente mariscos, frutas y verduras. Es un paraíso para los amantes de la comida.",
            "maps": "https://maps.app.goo.gl/kTLjj33ZonitHm556"
        },
        {
            "name": "Osaka Aquarium Kaiyukan",
            "japanese_name": "海遊館",
            "services": ["leisure", "natural"],
            "distance": "medium",
            "description": "El Acuario Kaiyukan de Osaka es uno de los acuarios más grandes del mundo, hogar de una amplia variedad de vida marina y conocido por su tanque central masivo.",
            "maps": "https://maps.app.goo.gl/uve2FvSkJhR1D38u7"
        },
        {
            "name": "Namba Parks",
            "japanese_name": "なんばパークス",
            "services": ["shop", "leisure"],
            "distance": "low",
            "description": "Namba Parks es un centro comercial y complejo de entretenimiento con una arquitectura única y un jardín en la azotea, ofreciendo una experiencia de compras y ocio inigualable.",
            "maps": "https://maps.app.goo.gl/GFMu41S4TdUbnTc38"
        },
        {
            "name": "Tsutenkaku",
            "japanese_name": "通天閣",
            "services": ["leisure"],
            "distance": "medium",
            "description": "Tsutenkaku es una torre de observación en el distrito de Shinsekai, famosa por sus vistas panorámicas de Osaka y su ambiente retro.",
            "maps": "https://maps.app.goo.gl/Tp5SJq5hWBTcrPjp7"
        },
        {
            "name": "Sumiyoshi Taisha",
            "japanese_name": "住吉大社",
            "services": ["temple", "natural"],
            "distance": "medium",
            "description": "Sumiyoshi Taisha es uno de los santuarios sintoístas más antiguos de Japón, conocido por su arquitectura única y su hermoso entorno natural.",
            "maps": "https://maps.app.goo.gl/j2dhKr3k5C2hLT8LA"
        },
        {
            "name": "Harukoma Sushi",
            "japanese_name": "春駒",
            "services": ["food", "restaurant"],
            "distance": "medium",
            "description": "Harukoma Sushi es conocido por su sushi fresco y asequible. Es un lugar popular entre los locales y turistas.",
            "maps": "https://maps.app.goo.gl/uQACxHuPzQEksG8s9"
        },
        {
            "name": "Endo Sushi",
            "japanese_name": "ゑんどう寿司",
            "services": ["food", "restaurant"],
            "distance": "medium",
            "description": "Endo Sushi, ubicado en el mercado de pescado de Osaka, ofrece sushi de alta calidad con ingredientes frescos y deliciosos.",
            "maps": "https://maps.app.goo.gl/mc5hdcfunMZEJVhi6"
        },
    ],
    "notPopularSites": [
        {
            "name": "Hozenji Yokocho",
            "japanese_name": "法善寺横丁",
            "services": ["food", "shop", "leisure"],
            "distance": "low",
            "description": "Hozenji Yokocho es un pintoresco callejón empedrado cerca de Dotonbori, famoso por sus pequeños restaurantes y el santuario Hozenji.",
            "maps": "https://maps.app.goo.gl/Z5tpXvuedmXepqAb9"
        },
        {
            "name": "Shitennoji Temple",
            "japanese_name": "四天王寺",
            "services": ["temple", "natural"],
            "distance": "medium",
            "description": "El Templo Shitennoji es uno de los templos budistas más antiguos de Japón, conocido por su arquitectura histórica y sus tranquilos jardines.",
            "maps": "https://maps.app.goo.gl/nzaCMS48L5vAgyuS6"
        },
        {
            "name": "Minoo Park",
            "japanese_name": "箕面公園",
            "services": ["natural"],
            "distance": "high",
            "description": "El Parque Minoo es un hermoso parque natural en las afueras de Osaka, conocido por su cascada de Minoo y sus pintorescos senderos de hiking.",
            "maps": "https://maps.app.goo.gl/qhKLZZii4oVobiyb6"
        },
        {
            "name": "Nakazakicho",
            "japanese_name": "中崎町",
            "services": ["food", "shop", "leisure"],
            "distance": "low",
            "description": "Nakazakicho es un barrio retro en Osaka conocido por sus pequeñas tiendas, cafeterías y casas tradicionales, ofreciendo una atmósfera nostálgica y artística.",
            "maps": "https://maps.app.goo.gl/rqVNkP2QHeFfrVgJ7"
        },
        {
            "name": "Tombori River Cruise",
            "japanese_name": "とんぼりリバークルーズ",
            "services": ["leisure"],
            "distance": "low",
            "description": "El Tombori River Cruise ofrece un paseo en barco por el canal Dotonbori, proporcionando vistas únicas de los famosos letreros de neón y la animada vida nocturna de Osaka.",
            "maps": "https://maps.app.goo.gl/kJnB3QyoLSvmHzhu7"
        },
        {
            "name": "Osaka Tenmangu Shrine",
            "japanese_name": "大阪天満宮",
            "services": ["temple", "natural"],
            "distance": "low",
            "description": "El Santuario Osaka Tenmangu es un importante santuario sintoísta dedicado a Sugawara no Michizane, conocido por su festival Tenjin Matsuri, uno de los más grandes de Japón.",
            "maps": "https://maps.app.goo.gl/BLVJDDoE2Pp7HT5eA"
        },
        {
            "name": "Sennichimae Doguyasuji Shopping Street",
            "japanese_name": "千日前道具屋筋商店街",
            "services": ["shop", "food"],
            "distance": "low",
            "description": "Sennichimae Doguyasuji es una calle comercial especializada en utensilios de cocina, donde los chefs y entusiastas de la cocina pueden encontrar todo tipo de herramientas y equipos.",
            "maps": "https://maps.app.goo.gl/7bvqhuQdKUXn3yrr6"
        },
        {
            "name": "Osaka Museum of History",
            "japanese_name": "大阪歴史博物館",
            "services": ["leisure"],
            "distance": "low",
            "description": "El Museo de Historia de Osaka ofrece una visión fascinante de la historia de la ciudad desde tiempos antiguos hasta la era moderna, con exhibiciones interactivas y panorámicas vistas del Castillo de Osaka.",
            "maps": "https://maps.app.goo.gl/MqzE7YWHQG2VMqrx5"
        },
        {
            "name": "Horie",
            "japanese_name": "堀江",
            "services": ["shop", "food", "leisure"],
            "distance": "low",
            "description": "Horie es un barrio moderno y elegante conocido por sus tiendas de moda, boutiques, cafeterías y restaurantes de alta gama, atrayendo a los jóvenes y fashionistas.",
            "maps": "https://maps.app.goo.gl/vGx3sefjMYdJFkdBA"
        },
        {
            "name": "America-Mura",
            "japanese_name": "アメリカ村",
            "services": ["shop", "leisure", "food"],
            "distance": "low",
            "description": "America-Mura, o American Village, es un área vibrante en Osaka conocida por su influencia occidental, con numerosas tiendas de ropa, cafés y vida nocturna animada.",
            "maps": "https://maps.app.goo.gl/HpGkSNtuRTiGqQT86"
        },
        {
            "name": "Spa World",
            "japanese_name": "スパワールド",
            "services": ["leisure", "water"],
            "distance": "medium",
            "description": "Spa World es un complejo de baños termales en Osaka que ofrece una variedad de baños temáticos de diferentes países, junto con piscinas y otras instalaciones recreativas.",
            "maps": "https://maps.app.goo.gl/jWgATktW86QJtviJA"
        },
        {
            "name": "Nakanoshima Park",
            "japanese_name": "中之島公園",
            "services": ["natural", "leisure"],
            "distance": "low",
            "description": "Nakanoshima Park es un hermoso parque ubicado en una isla entre los ríos Dojima y Tosabori, ofreciendo jardines paisajísticos, espacios verdes y vistas pintorescas.",
            "maps": "https://maps.app.goo.gl/uMZ9aZogHfccs1uA8"
        },
        {
            "name": "Tennoji Park",
            "japanese_name": "天王寺公園",
            "services": ["natural", "leisure"],
            "distance": "medium",
            "description": "Tennoji Park es un extenso parque en Osaka que alberga el zoológico de Tennoji, el Museo de Bellas Artes de Osaka y hermosos jardines japoneses.",
            "maps": "https://maps.app.goo.gl/9DjyVWsr2CukZvKE8"
        },
        {
            "name": "Hankyu Umeda Main Store",
            "japanese_name": "阪急うめだ本店",
            "services": ["shop"],
            "distance": "medium",
            "description": "La tienda principal de Hankyu Umeda es un lujoso gran almacén en el distrito de Umeda, ofreciendo una amplia gama de productos de alta calidad y marcas exclusivas.",
            "maps": "https://maps.app.goo.gl/jL3W1PhBLkfzGrwB7"
        },
        {
            "name": "Ichiran Ramen",
            "japanese_name": "一蘭",
            "services": ["food", "restaurant"],
            "distance": "medium",
            "description": "Ichiran Ramen es famoso por su tonkotsu ramen. Ofrecen una experiencia única donde puedes disfrutar de tu ramen en cubículos individuales.",
            "maps": "https://maps.app.goo.gl/vjw9F5i4SeigHPHG6"
        },
        {
            "name": "Mizuno",
            "japanese_name": "美津の",
            "services": ["food", "restaurant"],
            "distance": "medium",
            "description": "Mizuno es un restaurante popular especializado en okonomiyaki, una especie de tortilla japonesa con una variedad de ingredientes.",
            "maps": "https://maps.app.goo.gl/5oBXpxtedWK2pbv66"
        },
        {
            "name": "Dotonbori Imai",
            "japanese_name": "道頓堀 今井",
            "services": ["food", "restaurant"],
            "distance": "low",
            "description": "Dotonbori Imai es conocido por su delicioso udon y ambiente tradicional. Está ubicado en el corazón de Dotonbori.",
            "maps": "https://maps.app.goo.gl/g3K6bP3bvdpWtoEd6"
        },
        {
            "name": "Yakiniku M Dotonbori",
            "japanese_name": "焼肉エム 道頓堀",
            "services": ["food", "restaurant"],
            "distance": "medium",
            "description": "Yakiniku M Dotonbori ofrece carne wagyu de alta calidad en un ambiente moderno y acogedor, perfecto para los amantes del yakiniku.",
            "maps": "https://maps.app.goo.gl/vB7fKc7L3NDFXiEd8"
        },
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

