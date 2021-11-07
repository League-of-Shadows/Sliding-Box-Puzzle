    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhdmVzdG9uZTkiLCJhIjoiY2tybHpxb2NvMGk0YTJwbm96eHFrZ3lhZCJ9.XC7Aw273nUmc9uzoKveEiA';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-v9', // style URL
        center: [-122.25948, 37.87221], // starting position
        zoom: 15 // starting zoom
    });
    
    // Add zoom and rotation controls to the map.
    // map.addControl(new mapboxgl.NavigationControl());


    const geocoder = new MapboxGeocoder({
        // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: false // Do not use the default marker style
    });

    // Add the geocoder to the map
    map.addControl(geocoder, "top-left");

    var nav = new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: true
    });

    map.addControl(nav, "top-right");

    function captureFrame(){

        var bounds = []
        bounds[0] = map.getCenter().lng
        bounds[1] = map.getCenter().lat
        bounds[2] = map.getZoom()

        console.log("bounds",bounds)

        startPuzzle(bounds)
    }

    function startPuzzle(bounds){
        localStorage.setItem("bounds", JSON.stringify(bounds))
        window.open("puzzle.html")
    }