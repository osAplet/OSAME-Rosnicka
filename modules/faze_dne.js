// modules/faze_dne.js

export function urciFaziDne(data) {
  const hodina = parseInt(data.current_time.split(":")[0]);
  const elevace = parseFloat(data.sun_altitude); // výška Slunce nad horizontem

  if (hodina >= 1 && hodina < 6) return "🌌 Brzké ráno";
  if (hodina >= 6 && hodina < 9) return "🌅 Ráno";
  if (hodina >= 9 && hodina < 11) return "🌞 Dopoledne";
  if (hodina >= 11 && hodina < 13) return "🌞 Poledne";

  // Odpoledne závislé na výšce Slunce
  if (hodina >= 13 && hodina < 18) {
    if (elevace > 20) return "🌤️ Odpoledne";
    else return "🌥️ Pozdní odpoledne";
  }

  // Podvečer závislý na poklesu Slunce
  if (hodina >= 18 && hodina < 21) {
    if (elevace < 10) return "🌇 Podvečer";
    else return "🌆 Soumrak";
  }

  if (hodina >= 21 || hodina < 1) return "🌙 Noc";

  return "❓ Neznámá fáze";
}
