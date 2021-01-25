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

vidrioTemplado.mamparaDosHojasUnaCorredizaUnaFijaVid = async (newAbTemplado) => {
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

module.exports = vidrioTemplado;
