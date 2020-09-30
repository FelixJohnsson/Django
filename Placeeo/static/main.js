mapboxgl.accessToken = 'pk.eyJ1IjoiZmVsaXhqb2huc3NvbiIsImEiOiJjanh0ZHIwd3kwcjhjM2Rvb2M3ZnVyMW5kIn0.Mdf_WJH-4npMZh3HNu-6wQ';
const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/felixjohnsson/ckeu7ofqz0wv919qtr03xjc2g', // stylesheet location
    center: [18.07061, 59.32597], // starting position [lng, lat]
    pitch: 60, // pitch in degrees
    zoom: 3 // starting zoom
});
map.on('click', function (e) {
    console.log(e.lngLat)
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<img src="https://ceowatermandate.org/wp-content/uploads/2017/08/HM.png" style="height:200px; width:180px">`)
        .addTo(map)
});

var geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Lager',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [12.592581, 59.3825695]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Lager',
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [16.592581, 59.3825695]
            }
        },

    ]
};


// add markers to map
geojson.features.forEach(function (marker) {
    // create a DOM element for the marker
    const el = document.createElement('div');
    el.style.borderRadius = '50%'
    el.style.width = '40px';
    el.style.height = '50px';
    el.style.backgroundImage =
        'url(https://ceowatermandate.org/wp-content/uploads/2017/08/HM.png)'
    el.style.backgroundSize = '40px 50px'
    el.style.backgroundRepeat = 'no-repeat'
    el.style.border = 'solid white 3px'

    el.addEventListener('click', function () {
        window.alert(marker.properties.message);
    });

    // add marker to map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});