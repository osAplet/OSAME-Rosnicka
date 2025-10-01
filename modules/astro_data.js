import { urciFaziDne } from'./faze_dne.js';

const apiKey = '80414d5e746e4659867123626463e8af';
const lat = 49.093;
const lon = 14.072;

export async function ziskejAstronomii() {
  const url = `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}&lat=${lat}&long=${lon}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    const fazeDne = urciFaziDne(data);

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
