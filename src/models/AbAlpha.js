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
  pesoHoja: { type: Number },
  parametro: { type: Number },
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
    case "3": // Ventana/Puerta tres hojas corredizas
      costo = await newAbAlpha.tresHojasCorredizas(newAbAlpha);
      break;
    case "4": // Ventana/Puerta tres hojas, dos corredizas y una fija
      costo = await newAbAlpha.tresHojasDosCorredizasUnaFija(newAbAlpha);
      break;
    case "5": // Ventana/Puerta cuatro hojas, dos corredizas y dos fijas
      costo = await newAbAlpha.cuatroHojasDosCorredizasDosFijas(newAbAlpha);
      break;
    case "6": // Ventana/Puerta cuatro hojas corredizas (cuatro guías)
      costo = await newAbAlpha.cuatroHojasCorredizas(newAbAlpha);
      break;
    case "7": // Ventana/Puerta cuatro hojas, tres corredizas y una fija (cuatro guías)
      costo = await newAbAlpha.cuatroHojasTresCorredizasUnaFija(newAbAlpha);
      break;
    case "8": // Ventana/Puerta cinco hojas corredizas
      costo = await newAbAlpha.cincoHojasCorredizas(newAbAlpha);
      break;
    case "9": // Ventana/Puerta cinco, cuatro hojas corredizas y una fija
      costo = await newAbAlpha.cincoHojasCuatroCorredizasUnaFija(newAbAlpha);
      break;
    case "10": // Ventana/Puerta seis hojas corredizas
      costo = await newAbAlpha.seisHojasCorredizas(newAbAlpha);
      break;
    case "10b": // Ventana/Puerta seis hojas, cinco corredizas y una fija
      costo = await newAbAlpha.seisHojasCincoCorredizasUnaFija(newAbAlpha);
      break;
    case "10c": // Ventana/Puerta seis hojas, cuatro corredizas y dos fijas
      costo = await newAbAlpha.seisHojasCuatroCorredizasDosFijas(newAbAlpha);
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
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.dosHojasUnaCorredizaUnaFija = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.dosHojasUnaCorredizaUnaFijaPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.dosHojasUnaCorredizaUnaFijaAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.dosHojasUnaCorredizaUnaFijaMod(
    newAbAlpha,
    pesoPerfiles
  );

  // VIDRIOS
  const vidriosT = await vidrioAlpha.dosHojasUnaCorredizaUnaFijaVid(newAbAlpha);

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.tresHojasCorredizas = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.tresHojasCorredizasPerf(newAbAlpha);
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.tresHojasCorredizasAcc(newAbAlpha);
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.tresHojasCorredizasMod(newAbAlpha, pesoPerfiles);

  // VIDRIOS
  const vidriosT = await vidrioAlpha.tresHojasCorredizasVid(newAbAlpha);

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.tresHojasDosCorredizasUnaFija = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.tresHojasDosCorredizasUnaFijaPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.tresHojasDosCorredizasUnaFijaAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.tresHojasDosCorredizasUnaFijaMod(
    newAbAlpha,
    pesoPerfiles
  );

  // VIDRIOS
  const vidriosT = await vidrioAlpha.tresHojasDosCorredizasUnaFijaVid(
    newAbAlpha
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cuatroHojasDosCorredizasDosFijas = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.cuatroHojasDosCorredizasDosFijasPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.cuatroHojasDosCorredizasDosFijasAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.cuatroHojasDosCorredizasDosFijasMod(
    newAbAlpha,
    pesoPerfiles
  );

  // VIDRIOS
  const vidriosT = await vidrioAlpha.cuatroHojasDosCorredizasDosFijasVid(
    newAbAlpha
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cuatroHojasCorredizas = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.cuatroHojasCorredizasPerf(newAbAlpha);
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.cuatroHojasCorredizasAcc(newAbAlpha);
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.cuatroHojasCorredizasMod(newAbAlpha, pesoPerfiles);

  // VIDRIOS
  const vidriosT = await vidrioAlpha.cuatroHojasCorredizasVid(newAbAlpha);

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cuatroHojasTresCorredizasUnaFija = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.cuatroHojasTresCorredizasUnaFijaPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.cuatroHojasTresCorredizasUnaFijaAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.cuatroHojasTresCorredizasUnaFijaMod(
    newAbAlpha,
    pesoPerfiles
  );

  // VIDRIOS
  const vidriosT = await vidrioAlpha.cuatroHojasTresCorredizasUnaFijaVid(
    newAbAlpha
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cincoHojasCorredizas = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.cincoHojasCorredizasPerf(newAbAlpha);
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.cincoHojasCorredizasAcc(newAbAlpha);
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.cincoHojasCorredizasMod(newAbAlpha, pesoPerfiles);

  // VIDRIOS
  const vidriosT = await vidrioAlpha.cincoHojasCorredizasVid(newAbAlpha);

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cincoHojasCuatroCorredizasUnaFija = async (
  newAbAlpha
) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.cincoHojasCuatroCorredizasUnaFijaPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.cincoHojasCuatroCorredizasUnaFijaAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.cincoHojasCuatroCorredizasUnaFijaMod(
    newAbAlpha,
    pesoPerfiles
  );

  // VIDRIOS
  const vidriosT = await vidrioAlpha.cincoHojasCuatroCorredizasUnaFijaVid(
    newAbAlpha
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.seisHojasCorredizas = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.seisHojasCorredizasPerf(newAbAlpha);
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.seisHojasCorredizasAcc(newAbAlpha);
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.seisHojasCorredizasMod(newAbAlpha, pesoPerfiles);

  // VIDRIOS
  const vidriosT = await vidrioAlpha.seisHojasCorredizasVid(newAbAlpha);

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.seisHojasCincoCorredizasUnaFija = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.seisHojasCincoCorredizasUnaFijaPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.seisHojasCincoCorredizasUnaFijaAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.seisHojasCincoCorredizasUnaFijaMod(
    newAbAlpha,
    pesoPerfiles
  );

  // VIDRIOS
  const vidriosT = await vidrioAlpha.seisHojasCincoCorredizasUnaFijaVid(
    newAbAlpha
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.seisHojasCuatroCorredizasDosFijas = async (
  newAbAlpha
) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.seisHojasCuatroCorredizasDosFijasPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.seisHojasCuatroCorredizasDosFijasAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.seisHojasCuatroCorredizasDosFijasMod(
    newAbAlpha,
    pesoPerfiles
  );

  // VIDRIOS
  const vidriosT = await vidrioAlpha.seisHojasCuatroCorredizasDosFijasVid(
    newAbAlpha
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

module.exports = model("AbAlpha", AbAlphaSchema);
