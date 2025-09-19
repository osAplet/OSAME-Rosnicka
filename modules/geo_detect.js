export async function zjistiPolohu() {
  const timeoutMs = 5000;

  const gpsPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          zdroj: 'GPS'
        });
      },
      () => reject('GPS selhala')
    );
  });

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject('GPS timeout'), timeoutMs)
  );

  try {
    return await Promise.race([gpsPromise, timeoutPromise]);
  } catch {
    // 🌍 Fallback na IP
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return {
        lat: data.latitude,
        lon: data.longitude,
        zdroj: 'IP fallback'
      };
    } catch (err) {
      throw new Error('❌ Nelze získat polohu ani přes IP');
    }
  }
}
