const Vidrio = require("../../models/Vidrio");
const vidrioAlpha = {};

vidrioAlpha.dosHojasCorredizasVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 220) / 2 / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
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
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
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
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
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

vidrioAlpha.dosHojasCorredizasFijoInferiorVid = async (newAbAlpha) => {
  // Vidrios
  const altoCorrediza = newAbAlpha.alto - newAbAlpha.altofijo;
  const anchoVidrioCorrediza = (newAbAlpha.ancho - 220) / 2 / 1000;
  const altoVidrioCorrediza = (altoCorrediza - 176) / 1000;
  const areaVidrioCorrediza = anchoVidrioCorrediza * altoVidrioCorrediza * 2;
  const anchoVidrioFijo = (newAbAlpha.ancho - 25 * 2 - 8) / 1000;
  const altoVidrioFijo = (newAbAlpha.altofijo - 25 * 2 - 8) / 1000;
  const areaVidrioFijo = anchoVidrioFijo * altoVidrioFijo * 1;
  const areaVidrio = areaVidrioCorrediza + areaVidrioFijo;
  newAbAlpha.pesoHoja =
    (areaVidrioCorrediza / 2) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.dosHojasUnaCorredizaUnaFijaFijoInferiorVid = async (newAbAlpha) => {
  // Vidrios
  const altoCorrediza = newAbAlpha.alto - newAbAlpha.altofijo;
  const anchoVidrioCorrediza = (newAbAlpha.ancho - 220) / 2 / 1000;
  const altoVidrioCorrediza = (altoCorrediza - 190) / 1000;
  const areaVidrioCorrediza = anchoVidrioCorrediza * altoVidrioCorrediza * 2;
  const anchoVidrioFijo = (newAbAlpha.ancho - 25 * 2 - 8) / 1000;
  const altoVidrioFijo = (newAbAlpha.altofijo - 25 * 2 - 8) / 1000;
  const areaVidrioFijo = anchoVidrioFijo * altoVidrioFijo * 1;
  const areaVidrio = areaVidrioCorrediza + areaVidrioFijo;
  newAbAlpha.pesoHoja =
    (areaVidrioCorrediza / 2) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.cuatroHojasDosCorredizasDosFijasFijoInferiorVid = async (
  newAbAlpha
) => {
  // Vidrios
  const altoCorrediza = newAbAlpha.alto - newAbAlpha.altofijo;
  const anchoVidrioCorrediza = (newAbAlpha.ancho - 390) / 4 / 1000;
  const altoVidrioCorrediza = (altoCorrediza - 190) / 1000;
  const areaVidrioCorrediza = anchoVidrioCorrediza * altoVidrioCorrediza * 4;
  const anchoVidrioFijo = (newAbAlpha.ancho - 25 * 2 - 8) / 1000;
  const altoVidrioFijo = (newAbAlpha.altofijo - 25 * 2 - 8) / 1000;
  const areaVidrioFijo = anchoVidrioFijo * altoVidrioFijo * 1;
  const areaVidrio = areaVidrioCorrediza + areaVidrioFijo;
  newAbAlpha.pesoHoja =
    (areaVidrioCorrediza / 4) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.dosHojasCorredizasConTelaVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio =
    ((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 56 * 2) / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
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

vidrioAlpha.dosHojasUnaCorredizaUnaFijaConTelaVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio =
    ((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 56 * 2) / 1000;
  const altoVidrio = (newAbAlpha.alto - 190) / 1000;
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

vidrioAlpha.cuatroHojasDosCorredizasDosFijasConTelaVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio =
    ((newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 - 56 * 2) / 1000;
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

vidrioAlpha.unaHojaOscilobatienteVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 134) / 1000;
  const altoVidrio = (newAbAlpha.alto - 134) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 1;
  newAbAlpha.pesoHoja = (areaVidrio / 1) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.unaHojaOscilobatienteFijoInferiorVid = async (newAbAlpha) => {
  // Vidrios
  const altoBat = newAbAlpha.alto - newAbAlpha.altofijo;
  const anchoVidrio = (newAbAlpha.ancho - 134) / 1000;
  const altoVidrio = (altoBat - 134) / 1000;
  const anchoFijo = (newAbAlpha.ancho - 25 * 2 - 8) / 1000;
  const altoFijo = (newAbAlpha.altofijo - 25 * 2 - 8) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 1 + anchoFijo * altoFijo * 1;
  newAbAlpha.pesoHoja =
    anchoVidrio * altoVidrio * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.unaHojaBatienteVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 132) / 1000;
  const altoVidrio = (newAbAlpha.alto - 132) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 1;
  newAbAlpha.pesoHoja = (areaVidrio / 1) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.unaHojaBatienteFijoInferiorVid = async (newAbAlpha) => {
  // Vidrios
  const altoBat = newAbAlpha.alto - newAbAlpha.altofijo;
  const anchoVidrio = (newAbAlpha.ancho - 132) / 1000;
  const altoVidrio = (altoBat - 132) / 1000;
  const anchoFijo = (newAbAlpha.ancho - 25 * 2 - 8) / 1000;
  const altoFijo = (newAbAlpha.altofijo - 25 * 2 - 8) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 1 + anchoFijo * altoFijo * 1;
  newAbAlpha.pesoHoja =
    anchoVidrio * altoVidrio * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.dosHojasBatientesVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 232) / 2 / 1000;
  const altoVidrio = (newAbAlpha.alto - 132) / 1000;
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

vidrioAlpha.dosHojasBatientesFijoInferiorVid = async (newAbAlpha) => {
  // Vidrios
  const altoBat = newAbAlpha.alto - newAbAlpha.altofijo;
  const anchoVidrio = (newAbAlpha.ancho - 232) / 2 / 1000;
  const altoVidrio = (altoBat - 132) / 1000;
  const anchoFijo = (newAbAlpha.ancho - 25 * 2 - 8) / 1000;
  const altoFijo = (newAbAlpha.altofijo - 25 * 2 - 8) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 2 + anchoFijo * altoFijo * 1;
  newAbAlpha.pesoHoja = (areaVidrio / 2) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.dosHojasOscilobatientesVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 234) / 2 / 1000;
  const altoVidrio = (newAbAlpha.alto - 134) / 1000;
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

vidrioAlpha.dosHojasOscilobatientesFijoInferiorVid = async (newAbAlpha) => {
  // Vidrios
  const altoBat = newAbAlpha.alto - newAbAlpha.altofijo;
  const anchoVidrio = (newAbAlpha.ancho - 234) / 2 / 1000;
  const altoVidrio = (altoBat - 134) / 1000;
  const anchoFijo = (newAbAlpha.ancho - 25 * 2 - 8) / 1000;
  const altoFijo = (newAbAlpha.altofijo - 25 * 2 - 8) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 2 + anchoFijo * altoFijo * 1;
  newAbAlpha.pesoHoja = (areaVidrio / 2) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.unaPuertaHojaBatienteVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 238) / 1000;
  const altoVidrio = (newAbAlpha.alto - 245) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 1;
  newAbAlpha.pesoHoja = (areaVidrio / 1) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.unaPuertaDosHojasBatientesVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 403) / 2 / 1000;
  const altoVidrio = (newAbAlpha.alto - 249) / 1000;
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

vidrioAlpha.unaHojaProyectanteVid = async (newAbAlpha) => {
  // Vidrios
  const anchoVidrio = (newAbAlpha.ancho - 150) / 1000;
  const altoVidrio = (newAbAlpha.alto - 150) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 1;
  newAbAlpha.pesoHoja = (areaVidrio / 1) * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioAlpha.unaHojaProyectanteFijoInferiorVid = async (newAbAlpha) => {
  // Vidrios
  const altoBat = newAbAlpha.alto - newAbAlpha.altofijo;
  const anchoVidrio = (newAbAlpha.ancho - 150) / 1000;
  const altoVidrio = (altoBat - 150) / 1000;
  const anchoFijo = (newAbAlpha.ancho - 25 * 2) / 1000;
  const altoFijo = (newAbAlpha.altofijo - 25 * 2) / 1000;
  const areaVidrio = anchoVidrio * altoVidrio * 1 + anchoFijo * altoFijo * 1;
  newAbAlpha.pesoHoja =
    anchoVidrio * altoVidrio * 2.5 * newAbAlpha.selEspesorVidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    "T" + newAbAlpha.selEspesorVidrio,
    newAbAlpha.selColorVidrio,
    newAbAlpha.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

module.exports = vidrioAlpha;
