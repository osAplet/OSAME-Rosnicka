// modules/astro_data.js

const apiKey = "80414d5e746e4659867123626463e8af";
const lat = 49.963; // Beroun
const lon = 14.072;

async function ziskejAstronomii() {
  const url = `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}&lat=${lat}&long=${lon}`;
  const response = await fetch(url);
  const data = await response.json();

  const fazeDne = urciFaziDne(data.current_time);

  document.getElementById("rosnicka-output").innerHTML = `
    <strong>${fazeDne}</strong><br>
    ☀️ Výška slunce: ${data.sun_altitude}°<br>
    🧭 Azimut: ${data.azimuth}°<br>
    🌙 Fáze měsíce: ${data.moon_phase}<br>
    🌅 Východ slunce: ${data.sunrise}<br>
    🌇 Západ slunce: ${data.sunset}
  `;
}

function urciFaziDne(currentTime) {
  const hodina = parseInt(currentTime.split(":")[0]);
  if (hodina >= 4 && hodina < 6) return "🌄 Brzké ráno";
  if (hodina >= 6 && hodina < 9) return "🌅 Ráno";
  if (hodina >= 9 && hodina < 12) return "🌞 Dopoledne";
  if (hodina === 12) return "🌞 Poledne";
  if (hodina > 12 && hodina < 15) return "🌤️ Odpoledne";
  if (hodina >= 15 && hodina < 18) return "🌇 Podvečer";
  if (hodina >= 18 && hodina < 21) return "🌆 Večer";
  if (hodina >= 21 || hodina < 4) return "🌙 Noc";
  return "❓ Neznámá fáze";
}

ziskejAstronomii();
