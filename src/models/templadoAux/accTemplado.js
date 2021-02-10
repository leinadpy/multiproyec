const Accesorio = require("../../models/Accesorio");
const AbTemplado = require("../AbTemplado");
const accesoriosTemplado = {};
const silPomoTemplado = 6000;

accesoriosTemplado.dosHojasUnaCorredizaUnaFijaAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta tubular interior Cruce
  codigo = "FEL5X5";
  cantidad = 3 * newAbTemplado.ancho + newAbTemplado.alto;
  newAbTemplado.espesorvidrio == 10
    ? (cantidad = (cantidad + newAbTemplado.ancho) / 1000)
    : (cantidad = cantidad / 1000);
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500);
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  codigo = "GV169";
  if (newAbTemplado.espesorvidrio == 8) {
    cantidad =
      (newAbTemplado.ancho +
        newAbTemplado.alto +
        (newAbTemplado.alto * 1) / 100) /
      1000;
  } else {
    cantidad = newAbTemplado.ancho / 1000;
  }
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rueditas simples
  codigo = "ruedsimal";
  cantidad = Math.ceil(newAbTemplado.pesoHoja / 36) * 2;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "Alumerco S.R.L.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbTemplado.cierreopc) {
    case "1": // Cerradura con llave
      // Cerradura con llave
      codigo = "MM3210";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura Espejo V/P
      codigo = "MM1511A";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cerradura click chica
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Tirador y pasador
      // Tirador simple
      codigo = "MM1629B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura click chica y pasador
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.cuatroHojasDosCorredizasDosFijasAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta tubular interior Cruce
  codigo = "FEL5X5";
  cantidad = 3 * newAbTemplado.ancho + newAbTemplado.alto * 3;
  newAbTemplado.espesorvidrio == 10
    ? (cantidad = (cantidad + newAbTemplado.ancho) / 1000)
    : (cantidad = cantidad / 1000);
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500);
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  codigo = "GV169";
  if (newAbTemplado.espesorvidrio == 8) {
    cantidad =
      (newAbTemplado.ancho +
        newAbTemplado.alto +
        (newAbTemplado.alto * 1) / 100) /
      1000;
  } else {
    cantidad = newAbTemplado.ancho / 1000;
  }
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rueditas simples
  codigo = "ruedsimal";
  cantidad = Math.ceil(newAbTemplado.pesoHoja / 36) * 2 * 2;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "Alumerco S.R.L.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbTemplado.cierreopc) {
    case "1": // Cerradura con llave
      // Cerradura con llave
      codigo = "MM3210";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura V/V
      codigo = "5510-S";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cerradura click chica
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Tirador y pasador
      // Tirador simple
      codigo = "MM1629B";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura click chica y pasador
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.unaHojaCorredizaAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta tubular interior Cruce
  codigo = "FEL5X5";
  cantidad = 3 * newAbTemplado.ancho + newAbTemplado.alto;
  newAbTemplado.espesorvidrio == 10
    ? (cantidad = (cantidad + newAbTemplado.ancho) / 1000)
    : (cantidad = cantidad / 1000);
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad =
    Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500) + 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rueditas simples
  codigo = "ruedsimal";
  cantidad = Math.ceil(newAbTemplado.pesoHoja / 36) * 2;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "Alumerco S.R.L.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbTemplado.cierreopc) {
    case "1": // Cerradura con llave
      // Cerradura con llave
      codigo = "MM3210";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura Espejo V/P
      codigo = "MM1511A";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cerradura click chica
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Tirador y pasador
      // Tirador simple
      codigo = "MM1629B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura click chica y pasador
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.pañoFijoAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500);
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "GV169";
    cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.mamparaFijaAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500);
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "GV169";
    cantidad = (newAbTemplado.ancho + newAbTemplado.alto) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.mamparaDosHojasUnaCorredizaUnaFijaAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta tubular interior Cruce
  codigo = "FEL5X5";
  cantidad = 3 * newAbTemplado.ancho;
  newAbTemplado.espesorvidrio == 10
    ? (cantidad = (cantidad + newAbTemplado.ancho) / 1000)
    : (cantidad = cantidad / 1000);
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500);
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  codigo = "GV169";
  if (newAbTemplado.espesorvidrio == 8) {
    cantidad =
      (newAbTemplado.ancho +
        newAbTemplado.alto +
        (newAbTemplado.alto * 1) / 100) /
      1000;
  } else {
    cantidad = newAbTemplado.ancho / 1000;
  }
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rueditas simples
  codigo = "ruedsimal";
  cantidad = Math.ceil(newAbTemplado.pesoHoja / 36) * 2;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "Alumerco S.R.L.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tirador doble
  codigo = "MM1629M";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoCorrediza = newAbTemplado.alto - newAbTemplado.altofijoinf;
  // Accesorios
  // Junta tubular interior Cruce
  codigo = "FEL5X5";
  cantidad = 3 * newAbTemplado.ancho + altoCorrediza;
  newAbTemplado.espesorvidrio == 10
    ? (cantidad = (cantidad + newAbTemplado.ancho) / 1000)
    : (cantidad = cantidad / 1000);
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500);
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  codigo = "GV169";
  if (newAbTemplado.espesorvidrio == 8) {
    cantidad =
      (newAbTemplado.ancho +
        altoCorrediza +
        (altoCorrediza * 1) / 100 +
        newAbTemplado.ancho * 2 +
        newAbTemplado.altofijoinf * 2) /
      1000;
  } else {
    cantidad = newAbTemplado.ancho / 1000;
  }
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rueditas simples
  codigo = "ruedsimal";
  cantidad = Math.ceil(newAbTemplado.pesoHoja / 36) * 2;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "Alumerco S.R.L.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbTemplado.cierreopc) {
    case "1": // Cerradura con llave
      // Cerradura con llave
      codigo = "MM3210";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura Espejo V/P
      codigo = "MM1511A";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cerradura click chica
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Tirador y pasador
      // Tirador simple
      codigo = "MM1629B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura click chica y pasador
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperiorAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoCorrediza =
    newAbTemplado.alto - newAbTemplado.altofijoinf - newAbTemplado.altofijosup;
  // Accesorios
  // Junta tubular interior Cruce
  codigo = "FEL5X5";
  cantidad = 3 * newAbTemplado.ancho + altoCorrediza;
  newAbTemplado.espesorvidrio == 10
    ? (cantidad = (cantidad + newAbTemplado.ancho) / 1000)
    : (cantidad = cantidad / 1000);
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.ancho * 2 + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500);
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  codigo = "GV169";
  if (newAbTemplado.espesorvidrio == 8) {
    cantidad =
      (newAbTemplado.ancho +
        altoCorrediza +
        (altoCorrediza * 1) / 100 +
        newAbTemplado.ancho * 4 +
        newAbTemplado.altofijoinf * 2 +
        newAbTemplado.altofijosup * 2) /
      1000;
  } else {
    cantidad = newAbTemplado.ancho / 1000;
  }
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rueditas simples
  codigo = "ruedsimal";
  cantidad = Math.ceil(newAbTemplado.pesoHoja / 36) * 2;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "Alumerco S.R.L.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbTemplado.cierreopc) {
    case "1": // Cerradura con llave
      // Cerradura con llave
      codigo = "MM3210";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura Espejo V/P
      codigo = "MM1511A";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cerradura click chica
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Tirador y pasador
      // Tirador simple
      codigo = "MM1629B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura click chica y pasador
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.tresHojasDosCorredizasUnaFijaAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta tubular interior Cruce
  codigo = "FEL5X5";
  cantidad = 3 * newAbTemplado.ancho + newAbTemplado.alto;
  newAbTemplado.espesorvidrio == 10
    ? (cantidad = (cantidad + newAbTemplado.ancho) / 1000)
    : (cantidad = cantidad / 1000);
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500);
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  codigo = "GV169";
  if (newAbTemplado.espesorvidrio == 8) {
    cantidad =
      (newAbTemplado.ancho +
        newAbTemplado.alto +
        (newAbTemplado.alto * 1) / 100) /
      1000;
  } else {
    cantidad = newAbTemplado.ancho / 1000;
  }
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rueditas simples
  codigo = "ruedsimal";
  cantidad = Math.ceil(newAbTemplado.pesoHoja / 36) * 2 * 2;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "Alumerco S.R.L.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbTemplado.cierreopc) {
    case "1": // Cerradura con llave
      // Cerradura con llave
      codigo = "MM3210";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura Espejo V/P
      codigo = "MM1511A";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cerradura click chica
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Tirador y pasador
      // Tirador simple
      codigo = "MM1629B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura click chica y pasador
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.seisHojasCuatroCorredizasDosFijasAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta tubular interior Cruce
  codigo = "FEL5X5";
  cantidad = 3 * newAbTemplado.ancho + newAbTemplado.alto;
  newAbTemplado.espesorvidrio == 10
    ? (cantidad = (cantidad + newAbTemplado.ancho) / 1000)
    : (cantidad = cantidad / 1000);
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500);
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  codigo = "GV169";
  if (newAbTemplado.espesorvidrio == 8) {
    cantidad =
      (newAbTemplado.ancho +
        newAbTemplado.alto +
        (newAbTemplado.alto * 1) / 100) /
      1000;
  } else {
    cantidad = newAbTemplado.ancho / 1000;
  }
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rueditas simples
  codigo = "ruedsimal";
  cantidad = Math.ceil(newAbTemplado.pesoHoja / 36) * 2 * 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "Alumerco S.R.L.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbTemplado.cierreopc) {
    case "1": // Cerradura con llave
      // Cerradura con llave
      codigo = "MM3210";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura V/V
      codigo = "5510-S";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cerradura click chica
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Tirador y pasador
      // Tirador simple
      codigo = "MM1629B";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura click chica y pasador
      // Cerradura click chica V/P
      codigo = "MM1571";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Pasador chico
      codigo = "MM1335";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contrapasador Omega
      codigo = "MM1038B";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.mamparaEsquineroDosCorredizasDosFijasAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta tubular interior Cruce
  codigo = "FEL5X5";
  cantidad = 3 * (newAbTemplado.ancho + newAbTemplado.ancho2);
  newAbTemplado.espesorvidrio == 10
    ? (cantidad =
        (cantidad + (newAbTemplado.ancho + newAbTemplado.ancho2)) / 1000)
    : (cantidad = cantidad / 1000);
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silespinc";
  cantidad =
    ((newAbTemplado.ancho + newAbTemplado.ancho2 + newAbTemplado.alto) * 2) /
    silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = Math.round(
    ((newAbTemplado.ancho + newAbTemplado.ancho2 + newAbTemplado.alto) * 2) /
      500
  );
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  codigo = "GV169";
  if (newAbTemplado.espesorvidrio == 8) {
    cantidad =
      (newAbTemplado.ancho +
        newAbTemplado.ancho2 +
        newAbTemplado.alto +
        (newAbTemplado.alto * 1) / 100) /
      1000;
  } else {
    cantidad = (newAbTemplado.ancho + newAbTemplado.ancho2) / 1000;
  }
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rueditas simples
  codigo = "ruedsimal";
  cantidad = Math.ceil(newAbTemplado.pesoHoja / 36) * 2 * 2;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "Alumerco S.R.L.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tirador doble
  codigo = "MM1629M";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.puertaUnaHojaPivotanteAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Zócalo Superior
  codigo = "MM1101";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Zócalo Inferior
  codigo = "MM1103";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tipo de cierre
  switch (newAbTemplado.tipoCierre) {
    case "1": // Freno Dorma
      codigo = "FDORM";
      break;
    case "2": // Freno Dorma Reforzado
      codigo = "FDORM75R";
      break;
    case "3": // Freno Superfren
      codigo = "FSUPERFREN";
      break;
    case "4": // Pivot Loco
      codigo = "MM1013";
      break;
  }
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cerradura
  codigo = "MM1520";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Prendedor de contrapiso
  if (newAbTemplado.tipoCierre == "4") {
    codigo = "1800C";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
    // Chapita fina
    codigo = "MM1801A";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
    // Pasador chico
    codigo = "MM1335";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Manijón
  codigo = newAbTemplado.tipoManijon;
  cantidad = 1;
  accesorio = await calcTemplado(codigo, cantidad, "Cromado", "Vidriocar S.A.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Contracerradura V/P
  codigo = "MM1504A";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.puertaDosHojasPivotantesAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Zócalo Superior
  codigo = "MM1101";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Zócalo Inferior
  codigo = "MM1103";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tipo de cierre
  switch (newAbTemplado.tipoCierre) {
    case "1": // Freno Dorma
      codigo = "FDORM";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Freno Dorma Reforzado
      codigo = "FDORM75R";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Freno Superfren
      codigo = "FSUPERFREN";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Pivot Loco
      codigo = "MM1013";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Un Freno Dorma y Un Pivot Loco
      codigo = "FDORM";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      codigo = "MM1013";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
  }

  // Cerradura
  codigo = "MM1520";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Prendedor de contrapiso
  if (newAbTemplado.tipoCierre == "4" || newAbTemplado.tipoCierre == "5") {
    if (newAbTemplado.tipoCierre == "4") {
      cantidad = 2;
    } else {
      cantidad = 1;
    }
    codigo = "1800C";
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  } else {
    cantidad = 0;
  }
  // Chapita fina
  cantidad += 2;
  codigo = "MM1801A";
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Pasador chico
  codigo = "MM1335";
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Manijón
  codigo = newAbTemplado.tipoManijon;
  cantidad = 2;
  accesorio = await calcTemplado(codigo, cantidad, "Cromado", "Vidriocar S.A.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Contracerradura V/V
  codigo = "MM3211";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.puertaUnaHojaPivotantePañoFijoLatAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.anchofijolat1 + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "GV169";
    cantidad = ((newAbTemplado.anchofijolat1 + newAbTemplado.alto) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Zócalo Superior
  codigo = "MM1101";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Zócalo Inferior
  codigo = "MM1103";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tipo de cierre
  switch (newAbTemplado.tipoCierre) {
    case "1": // Freno Dorma
      codigo = "FDORM";
      break;
    case "2": // Freno Dorma Reforzado
      codigo = "FDORM75R";
      break;
    case "3": // Freno Superfren
      codigo = "FSUPERFREN";
      break;
    case "4": // Pivot Loco
      codigo = "MM1013";
      break;
  }
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cerradura
  codigo = "MM1520";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Prendedor de contrapiso
  if (newAbTemplado.tipoCierre == "4") {
    codigo = "1800C";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
    // Chapita fina
    codigo = "MM1801A";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
    // Pasador chico
    codigo = "MM1335";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Manijón
  codigo = newAbTemplado.tipoManijon;
  cantidad = 1;
  accesorio = await calcTemplado(codigo, cantidad, "Cromado", "Vidriocar S.A.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Contracerradura V/P
  codigo = "MM1504A";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.puertaUnaHojaPivotantePañosFijosLatAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.anchofijolat1 +
      newAbTemplado.anchofijolat2 +
      newAbTemplado.alto) *
      2) /
    silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "GV169";
    cantidad =
      ((newAbTemplado.anchofijolat1 +
        newAbTemplado.anchofijolat2 +
        newAbTemplado.alto) *
        2) /
      1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Zócalo Superior
  codigo = "MM1101";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Zócalo Inferior
  codigo = "MM1103";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tipo de cierre
  switch (newAbTemplado.tipoCierre) {
    case "1": // Freno Dorma
      codigo = "FDORM";
      break;
    case "2": // Freno Dorma Reforzado
      codigo = "FDORM75R";
      break;
    case "3": // Freno Superfren
      codigo = "FSUPERFREN";
      break;
    case "4": // Pivot Loco
      codigo = "MM1013";
      break;
  }
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cerradura
  codigo = "MM1520";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Prendedor de contrapiso
  if (newAbTemplado.tipoCierre == "4") {
    codigo = "1800C";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
    // Chapita fina
    codigo = "MM1801A";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
    // Pasador chico
    codigo = "MM1335";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Manijón
  codigo = newAbTemplado.tipoManijon;
  cantidad = 1;
  accesorio = await calcTemplado(codigo, cantidad, "Cromado", "Vidriocar S.A.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Contracerradura V/P
  codigo = "MM1504A";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.puertaUnaHojaPivotantePañoFijoSupAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.ancho + newAbTemplado.altofijosup) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "GV169";
    cantidad = ((newAbTemplado.ancho + newAbTemplado.altofijosup) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Zócalo Superior
  codigo = "MM1101";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Zócalo Inferior
  codigo = "MM1103";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tipo de cierre
  switch (newAbTemplado.tipoCierre) {
    case "1": // Freno Dorma
      codigo = "FDORM";
      break;
    case "2": // Freno Dorma Reforzado
      codigo = "FDORM75R";
      break;
    case "3": // Freno Superfren
      codigo = "FSUPERFREN";
      break;
    case "4": // Pivot Loco
      codigo = "MM1013";
      break;
  }
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cerradura
  codigo = "MM1520";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Prendedor de contrapiso
  if (newAbTemplado.tipoCierre == "4") {
    codigo = "1800C";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
    // Chapita fina
    codigo = "MM1801A";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
    // Pasador chico
    codigo = "MM1335";
    cantidad = 1;
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Manijón
  codigo = newAbTemplado.tipoManijon;
  cantidad = 1;
  accesorio = await calcTemplado(codigo, cantidad, "Cromado", "Vidriocar S.A.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Contracerradura V/P
  codigo = "MM1504A";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.puertaDosHojasPivotantesPañoFijoSupAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.ancho + newAbTemplado.altofijosup) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "GV169";
    cantidad = ((newAbTemplado.ancho + newAbTemplado.altofijosup) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Zócalo Superior
  codigo = "MM1101";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Zócalo Inferior
  codigo = "MM1103";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tipo de cierre
  switch (newAbTemplado.tipoCierre) {
    case "1": // Freno Dorma
      codigo = "FDORM";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Freno Dorma Reforzado
      codigo = "FDORM75R";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Freno Superfren
      codigo = "FSUPERFREN";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Pivot Loco
      codigo = "MM1013";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Un Freno Dorma y Un Pivot Loco
      codigo = "FDORM";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      codigo = "MM1013";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
  }

  // Cerradura
  codigo = "MM1520";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Prendedor de contrapiso
  if (newAbTemplado.tipoCierre == "4" || newAbTemplado.tipoCierre == "5") {
    if (newAbTemplado.tipoCierre == "4") {
      cantidad = 2;
    } else {
      cantidad = 1;
    }
    codigo = "1800C";
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  } else {
    cantidad = 0;
  }
  // Chapita fina
  cantidad += 2;
  codigo = "MM1801A";
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Pasador chico
  codigo = "MM1335";
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Manijón
  codigo = newAbTemplado.tipoManijon;
  cantidad = 2;
  accesorio = await calcTemplado(codigo, cantidad, "Cromado", "Vidriocar S.A.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Contracerradura V/V
  codigo = "MM3211";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.puertaDosHojasPivotantesPañoFijoLatAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.anchofijolat1 + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "GV169";
    cantidad = ((newAbTemplado.anchofijolat1 + newAbTemplado.alto) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Zócalo Superior
  codigo = "MM1101";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Zócalo Inferior
  codigo = "MM1103";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tipo de cierre
  switch (newAbTemplado.tipoCierre) {
    case "1": // Freno Dorma
      codigo = "FDORM";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Freno Dorma Reforzado
      codigo = "FDORM75R";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Freno Superfren
      codigo = "FSUPERFREN";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Pivot Loco
      codigo = "MM1013";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Un Freno Dorma y Un Pivot Loco
      codigo = "FDORM";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      codigo = "MM1013";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
  }

  // Cerradura
  codigo = "MM1520";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Prendedor de contrapiso
  if (newAbTemplado.tipoCierre == "4" || newAbTemplado.tipoCierre == "5") {
    if (newAbTemplado.tipoCierre == "4") {
      cantidad = 2;
    } else {
      cantidad = 1;
    }
    codigo = "1800C";
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  } else {
    cantidad = 0;
  }
  // Chapita fina
  cantidad += 2;
  codigo = "MM1801A";
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Pasador chico
  codigo = "MM1335";
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Manijón
  codigo = newAbTemplado.tipoManijon;
  cantidad = 2;
  accesorio = await calcTemplado(codigo, cantidad, "Cromado", "Vidriocar S.A.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Contracerradura V/V
  codigo = "MM3211";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.puertaDosHojasPivotantesPañosFijosLatAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.anchofijolat1 +
      newAbTemplado.anchofijolat2 +
      newAbTemplado.alto * 2) *
      2) /
    silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad = 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Goma 169
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "GV169";
    cantidad =
      ((newAbTemplado.anchofijolat1 +
        newAbTemplado.anchofijolat2 +
        newAbTemplado.alto * 2) *
        2) /
      1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Zócalo Superior
  codigo = "MM1101";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Zócalo Inferior
  codigo = "MM1103";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tipo de cierre
  switch (newAbTemplado.tipoCierre) {
    case "1": // Freno Dorma
      codigo = "FDORM";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Freno Dorma Reforzado
      codigo = "FDORM75R";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Freno Superfren
      codigo = "FSUPERFREN";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Pivot Loco
      codigo = "MM1013";
      cantidad = 2;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Un Freno Dorma y Un Pivot Loco
      codigo = "FDORM";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      codigo = "MM1013";
      cantidad = 1;
      accesorio = await calcTemplado(
        codigo,
        cantidad,
        newAbTemplado.coloraccesorio,
        newAbTemplado.proveedoraccesorio
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
  }

  // Cerradura
  codigo = "MM1520";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Prendedor de contrapiso
  if (newAbTemplado.tipoCierre == "4" || newAbTemplado.tipoCierre == "5") {
    if (newAbTemplado.tipoCierre == "4") {
      cantidad = 2;
    } else {
      cantidad = 1;
    }
    codigo = "1800C";
    accesorio = await calcTemplado(
      codigo,
      cantidad,
      newAbTemplado.coloraccesorio,
      newAbTemplado.proveedoraccesorio
    );
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  } else {
    cantidad = 0;
  }
  // Chapita fina
  cantidad += 2;
  codigo = "MM1801A";
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Pasador chico
  codigo = "MM1335";
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Manijón
  codigo = newAbTemplado.tipoManijon;
  cantidad = 2;
  accesorio = await calcTemplado(codigo, cantidad, "Cromado", "Vidriocar S.A.");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Contracerradura V/V
  codigo = "MM3211";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.proyectanteUnaHojaAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad =
    Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500) + 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Velseal
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "V6X11";
    cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Bisagras Vidrio Pared
  codigo = "BVP";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Brazo
  codigo = newAbTemplado.tipoBrazo;
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.proyectanteUnaHojaPañoFijoInfAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoProyectante = newAbTemplado.alto - newAbTemplado.altofijoinf;
  // Accesorios
  // Goma 169
  codigo = "GV169";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.altofijoinf) * 2) / 1000;
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad =
    Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500) + 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Velseal
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "V6X11";
    cantidad = ((newAbTemplado.ancho + altoProyectante) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Bisagras Vidrio Pared
  codigo = "BVP";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Brazo
  codigo = newAbTemplado.tipoBrazo;
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.proyectanteUnaHojaPañoFijoInfSupAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoProyectante =
    newAbTemplado.alto - newAbTemplado.altofijoinf - newAbTemplado.altofijosup;
  // Accesorios
  // Goma 169
  codigo = "GV169";
  cantidad =
    ((newAbTemplado.ancho + newAbTemplado.altofijoinf) * 2 +
      (newAbTemplado.ancho + newAbTemplado.altofijosup) * 2) /
    1000;
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.ancho * 2 + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad =
    Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500) + 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Velseal
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "V6X11";
    cantidad = ((newAbTemplado.ancho + altoProyectante) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Bisagras Vidrio Pared
  codigo = "BVP";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Brazo
  codigo = newAbTemplado.tipoBrazo;
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.proyectanteDosHojasAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.ancho + newAbTemplado.alto * 2) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad =
    Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500) + 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Velseal
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "V6X11";
    cantidad =
      ((newAbTemplado.ancho + newAbTemplado.alto) * 2 +
        newAbTemplado.alto * 2) /
      1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Bisagras Vidrio Pared
  codigo = "BVP";
  cantidad = 4;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Brazo
  codigo = newAbTemplado.tipoBrazo;
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.ventanaPivotanteUnaHojaAcc = async (newAbTemplado) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Silicona
  codigo = "silbr";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad =
    Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500) + 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Velseal
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "V6X11";
    cantidad = ((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Soporte de centro
  codigo = "MM1230";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tirador simple
  codigo = "MM1629B";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Pasador chico
  codigo = "MM1335";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Chapita fina
  codigo = "MM1801A";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.ventanaPivotanteUnaHojaFijoInfAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoPivotante = newAbTemplado.alto - newAbTemplado.altofijoinf;
  // Accesorios
  // Goma 169
  codigo = "GV169";
  cantidad = ((newAbTemplado.ancho + newAbTemplado.altofijoinf) * 2) / 1000;
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.ancho * 2 + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad =
    Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500) + 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Velseal
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "V6X11";
    cantidad = ((newAbTemplado.ancho + altoPivotante) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Soporte de centro
  codigo = "MM1230";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tirador simple
  codigo = "MM1629B";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Pasador chico
  codigo = "MM1335";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Chapita fina
  codigo = "MM1801A";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosTemplado.ventanaPivotanteUnaHojaFijoInfSupAcc = async (
  newAbTemplado
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoPivotante =
    newAbTemplado.alto - newAbTemplado.altofijoinf - newAbTemplado.altofijosup;
  // Accesorios
  // Goma 169
  codigo = "GV169";
  cantidad =
    ((newAbTemplado.ancho * 2 +
      newAbTemplado.altofijoinf +
      newAbTemplado.altofijosup) *
      2) /
    1000;
  accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Silicona
  codigo = "silbr";
  cantidad =
    ((newAbTemplado.ancho * 3 + newAbTemplado.alto) * 2) / silPomoTemplado;
  accesorio = await calcTemplado(codigo, cantidad, "Bronce", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tarugo y tornillo
  codigo = "tarytor";
  cantidad =
    Math.round(((newAbTemplado.ancho + newAbTemplado.alto) * 2) / 500) + 4;
  accesorio = await calcTemplado(codigo, cantidad, "Neutro", "General");
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Velseal
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "V6X11";
    cantidad = ((newAbTemplado.ancho + altoPivotante) * 2) / 1000;
    accesorio = await calcTemplado(codigo, cantidad, "Negro", "General");
    costoAccesorios += accesorio.subCosto;
    accesorios.push(accesorio);
  }

  // Soporte de centro
  codigo = "MM1230";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Buje
  codigo = "MM1201";
  cantidad = 2;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Tirador simple
  codigo = "MM1629B";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Pasador chico
  codigo = "MM1335";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Chapita fina
  codigo = "MM1801A";
  cantidad = 1;
  accesorio = await calcTemplado(
    codigo,
    cantidad,
    newAbTemplado.coloraccesorio,
    newAbTemplado.proveedoraccesorio
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

// FUNCIONES
calcTemplado = async function (codigo, cantidad, color, proveedor) {
  const descripcion = await Accesorio.obtenerDescripcion(codigo);
  const precio =
    Math.round(
      ((await Accesorio.obtenerCosto(codigo, color, proveedor)) / 1.1) * 100
    ) / 100;
  let subCosto = Math.round(precio * cantidad * 100) / 100;
  const accesorio = {
    codigo,
    descripcion,
    cantidad,
    precio,
    subCosto,
  };
  // console.log(descripcion, subCosto);
  return accesorio;
};
module.exports = accesoriosTemplado;
