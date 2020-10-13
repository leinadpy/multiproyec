const { Schema, model } = require("mongoose");
const perfilesAlpha = require("./alphaAux/perfAlpha");
const accesorioAlpha = require("./alphaAux/accAlpha");
const modAlpha = require("./alphaAux/modAlpha");
const vidrioAlpha = require("./alphaAux/vidAlpha");

const AbAlphaSchema = new Schema({
  selAbertura: { type: String, required: true },
  cantidad: { type: Number, required: true },
  ancho: { type: Number, required: true },
  alto: { type: Number, required: true },
  altofijo: { type: Number },
  selPremarco: { type: String },
  selContramarco: { type: String },
  selColorAluminio: { type: String },
  selColorVidrio: { type: String },
  proveedorvidrio: { type: String },
  selEspesorVidrio: { type: String },
  selColorAccesorio: { type: String },
  selCierre: { type: String },
  selRefuerzo: { type: String },
  costo: { type: Number },
});

AbAlphaSchema.methods.calcularAlpha = async (newAbAlpha) => {
  let costo = 0;
  switch (newAbAlpha.selAbertura) {
    case "1": // Ventana/Puerta dos hojas corredizas
      costo = await newAbAlpha.dosHojasCorredizas(newAbAlpha);
      break;
    case "2": // Ventana/Puerta dos hojas, una corrediza y otra fija
      costo = await newAbAlpha.dosHojasUnaCorredizaUnaFija(newAbAlpha);
      break;
  }
  return costo;
};

AbAlphaSchema.methods.dosHojasCorredizas = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.dosHojasCorredizasPerf(newAbAlpha);
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.dosHojasCorredizasAcc(newAbAlpha);
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.dosHojasCorredizasMod(newAbAlpha, pesoPerfiles);

  // VIDRIOS
  const vidriosT = await vidrioAlpha.dosHojasCorredizasVid(newAbAlpha);

  // SUMATORIA TOTAL
  const costoT = vidriosT + costoPerfiles + costoAccesorios + mod;
  return costoT;
};

AbAlphaSchema.methods.dosHojasUnaCorredizaUnaFija = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.dosHojasUnaCorredizaUnaFijaPerf(newAbAlpha);
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.dosHojasUnaCorredizaUnaFijaAcc(newAbAlpha);
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.dosHojasUnaCorredizaUnaFijaMod(newAbAlpha, pesoPerfiles);

  // VIDRIOS
  const vidriosT = await vidrioAlpha.dosHojasUnaCorredizaUnaFijaVid(newAbAlpha);

  // SUMATORIA TOTAL
  const costoT = vidriosT + costoPerfiles + costoAccesorios + mod;
  return costoT;
};

module.exports = model("AbAlpha", AbAlphaSchema);
