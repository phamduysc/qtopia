function initMap() {
    const AUS_BOUNDS = {
        north: -10.66,
        south: -43.63,
        west: 113.338,
        east: 153.57,
    };

    const CENTER = { lat: -25.27, lng: 133.77 };

    // Create a new map instance
    var map = new google.maps.Map(document.getElementById("map"), {
        center: CENTER,
        restriction: {
            latLngBounds: AUS_BOUNDS,
            strictBounds: false,
        },
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP, // Set map type to standard roadmap
        mapTypeControl: false // Hide map/satellite control button
    });

    // Replace 'YOUR_MAP_ID' with the actual ID of your Google My Map
    var layer = new google.maps.KmlLayer({
        url: 'https://www.google.com/maps/d/u/0/kml?mid=1jaq6QGqdMonQENzrpDjW3JUMlNCwL6s',
        map: map
    });
}
