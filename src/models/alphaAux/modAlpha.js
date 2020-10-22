const MOD = require("../../models/MOD");
const modAlpha = {};

modAlpha.dosHojasCorredizasMod = async (newAbAlpha, pesoPerfiles) => {
    // Mano de obra   montaje 48 y fabricación 49
    const modCol = await MOD.obtenerCosto(48);
    const modFab = await MOD.obtenerCosto(49);
    const mod =
    Math.round(
      (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
        modFab * pesoPerfiles) /
        7000) *
        100
    ) / 100;
    return mod;
};

modAlpha.dosHojasUnaCorredizaUnaFijaMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = await MOD.obtenerCosto(48);
  const modFab = await MOD.obtenerCosto(49);
  const mod =
  Math.round(
    (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
      modFab * pesoPerfiles) /
      7000) *
      100
  ) / 100;
  return mod;
};

modAlpha.cuatroHojasDosCorredizasDosFijasMod = async (newAbAlpha, pesoPerfiles) => {
  // Mano de obra   montaje 48 y fabricación 49
  const modCol = await MOD.obtenerCosto(48);
  const modFab = await MOD.obtenerCosto(49);
  const mod =
  Math.round(
    (((modCol * newAbAlpha.ancho * newAbAlpha.alto) / 1000000 +
      modFab * pesoPerfiles) /
      7000) *
      100
  ) / 100;
  return mod;
};

module.exports = modAlpha;
