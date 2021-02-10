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
  const tipo = 31.2;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.mamparaDosHojasUnaCorredizaUnaFijaMod = async (newAbTemplado) => {
  // Mano de obra montaje 29
  const tipo = 29;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorMod = async (
  newAbTemplado
) => {
  // Mano de obra montaje 16 puertas y 20 ventanas
  let tipo = 20;
  if (newAbTemplado.espesorvidrio == "10") {
    tipo = 16;
  }
  const modCol = (await MOD.obtenerCosto(tipo)) + 5000;
  const mod =
    Math.round(
      ((modCol * newAbTemplado.ancho * newAbTemplado.alto) / 1000000 / 7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperiorMod = async (
  newAbTemplado
) => {
  // Mano de obra montaje 16 puertas y 20 ventanas
  let tipo = 20;
  if (newAbTemplado.espesorvidrio == "10") {
    tipo = 16;
  }
  const modCol = (await MOD.obtenerCosto(tipo)) + 10000;
  const mod =
    Math.round(
      ((modCol * newAbTemplado.ancho * newAbTemplado.alto) / 1000000 / 7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.tresHojasDosCorredizasUnaFijaMod = async (newAbTemplado) => {
  // Mano de obra montaje 16 puertas y 20 ventanas
  const tipo = 17;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod =
    Math.round(
      ((modCol * newAbTemplado.ancho * newAbTemplado.alto) / 1000000 / 7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.seisHojasCuatroCorredizasDosFijasMod = async (newAbTemplado) => {
  // Mano de obra montaje 16 puertas y 20 ventanas
  const tipo = 17;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod =
    Math.round(
      ((modCol * newAbTemplado.ancho * newAbTemplado.alto) / 1000000 / 7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.mamparaEsquineroDosCorredizasDosFijasMod = async (
  newAbTemplado
) => {
  // Mano de obra montaje 30
  const tipo = 30;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.puertaUnaHojaPivotanteMod = async (newAbTemplado) => {
  let tipo = 0;
  if (newAbTemplado.tipoCierre == "4") {
    if (newAbTemplado.ancho > 1200 || newAbTemplado.alto > 2400) {
      tipo = 9;
    } else {
      tipo = 11;
    }
  } else {
    if (newAbTemplado.ancho > 1200 || newAbTemplado.alto > 2400) {
      tipo = 8;
    } else {
      tipo = 10;
    }
  }
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.puertaDosHojasPivotantesMod = async (newAbTemplado) => {
  let tipo = 0;
  let tamaño = "";
  let modCol1 = 0;
  let modCol2 = 0;
  if (newAbTemplado.tipoCierre == "4") {
    if (newAbTemplado.ancho / 2 > 1200 || newAbTemplado.alto > 2400) {
      tipo = 9;
      tamaño = "grande";
    } else {
      tipo = 11;
      tamaño = "pequeño";
    }
  } else {
    if (newAbTemplado.ancho / 2 > 1200 || newAbTemplado.alto > 2400) {
      tipo = 8;
      tamaño = "grande";
    } else {
      tipo = 10;
      tamaño = "pequeño";
    }
  }
  if (newAbTemplado.tipoCierre == "5") {
    tamaño == "grande" ? (tipo = 8) : (tipo = 10);
    modCol1 = await MOD.obtenerCosto(tipo);
    tamaño == "grande" ? (tipo = 9) : (tipo = 11);
    modCol2 = await MOD.obtenerCosto(tipo);
  } else {
    modCol1 = await MOD.obtenerCosto(tipo);
    modCol2 = await MOD.obtenerCosto(tipo);
  }
  const modCol = modCol1 + modCol2;
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.puertaUnaHojaPivotantePañoFijoLatMod = async (newAbTemplado) => {
  let tipo = 0;
  if (newAbTemplado.tipoCierre == "4") {
    if (
      newAbTemplado.ancho - newAbTemplado.anchofijolat1 > 1200 ||
      newAbTemplado.alto > 2400
    ) {
      tipo = 9;
    } else {
      tipo = 11;
    }
  } else {
    if (
      newAbTemplado.ancho - newAbTemplado.anchofijolat1 > 1200 ||
      newAbTemplado.alto > 2400
    ) {
      tipo = 8;
    } else {
      tipo = 10;
    }
  }
  const tipo2 = 20;
  const modCol2 = (await MOD.obtenerCosto(tipo2)) + 5000;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod =
    Math.round(
      ((modCol +
        (modCol2 * newAbTemplado.anchofijolat1 * newAbTemplado.alto) /
          1000000) /
        7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.puertaUnaHojaPivotantePañosFijosLatMod = async (newAbTemplado) => {
  let tipo = 0;
  if (newAbTemplado.tipoCierre == "4") {
    if (
      newAbTemplado.ancho -
        newAbTemplado.anchofijolat1 -
        newAbTemplado.anchofijolat2 >
        1200 ||
      newAbTemplado.alto > 2400
    ) {
      tipo = 9;
    } else {
      tipo = 11;
    }
  } else {
    if (
      newAbTemplado.ancho -
        newAbTemplado.anchofijolat1 -
        newAbTemplado.anchofijolat2 >
        1200 ||
      newAbTemplado.alto > 2400
    ) {
      tipo = 8;
    } else {
      tipo = 10;
    }
  }
  const tipo2 = 20;
  const modCol2 = (await MOD.obtenerCosto(tipo2)) + 5000;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod =
    Math.round(
      ((modCol +
        (modCol2 *
          (newAbTemplado.anchofijolat1 + newAbTemplado.anchofijolat2) *
          newAbTemplado.alto) /
          1000000) /
        7000) *
        100
    ) / 100;
  return mod;
};

modTemplado.puertaUnaHojaPivotantePañoFijoSupMod = async (newAbTemplado) => {
  let tipo = 0;
  let areaFijoSup = 0;
  if (newAbTemplado.tipoCierre == "4") {
    if (
      newAbTemplado.ancho > 1200 ||
      newAbTemplado.alto - newAbTemplado.altofijosup > 2400
    ) {
      tipo = 9;
    } else {
      tipo = 11;
    }
  } else {
    if (
      newAbTemplado.ancho > 1200 ||
      newAbTemplado.alto - newAbTemplado.altofijosup > 2400
    ) {
      tipo = 8;
    } else {
      tipo = 10;
    }
  }
  const tipo2 = 20;
  const modCol2 = (await MOD.obtenerCosto(tipo2)) + 5000;
  const modCol = await MOD.obtenerCosto(tipo);
  if ((newAbTemplado.ancho * newAbTemplado.altofijosup) / 1000000 < 1) {
    areaFijoSup = 1;
  } else {
    areaFijoSup = (newAbTemplado.ancho * newAbTemplado.altofijosup) / 1000000;
  }
  const mod = Math.round(((modCol + modCol2 * areaFijoSup) / 7000) * 100) / 100;
  return mod;
};

modTemplado.puertaDosHojasPivotantesPañoFijoSupMod = async (newAbTemplado) => {
  let tipo = 0;
  let tamaño = "";
  let modCol1 = 0;
  let modCol2 = 0;
  let areaFijoSup = 0;
  if (newAbTemplado.tipoCierre == "4") {
    if (
      newAbTemplado.ancho / 2 > 1200 ||
      newAbTemplado.alto - newAbTemplado.altofijosup > 2400
    ) {
      tipo = 9;
      tamaño = "grande";
    } else {
      tipo = 11;
      tamaño = "pequeño";
    }
  } else {
    if (
      newAbTemplado.ancho / 2 > 1200 ||
      newAbTemplado.alto - newAbTemplado.altofijosup > 2400
    ) {
      tipo = 8;
      tamaño = "grande";
    } else {
      tipo = 10;
      tamaño = "pequeño";
    }
  }
  if (newAbTemplado.tipoCierre == "5") {
    tamaño == "grande" ? (tipo = 8) : (tipo = 10);
    modCol1 = await MOD.obtenerCosto(tipo);
    tamaño == "grande" ? (tipo = 9) : (tipo = 11);
    modCol2 = await MOD.obtenerCosto(tipo);
  } else {
    modCol1 = await MOD.obtenerCosto(tipo);
    modCol2 = await MOD.obtenerCosto(tipo);
  }
  const tipo2 = 20;
  const modCol3 = (await MOD.obtenerCosto(tipo2)) + 5000;
  if ((newAbTemplado.ancho * newAbTemplado.altofijosup) / 1000000 < 1) {
    areaFijoSup = 1;
  } else {
    areaFijoSup = (newAbTemplado.ancho * newAbTemplado.altofijosup) / 1000000;
  }
  const modCol = modCol1 + modCol2 + areaFijoSup * modCol3;
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.puertaDosHojasPivotantesPañoFijoLatMod = async (newAbTemplado) => {
  let tipo = 0;
  let tamaño = "";
  let modCol1 = 0;
  let modCol2 = 0;
  let areaFijoLat = 0;
  if (newAbTemplado.tipoCierre == "4") {
    if (
      (newAbTemplado.ancho - newAbTemplado.anchofijolat1) / 2 > 1200 ||
      newAbTemplado.alto > 2400
    ) {
      tipo = 9;
      tamaño = "grande";
    } else {
      tipo = 11;
      tamaño = "pequeño";
    }
  } else {
    if (
      (newAbTemplado.ancho - newAbTemplado.anchofijolat1) / 2 > 1200 ||
      newAbTemplado.alto > 2400
    ) {
      tipo = 8;
      tamaño = "grande";
    } else {
      tipo = 10;
      tamaño = "pequeño";
    }
  }
  if (newAbTemplado.tipoCierre == "5") {
    tamaño == "grande" ? (tipo = 8) : (tipo = 10);
    modCol1 = await MOD.obtenerCosto(tipo);
    tamaño == "grande" ? (tipo = 9) : (tipo = 11);
    modCol2 = await MOD.obtenerCosto(tipo);
  } else {
    modCol1 = await MOD.obtenerCosto(tipo);
    modCol2 = await MOD.obtenerCosto(tipo);
  }
  const tipo2 = 20;
  const modCol3 = (await MOD.obtenerCosto(tipo2)) + 5000;
  if ((newAbTemplado.anchofijolat1 * newAbTemplado.alto) / 1000000 < 1) {
    areaFijoLat = 1;
  } else {
    areaFijoLat = (newAbTemplado.anchofijolat1 * newAbTemplado.alto) / 1000000;
  }
  const modCol = modCol1 + modCol2 + areaFijoLat * modCol3;
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.mamparaFijaMod = async (newAbTemplado) => {
  const tipo = 31.2;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.puertaDosHojasPivotantesPañosFijosLatMod = async (
  newAbTemplado
) => {
  let tipo = 0;
  let tamaño = "";
  let modCol1 = 0;
  let modCol2 = 0;
  let areaFijoLat1 = 0;
  let areaFijoLat2 = 0;
  if (newAbTemplado.tipoCierre == "4") {
    if (
      (newAbTemplado.ancho -
        newAbTemplado.anchofijolat1 -
        newAbTemplado.anchofijolat2) /
        2 >
        1200 ||
      newAbTemplado.alto > 2400
    ) {
      tipo = 9;
      tamaño = "grande";
    } else {
      tipo = 11;
      tamaño = "pequeño";
    }
  } else {
    if (
      (newAbTemplado.ancho -
        newAbTemplado.anchofijolat1 -
        newAbTemplado.anchofijolat2) /
        2 >
        1200 ||
      newAbTemplado.alto > 2400
    ) {
      tipo = 8;
      tamaño = "grande";
    } else {
      tipo = 10;
      tamaño = "pequeño";
    }
  }
  if (newAbTemplado.tipoCierre == "5") {
    tamaño == "grande" ? (tipo = 8) : (tipo = 10);
    modCol1 = await MOD.obtenerCosto(tipo);
    tamaño == "grande" ? (tipo = 9) : (tipo = 11);
    modCol2 = await MOD.obtenerCosto(tipo);
  } else {
    modCol1 = await MOD.obtenerCosto(tipo);
    modCol2 = await MOD.obtenerCosto(tipo);
  }
  const tipo2 = 20;
  const modCol3 = (await MOD.obtenerCosto(tipo2)) + 5000;
  if ((newAbTemplado.anchofijolat1 * newAbTemplado.alto) / 1000000 < 1) {
    areaFijoLat1 = 1;
  } else {
    areaFijoLat1 = (newAbTemplado.anchofijolat1 * newAbTemplado.alto) / 1000000;
  }
  if ((newAbTemplado.anchofijolat2 * newAbTemplado.alto) / 1000000 < 1) {
    areaFijoLat2 = 1;
  } else {
    areaFijoLat2 = (newAbTemplado.anchofijolat2 * newAbTemplado.alto) / 1000000;
  }
  const areaFijoLat = areaFijoLat1 + areaFijoLat2;
  const modCol = modCol1 + modCol2 + areaFijoLat * modCol3;
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.proyectanteUnaHojaMod = async (newAbTemplado) => {
  const tipo = 27;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.proyectanteUnaHojaPañoFijoInfMod = async (newAbTemplado) => {
  const tipo = 26;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.proyectanteUnaHojaPañoFijoInfSupMod = async (newAbTemplado) => {
  const tipo = 26;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round(((modCol + 30000) / 7000) * 100) / 100;
  return mod;
};

modTemplado.proyectanteDosHojasMod = async (newAbTemplado) => {
  const tipo = 27;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round(((modCol * 2 + 10000) / 7000) * 100) / 100;
  return mod;
};

modTemplado.ventanaPivotanteUnaHojaMod = async (newAbTemplado) => {
  const tipo = 27;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.ventanaPivotanteUnaHojaFijoInfMod = async (newAbTemplado) => {
  const tipo = 26;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round((modCol / 7000) * 100) / 100;
  return mod;
};

modTemplado.ventanaPivotanteUnaHojaFijoInfSupMod = async (newAbTemplado) => {
  const tipo = 26;
  const modCol = await MOD.obtenerCosto(tipo);
  const mod = Math.round(((modCol + 30000) / 7000) * 100) / 100;
  return mod;
};

module.exports = modTemplado;
