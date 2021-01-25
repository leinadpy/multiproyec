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

servTemplado.mamparaDosHojasUnaCorredizaUnaFijaAren = async (
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
  const servicioT =
    Math.round(
      (precioServicio * (areaCorredizoVidrio + areaFijoVidrio) * 100) / 1.1
    ) / 100;
  return servicioT;
};

module.exports = servTemplado;
