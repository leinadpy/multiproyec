const Vidrio = require("../../models/Vidrio");
const vidrioAlpha = {};

vidrioAlpha.dosHojasCorredizasVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 220) / 2 / 1000;
  const altoVidrio = (newAbAlpha.alto - 176) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 2;
  newAbAlpha.pesoHoja = (areaVidrio / 2) * 2.5 * newAbAlpha.selEspesorVidrio;
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

vidrioAlpha.tresHojasCorredizasVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 110) / 3 / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 3;
  newAbAlpha.pesoHoja = (areaVidrio / 3) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.tresHojasDosCorredizasUnaFijaVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 110) / 3 / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 3;
  newAbAlpha.pesoHoja = (areaVidrio / 3) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.cuatroHojasDosCorredizasDosFijasVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 390) / 4 / 1000;
  const altoVidrio = (newAbAlpha.alto - 180) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 4;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.cuatroHojasCorredizasVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 406) / 4 / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 4;
  newAbAlpha.pesoHoja = (areaVidrio / 4) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.cuatroHojasTresCorredizasUnaFijaVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 406) / 4 / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 4;
  newAbAlpha.pesoHoja = (areaVidrio / 4) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.cincoHojasCorredizasVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio =
    ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5 - 56 * 2) / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 5;
  newAbAlpha.pesoHoja = (areaVidrio / 5) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.cincoHojasCuatroCorredizasUnaFijaVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio =
    ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5 - 56 * 2) / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 5;
  newAbAlpha.pesoHoja = (areaVidrio / 5) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.seisHojasCorredizasVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio =
    ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6 - 56 * 2) / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 6;
  newAbAlpha.pesoHoja = (areaVidrio / 6) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.seisHojasCincoCorredizasUnaFijaVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio =
    ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6 - 56 * 2) / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 6;
  newAbAlpha.pesoHoja = (areaVidrio / 6) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.seisHojasCuatroCorredizasDosFijasVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio =
    ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4 - 4.4) / 6 - 56 * 2) / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 6;
  newAbAlpha.pesoHoja = (areaVidrio / 6) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

module.exports = vidrioAlpha;
