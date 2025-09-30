import L from 'leaflet';

export function vykresliMapu({ lat, lon, smer }) {
  const map = L.map('map-box').setView([lat, lon], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 18,
  }).addTo(map);

  L.circleMarker([lat, lon], {
    radius: 6,
    color: '#00bfff',
    fillColor: '#00bfff',
    fillOpacity: 0.9,
  }).addTo(map);

  const délka = 0.005;
  const šířka = 0.002;
  const rad = (smer * Math.PI) / 180;
  const x = Math.cos(rad) * délka;
  const y = Math.sin(rad) * délka;

  const bod1 = [lat + y, lon + x];
  const bod2 = [lat + y + šířka, lon + x - šířka];
  const bod3 = [lat + y - šířka, lon + x + šířka];

  L.polygon([bod2, bod1, bod3], {
    color: '#ff6600',
    fillColor: '#ff6600',
    fillOpacity: 0.4,
    weight: 2,
  }).addTo(map);
}
