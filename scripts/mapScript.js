function mapDisplay() {
    // Business location: Arua City, Uganda (approximate coordinates)
    var businessLat = 3.0301;  
    var businessLng = 30.9122; 

    // Zoom level 15
    var map = L.map('map').setView([businessLat, businessLng], 15); 

    // Load OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    //a custom marker for your business
    L.marker([businessLat, businessLng]).addTo(map)
        .bindPopup("<b>FridayTech</b><br>Arua City, Weather Parklane, Uganda.")
        .openPopup();
}
mapDisplay();