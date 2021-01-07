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

module.exports = modTemplado;
