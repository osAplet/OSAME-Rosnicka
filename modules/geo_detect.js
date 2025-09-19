export async function zjistiPolohu() {
  return new Promise((resolve) => {
    let resolved = false;

    const timeout = setTimeout(async () => {
      if (!resolved) {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        resolved = true;
        resolve({
          lat: data.latitude,
          lon: data.longitude,
          zdroj: 'IP (timeout)'
        });
      }
    }, 5000);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (!resolved) {
          clearTimeout(timeout);
          resolved = true;
          resolve({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            zdroj: 'GPS'
          });
        }
      },
      async () => {
        if (!resolved) {
          clearTimeout(timeout);
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          resolved = true;
          resolve({
            lat: data.latitude,
            lon: data.longitude,
            zdroj: 'IP (fallback)'
          });
        }
      }
    );
  });
}
