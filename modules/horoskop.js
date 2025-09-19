export function vypocitejZnamení(datum) {
  const den = datum.getDate();
  const mesic = datum.getMonth() + 1;

  // Zjednodušený výpočet znamení
  if ((mesic === 3 && den >= 21) || (mesic === 4 && den <= 20)) return '♈ Beran';
  if ((mesic === 4 && den >= 21) || (mesic === 5 && den <= 21)) return '♉ Býk';
  // ... pokračuj pro všechna znamení
}
