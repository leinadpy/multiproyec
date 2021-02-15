const Vidrio = require("../../models/Vidrio");
const vidrioTemplado = {};

vidrioTemplado.dosHojasUnaCorredizaUnaFijaVid = async (newAbTemplado) => {
  // Vidrios
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  let precioCorredizoVidrio = 0;
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
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
  newAbTemplado.pesoHoja =
    areaCorredizoVidrio * 2.5 * newAbTemplado.espesorvidrio;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  precioCorredizoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );

  const vidriosT =
    Math.round(
      ((precioCorredizoVidrio * areaCorredizoVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.cuatroHojasDosCorredizasDosFijasVid = async (newAbTemplado) => {
  // Vidrios
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  let precioCorredizoVidrio = 0;
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
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
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio * altoCorredizoVidrio) / 1000000;
  newAbTemplado.pesoHoja =
    areaCorredizoVidrio * 2.5 * newAbTemplado.espesorvidrio;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  precioCorredizoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );

  const vidriosT =
    Math.round(
      ((precioCorredizoVidrio * areaCorredizoVidrio * 2 +
        precioFijoVidrio * areaFijoVidrio * 2) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.unaHojaCorredizaVid = async (newAbTemplado) => {
  // Vidrios
  let descAltoCorredizo = 0;
  let precioCorredizoVidrio = 0;
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
  newAbTemplado.pesoHoja =
    areaCorredizoVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  precioCorredizoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );

  const vidriosT =
    Math.round((precioCorredizoVidrio * areaCorredizoVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.pañoFijoVid = async (newAbTemplado) => {
  // Vidrios
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoFijoVidrio = newAbTemplado.ancho - 30;
  const altoFijoVidrio = newAbTemplado.alto - 30;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round((precioFijoVidrio * areaFijoVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.mamparaFijaVid = async (newAbTemplado) => {
  // Vidrios
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoFijoVidrio = newAbTemplado.ancho - 10;
  const altoFijoVidrio = newAbTemplado.alto - 15;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round((precioFijoVidrio * areaFijoVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.mamparaDosHojasUnaCorredizaUnaFijaVid = async (
  newAbTemplado
) => {
  // Vidrios
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  let precioCorredizoVidrio = 0;
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
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
  newAbTemplado.pesoHoja =
    areaCorredizoVidrio * 2.5 * newAbTemplado.espesorvidrio;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  precioCorredizoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );

  const vidriosT =
    Math.round(
      ((precioCorredizoVidrio * areaCorredizoVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorVid = async (
  newAbTemplado
) => {
  // Vidrios
  const altoCorrediza = newAbTemplado.alto - newAbTemplado.altofijoinf;
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  let precioCorredizoVidrio = 0;
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
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
  newAbTemplado.pesoHoja =
    areaCorredizoVidrio * 2.5 * newAbTemplado.espesorvidrio;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  precioCorredizoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );

  const vidriosT =
    Math.round(
      ((precioCorredizoVidrio * areaCorredizoVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperiorVid = async (
  newAbTemplado
) => {
  // Vidrios
  const altoCorrediza =
    newAbTemplado.alto - newAbTemplado.altofijoinf - newAbTemplado.altofijosup;
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  let precioCorredizoVidrio = 0;
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
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
  newAbTemplado.pesoHoja =
    areaCorredizoVidrio * 2.5 * newAbTemplado.espesorvidrio;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  precioCorredizoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );

  const vidriosT =
    Math.round(
      ((precioCorredizoVidrio * areaCorredizoVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.tresHojasDosCorredizasUnaFijaVid = async (newAbTemplado) => {
  // Vidrios
  const descAltoFijo = 105;
  const descAltoCorredizo2 = 65;
  const descAltoCorredizo1 = 25;
  let precioCorredizoVidrio = 0;
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
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
  newAbTemplado.pesoHoja =
    ((anchoCorredizoVidrio1 * altoCorredizoVidrio1) / 1000000) *
    2.5 *
    newAbTemplado.espesorvidrio;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  precioCorredizoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );

  const vidriosT =
    Math.round(
      ((precioCorredizoVidrio * areaCorredizoVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.seisHojasCuatroCorredizasDosFijasVid = async (newAbTemplado) => {
  // Vidrios
  const descAltoFijo = 105;
  const descAltoCorredizo2 = 65;
  const descAltoCorredizo1 = 25;
  let precioCorredizoVidrio = 0;
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
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
  newAbTemplado.pesoHoja =
    ((anchoCorredizoVidrio1 * altoCorredizoVidrio1) / 1000000) *
    2.5 *
    newAbTemplado.espesorvidrio;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  precioCorredizoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );

  const vidriosT =
    Math.round(
      ((precioCorredizoVidrio * areaCorredizoVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.mamparaEsquineroDosCorredizasDosFijasVid = async (
  newAbTemplado
) => {
  // Vidrios
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  let precioCorredizoVidrio = 0;
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
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
  newAbTemplado.pesoHoja =
    ((anchoCorredizoVidrio * altoCorredizoVidrio) / 1000000) *
    2.5 *
    newAbTemplado.espesorvidrio;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  precioCorredizoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );

  const vidriosT =
    Math.round(
      ((precioCorredizoVidrio * areaCorredizoVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.mamparaEsquineroUnaCorredizaDosFijasVid = async (
  newAbTemplado
) => {
  // Vidrios
  let descAltoFijo = 0;
  let descAltoCorredizo = 0;
  let precioCorredizoVidrio = 0;
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  if (newAbTemplado.espesorvidrio == 8) {
    descAltoFijo = 66;
    descAltoCorredizo = 20;
  } else {
    descAltoFijo = 68;
    descAltoCorredizo = 22;
  }
  const anchoFijoVidrio = Math.round(newAbTemplado.ancho / 2);
  const altoFijoVidrio = newAbTemplado.alto - descAltoFijo;
  const anchoFijoVidrio2 = newAbTemplado.ancho2 - 30;
  const altoFijoVidrio2 = newAbTemplado.alto - 30;
  const anchoCorredizoVidrio = Math.round(newAbTemplado.ancho / 2 + 50);
  const altoCorredizoVidrio = newAbTemplado.alto - descAltoCorredizo;
  const areaFijoVidrio =
    (anchoFijoVidrio * altoFijoVidrio + anchoFijoVidrio2 * altoFijoVidrio2) /
    1000000;
  const areaCorredizoVidrio =
    (anchoCorredizoVidrio * altoCorredizoVidrio) / 1000000;
  newAbTemplado.pesoHoja =
    ((anchoCorredizoVidrio * altoCorredizoVidrio) / 1000000) *
    2.5 *
    newAbTemplado.espesorvidrio;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  precioCorredizoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );

  const vidriosT =
    Math.round(
      ((precioCorredizoVidrio * areaCorredizoVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.puertaUnaHojaPivotanteVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoVidrio = newAbTemplado.ancho - 10;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  newAbTemplado.pesoHoja = areaVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT = Math.round((areaVidrio * precioVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.puertaDosHojasPivotantesVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoVidrio = newAbTemplado.ancho - 12;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  newAbTemplado.pesoHoja = (areaVidrio * 2.5 * newAbTemplado.espesorvidrio) / 2;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT = Math.round((areaVidrio * precioVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.puertaUnaHojaPivotantePañoFijoLatVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoVidrio = newAbTemplado.ancho - newAbTemplado.anchofijolat1 - 10;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  newAbTemplado.pesoHoja = areaVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoFijoVidrio = newAbTemplado.anchofijolat1 - 30;
  const altoFijoVidrio = newAbTemplado.alto - 30;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  const precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round(
      ((areaVidrio * precioVidrio + precioFijoVidrio * areaFijoVidrio) * 100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.puertaUnaHojaPivotantePañosFijosLatVid = async (
  newAbTemplado
) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoVidrio =
    newAbTemplado.ancho -
    newAbTemplado.anchofijolat1 -
    newAbTemplado.anchofijolat2 -
    10;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  newAbTemplado.pesoHoja = areaVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoFijoVidrio1 = newAbTemplado.anchofijolat1 - 30;
  const altoFijoVidrio1 = newAbTemplado.alto - 30;
  const anchoFijoVidrio2 = newAbTemplado.anchofijolat2 - 30;
  const altoFijoVidrio2 = newAbTemplado.alto - 30;
  const areaFijoVidrio =
    (anchoFijoVidrio1 * altoFijoVidrio1 + anchoFijoVidrio2 * altoFijoVidrio2) /
    1000000;
  const precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round(
      ((areaVidrio * precioVidrio + precioFijoVidrio * areaFijoVidrio) * 100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.puertaUnaHojaPivotantePañoFijoSupVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoVidrio = newAbTemplado.ancho - 10;
  const altoVidrio = newAbTemplado.alto - newAbTemplado.altofijosup - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  newAbTemplado.pesoHoja = areaVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoFijoVidrio = newAbTemplado.ancho - 30;
  const altoFijoVidrio = newAbTemplado.altofijosup - 30;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  const precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round(
      ((areaVidrio * precioVidrio + precioFijoVidrio * areaFijoVidrio) * 100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.puertaDosHojasPivotantesPañoFijoSupVid = async (
  newAbTemplado
) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoVidrio = newAbTemplado.ancho - 12;
  const altoVidrio = newAbTemplado.alto - newAbTemplado.altofijosup - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  newAbTemplado.pesoHoja = (areaVidrio * 2.5 * newAbTemplado.espesorvidrio) / 2;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoFijoVidrio = newAbTemplado.ancho - 30;
  const altoFijoVidrio = newAbTemplado.altofijosup - 30;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  const precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round(
      ((areaVidrio * precioVidrio + precioFijoVidrio * areaFijoVidrio) * 100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.puertaDosHojasPivotantesPañoFijoLatVid = async (
  newAbTemplado
) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoVidrio = newAbTemplado.ancho - newAbTemplado.anchofijolat1 - 12;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  newAbTemplado.pesoHoja = (areaVidrio * 2.5 * newAbTemplado.espesorvidrio) / 2;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoFijoVidrio = newAbTemplado.anchofijolat1 - 30;
  const altoFijoVidrio = newAbTemplado.alto - 30;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  const precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round(
      ((areaVidrio * precioVidrio + precioFijoVidrio * areaFijoVidrio) * 100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.puertaDosHojasPivotantesPañosFijosLatVid = async (
  newAbTemplado
) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoVidrio =
    newAbTemplado.ancho -
    newAbTemplado.anchofijolat1 -
    newAbTemplado.anchofijolat2 -
    12;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  newAbTemplado.pesoHoja = (areaVidrio * 2.5 * newAbTemplado.espesorvidrio) / 2;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoFijoVidrio1 = newAbTemplado.anchofijolat1 - 30;
  const altoFijoVidrio1 = newAbTemplado.alto - 30;
  const anchoFijoVidrio2 = newAbTemplado.anchofijolat2 - 30;
  const altoFijoVidrio2 = newAbTemplado.alto - 30;
  const areaFijoVidrio =
    (anchoFijoVidrio1 * altoFijoVidrio1 + anchoFijoVidrio2 * altoFijoVidrio2) /
    1000000;
  const precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round(
      ((areaVidrio * precioVidrio + precioFijoVidrio * areaFijoVidrio) * 100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.proyectanteUnaHojaVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoProyectante = newAbTemplado.ancho - 12;
  const altoProyectante = newAbTemplado.alto - 12;
  const areaProyectanteVidrio = (anchoProyectante * altoProyectante) / 1000000;
  newAbTemplado.pesoHoja =
    areaProyectanteVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioProyectanteVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round((precioProyectanteVidrio * areaProyectanteVidrio * 100) / 1.1) /
    100;
  return vidriosT;
};

vidrioTemplado.proyectanteUnaHojaPañoFijoInfVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoProyectante = newAbTemplado.ancho - 12;
  const altoProyectante = newAbTemplado.alto - newAbTemplado.altofijoinf - 12;
  const anchoFijo = newAbTemplado.ancho - 30;
  const altoFijo = newAbTemplado.altofijoinf - 30;
  const areaFijoVidrio = (anchoFijo * altoFijo) / 1000000;
  const areaProyectanteVidrio = (anchoProyectante * altoProyectante) / 1000000;
  const precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.pesoHoja =
    areaProyectanteVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioProyectanteVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round(
      ((precioProyectanteVidrio * areaProyectanteVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.proyectanteUnaHojaPañoFijoInfSupVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoProyectante = newAbTemplado.ancho - 12;
  const altoProyectante =
    newAbTemplado.alto -
    newAbTemplado.altofijoinf -
    newAbTemplado.altofijosup -
    12;
  const anchoFijo1 = newAbTemplado.ancho - 30;
  const altoFijo1 = newAbTemplado.altofijoinf - 30;
  const anchoFijo2 = newAbTemplado.ancho - 30;
  const altoFijo2 = newAbTemplado.altofijosup - 30;
  const areaFijoVidrio =
    (anchoFijo1 * altoFijo1 + anchoFijo2 * altoFijo2) / 1000000;
  const areaProyectanteVidrio = (anchoProyectante * altoProyectante) / 1000000;
  const precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.pesoHoja =
    areaProyectanteVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioProyectanteVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round(
      ((precioProyectanteVidrio * areaProyectanteVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.proyectanteDosHojasVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoProyectante = newAbTemplado.ancho / 2 - 12;
  const altoProyectante = newAbTemplado.alto - 12;
  const areaProyectanteVidrio =
    (anchoProyectante * altoProyectante * 2) / 1000000;
  newAbTemplado.pesoHoja =
    areaProyectanteVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioProyectanteVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round((precioProyectanteVidrio * areaProyectanteVidrio * 100) / 1.1) /
    100;
  return vidriosT;
};

vidrioTemplado.ventanaPivotanteUnaHojaVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoPivotante = newAbTemplado.ancho - 12;
  const altoPivotante = newAbTemplado.alto - 12;
  const areaPivotanteVidrio = (anchoPivotante * altoPivotante) / 1000000;
  newAbTemplado.pesoHoja =
    areaPivotanteVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioPivotanteVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round((precioPivotanteVidrio * areaPivotanteVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.ventanaPivotanteUnaHojaFijoInfVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoPivotante = newAbTemplado.ancho - 12;
  const altoPivotante = newAbTemplado.alto - newAbTemplado.altofijoinf - 12;
  const anchoFijo = newAbTemplado.ancho - 30;
  const altoFijo = newAbTemplado.altofijoinf - 30;
  const areaFijoVidrio = (anchoFijo * altoFijo) / 1000000;
  const areaPivotanteVidrio = (anchoPivotante * altoPivotante) / 1000000;
  const precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.pesoHoja =
    areaPivotanteVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioPivotanteVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round(
      ((precioPivotanteVidrio * areaPivotanteVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.ventanaPivotanteUnaHojaFijoInfSupVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoPivotante = newAbTemplado.ancho - 12;
  const altoPivotante =
    newAbTemplado.alto -
    newAbTemplado.altofijoinf -
    newAbTemplado.altofijosup -
    12;
  const anchoFijo1 = newAbTemplado.ancho - 30;
  const altoFijo1 = newAbTemplado.altofijoinf - 30;
  const anchoFijo2 = newAbTemplado.ancho - 30;
  const altoFijo2 = newAbTemplado.altofijosup - 30;
  const areaFijoVidrio =
    (anchoFijo1 * altoFijo1 + anchoFijo2 * altoFijo2) / 1000000;
  const areaPivotanteVidrio = (anchoPivotante * altoPivotante) / 1000000;
  const precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  newAbTemplado.pesoHoja =
    areaPivotanteVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioPivotanteVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round(
      ((precioPivotanteVidrio * areaPivotanteVidrio +
        precioFijoVidrio * areaFijoVidrio) *
        100) /
        1.1
    ) / 100;
  return vidriosT;
};

vidrioTemplado.espejoVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "ESP" + newAbTemplado.espesorvidrio;
  const areaVidrio = (newAbTemplado.ancho * newAbTemplado.alto) / 1000000;
  newAbTemplado.pesoHoja = areaVidrio * 2.5 * newAbTemplado.espesorvidrio;
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT = Math.round((precioVidrio * areaVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.mamparaUnaBatienteVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoVidrio = newAbTemplado.ancho - 10;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio) / 1000000;
  newAbTemplado.pesoHoja = areaVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT = Math.round((areaVidrio * precioVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.mamparaUnaBatienteFijoLatVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoBatiente = newAbTemplado.anchofijolat1 - 10;
  const altoBatiente = newAbTemplado.alto - 15;
  const anchoFijo = newAbTemplado.ancho - newAbTemplado.anchofijolat1 - 10;
  const altoFijo = newAbTemplado.alto - 15;
  const areaVidrio =
    (anchoBatiente * altoBatiente + anchoFijo * altoFijo) / 1000000;
  newAbTemplado.pesoHoja = areaVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT = Math.round((areaVidrio * precioVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.mamparaDosBatientesVid = async (newAbTemplado) => {
  // Vidrios
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoVidrio = (newAbTemplado.ancho - 12) / 2;
  const altoVidrio = newAbTemplado.alto - 15;
  const areaVidrio = (anchoVidrio * altoVidrio * 2) / 1000000;
  newAbTemplado.pesoHoja = areaVidrio * 2.5 * newAbTemplado.espesorvidrio;
  newAbTemplado.proveedorvidrio == "Vidriocar S.A."
    ? (codigoVidrio += " Perf")
    : (codigoVidrio = codigoVidrio);
  const precioVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT = Math.round((areaVidrio * precioVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.pañoFijoTubos50x50Vid = async (newAbTemplado) => {
  // Vidrios
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoFijoVidrio = newAbTemplado.ancho - 130;
  const altoFijoVidrio = newAbTemplado.alto - 130;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round((precioFijoVidrio * areaFijoVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

vidrioTemplado.pañoFijoTubos50x100Vid = async (newAbTemplado) => {
  // Vidrios
  let precioFijoVidrio = 0;
  let codigoVidrio = "T" + newAbTemplado.espesorvidrio;
  const anchoFijoVidrio = newAbTemplado.ancho - 130;
  const altoFijoVidrio = newAbTemplado.alto - 130;
  const areaFijoVidrio = (anchoFijoVidrio * altoFijoVidrio) / 1000000;
  precioFijoVidrio = await Vidrio.obtenerCosto(
    codigoVidrio,
    newAbTemplado.colorvidrio,
    newAbTemplado.proveedorvidrio
  );
  const vidriosT =
    Math.round((precioFijoVidrio * areaFijoVidrio * 100) / 1.1) / 100;
  return vidriosT;
};

module.exports = vidrioTemplado;
