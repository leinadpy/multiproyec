const { Schema, model } = require("mongoose");
const perfilesTemplado = require("./templadoAux/perfTemplado");
const accesoriosTemplado = require("./templadoAux/accTemplado");
const modTemplado = require("./templadoAux/modTemplado");
const vidrioTemplado = require("./templadoAux/vidTemplado");
const servTemplado = require("./templadoAux/servTemplado");

const AbTempladoSchema = new Schema({
  selAbertura: { type: String, required: true },
  cantidad: { type: Number, required: true },
  ancho: { type: Number, required: true },
  ancho2: { type: Number, required: true },
  alto: { type: Number, required: true },
  altofijoinf: Number,
  altofijosup: Number,
  anchofijolat1: Number,
  anchofijolat2: Number,
  tipoEspejo: String,
  tipoCierre: String,
  tipoBrazo: String,
  selColorAluminio: String,
  proveedoraluminio: String,
  tipoManijon: String,
  colorvidrio: String,
  proveedorvidrio: String,
  espesorvidrio: String,
  coloraccesorio: String,
  proveedoraccesorio: String,
  cierreopc: String,
  costo: Number,
  parametro: Number,
  pesoHoja: Number,
  embutido: String,
  arenado: String,
  plastificado: String,
  proveedorarenado: String,
  biselado: String,
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
    case "3": // Ventana/Puerta dos hojas, una corrediza y otra fija, con paño fijo inferior ó superior
      costo = await newAbTemplado.dosHojasUnaCorredizaUnaFijaFijoInferior(
        newAbTemplado
      );
      break;
    case "4": // Ventana/Puerta dos hojas, una corrediza y otra fija, con paño fijo inferior y superior
      costo = await newAbTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperior(
        newAbTemplado
      );
      break;
    case "5": // Ventana/Puerta de una hoja
      costo = await newAbTemplado.unaHojaCorrediza(newAbTemplado);
      break;
    case "6": // Ventana/Puerta tres hojas, dos corredizas y una fija, guía triple
      costo = await newAbTemplado.tresHojasDosCorredizasUnaFija(newAbTemplado);
      break;
    case "7": // Ventana/Puerta seis hojas, cuatro corredizas y dos fijas, guía triple
      costo = await newAbTemplado.seisHojasCuatroCorredizasDosFijas(
        newAbTemplado
      );
      break;
    case "11": // Puerta de una hoja pivotante
      costo = await newAbTemplado.puertaUnaHojaPivotante(newAbTemplado);
      break;
    case "12": // Puerta de dos hojas pivotantes
      costo = await newAbTemplado.puertaDosHojasPivotantes(newAbTemplado);
      break;
    case "13": // Puerta de una hoja pivotante y un paño fijo lateral
      costo = await newAbTemplado.puertaUnaHojaPivotantePañoFijoLat(
        newAbTemplado
      );
      break;
    case "14": // Puerta de una hoja pivotante y dos paños fijos laterales
      costo = await newAbTemplado.puertaUnaHojaPivotantePañosFijosLat(
        newAbTemplado
      );
      break;
    case "15": // Puerta de una hoja pivotante y paño fijo superior *
      costo = await newAbTemplado.puertaUnaHojaPivotantePañoFijoSup(
        newAbTemplado
      );
      break;
    case "16": // Puerta de dos hojas pivotantes y paño fijo superior
      costo = await newAbTemplado.puertaDosHojasPivotantesPañoFijoSup(
        newAbTemplado
      );
      break;
    case "17": // Puerta de dos hojas pivotantes y paño fijo lateral
      costo = await newAbTemplado.puertaDosHojasPivotantesPañoFijoLat(
        newAbTemplado
      );
      break;
    case "18": // Puerta de dos hojas pivotantes y dos paños fijos laterales
      costo = await newAbTemplado.puertaDosHojasPivotantesPañosFijosLat(
        newAbTemplado
      );
      break;
    case "21": // Ventana de una hoja proyectante
      costo = await newAbTemplado.proyectanteUnaHoja(newAbTemplado);
      break;
    case "22": // Ventana de una hoja proyectante con paño fijo inferior ó superior
      costo = await newAbTemplado.proyectanteUnaHojaPañoFijoInf(newAbTemplado);
      break;
    case "23": // Ventana de una hoja proyectante con paños fijos inferior y superior
      costo = await newAbTemplado.proyectanteUnaHojaPañoFijoInfSup(
        newAbTemplado
      );
      break;
    case "24": // Ventana de dos hojas proyectantes
      costo = await newAbTemplado.proyectanteDosHojas(newAbTemplado);
      break;
    case "31": // Mampara para box de baño frontal 2 hojas
      costo = await newAbTemplado.mamparaDosHojasUnaCorredizaUnaFija(
        newAbTemplado
      );
      break;
    case "32": // Mampara para box de baño fija
      costo = await newAbTemplado.mamparaFija(newAbTemplado);
      break;
    case "33": // Mampara para box de baño esquinero, dos corredizas y dos fijas
      costo = await newAbTemplado.mamparaEsquineroDosCorredizasDosFijas(
        newAbTemplado
      );
      break;
    case "34": // Mampara para box de baño esquinero, una corrediza y dos fijas
      costo = await newAbTemplado.mamparaEsquineroUnaCorredizaDosFijas(
        newAbTemplado
      );
      break;
    case "35": // Mampara para box de baño de una hoja batiente
      costo = await newAbTemplado.mamparaUnaBatiente(newAbTemplado);
      break;
    case "36": // Mampara para box de baño de una hoja batiente con fijo lateral
      costo = await newAbTemplado.mamparaUnaBatienteFijoLat(newAbTemplado);
      break;
    case "37": // Mampara para box de baño de dos hojas batientes
      costo = await newAbTemplado.mamparaDosBatientes(newAbTemplado);
      break;
    case "41": // Espejo pegado a la pared / flotante
      costo = await newAbTemplado.espejo(newAbTemplado);
      break;
    case "51": // Paño fijo de un módulo
      costo = await newAbTemplado.pañoFijo(newAbTemplado);
      break;
    case "52": // Paño fijo de un módulo con tubos 50x50
      costo = await newAbTemplado.pañoFijoTubos50x50(newAbTemplado);
      break;
    case "53": // Paño fijo de un módulo con tubos 50x100
      costo = await newAbTemplado.pañoFijoTubos50x100(newAbTemplado);
      break;
    case "71": // Ventana de una hoja pivotante
      costo = await newAbTemplado.ventanaPivotanteUnaHoja(newAbTemplado);
      break;
    case "72": // Ventana de una hoja pivotante con paño fijo inferior ó superior
      costo = await newAbTemplado.ventanaPivotanteUnaHojaFijoInf(newAbTemplado);
      break;
    case "73": // Ventana de una hoja pivotante con paño fijo inferior y superior
      costo = await newAbTemplado.ventanaPivotanteUnaHojaFijoInfSup(
        newAbTemplado
      );
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
  const accTemplado = await accesoriosTemplado.dosHojasUnaCorredizaUnaFijaAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.dosHojasUnaCorredizaUnaFijaMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.dosHojasUnaCorredizaUnaFijaAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
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
  const accTemplado = await accesoriosTemplado.cuatroHojasDosCorredizasDosFijasAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.cuatroHojasDosCorredizasDosFijasMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.cuatroHojasDosCorredizasDosFijasAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
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
  const accTemplado = await accesoriosTemplado.unaHojaCorredizaAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.unaHojaCorredizaMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.unaHojaCorredizaAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.pañoFijo = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.pañoFijoPerf(newAbTemplado);
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.pañoFijoVid(newAbTemplado);

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.pañoFijoAcc(newAbTemplado);
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.pañoFijoMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.pañoFijoAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.mamparaFija = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.mamparaFijaPerf(newAbTemplado);
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.mamparaFijaVid(newAbTemplado);

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.mamparaFijaAcc(newAbTemplado);
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.mamparaFijaMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.mamparaFijaAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.mamparaDosHojasUnaCorredizaUnaFija = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.mamparaDosHojasUnaCorredizaUnaFijaPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.mamparaDosHojasUnaCorredizaUnaFijaVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.mamparaDosHojasUnaCorredizaUnaFijaAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.mamparaDosHojasUnaCorredizaUnaFijaMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.mamparaDosHojasUnaCorredizaUnaFijaAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.dosHojasUnaCorredizaUnaFijaFijoInferior = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperior = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperiorPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperiorVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperiorAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperiorMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperiorAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.tresHojasDosCorredizasUnaFija = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.tresHojasDosCorredizasUnaFijaPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.tresHojasDosCorredizasUnaFijaVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.tresHojasDosCorredizasUnaFijaAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.tresHojasDosCorredizasUnaFijaMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.tresHojasDosCorredizasUnaFijaAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.seisHojasCuatroCorredizasDosFijas = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.seisHojasCuatroCorredizasDosFijasPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.seisHojasCuatroCorredizasDosFijasVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.seisHojasCuatroCorredizasDosFijasAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.seisHojasCuatroCorredizasDosFijasMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.seisHojasCuatroCorredizasDosFijasAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.mamparaEsquineroDosCorredizasDosFijas = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.mamparaEsquineroDosCorredizasDosFijasPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.mamparaEsquineroDosCorredizasDosFijasVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.mamparaEsquineroDosCorredizasDosFijasAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.mamparaEsquineroDosCorredizasDosFijasMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.mamparaEsquineroDosCorredizasDosFijasAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.mamparaEsquineroUnaCorredizaDosFijas = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.mamparaEsquineroUnaCorredizaDosFijasPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.mamparaEsquineroUnaCorredizaDosFijasVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.mamparaEsquineroUnaCorredizaDosFijasAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.mamparaEsquineroUnaCorredizaDosFijasMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.mamparaEsquineroUnaCorredizaDosFijasAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.puertaUnaHojaPivotante = async (newAbTemplado) => {
  // VIDRIOS
  const vidriosT = await vidrioTemplado.puertaUnaHojaPivotanteVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.puertaUnaHojaPivotanteAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.puertaUnaHojaPivotanteMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.puertaUnaHojaPivotanteAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round((costoAccesorios + vidriosT + mod + servicioT) * 100) / 100;
  return costoT;
};

AbTempladoSchema.methods.puertaDosHojasPivotantes = async (newAbTemplado) => {
  // VIDRIOS
  const vidriosT = await vidrioTemplado.puertaDosHojasPivotantesVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.puertaDosHojasPivotantesAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.puertaDosHojasPivotantesMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.puertaDosHojasPivotantesAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round((costoAccesorios + vidriosT + mod + servicioT) * 100) / 100;
  return costoT;
};

AbTempladoSchema.methods.puertaUnaHojaPivotantePañoFijoLat = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.puertaUnaHojaPivotantePañoFijoLatPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.puertaUnaHojaPivotantePañoFijoLatVid(
    newAbTemplado
  );

  // ACCESORIOSy
  const accTemplado = await accesoriosTemplado.puertaUnaHojaPivotantePañoFijoLatAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.puertaUnaHojaPivotantePañoFijoLatMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.puertaUnaHojaPivotantePañoFijoLatAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.puertaUnaHojaPivotantePañosFijosLat = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.puertaUnaHojaPivotantePañosFijosLatPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.puertaUnaHojaPivotantePañosFijosLatVid(
    newAbTemplado
  );

  // ACCESORIOSy
  const accTemplado = await accesoriosTemplado.puertaUnaHojaPivotantePañosFijosLatAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.puertaUnaHojaPivotantePañosFijosLatMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.puertaUnaHojaPivotantePañosFijosLatAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.puertaUnaHojaPivotantePañoFijoSup = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.puertaUnaHojaPivotantePañoFijoSupPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.puertaUnaHojaPivotantePañoFijoSupVid(
    newAbTemplado
  );

  // ACCESORIOSy
  const accTemplado = await accesoriosTemplado.puertaUnaHojaPivotantePañoFijoSupAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.puertaUnaHojaPivotantePañoFijoSupMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.puertaUnaHojaPivotantePañoFijoSupAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.puertaDosHojasPivotantesPañoFijoSup = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.puertaDosHojasPivotantesPañoFijoSupPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.puertaDosHojasPivotantesPañoFijoSupVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.puertaDosHojasPivotantesPañoFijoSupAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.puertaDosHojasPivotantesPañoFijoSupMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.puertaDosHojasPivotantesPañoFijoSupAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.puertaDosHojasPivotantesPañoFijoLat = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.puertaDosHojasPivotantesPañoFijoLatPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.puertaDosHojasPivotantesPañoFijoLatVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.puertaDosHojasPivotantesPañoFijoLatAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.puertaDosHojasPivotantesPañoFijoLatMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.puertaDosHojasPivotantesPañoFijoLatAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.puertaDosHojasPivotantesPañosFijosLat = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.puertaDosHojasPivotantesPañosFijosLatPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.puertaDosHojasPivotantesPañosFijosLatVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.puertaDosHojasPivotantesPañosFijosLatAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.puertaDosHojasPivotantesPañosFijosLatMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.puertaDosHojasPivotantesPañosFijosLatAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.proyectanteUnaHoja = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.proyectanteUnaHojaPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.proyectanteUnaHojaVid(newAbTemplado);

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.proyectanteUnaHojaAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.proyectanteUnaHojaMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.proyectanteUnaHojaAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.proyectanteUnaHojaPañoFijoInf = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.proyectanteUnaHojaPañoFijoInfPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.proyectanteUnaHojaPañoFijoInfVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.proyectanteUnaHojaPañoFijoInfAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.proyectanteUnaHojaPañoFijoInfMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.proyectanteUnaHojaPañoFijoInfAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.proyectanteUnaHojaPañoFijoInfSup = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.proyectanteUnaHojaPañoFijoInfSupPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.proyectanteUnaHojaPañoFijoInfSupVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.proyectanteUnaHojaPañoFijoInfSupAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.proyectanteUnaHojaPañoFijoInfSupMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.proyectanteUnaHojaPañoFijoInfSupAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.proyectanteDosHojas = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.proyectanteDosHojasPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.proyectanteDosHojasVid(newAbTemplado);

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.proyectanteDosHojasAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.proyectanteDosHojasMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.proyectanteDosHojasAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.ventanaPivotanteUnaHoja = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.ventanaPivotanteUnaHojaPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.ventanaPivotanteUnaHojaVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.ventanaPivotanteUnaHojaAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.ventanaPivotanteUnaHojaMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.ventanaPivotanteUnaHojaAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.ventanaPivotanteUnaHojaFijoInf = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.ventanaPivotanteUnaHojaFijoInfPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.ventanaPivotanteUnaHojaFijoInfVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.ventanaPivotanteUnaHojaFijoInfAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.ventanaPivotanteUnaHojaFijoInfMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.ventanaPivotanteUnaHojaFijoInfAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.ventanaPivotanteUnaHojaFijoInfSup = async (
  newAbTemplado
) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.ventanaPivotanteUnaHojaFijoInfSupPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.ventanaPivotanteUnaHojaFijoInfSupVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.ventanaPivotanteUnaHojaFijoInfSupAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.ventanaPivotanteUnaHojaFijoInfSupMod(
    newAbTemplado
  );

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.ventanaPivotanteUnaHojaFijoInfSupAren(
      newAbTemplado
    );
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.espejo = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.espejoPerf(newAbTemplado);
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.espejoVid(newAbTemplado);

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.espejoAcc(newAbTemplado);
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.espejoMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  servicioT = await servTemplado.espejoAren(newAbTemplado);

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.mamparaUnaBatiente = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.mamparaUnaBatientePerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.mamparaUnaBatienteVid(newAbTemplado);

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.mamparaUnaBatienteAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.mamparaUnaBatienteMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.mamparaUnaBatienteAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.mamparaUnaBatienteFijoLat = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.mamparaUnaBatienteFijoLatPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.mamparaUnaBatienteFijoLatVid(
    newAbTemplado
  );

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.mamparaUnaBatienteFijoLatAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.mamparaUnaBatienteFijoLatMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.mamparaUnaBatienteFijoLatAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.mamparaDosBatientes = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.mamparaDosBatientesPerf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.mamparaDosBatientesVid(newAbTemplado);

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.mamparaDosBatientesAcc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.mamparaDosBatientesMod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.mamparaDosBatientesAren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.pañoFijoTubos50x50 = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.pañoFijoTubos50x50Perf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.pañoFijoTubos50x50Vid(newAbTemplado);

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.pañoFijoTubos50x50Acc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.pañoFijoTubos50x50Mod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.pañoFijoTubos50x50Aren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

AbTempladoSchema.methods.pañoFijoTubos50x100 = async (newAbTemplado) => {
  // PERFILES
  const perfTemplado = await perfilesTemplado.pañoFijoTubos50x100Perf(
    newAbTemplado
  );
  const costoPerfiles = perfTemplado[0];
  const pesoPerfiles = perfTemplado[1];
  const perfiles = perfTemplado[2];

  // VIDRIOS
  const vidriosT = await vidrioTemplado.pañoFijoTubos50x100Vid(newAbTemplado);

  // ACCESORIOS
  const accTemplado = await accesoriosTemplado.pañoFijoTubos50x100Acc(
    newAbTemplado
  );
  const costoAccesorios = accTemplado[0];
  const accesorios = accTemplado[1];

  // MANO DE OBRA
  const mod = await modTemplado.pañoFijoTubos50x100Mod(newAbTemplado);

  // SERVICIO
  let servicioT = 0;
  if (newAbTemplado.arenado !== "No") {
    servicioT = await servTemplado.pañoFijoTubos50x100Aren(newAbTemplado);
  }

  // SUMATORIA TOTAL
  const costoT =
    Math.round(
      (costoPerfiles + costoAccesorios + vidriosT + mod + servicioT) * 100
    ) / 100;
  return costoT;
};

module.exports = model("AbTemplado", AbTempladoSchema);
