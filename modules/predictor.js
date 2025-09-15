export function predikujZmenu(data) {
  const { teplota, vlhkost, tlak } = data;
  let trend = "stabilní";

  if (vlhkost > 85 && tlak < 1010) {
    trend = "možnost bouřek";
  } else if (teplota > 25 && vlhkost < 40) {
    trend = "sucho";
  }

  return `Predikce: ${trend}`;
}
