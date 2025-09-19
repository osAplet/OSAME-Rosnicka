export function doporucObleceni({ teplota, vitr, stav }) {
  if (teplota < 5) return '🧥 Dnes je zima. Vem si teplou bundu a čepici.';
  if (teplota < 15) return '🧣 Chladno. Mikina nebo lehká bunda bude ideální.';
  if (teplota < 25) return '👕 Příjemně. Tričko, možná lehká košile.';
  if (teplota >= 25) return '🩳 Horko! Kraťasy, tričko a hodně vody.';

  if (stav.includes('déšť')) return '☔ Nezapomeň deštník!';
  if (vitr > 8) return '💨 Větrno! Něco proti větru by se hodilo.';

  return '👕 Dnes můžeš jít stylově podle nálady.';
}
