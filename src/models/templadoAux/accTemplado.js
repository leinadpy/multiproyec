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
  return accesorio;
};
module.exports = accesoriosTemplado;
