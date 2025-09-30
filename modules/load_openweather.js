// 🔑 API klíč OpenWeather
const apiKey = "c71393f64c126e61776f5d26561d0f8b";

// 📍 Načti počasí podle GPS souřadnic
export async function nactiOpenWeatherGPS(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=cz`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("❌ Chyba při načítání dat z OpenWeather");
  const data = await response.json();
  return formatujData(data);
}

// 🌐 Zjisti IP adresu a Wi-Fi stav
export async function zjistiIPinfo() {
  const response = await fetch("https://api.ipify.org?format=json");
  const ipData = await response.json();
  return {
    ip: ipData.ip,
    wifi: navigator.onLine ? "✅ Připojeno k síti" : "❌ Offline"
  };
}

// 📡 Získej GPS souřadnice (výzva k aktivaci)
export async function zjistiGPS() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("❌ Geolokace není podporována");
    } else {
      navigator.geolocation.getCurrentPosition(
        (pozice) => {
          resolve({
            lat: pozice.coords.latitude,
            lon: pozice.coords.longitude
          });
        },
        () => reject("❌ Nepodařilo se získat polohu")
      );
    }
  });
}

// 🕓 Pomocná funkce pro formátování dat
function formatujData(data) {
  const mesic = new Date().getMonth() + 1;

  return {
    // 📍 Lokalita
    nazev: data.name,
    gps: {
      lat: data.coord.lat,
      lon: data.coord.lon
    },

    // 🌡️ Teploty
    teplota: `${data.main.temp}°C 🌡️`,
    pocitova: `${data.main.feels_like}°C 🫠`,
    minimum: `${data.main.temp_min}°C 🧊`,
    maximum: `${data.main.temp_max}°C 🔥`,

    // 🌬️ Atmosféra
    tlak: `${data.main.pressure} hPa 🌬️`,
    vlhkost: `${data.main.humidity}% 💧`,
    viditelnost: `${data.visibility} m 👁️`,
    oblačnost: `${data.clouds.all}% ☁️`,

    // 💨 Vítr
    vítr: {
      rychlost: `${data.wind.speed} m/s 💨`,
      směr: `${data.wind.deg}° 🧭`,
      nárazy: data.wind.gust ? `${data.wind.gust} m/s 🌪️` : "žádné nárazy"
    },

    // 🌤️ Obloha
    obloha: {
      stav: data.weather[0].main,
      popis: `${data.weather[0].description} ${oblohaEmotikon(data.weather[0].main)}`
    },

    // 🕓 Čas
    čas: {
      měření: new Date(data.dt * 1000).toLocaleTimeString("cs-CZ"),
      zóna: `UTC${data.timezone >= 0 ? "+" : ""}${data.timezone / 3600}`
    },

    // 🌞 Slunce
    slunce: {
      východ: new Date(data.sys.sunrise * 1000).toLocaleTimeString("cs-CZ"),
      západ: new Date(data.sys.sunset * 1000).toLocaleTimeString("cs-CZ")
    },

    // 🌸 Roční období
    obdobi: urciObdobi(mesic)
  };
}

// 🌦️ Funkce pro převod hlavního stavu počasí na emotikon
function oblohaEmotikon(main) {
  const mapa = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Thunderstorm: "⛈️",
    Mist: "🌫️",
    Fog: "🌫️",
    Snow: "❄️",
    Drizzle: "🌦️"
  };
  return mapa[main] || "❓";
}

// 🌸 Funkce pro určení ročního období
function urciObdobi(mesic) {
  if ([12, 1, 2].includes(mesic)) return "❄️ Zima";
  if ([3, 4, 5].includes(mesic)) return "🌸 Jaro";
  if ([6, 7, 8].includes(mesic)) return "☀️ Léto";
  if ([9, 10, 11].includes(mesic)) return "🍂 Podzim";
}
