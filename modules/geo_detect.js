import { vykresliMapu } from'./mapa.js';
import { zobrazChybu } from'./zobraz_chybu.js'; // mistr výdechů

let zdroj = "neznámý";
export async function ziskejPolohu() {
  const timeoutMS = 5000;

  if ("geolocation" in navigator) {
    try {
      const pos = await new Promise((res, rej) =>
        navigator.geolocation.getCurrentPosition(res, rej, {
          enableHighAccuracy: true,
          timeout: timeoutMS,
          maximumAge: 0
        })
      );

      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const smer = pos.coords.heading || 0;
      const zdroj = "GPS";
   
   vykresliMapu({ lat, lon, smer });

      return { lat, lon, smer, zdroj: "📡 GPS" };
    } catch (e) {
      zobrazChybu("📡 GPS selhala. Zkontroluj lokalizaci nebo oprávnění.");
    }
  }

  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const lat = data.latitude;
    const lon = data.longitude;
    const smer = 0;
    const zdroj = "IP";
    
    vykresliMapu({ lat, lon, smer });
    
    return { lat, lon, smer, zdroj: "🌐 IP" };
    } catch (err) {
    zobrazChybu("🌐 IP lokalizace selhala. Zkontroluj připojení k síti.");
    throw new Error("Nelze získat polohu");
  }
}
