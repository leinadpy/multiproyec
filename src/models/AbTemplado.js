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
  alto: { type: Number, required: true },
  altofijoinf: Number,
  altofijosup: Number,
  altofijolat1: Number,
  altofijolat2: Number,
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

    case "31": // Mampara para box de baño frontal 2 hojas
      costo = await newAbTemplado.mamparaDosHojasUnaCorredizaUnaFija(
        newAbTemplado
      );
      break;
    case "32": // Mampara para box de baño fija
      costo = await newAbTemplado.mamparaFija(newAbTemplado);
      break;

    case "51": // Paño fijo de un módulo
      costo = await newAbTemplado.pañoFijo(newAbTemplado);
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

module.exports = model("AbTemplado", AbTempladoSchema);
