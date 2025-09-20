export function vypocitejZnamení(datum) {
  const den = datum.getDate();
  const mesic = datum.getMonth() + 1;

  if ((mesic === 3 && den >= 21) || (mesic === 4 && den <= 20)) return '♈ Beran';
  if ((mesic === 4 && den >= 21) || (mesic === 5 && den <= 21)) return '♉ Býk';
  if ((mesic === 5 && den >= 22) || (mesic === 6 && den <= 21)) return '♊ Blíženci';
  if ((mesic === 6 && den >= 22) || (mesic === 7 && den <= 22)) return '♋ Rak';
  if ((mesic === 7 && den >= 23) || (mesic === 8 && den <= 22)) return '♌ Lev';
  if ((mesic === 8 && den >= 23) || (mesic === 9 && den <= 22)) return '♍ Panna';
  if ((mesic === 9 && den >= 23) || (mesic === 10 && den <= 23)) return '♎ Váhy';
  if ((mesic === 10 && den >= 24) || (mesic === 11 && den <= 22)) return '♏ Štír';
  if ((mesic === 11 && den >= 23) || (mesic === 12 && den <= 21)) return '♐ Střelec';
  if ((mesic === 12 && den >= 22) || (mesic === 1 && den <= 20)) return '♑ Kozoroh';
  if ((mesic === 1 && den >= 21) || (mesic === 2 && den <= 19)) return '♒ Vodnář';
  if ((mesic === 2 && den >= 20) || (mesic === 3 && den <= 20)) return '♓ Ryby';

  return '❓ Neznámé znamení';
}
