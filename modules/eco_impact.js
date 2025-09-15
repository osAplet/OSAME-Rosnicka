export function vypocetEkologickehoDopadu(data) {
  const { co2, ch4, nox, teplota, vlhkost } = data;
  let indexZnecisteni =
    (co2 * 0.6 + ch4 * 0.3 + nox * 0.1) *
    (teplota / 25) *
    (vlhkost / 50);
  return Math.round(indexZnecisteni * 100) / 100;
}
