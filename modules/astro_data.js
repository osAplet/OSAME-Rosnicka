// modules/astro_data.js

const apiKey = '8e4f0e7e9c7e4e649589712863c1'; // tvůj klíč
const lat = 49.093;
const lon = 14.072;

async function ziskejAstronomii() {
  const url = `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}&lat=${lat}&long=${lon}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    const fazeDne = urciFaziDne(data.current_time);

    document.getElementById("astro-box").innerHTML = `
      <p><strong>🌅 Fáze dne:</strong> ${fazeDne}</p>
      <p><strong>📏 Výška Slunce:</strong> ${data.sun_altitude}°</p>
      <p><strong>🧭 Azimut Slunce:</strong> ${data.azimuth}°</p>
      <p><strong>🌔 Fáze Měsíce:</strong> ${data.moon_phase}</p>
      <p><strong>🌄 Východ Slunce:</strong> ${data.sunrise}</p>
      <p><strong>🌇 Západ Slunce:</strong> ${data.sunset}</p>
    `;
  } catch (err) {
    document.getElementById("astro-box").innerHTML = `<p style="color:red;">❌ Chyba při načítání dat</p>`;
  }
}

function urciFaziDne(currentTime) {
  const hodina = parseInt(currentTime.split(":")[0]);
  if (hodina >= 0 && hodina < 6) return "🌙 Noc";
  if (hodina >= 6 && hodina < 9) return "🌅 Ráno";
  if (hodina >= 9 && hodina < 12) return "🌞 Dopoledne";
  if (hodina >= 12 && hodina < 15) return "🌞 Poledne";
  if (hodina >= 15 && hodina < 18) return "🌤️ Odpoledne";
  if (hodina >= 18 && hodina < 21) return "🌇 Večer";
  if (hodina >= 21 && hodina <= 23) return "🌙 Noc";
  return "❓ Neznámá fáze";
}

ziskejAstronomii();
