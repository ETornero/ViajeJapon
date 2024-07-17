const tokioSites = {
    "popularSites": [
        {
            "name": "Templo Senso-ji",
            "japanese_name": "浅草寺",
            "services": ["temple", "natural"],
            "distance": "high",
            "description": "El Templo Senso-ji es un antiguo templo budista situado en Asakusa, es el templo más antiguo de Tokio y uno de los más significativos.",
            "maps" : "https://maps.app.goo.gl/PsCftuVGeyQqgD11A"
        },
        {
            "name": "Torre de Tokio",
            "japanese_name": "東京タワー",
            "services": ["shop", "food", "leisure"],
            "distance": "low",
            "description": "La Torre de Tokio es una torre de comunicación y observación situada en el distrito de Shiba-Koen, Minato. Es uno de los símbolos más emblemáticos de Tokio.",
            "maps" : ""
        },
        {
            "name": "Shibuya Crossing",
            "japanese_name": "渋谷スクランブル交差点",
            "services": ["shop", "food", "leisure"],
            "distance": "medium",
            "description": "El Shibuya Crossing es uno de los cruces peatonales más transitados del mundo, famoso por su señalización y su frenética actividad.",
            "maps" : ""
        },
        {
            "name": "Santuario Meiji",
            "japanese_name": "明治神宮",
            "services": ["temple", "natural"],
            "distance": "medium",
            "description": "El Santuario Meiji es un santuario sintoísta dedicado a los espíritus deificados del Emperador Meiji y su consorte, la Emperatriz Shoken.",
            "maps" : ""
        },
        {
            "name": "Palacio Imperial",
            "japanese_name": "皇居",
            "services": ["temple", "natural"],
            "distance": "low",
            "description": "El Palacio Imperial es la residencia principal del Emperador de Japón, situada en un gran parque en el centro de Tokio, cerca de la estación de Tokio.",
            "maps" : ""
        }
    ],
    "notPopularSites": [
        {
            "name": "Yanaka Ginza",
            "japanese_name": "谷中銀座",
            "services": ["shop", "food", "leisure"],
            "distance": "high",
            "description": "Yanaka Ginza es una encantadora calle comercial en el barrio de Yanaka, conocida por su atmósfera nostálgica y sus tiendas tradicionales.",
            "maps" : ""
        },
        {
            "name": "Oedo Onsen Monogatari",
            "japanese_name": "大江戸温泉物語",
            "services": ["temple", "water"],
            "distance": "medium",
            "description": "Oedo Onsen Monogatari es un complejo de aguas termales temático que recrea el ambiente del periodo Edo, ofreciendo una experiencia única de baños japoneses.",
            "maps" : ""
        },
        {
            "name": "Todoroki Valley",
            "japanese_name": "等々力渓谷",
            "services": ["natural"],
            "distance": "medium",
            "description": "El Valle de Todoroki es un oasis natural en la ciudad de Tokio, conocido por su sendero junto al río y su tranquilo entorno natural.",
            "maps" : ""
        },
        {
            "name": "Nakano Broadway",
            "japanese_name": "中野ブロードウェイ",
            "services": ["shop", "leisure"],
            "distance": "high",
            "description": "Nakano Broadway es un centro comercial en el distrito de Nakano, famoso por sus tiendas de anime, manga y artículos coleccionables.",
            "maps" : ""
        },
        {
            "name": "Koenji",
            "japanese_name": "高円寺",
            "services": ["food", "shop", "leisure"],
            "distance": "high",
            "description": "Koenji es un barrio conocido por su animada escena musical, tiendas vintage y ambiente bohemio.",
            "maps" : ""
        },
        {
            "name": "Shimokitazawa",
            "japanese_name": "下北沢",
            "services": ["food", "shop", "leisure"],
            "distance": "high",
            "description": "Shimokitazawa es un barrio vibrante y artístico, conocido por sus pequeñas tiendas, cafés acogedores y teatros independientes.",
            "maps" : ""
        },
        {
            "name": "Museo Ghibli",
            "japanese_name": "三鷹の森ジブリ美術館",
            "services": ["leisure"],
            "distance": "medium",
            "description": "El Museo Ghibli es un museo dedicado a las obras del estudio de animación Studio Ghibli, ofreciendo una experiencia mágica y creativa para los visitantes.",
            "maps" : ""
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

    tokioSites.popularSites.forEach(site => {
        popularContainer.appendChild(createDivElement(site));
    });

    tokioSites.notPopularSites.forEach(site => {
        notPopularContainer.appendChild(createDivElement(site));
    });
}

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    instanceTokioElements();
});
