export async function zjistiPolohu() {
  // Nejprve zkusíme GPS
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          zdroj: 'GPS'
        });
      },
      async () => {
        // Pokud GPS selže, použijeme IP geolokaci
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        resolve({
          lat: data.latitude,
          lon: data.longitude,
          zdroj: 'IP'
        });
      }
    );
  });
}
