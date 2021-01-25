const MOD = require("../../models/MOD");
const modTemplado = {};

modTemplado.dosHojasUnaCorredizaUnaFijaMod = async (newAbTemplado) => {
  // Mano de obra montaje 16 puertas y 20 ventanas
  let tipo = 20;
  if (newAbTemplado.espesorvidrio == "10") {
    tipo = 16;
  }
  const modCol = await MOD.obtenerCosto(tipo);
  const mod =
    Math.round(
      ((modCol * newAbTemplado.ancho * newAbTemplado.alto) / 1000000 / 7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.cuatroHojasDosCorredizasDosFijasMod = async (newAbTemplado) => {
  // Mano de obra montaje 16 puertas y 20 ventanas
  let tipo = 20;
  if (newAbTemplado.espesorvidrio == "10") {
    tipo = 16;
  }
  const modCol = await MOD.obtenerCosto(tipo);
  const mod =
    Math.round(
      ((modCol * newAbTemplado.ancho * newAbTemplado.alto) / 1000000 / 7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.unaHojaCorredizaMod = async (newAbTemplado) => {
  // Mano de obra montaje 16 puertas y 20 ventanas
  let tipo = 20;
  if (newAbTemplado.espesorvidrio == "10") {
    tipo = 16;
  }
  const modCol = await MOD.obtenerCosto(tipo);
  const mod =
    Math.round(
      ((modCol * newAbTemplado.ancho * newAbTemplado.alto) / 1000000 / 7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.pañoFijoMod = async (newAbTemplado) => {
  const tipo = 20;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod =
    Math.round(
      ((modCol * newAbTemplado.ancho * newAbTemplado.alto) / 1000000 / 7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.mamparaFijaMod = async (newAbTemplado) => {
  const tipo = 20;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod =
    Math.round(
      ((modCol * newAbTemplado.ancho * newAbTemplado.alto) / 1000000 / 7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.mamparaDosHojasUnaCorredizaUnaFijaMod = async (newAbTemplado) => {
  // Mano de obra montaje 29
  const tipo = 29;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod =
    Math.round(
      (modCol / 7000) *
        100
    ) / 100;
  return mod;
};

module.exports = modTemplado;
