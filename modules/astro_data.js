export async function ziskejAstronomii(lat, lon) {
  const response = await fetch(`https://api.ipgeolocation.io/astronomy?apiKey=TVŮJ_KLÍČ&lat=${lat}&long=${lon}`);
  const data = await response.json();
  return {
    sunrise: data.sunrise,
    sunset: data.sunset,
    moonrise: data.moonrise,
    moonset: data.moonset,
    moon_phase: data.moon_phase
  };
}
