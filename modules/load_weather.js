export async function nactiPocasi() {
  const response = await fetch('./data/last_weather.json');
  const data = await response.json();
  return data;
}
