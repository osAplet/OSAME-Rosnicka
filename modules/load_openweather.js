export async function nactiOpenWeather(city = 'Prague') {
  const apiKey = 'c71393f64c126e61776f5d26561d0f8b';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=cz&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    teplota: data.main.temp,
    tlak: data.main.pressure,
    vlhkost: data.main.humidity,
    vitr: data.wind.speed,
    stav: data.weather[0].description,
    poloha: data.name
  };
}
