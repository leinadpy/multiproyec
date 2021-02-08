const Servicio = require("../Servicio");
const servTemplado = {};

servTemplado.dosHojasUnaCorredizaUnaFijaAren = async (newAbTemplado) => {
  // Servicio
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  if (newAbTemplado.espesorvidrio == 8) {
    descAltoFijo = 66;
    descAltoCorredizo = 20;
  } else {
    descAltoFijo = 68;
    descAltoCorredizo = 22;
  }
  const anchoFijoVidrio = Math.round(newAbTemplado.ancho / 2);
  const altoFijoVidrio = newAbTemplado.alto - descAltoFijo;
  const anchoCorredizoVidrio = Math.round(newAbTemplado.ancho / 2 + 50);
  const altoCorredizoVidrio = newAbTemplado.alto - descAltoCorredizo;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio * altoCorredizoVidrio) / 1000000;
  const areaTotal = areaFijoVidrio + areaCorredizoVidrio;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaTotal * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.cuatroHojasDosCorredizasDosFijasAren = async (newAbTemplado) => {
  // Servicio
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  if (newAbTemplado.espesorvidrio == 8) {
    descAltoFijo = 66;
    descAltoCorredizo = 20;
  } else {
    descAltoFijo = 68;
    descAltoCorredizo = 22;
  }
  const anchoFijoVidrio = Math.round(newAbTemplado.ancho / 4);
  const altoFijoVidrio = newAbTemplado.alto - descAltoFijo;
  const anchoCorredizoVidrio = Math.round(newAbTemplado.ancho / 4 + 50);
  const altoCorredizoVidrio = newAbTemplado.alto - descAltoCorredizo;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio * 2) / 1000000;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio * altoCorredizoVidrio * 2) / 1000000;
  const areaTotal = areaFijoVidrio + areaCorredizoVidrio;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaTotal * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.unaHojaCorredizaAren = async (newAbTemplado) => {
  // Servicio
  let descAltoCorredizo = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  if (newAbTemplado.espesorvidrio == 8) {
    descAltoCorredizo = 20;
  } else {
    descAltoCorredizo = 22;
  }
  const anchoCorredizoVidrio = Math.round(newAbTemplado.ancho / 2 + 50);
  const altoCorredizoVidrio = newAbTemplado.alto - descAltoCorredizo;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio * altoCorredizoVidrio) / 1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT =
    Math.round((precioServicio * areaCorredizoVidrio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.pañoFijoAren = async (newAbTemplado) => {
  // Servicio
  const anchoFijoVidrio = newAbTemplado.ancho - 30;
  const altoFijoVidrio = newAbTemplado.alto - 30;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT =
    Math.round((precioServicio * areaFijoVidrio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.mamparaFijaAren = async (newAbTemplado) => {
  // Servicio
  const anchoFijoVidrio = newAbTemplado.ancho - 10;
  const altoFijoVidrio = newAbTemplado.alto - 15;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT =
    Math.round((precioServicio * areaFijoVidrio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.mamparaDosHojasUnaCorredizaUnaFijaAren = async (newAbTemplado) => {
  // Servicio
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  if (newAbTemplado.espesorvidrio == 8) {
    descAltoFijo = 66;
    descAltoCorredizo = 20;
  } else {
    descAltoFijo = 68;
    descAltoCorredizo = 22;
  }
  const anchoFijoVidrio = Math.round(newAbTemplado.ancho / 2);
  const altoFijoVidrio = newAbTemplado.alto - descAltoFijo;
  const anchoCorredizoVidrio = Math.round(newAbTemplado.ancho / 2 + 50);
  const altoCorredizoVidrio = newAbTemplado.alto - descAltoCorredizo;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio * altoCorredizoVidrio) / 1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  console.log(precioServicio)
  const servicioT =
    Math.round(
      (precioServicio * (areaCorredizoVidrio + areaFijoVidrio) * 100) / 1.1
    ) / 100;
  return servicioT;
};

servTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorAren = async (
  newAbTemplado
) => {
  // Servicio
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  const altoCorrediza = newAbTemplado.alto - newAbTemplado.altofijoinf;
  if (newAbTemplado.espesorvidrio == 8) {
    descAltoFijo = 66;
    descAltoCorredizo = 20;
  } else {
    descAltoFijo = 68;
    descAltoCorredizo = 22;
  }
  const anchoFijoVidrio = Math.round(newAbTemplado.ancho / 2);
  const altoFijoVidrio = altoCorrediza - descAltoFijo;
  const anchoCorredizoVidrio = Math.round(newAbTemplado.ancho / 2 + 50);
  const altoCorredizoVidrio = altoCorrediza - descAltoCorredizo;
  const anchoFijoInfVidrio = newAbTemplado.ancho - 30;
  const altoFijoInfVidrio = newAbTemplado.altofijoinf - 30;
  const areaFijoVidrio =
    (anchoFijoVidrio * altoFijoVidrio +
      anchoFijoInfVidrio * altoFijoInfVidrio) /
    1000000;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio * altoCorredizoVidrio) / 1000000;
  const areaTotal = areaFijoVidrio + areaCorredizoVidrio;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaTotal * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperiorAren = async (
  newAbTemplado
) => {
  // Servicio
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  const altoCorrediza =
    newAbTemplado.alto - newAbTemplado.altofijoinf - newAbTemplado.altofijosup;
  if (newAbTemplado.espesorvidrio == 8) {
    descAltoFijo = 66;
    descAltoCorredizo = 20;
  } else {
    descAltoFijo = 68;
    descAltoCorredizo = 22;
  }
  const anchoFijoVidrio = Math.round(newAbTemplado.ancho / 2);
  const altoFijoVidrio = altoCorrediza - descAltoFijo;
  const anchoCorredizoVidrio = Math.round(newAbTemplado.ancho / 2 + 50);
  const altoCorredizoVidrio = altoCorrediza - descAltoCorredizo;
  const anchoFijoInfVidrio = newAbTemplado.ancho - 30;
  const altoFijoInfVidrio = newAbTemplado.altofijoinf - 30;
  const anchoFijoSupVidrio = newAbTemplado.ancho - 30;
  const altoFijoSupVidrio = newAbTemplado.altofijosup - 30;
  const areaFijoVidrio =
    (anchoFijoVidrio * altoFijoVidrio +
      anchoFijoInfVidrio * altoFijoInfVidrio +
      anchoFijoSupVidrio * altoFijoSupVidrio) /
    1000000;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio * altoCorredizoVidrio) / 1000000;
  const areaTotal = areaFijoVidrio + areaCorredizoVidrio;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaTotal * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.tresHojasDosCorredizasUnaFijaAren = async (newAbTemplado) => {
  // Servicio
  const descAltoFijo = 105;
  const descAltoCorredizo2 = 65;
  const descAltoCorredizo1 = 25;
  const anchoFijoVidrio = Math.round(newAbTemplado.ancho / 3);
  const altoFijoVidrio = newAbTemplado.alto - descAltoFijo;
  const anchoCorredizoVidrio1 = Math.round(newAbTemplado.ancho / 3 + 50);
  const altoCorredizoVidrio1 = newAbTemplado.alto - descAltoCorredizo1;
  const anchoCorredizoVidrio2 = Math.round(newAbTemplado.ancho / 3 + 50);
  const altoCorredizoVidrio2 = newAbTemplado.alto - descAltoCorredizo2;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio1 * altoCorredizoVidrio1 +
      anchoCorredizoVidrio2 * altoCorredizoVidrio2) /
    1000000;
  const areaTotal = areaFijoVidrio + areaCorredizoVidrio;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaTotal * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.seisHojasCuatroCorredizasDosFijasAren = async (newAbTemplado) => {
  // Servicio
  const descAltoFijo = 105;
  const descAltoCorredizo2 = 65;
  const descAltoCorredizo1 = 25;
  const anchoFijoVidrio = Math.round(newAbTemplado.ancho / 6);
  const altoFijoVidrio = newAbTemplado.alto - descAltoFijo;
  const anchoCorredizoVidrio1 = Math.round(newAbTemplado.ancho / 6 + 50);
  const altoCorredizoVidrio1 = newAbTemplado.alto - descAltoCorredizo1;
  const anchoCorredizoVidrio2 = Math.round(newAbTemplado.ancho / 6 + 50);
  const altoCorredizoVidrio2 = newAbTemplado.alto - descAltoCorredizo2;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio * 2) / 1000000;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio1 * altoCorredizoVidrio1 * 2 +
      anchoCorredizoVidrio2 * altoCorredizoVidrio2 * 2) /
    1000000;
  const areaTotal = areaFijoVidrio + areaCorredizoVidrio;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaTotal * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.mamparaEsquineroDosCorredizasDosFijasAren = async (
  newAbTemplado
) => {
  // Servicio
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  if (newAbTemplado.espesorvidrio == 8) {
    descAltoFijo = 66;
    descAltoCorredizo = 20;
  } else {
    descAltoFijo = 68;
    descAltoCorredizo = 22;
  }
  const anchoFijoVidrio = Math.round(newAbTemplado.ancho / 2);
  const altoFijoVidrio = newAbTemplado.alto - descAltoFijo;
  const anchoFijoVidrio2 = Math.round(newAbTemplado.ancho2 / 2);
  const altoFijoVidrio2 = newAbTemplado.alto - descAltoFijo;
  const anchoCorredizoVidrio = Math.round(newAbTemplado.ancho / 2 + 50);
  const altoCorredizoVidrio = newAbTemplado.alto - descAltoCorredizo;
  const anchoCorredizoVidrio2 = Math.round(newAbTemplado.ancho2 / 2 + 50);
  const altoCorredizoVidrio2 = newAbTemplado.alto - descAltoCorredizo;
  const areaFijoVidrio =
    (anchoFijoVidrio * altoFijoVidrio + anchoFijoVidrio2 * altoFijoVidrio2) /
    1000000;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio * altoCorredizoVidrio +
      anchoCorredizoVidrio2 * altoCorredizoVidrio2) /
    1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT =
    Math.round(
      (precioServicio * (areaCorredizoVidrio + areaFijoVidrio) * 100) / 1.1
    ) / 100;
  return servicioT;
};

servTemplado.puertaUnaHojaPivotanteAren = async (newAbTemplado) => {
  // Servicio
  const anchoVidrio = newAbTemplado.ancho - 10;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaVidrio * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.puertaDosHojasPivotantesAren = async (newAbTemplado) => {
  // Servicio
  const anchoVidrio = newAbTemplado.ancho - 12;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaVidrio * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.puertaUnaHojaPivotantePañoFijoLatAren = async (newAbTemplado) => {
  // Servicio
  const anchoVidrio = newAbTemplado.ancho - newAbTemplado.anchofijolat1 - 10;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  const anchoFijoVidrio = newAbTemplado.anchofijolat1 - 30;
  const altoFijoVidrio = newAbTemplado.alto - 30;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;

  const servicioT =
    Math.round(((areaVidrio + areaFijoVidrio) * precioServicio * 100) / 1.1) /
    100;
  return servicioT;
};

servTemplado.puertaUnaHojaPivotantePañosFijosLatAren = async (
  newAbTemplado
) => {
  // Servicio
  const anchoVidrio =
    newAbTemplado.ancho -
    newAbTemplado.anchofijolat1 -
    newAbTemplado.anchofijolat2 -
    10;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  const anchoFijoVidrio1 = newAbTemplado.anchofijolat1 - 30;
  const altoFijoVidrio1 = newAbTemplado.alto - 30;
  const anchoFijoVidrio2 = newAbTemplado.anchofijolat1 - 30;
  const altoFijoVidrio2 = newAbTemplado.alto - 30;
  const areaFijoVidrio =
    (anchoFijoVidrio1 * altoFijoVidrio1 + anchoFijoVidrio2 * altoFijoVidrio2) /
    1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;

  const servicioT =
    Math.round(((areaVidrio + areaFijoVidrio) * precioServicio * 100) / 1.1) /
    100;
  return servicioT;
};

servTemplado.puertaUnaHojaPivotantePañoFijoSupAren = async (newAbTemplado) => {
  // Servicio
  const anchoVidrio = newAbTemplado.ancho - 10;
  const altoVidrio = newAbTemplado.alto - newAbTemplado.altofijosup - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  const anchoFijoVidrio = newAbTemplado.ancho - 30;
  const altoFijoVidrio = newAbTemplado.altofijosup - 30;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;

  const servicioT =
    Math.round(((areaVidrio + areaFijoVidrio) * precioServicio * 100) / 1.1) /
    100;
  return servicioT;
};

servTemplado.puertaDosHojasPivotantesPañoFijoSupAren = async (
  newAbTemplado
) => {
  // Servicio
  const anchoVidrio = newAbTemplado.ancho - 12;
  const altoVidrio = newAbTemplado.alto - newAbTemplado.altofijosup - 15;
  const anchoFijoVidrio = newAbTemplado.ancho - 30;
  const altoFijoVidrio = newAbTemplado.altofijosup - 30;
  const areaVidrio =
    (anchoVidrio * altoVidrio + anchoFijoVidrio * altoFijoVidrio) / 1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaVidrio * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.puertaDosHojasPivotantesPañoFijoLatAren = async (
  newAbTemplado
) => {
  // Servicio
  const anchoVidrio = newAbTemplado.ancho - newAbTemplado.anchofijolat1 - 12;
  const altoVidrio = newAbTemplado.alto - 15;
  const anchoFijoVidrio = newAbTemplado.anchofijolat1 - 30;
  const altoFijoVidrio = newAbTemplado.alto - 30;
  const areaVidrio =
    (anchoVidrio * altoVidrio + anchoFijoVidrio * altoFijoVidrio) / 1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaVidrio * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

servTemplado.puertaDosHojasPivotantesPañosFijosLatAren = async (
  newAbTemplado
) => {
  // Servicio
  const anchoVidrio = newAbTemplado.ancho - newAbTemplado.anchofijolat1 - 12;
  const altoVidrio = newAbTemplado.alto - 15;
  const anchoFijoVidrio1 = newAbTemplado.anchofijolat1 - 30;
  const altoFijoVidrio1 = newAbTemplado.alto - 30;
  const anchoFijoVidrio2 = newAbTemplado.anchofijolat2 - 30;
  const altoFijoVidrio2 = newAbTemplado.alto - 30;
  const areaVidrio =
    (anchoVidrio * altoVidrio +
      anchoFijoVidrio1 * altoFijoVidrio1 +
      anchoFijoVidrio2 * altoFijoVidrio2) /
    1000000;
  let precioServicio = await Servicio.obtenerCosto(
    newAbTemplado.arenado,
    newAbTemplado.proveedorarenado
  );
  precioServicio +=
    newAbTemplado.plastificado == "Si"
      ? await Servicio.obtenerCosto("APlastif", "Vidriocar S.A.")
      : 0;
  const servicioT = Math.round((areaVidrio * precioServicio * 100) / 1.1) / 100;
  return servicioT;
};

module.exports = servTemplado;
