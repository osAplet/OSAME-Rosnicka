// 🌍 Vykresli polohu na mapě s kuželem přesnosti a směrem pohledu
export function vykresliPolohu(map, lat, lon, presnost, heading) {
  // 🗺️ Vyčisti staré vrstvy
  map.eachLayer((layer) => {
    if (layer.options && layer.options.persistent !== true) {
      map.removeLayer(layer);
    }
  });

  // 📍 Marker na pozici
  const marker = L.marker([lat, lon], {
    title: "📍 Tvoje poloha",
    icon: L.divIcon({
      className: "custom-icon",
      html: "📍",
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    })
  }).addTo(map);

  // 🌀 Kužel přesnosti
  const kruh = L.circle([lat, lon], {
    radius: presnost,
    color: "#00aaff",
    fillColor: "#cceeff",
    fillOpacity: 0.3
  }).addTo(map);

  // 🧭 Směr pohledu (heading)
  if (heading !== null && !isNaN(heading)) {
    const délkaŠipky = presnost * 1.5;
    const radiany = (heading * Math.PI) / 180;
    const cílovýLat = lat + (délkaŠipky / 111111) * Math.cos(radiany);
    const cílovýLon = lon + (délkaŠipky / (111111 * Math.cos(lat * Math.PI / 180))) * Math.sin(radiany);

    const šipka = L.polyline([[lat, lon], [cílovýLat, cílovýLon]], {
      color: "#ff6600",
      weight: 3,
      dashArray: "5,5"
    }).addTo(map);
  }

  // 🔍 Zoom na pozici
  map.setView([lat, lon], 15);
}
