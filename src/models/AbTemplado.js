const { Schema, model } = require("mongoose");
const perfilesTemplado = require("./templadoAux/perfTemplado");
const accesoriosTemplado = require("./templadoAux/accTemplado");
const modAlpha = require("./templadoAux/modTemplado");
const vidrioTemplado = require("./templadoAux/vidTemplado");

const AbTempladoSchema = new Schema({
  selAbertura: { type: String, required: true },
  cantidad: { type: Number, required: true },
  ancho: { type: Number, required: true },
  alto: { type: Number, required: true },
  altofijoinf: { type: Number },
  altofijosup: { type: Number },
  altofijolat1: { type: Number },
  altofijolat2: { type: Number },
  tipoEspejo: { type: String },
  tipoCierre: { type: String },
  tipoBrazo: { type: String },
  selColorAluminio: { type: String },
  proveedoraluminio: { type: String },
  tipoManijon: { type: String },
  colorvidrio: { type: String },
  proveedorvidrio: { type: String },
  espesorvidrio: { type: String },
  coloraccesorio: { type: String },
  proveedoraccesorio: { type: String },
  cierreopc: { type: String },
  costo: { type: Number },
  parametro: { type: Number },
  pesoHoja: { type: Number },
  embutido: { type: String },
});

AbTempladoSchema.methods.calcularTemplado = async (newAbTemplado) => {
  let costo = 0;
  switch (newAbTemplado.selAbertura) {
    case "1": // Ventana/Puerta dos hojas, una corrediza y otra fija
      costo = await newAbTemplado.dosHojasUnaCorredizaUnaFija(newAbTemplado);
      break;
  }
  return costo;
};

AbTempladoSchema.methods.dosHojasUnaCorredizaUnaFija = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.dosHojasUnaCorredizaUnaFijaPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.dosHojasUnaCorredizaUnaFijaVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accAlpha = await accesoriosTemplado.dosHojasUnaCorredizaUnaFijaAcc(
    newAbTemplado
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.dosHojasUnaCorredizaUnaFijaMod(
    newAbTemplado,
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

module.exports = model("AbTemplado", AbTempladoSchema);
