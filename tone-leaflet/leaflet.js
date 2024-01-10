// This is the array you have to use!
console.log(ufoSightingsLatLng);

// DK origin
const map = L.map('map').setView([56, 11.6], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);

const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);



ufoSightingsLatLng.forEach((e)=>{
    L.marker([e.lat,e.lng]).addTo(map)
})