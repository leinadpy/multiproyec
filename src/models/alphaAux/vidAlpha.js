const Vidrio = require("../../models/Vidrio");
const vidrioAlpha = {};

vidrioAlpha.dosHojasCorredizasVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 220) / 2 / 1000;
  const altoVidrio = (newAbAlpha.alto - 176) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 2;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.dosHojasUnaCorredizaUnaFijaVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 220) / 2 / 1000;
  const altoVidrio = (newAbAlpha.alto - 176) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 2;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

module.exports = vidrioAlpha;
