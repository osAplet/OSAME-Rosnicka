const apiKey = 'c71393f64c126e61776f5d26561d0f8b'; // 🔐 Tvůj OpenWeather klíč

// 🌆 Načti počasí podle názvu města
export async function nactiOpenWeather(city = 'Brno') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=cz&appid=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('❌ Chyba při načítání dat pro město');
  const data = await response.json();
  return formatujData(data);
}

// 📍 Načti počasí podle GPS souřadnic
export async function nactiOpenWeatherGPS(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=cz&appid=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('❌ Chyba při načítání dat pro GPS');
  const data = await response.json();
  return formatujData(data);
}

// 🧠 Pomocná funkce pro formátování dat
function formatujData(data) {
  return {
    teplota: data.main.temp,
    tlak: data.main.pressure,
    vlhkost: data.main.humidity,
    vitr: data.wind.speed,
    stav: data.weather[0].description,
    poloha: data.name
  };
}
