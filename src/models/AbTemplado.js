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
    case "2": // Ventana/Puerta cuatro hojas, dos corredizas y dos fijas
      costo = await newAbTemplado.cuatroHojasDosCorredizasDosFijas(
        newAbTemplado
      );
      break;

    case "5": // Ventana/Puerta de una hoja
      costo = await newAbTemplado.unaHojaCorrediza(newAbTemplado);
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
  const mod = await modAlpha.dosHojasUnaCorredizaUnaFijaMod(newAbTemplado);

  // SUMATORIA TOTAL
  const costoT =
    Math.round((costoPerfiles + costoAccesorios + vidriosT + mod) * 100) / 100;
  return costoT;
};

AbTempladoSchema.methods.cuatroHojasDosCorredizasDosFijas = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.cuatroHojasDosCorredizasDosFijasPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.cuatroHojasDosCorredizasDosFijasVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accAlpha = await accesoriosTemplado.cuatroHojasDosCorredizasDosFijasAcc(
    newAbTemplado
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.cuatroHojasDosCorredizasDosFijasMod(newAbTemplado);

  // SUMATORIA TOTAL
  const costoT =
    Math.round((costoPerfiles + costoAccesorios + vidriosT + mod) * 100) / 100;
  return costoT;
};

AbTempladoSchema.methods.unaHojaCorrediza = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.unaHojaCorredizaPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.unaHojaCorredizaVid(newAbTemplado);

  // ACCESORIOS
  const accAlpha = await accesoriosTemplado.unaHojaCorredizaAcc(newAbTemplado);
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.unaHojaCorredizaMod(newAbTemplado);

  // SUMATORIA TOTAL
  const costoT =
    Math.round((costoPerfiles + costoAccesorios + vidriosT + mod) * 100) / 100;
  return costoT;
};

module.exports = model("AbTemplado", AbTempladoSchema);
