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
    case "1F": // Ventana/Puerta dos hojas corredizas, con fijo inferior o superior
      costo = await newAbAlpha.dosHojasCorredizasFijoInferior(newAbAlpha);
      break;
    case "2F": // Ventana/Puerta dos hojas, una corrediza y otra fija, con fijo inferior o superior
      costo = await newAbAlpha.dosHojasUnaCorredizaUnaFijaFijoInferior(
        newAbAlpha
      );
      break;
    case "5F": // Ventana/Puerta cuatro hojas, dos corredizas y dos fijas, con fijo inferior o superior
      costo = await newAbAlpha.cuatroHojasDosCorredizasDosFijasFijoInferior(
        newAbAlpha
      );
      break;
    case "11": // Ventana/Puerta dos hojas corredizas con tela mosquera móvil
      costo = await newAbAlpha.dosHojasCorredizasConTela(newAbAlpha);
      break;
    case "12": // Ventana/Puerta dos hojas una corrediza y una fija con tela mosquera móvil
      costo = await newAbAlpha.dosHojasUnaCorredizaUnaFijaConTela(newAbAlpha);
      break;
    case "13": // Ventana/Puerta cuatro hojas, dos corredizas y dos fijas con tela
      costo = await newAbAlpha.cuatroHojasDosCorredizasDosFijasConTela(
        newAbAlpha
      );
      break;
    case "21": // Ventana de una hoja batiente
      costo = await newAbAlpha.unaHojaBatiente(newAbAlpha);
      break;
    case "23": // Ventana de una hoja oscilobatiente
      costo = await newAbAlpha.unaHojaOscilobatiente(newAbAlpha);
      break;
    case "23F": // Ventana de una hoja oscilobatiente con fijo inferior o superior
      costo = await newAbAlpha.unaHojaOscilobatienteFijoInferior(newAbAlpha);
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

  // VIDRIOS
  const vidriosT = await vidrioAlpha.dosHojasCorredizasVid(newAbAlpha);

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.dosHojasCorredizasAcc(newAbAlpha);
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.dosHojasCorredizasMod(newAbAlpha, pesoPerfiles);

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.dosHojasUnaCorredizaUnaFija = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.dosHojasUnaCorredizaUnaFijaVid(newAbAlpha);

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.tresHojasCorredizas = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.tresHojasCorredizasVid(newAbAlpha);

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.tresHojasDosCorredizasUnaFija = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.tresHojasDosCorredizasUnaFijaVid(
    newAbAlpha
  );

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cuatroHojasDosCorredizasDosFijas = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.cuatroHojasDosCorredizasDosFijasVid(
    newAbAlpha
  );

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cuatroHojasCorredizas = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.cuatroHojasCorredizasVid(newAbAlpha);

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cuatroHojasTresCorredizasUnaFija = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.cuatroHojasTresCorredizasUnaFijaVid(
    newAbAlpha
  );

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cincoHojasCorredizas = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.cincoHojasCorredizasVid(newAbAlpha);

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cincoHojasCuatroCorredizasUnaFija = async (
  newAbAlpha
) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.cincoHojasCuatroCorredizasUnaFijaVid(
    newAbAlpha
  );

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.seisHojasCorredizas = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.seisHojasCorredizasVid(newAbAlpha);

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.seisHojasCincoCorredizasUnaFija = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.seisHojasCincoCorredizasUnaFijaVid(
    newAbAlpha
  );

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.seisHojasCuatroCorredizasDosFijas = async (
  newAbAlpha
) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.seisHojasCuatroCorredizasDosFijasVid(
    newAbAlpha
  );

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

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.dosHojasCorredizasFijoInferior = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.dosHojasCorredizasFijoInferiorVid(
    newAbAlpha
  );

  // PERFILES
  const perfAlpha = await perfilesAlpha.dosHojasCorredizasFijoInferiorPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.dosHojasCorredizasFijoInferiorAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.dosHojasCorredizasFijoInferiorMod(
    newAbAlpha,
    pesoPerfiles
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.dosHojasUnaCorredizaUnaFijaFijoInferior = async (
  newAbAlpha
) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.dosHojasUnaCorredizaUnaFijaFijoInferiorVid(
    newAbAlpha
  );

  // PERFILES
  const perfAlpha = await perfilesAlpha.dosHojasUnaCorredizaUnaFijaFijoInferiorPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.dosHojasUnaCorredizaUnaFijaFijoInferiorAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.dosHojasUnaCorredizaUnaFijaFijoInferiorMod(
    newAbAlpha,
    pesoPerfiles
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cuatroHojasDosCorredizasDosFijasFijoInferior = async (
  newAbAlpha
) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.cuatroHojasDosCorredizasDosFijasFijoInferiorVid(
    newAbAlpha
  );

  // PERFILES
  const perfAlpha = await perfilesAlpha.cuatroHojasDosCorredizasDosFijasFijoInferiorPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.cuatroHojasDosCorredizasDosFijasFijoInferiorAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.cuatroHojasDosCorredizasDosFijasFijoInferiorMod(
    newAbAlpha,
    pesoPerfiles
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.dosHojasCorredizasConTela = async (newAbAlpha) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.dosHojasCorredizasConTelaPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // VIDRIOS
  const vidriosT = await vidrioAlpha.dosHojasCorredizasConTelaVid(newAbAlpha);

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.dosHojasCorredizasConTelaAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.dosHojasCorredizasConTelaMod(
    newAbAlpha,
    pesoPerfiles
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.dosHojasUnaCorredizaUnaFijaConTela = async (
  newAbAlpha
) => {
  // PERFILES
  const perfAlpha = await perfilesAlpha.dosHojasUnaCorredizaUnaFijaConTelaPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // VIDRIOS
  const vidriosT = await vidrioAlpha.dosHojasUnaCorredizaUnaFijaConTelaVid(
    newAbAlpha
  );

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.dosHojasUnaCorredizaUnaFijaConTelaAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.dosHojasUnaCorredizaUnaFijaConTelaMod(
    newAbAlpha,
    pesoPerfiles
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.cuatroHojasDosCorredizasDosFijasConTela = async (
  newAbAlpha
) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.cuatroHojasDosCorredizasDosFijasConTelaVid(
    newAbAlpha
  );

  // PERFILES
  const perfAlpha = await perfilesAlpha.cuatroHojasDosCorredizasDosFijasConTelaPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.cuatroHojasDosCorredizasDosFijasConTelaAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.cuatroHojasDosCorredizasDosFijasConTelaMod(
    newAbAlpha,
    pesoPerfiles
  );

  // SUMATORIA TOTAL
  console.log(vidriosT, costoPerfiles, costoAccesorios, mod);
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.unaHojaOscilobatiente = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.unaHojaOscilobatienteVid(newAbAlpha);

  // PERFILES
  const perfAlpha = await perfilesAlpha.unaHojaOscilobatientePerf(newAbAlpha);
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.unaHojaOscilobatienteAcc(newAbAlpha);
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.unaHojaOscilobatienteMod(newAbAlpha, pesoPerfiles);

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.unaHojaOscilobatienteFijoInferior = async (
  newAbAlpha
) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.unaHojaOscilobatienteFijoInferiorVid(
    newAbAlpha
  );

  // PERFILES
  const perfAlpha = await perfilesAlpha.unaHojaOscilobatienteFijoInferiorPerf(
    newAbAlpha
  );
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.unaHojaOscilobatienteFijoInferiorAcc(
    newAbAlpha
  );
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.unaHojaOscilobatienteFijoInferiorMod(
    newAbAlpha,
    pesoPerfiles
  );

  // SUMATORIA TOTAL
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

AbAlphaSchema.methods.unaHojaBatiente = async (newAbAlpha) => {
  // VIDRIOS
  const vidriosT = await vidrioAlpha.unaHojaBatienteVid(newAbAlpha);

  // PERFILES
  const perfAlpha = await perfilesAlpha.unaHojaBatientePerf(newAbAlpha);
  const costoPerfiles = perfAlpha[0];
  const pesoPerfiles = perfAlpha[1];
  const perfiles = perfAlpha[2];

  // ACCESORIOS
  const accAlpha = await accesorioAlpha.unaHojaBatienteAcc(newAbAlpha);
  const costoAccesorios = accAlpha[0];
  const accesorios = accAlpha[1];

  // MANO DE OBRA
  const mod = await modAlpha.unaHojaBatienteMod(newAbAlpha, pesoPerfiles);

  // SUMATORIA TOTAL
  console.log(vidriosT, costoPerfiles, costoAccesorios, mod);
  const costoT =
    Math.round((vidriosT + costoPerfiles + costoAccesorios + mod) * 100) / 100;
  return costoT;
};

module.exports = model("AbAlpha", AbAlphaSchema);
