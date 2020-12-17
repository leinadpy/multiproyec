const Accesorio = require("../../models/Accesorio");
const accesoriosAlpha = {};

accesoriosAlpha.dosHojasCorredizasAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 12;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (4 * (newAbAlpha.ancho - 222)) / 2 / 1000 +
    (4 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (4 * (newAbAlpha.ancho - 222)) / 2 / 1000 +
    (4 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    ((8 * (newAbAlpha.ancho - 8)) / 2 + 8 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (2 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.dosHojasUnaCorredizaUnaFijaAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 12;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);

      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (4 * (newAbAlpha.ancho - 222)) / 2 / 1000 +
    (4 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (4 * (newAbAlpha.ancho - 222)) / 2 / 1000 +
    (4 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    ((8 * (newAbAlpha.ancho - 8)) / 2 + 8 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (2 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  // Calce fijo
  codigo = "NYL394";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.tresHojasCorredizasAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 24;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (6 * ((newAbAlpha.ancho + 54) / 3 - 108)) / 1000 +
    (6 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (6 * ((newAbAlpha.ancho + 54) / 3 - 108)) / 1000 +
    (6 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    (12 * ((newAbAlpha.ancho + 54) / 3) + 12 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (4 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.tresHojasDosCorredizasUnaFijaAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 24;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (6 * ((newAbAlpha.ancho + 54) / 3 - 108)) / 1000 +
    (6 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (6 * ((newAbAlpha.ancho + 54) / 3 - 108)) / 1000 +
    (6 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    (12 * ((newAbAlpha.ancho + 54) / 3) + 12 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (4 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "NYL394";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.cuatroHojasDosCorredizasDosFijasAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 20;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 32;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);

      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (8 * ((newAbAlpha.ancho + 50) / 4 - 108)) / 1000 +
    (8 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (8 * ((newAbAlpha.ancho + 50) / 4 - 108)) / 1000 +
    (8 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    ((16 * (newAbAlpha.ancho + 50)) / 4 + 16 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (4 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  // Calce fijo
  codigo = "NYL394";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.cuatroHojasCorredizasAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 20;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 32;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Amortiguador y limitador de hoja
  codigo = "A6844.1";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Batedeira Gold
  codigo = "NYL398";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (8 * ((newAbAlpha.ancho + 50) / 4 - 108)) / 1000 +
    (8 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (8 * ((newAbAlpha.ancho + 50) / 4 - 108)) / 1000 +
    (8 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    (16 * ((newAbAlpha.ancho + 50) / 4) + 16 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (6 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.cuatroHojasTresCorredizasUnaFijaAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 20;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 32;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Amortiguador y limitador de hoja
  codigo = "A6844.1";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Batedeira Gold
  codigo = "NYL398";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (8 * ((newAbAlpha.ancho + 50) / 4 - 108)) / 1000 +
    (8 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (8 * ((newAbAlpha.ancho + 50) / 4 - 108)) / 1000 +
    (8 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    (16 * ((newAbAlpha.ancho + 50) / 4) + 16 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (6 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Calce para fijo
  codigo = "NYL394";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.cincoHojasCorredizasAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 24;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 40;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 5;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 10;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Amortiguador y limitador de hoja
  codigo = "A6844.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Batedeira Gold
  codigo = "NYL398";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (10 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5 - 108)) / 1000 +
    (10 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (10 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5 - 108)) / 1000 +
    (10 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    (20 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5) +
      20 * (newAbAlpha.alto - 70)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (8 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.cincoHojasCuatroCorredizasUnaFijaAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 24;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 40;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 5;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Amortiguador y limitador de hoja
  codigo = "A6844.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Batedeira Gold
  codigo = "NYL398";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (10 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5 - 108)) / 1000 +
    (10 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (10 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5 - 108)) / 1000 +
    (10 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    (20 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5) +
      20 * (newAbAlpha.alto - 70)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (8 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Calce para fijo
  codigo = "NYL394";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.seisHojasCorredizasAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 28;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 48;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 5;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 12;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 10;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 10;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Amortiguador y limitador de hoja
  codigo = "A6844.1";
  cantidad = 5;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Batedeira Gold
  codigo = "NYL398";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (12 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6 - 108)) / 1000 +
    (12 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (12 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6 - 108)) / 1000 +
    (12 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    (24 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6) +
      24 * (newAbAlpha.alto - 70)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (10 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.seisHojasCincoCorredizasUnaFijaAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 28;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 48;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 5;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 10;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 10;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 10;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Amortiguador y limitador de hoja
  codigo = "A6844.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Batedeira Gold
  codigo = "NYL398";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (12 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6 - 108)) / 1000 +
    (12 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (12 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6 - 108)) / 1000 +
    (12 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    (24 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6) +
      24 * (newAbAlpha.alto - 70)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (10 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Calce para fijo
  codigo = "NYL394";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.seisHojasCuatroCorredizasDosFijasAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 28;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 48;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 5;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Amortiguador y limitador de hoja
  codigo = "A6844.1";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Batedeira Gold
  codigo = "NYL398";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (12 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4 - 4.4) / 6 - 108)) / 1000 +
    (12 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (12 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4 - 4.4) / 6 - 108)) / 1000 +
    (12 * (newAbAlpha.alto - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    (24 * ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4 - 4.4) / 6) +
      24 * (newAbAlpha.alto - 70)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (8 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Calce para fijo
  codigo = "NYL394";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.dosHojasCorredizasFijoInferiorAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoCorrediza = newAbAlpha.alto - newAbAlpha.altofijo;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (4 * (newAbAlpha.ancho - 222)) / 2 / 1000 +
    (4 * (altoCorrediza - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (4 * (newAbAlpha.ancho - 222)) / 2 / 1000 +
    (4 * (altoCorrediza - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    ((8 * (newAbAlpha.ancho - 8)) / 2 + 8 * (altoCorrediza - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (2 * (altoCorrediza - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm FIJO
  codigo = "GUAC6N";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2)) / 1000 +
    (2 * (newAbAlpha.altofijo - 25 * 2)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2)) / 1000 +
    (2 * (newAbAlpha.altofijo - 25 * 2)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.dosHojasUnaCorredizaUnaFijaFijoInferiorAcc = async (
  newAbAlpha
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoCorrediza = newAbAlpha.alto - newAbAlpha.altofijo;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (4 * (newAbAlpha.ancho - 222)) / 2 / 1000 +
    (4 * (altoCorrediza - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (4 * (newAbAlpha.ancho - 222)) / 2 / 1000 +
    (4 * (altoCorrediza - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    ((8 * (newAbAlpha.ancho - 8)) / 2 + 8 * (altoCorrediza - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (2 * (altoCorrediza - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm FIJO
  codigo = "GUAC6N";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2)) / 1000 +
    (2 * (newAbAlpha.altofijo - 25 * 2)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2)) / 1000 +
    (2 * (newAbAlpha.altofijo - 25 * 2)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Calce fijo
  codigo = "NYL394";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.cuatroHojasDosCorredizasDosFijasFijoInferiorAcc = async (
  newAbAlpha
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoCorrediza = newAbAlpha.alto - newAbAlpha.altofijo;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 24;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 32;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (8 * ((newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 - 108)) / 1000 +
    (8 * (altoCorrediza - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (8 * ((newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 - 108)) / 1000 +
    (8 * (altoCorrediza - 211)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    ((16 * (newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4)) / 4 +
      16 * (altoCorrediza - 70)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (4 * (altoCorrediza - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  // Calce fijo
  codigo = "NYL394";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2) + 2 * (newAbAlpha.altofijo - 25 * 2)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2) + 2 * (newAbAlpha.altofijo - 25 * 2)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.dosHojasCorredizasConTelaAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 24;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150 kg para tela
  codigo = "AP50110";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Cierre uñero
  codigo = "A6452.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Kit ganchos de cierre
  codigo = "A6481.3";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (4 * ((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 108) +
      4 * (newAbAlpha.alto - 211)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (4 * ((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 108) +
      4 * (newAbAlpha.alto - 211)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    ((12 * (newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2)) / 2 +
      12 * (newAbAlpha.alto - 70)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (2 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Guarnición EPDM Mosquitera
  codigo = "GUA397";
  cantidad =
    (2 * ((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 108) +
      2 * (newAbAlpha.alto - 211)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tela mosquera
  codigo = "TelaMosq";
  cantidad =
    (((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 56 * 2) *
      (newAbAlpha.alto - 190)) /
    1000000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.dosHojasUnaCorredizaUnaFijaConTelaAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 24;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150 kg para tela
  codigo = "AP50110";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Cierre uñero
  codigo = "A6452.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Kit ganchos de cierre
  codigo = "A6481.3";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (4 * ((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 108) +
      4 * (newAbAlpha.alto - 211)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (4 * ((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 108) +
      4 * (newAbAlpha.alto - 211)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    ((12 * (newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2)) / 2 +
      12 * (newAbAlpha.alto - 70)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (2 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Guarnición EPDM Mosquitera
  codigo = "GUA397";
  cantidad =
    (2 * ((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 108) +
      2 * (newAbAlpha.alto - 211)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tela mosquera
  codigo = "TelaMosq";
  cantidad =
    (((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 56 * 2) *
      (newAbAlpha.alto - 190)) /
    1000000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Calce fijo
  codigo = "NYL394";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.cuatroHojasDosCorredizasDosFijasConTelaAcc = async (
  newAbAlpha
) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 28;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 48;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Dreno cortavientos
  codigo = "XS-310-G18";
  cantidad = 5;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150/250 kg
  if (newAbAlpha.pesoHoja < 50) {
    codigo = "AP50110";
  } else {
    codigo = "AP50120";
  }
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Rodamientos 150 kg para tela
  codigo = "AP50110";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce inferior
  codigo = "A6825A";
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador cruce superior
  codigo = "A6824";
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Enguiador lateral - Central
  codigo = "A6845.1";
  cantidad = 12;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  // Cierre
  switch (newAbAlpha.selCierre) {
    case "1": // Cierre automático sin llave
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "2": // Cierre automático con llave
      // Cierre uñero
      codigo = "A6452.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Cierre uñero
      codigo = "A6452.1";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit ganchos de cierre
      codigo = "A6481.3";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "3": // Cerradura multipunto sin llave 2 puntos
      // Multipunto sin llave 2 puntos - 600 mm
      codigo = "CNAO.9002";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 2 puntos
      codigo = "CNAO.9102";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "4": // Cerradura multipunto sin llave 3 puntos
      // Multipunto sin llave 3 puntos - 600 mm
      codigo = "CNAO.9003";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Kit enganche para multipunto - 3 puntos
      codigo = "CNAO.9103";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Manija simple para multipunto
      codigo = "A3070";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "5": // Cerradura con llave con concha ciega
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Concha ciega
      codigo = "A6452.1";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "6": // Cerradura con llave con puxador
      // Cerradura con llave
      codigo = "FRA820";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracierre lateral para cerradura
      codigo = "CON409";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Puxador
      codigo = "PUX657";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Cierre uñero
  codigo = "A6452.1";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Kit ganchos de cierre
  codigo = "A6481.3";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (8 * ((newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 - 108) +
      8 * (newAbAlpha.alto - 211)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta exterior 2 mm
  codigo = "GUA173";
  cantidad =
    (8 * ((newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 - 108) +
      8 * (newAbAlpha.alto - 211)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7X7
  codigo = "FEL7X7NEFS";
  cantidad =
    ((24 * (newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4)) / 4 +
      24 * (newAbAlpha.alto - 70)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta tubular interior Cruce
  codigo = "GUA30941";
  cantidad = (4 * (newAbAlpha.alto - 70)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Guarnición EPDM Mosquitera
  codigo = "GUA397";
  cantidad =
    (4 * ((newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 - 108) +
      4 * (newAbAlpha.alto - 211)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tela mosquera
  codigo = "TelaMosq";
  cantidad =
    ((((newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 - 56 * 2) *
      (newAbAlpha.alto - 190)) /
      1000000) *
    2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Calce fijo
  codigo = "NYL394";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.unaHojaOscilobatienteAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta central en marco
  codigo = "GUAJC";
  cantidad = (2 * newAbAlpha.ancho + 2 * newAbAlpha.alto) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta central en marco
  codigo = "GUA30947";
  cantidad = (4 * (newAbAlpha.ancho - 40) + 4 * (newAbAlpha.alto - 40)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (2 * (newAbAlpha.ancho - 124) + 2 * (newAbAlpha.alto - 166)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (2 * (newAbAlpha.ancho - 124) + 2 * (newAbAlpha.alto - 166)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tapa salida de aguas
  codigo = "A2141";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Conjunto resvalón soporte hoja
  codigo = "A2432.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Compás oscilobatiente mediano p/hoja
  if (newAbAlpha.ancho < 450) {
    codigo = "A3400.20";
  } else if (newAbAlpha.ancho < 650) {
    codigo = "A3400.21";
  } else {
    codigo = "A3400.22";
  }
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Kit oscilo-batiente de una hoja
  codigo = "A3400F.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Punto de cierre complementario
  codigo = "A3400F.32";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Cremona de dos palas para batientes
  codigo = "A6005";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bloqueo de Unión pletina cremona de dos palas
  codigo = "A6401.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.unaHojaOscilobatienteFijoInferiorAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoBat = newAbAlpha.alto - newAbAlpha.altofijo;
  // Accesorios
  // Junta central en marco
  codigo = "GUAJC";
  cantidad = (2 * newAbAlpha.ancho + 2 * altoBat) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta central en marco
  codigo = "GUA30947";
  cantidad = (4 * (newAbAlpha.ancho - 40) + 4 * (altoBat - 40)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad = (2 * (newAbAlpha.ancho - 124) + 2 * (altoBat - 166)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad = (2 * (newAbAlpha.ancho - 124) + 2 * (altoBat - 166)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2) + 2 * (newAbAlpha.altofijo - 25 * 2)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2) + 2 * (newAbAlpha.altofijo - 25 * 2)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tapa salida de aguas
  codigo = "A2141";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Conjunto resvalón soporte hoja
  codigo = "A2432.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Compás oscilobatiente mediano p/hoja
  if (newAbAlpha.ancho < 450) {
    codigo = "A3400.20";
  } else if (newAbAlpha.ancho < 650) {
    codigo = "A3400.21";
  } else {
    codigo = "A3400.22";
  }
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Kit oscilo-batiente de una hoja
  codigo = "A3400F.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Punto de cierre complementario
  codigo = "A3400F.32";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Cremona de dos palas para batientes
  codigo = "A6005";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bloqueo de Unión pletina cremona de dos palas
  codigo = "A6401.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 12;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.unaHojaBatienteAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta central en marco
  codigo = "GUAJC";
  cantidad = (2 * newAbAlpha.ancho + 2 * newAbAlpha.alto) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta central en marco
  codigo = "GUA30947";
  cantidad = (4 * (newAbAlpha.ancho - 38) + 4 * (newAbAlpha.alto - 38)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (2 * (newAbAlpha.ancho - 122) + 2 * (newAbAlpha.alto - 164)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (2 * (newAbAlpha.ancho - 122) + 2 * (newAbAlpha.alto - 164)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tapa salida de aguas
  codigo = "A2141";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Encuentro terminal simple premontado
  codigo = "A4212.2";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Conjunto resvalón soporte hoja
  codigo = "A2432.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Terminal pletina de cremona
  codigo = "A4032.20";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Cremona de dos palas p/batientes
  codigo = "A6005";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bloqueo de Unión pletina cremona de dos palas
  codigo = "A6401.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bisagra de montaje rápido p/ Vent. Bat.
  codigo = "A9211.3";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Angulo de reenvío
  codigo = "A1252.6";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Punto cierre suplementario
  codigo = "A3400F.32";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 8;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.unaHojaBatienteFijoInferiorAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoBat = newAbAlpha.alto - newAbAlpha.altofijo;
  // Accesorios
  // Junta central en marco
  codigo = "GUAJC";
  cantidad = (2 * newAbAlpha.ancho + 2 * altoBat) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta central en marco
  codigo = "GUA30947";
  cantidad = (4 * (newAbAlpha.ancho - 38) + 4 * (altoBat - 38)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad = (2 * (newAbAlpha.ancho - 122) + 2 * (altoBat - 164)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad = (2 * (newAbAlpha.ancho - 122) + 2 * (altoBat - 164)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2) + 2 * (newAbAlpha.altofijo - 25 * 2)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2) + 2 * (newAbAlpha.altofijo - 25 * 2)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tapa salida de aguas
  codigo = "A2141";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Encuentro terminal simple premontado
  codigo = "A4212.2";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Conjunto resvalón soporte hoja
  codigo = "A2432.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Terminal pletina de cremona
  codigo = "A4032.20";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Cremona de dos palas p/batientes
  codigo = "A6005";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bloqueo de Unión pletina cremona de dos palas
  codigo = "A6401.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bisagra de montaje rápido p/ Vent. Bat.
  codigo = "A9211.3";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Angulo de reenvío
  codigo = "A1252.6";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Punto cierre suplementario
  codigo = "A3400F.32";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 12;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.dosHojasBatientesAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta central en marco
  codigo = "GUAJC";
  cantidad = (2 * newAbAlpha.ancho + 3 * newAbAlpha.alto) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta central en marco
  codigo = "GUA30947";
  cantidad =
    ((8 * (newAbAlpha.ancho - 44)) / 2 + 8 * (newAbAlpha.alto - 38)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (4 * ((newAbAlpha.ancho - 44) / 2 - 84) + 4 * (newAbAlpha.alto - 164)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (4 * ((newAbAlpha.ancho - 44) / 2 - 84) + 4 * (newAbAlpha.alto - 164)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tapa salida de aguas
  codigo = "A2141";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Encuentro terminal simple premontado
  codigo = "A4212.2";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Conjunto resvalón soporte hoja
  codigo = "A2432.1";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Juego de pasadores metálicos hoja pasivo
  codigo = "A3520.34";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Terminal pletina de cremona
  codigo = "A4032.20";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Cremona de dos palas p/batientes
  codigo = "A6005";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bloqueo de Unión pletina cremona de dos palas
  codigo = "A6401.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bisagra de montaje rápido p/ Vent. Bat.
  codigo = "A9211.3";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Juego tapón inversor batiente central
  codigo = "MATAPC";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 12;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.dosHojasBatientesFijoInferiorAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoBat = newAbAlpha.alto - newAbAlpha.altofijo;
  // Accesorios
  // Junta central en marco
  codigo = "GUAJC";
  cantidad = (2 * newAbAlpha.ancho + 3 * altoBat) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta central en marco
  codigo = "GUA30947";
  cantidad = ((8 * (newAbAlpha.ancho - 44)) / 2 + 8 * (altoBat - 38)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (4 * ((newAbAlpha.ancho - 44) / 2 - 84) + 4 * (altoBat - 164)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (4 * ((newAbAlpha.ancho - 44) / 2 - 84) + 4 * (altoBat - 164)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2) + 2 * (newAbAlpha.altofijo - 25 * 2)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2) + 2 * (newAbAlpha.altofijo - 25 * 2)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tapa salida de aguas
  codigo = "A2141";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Encuentro terminal simple premontado
  codigo = "A4212.2";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Conjunto resvalón soporte hoja
  codigo = "A2432.1";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Juego de pasadores metálicos hoja pasivo
  codigo = "A3520.34";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Terminal pletina de cremona
  codigo = "A4032.20";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Cremona de dos palas p/batientes
  codigo = "A6005";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bloqueo de Unión pletina cremona de dos palas
  codigo = "A6401.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bisagra de montaje rápido p/ Vent. Bat.
  codigo = "A9211.3";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Juego tapón inversor batiente central
  codigo = "MATAPC";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 16;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.dosHojasOscilobatientesAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta central en marco
  codigo = "GUAJC";
  cantidad =
    (2 * newAbAlpha.ancho + (newAbAlpha.alto - 106) + 2 * newAbAlpha.alto) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta central en marco
  codigo = "GUA30947";
  cantidad =
    ((8 * (newAbAlpha.ancho - 46)) / 2 + 8 * (newAbAlpha.alto - 40)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (4 * ((newAbAlpha.ancho - 46) / 2 - 84) + 4 * (newAbAlpha.alto - 166)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (4 * ((newAbAlpha.ancho - 46) / 2 - 84) + 4 * (newAbAlpha.alto - 166)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tapa salida de aguas
  codigo = "A2141";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Encuentro terminal simple premontado
  codigo = "A4212.2";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Conjunto resvalón soporte hoja
  codigo = "A2432.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Compás oscilobatiente mediano p/hoja
  if (newAbAlpha.ancho / 2 < 450) {
    codigo = "A3400.20";
  } else if (newAbAlpha.ancho / 2 < 650) {
    codigo = "A3400.21";
  } else {
    codigo = "A3400.22";
  }
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Kit oscilo-batiente de una hoja
  codigo = "A3400F.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Kit oscilo-batiente para hoja pasiva
  codigo = "A3420.23";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Juego de pasadores metátlicos hoja pasiva con cierre
  codigo = "A3520.34";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Cremona oscilobatiente de una pala
  codigo = "A6015";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Cremona de dos palas para batientes
  codigo = "A6005";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bloqueo de Unión pletina cremona de dos palas
  codigo = "A6401.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Juego tapón inversor batiente central AK108
  codigo = "MATAPC";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 12;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.dosHojasOscilobatientesFijoInferiorAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  const altoBat = newAbAlpha.alto - newAbAlpha.altofijo;
  // Accesorios
  // Junta central en marco
  codigo = "GUAJC";
  cantidad = (2 * newAbAlpha.ancho + (altoBat - 106) + 2 * altoBat) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta central en marco
  codigo = "GUA30947";
  cantidad = ((8 * (newAbAlpha.ancho - 46)) / 2 + 8 * (altoBat - 40)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (4 * ((newAbAlpha.ancho - 46) / 2 - 84) + 4 * (altoBat - 166)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (4 * ((newAbAlpha.ancho - 46) / 2 - 84) + 4 * (altoBat - 166)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2) + 2 * (newAbAlpha.altofijo - 25 * 2)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (2 * (newAbAlpha.ancho - 25 * 2) + 2 * (newAbAlpha.altofijo - 25 * 2)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Tapa salida de aguas
  codigo = "A2141";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Encuentro terminal simple premontado
  codigo = "A4212.2";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Conjunto resvalón soporte hoja
  codigo = "A2432.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Compás oscilobatiente mediano p/hoja
  if (newAbAlpha.ancho / 2 < 450) {
    codigo = "A3400.20";
  } else if (newAbAlpha.ancho / 2 < 650) {
    codigo = "A3400.21";
  } else {
    codigo = "A3400.22";
  }
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Kit oscilo-batiente de una hoja
  codigo = "A3400F.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Kit oscilo-batiente para hoja pasiva
  codigo = "A3420.23";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Juego de pasadores metátlicos hoja pasiva con cierre
  codigo = "A3520.34";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Cremona oscilobatiente de una pala
  codigo = "A6015";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Cremona de dos palas para batientes
  codigo = "A6005";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Bloqueo de Unión pletina cremona de dos palas
  codigo = "A6401.1";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Juego tapón inversor batiente central AK108
  codigo = "MATAPC";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de fundición 29x11
  codigo = "1134F";
  cantidad = 12;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.unaPuertaHojaBatienteAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta central en marco
  codigo = "GUA30947";
  cantidad =
    (2 * newAbAlpha.alto +
      2 * (newAbAlpha.alto - 51) +
      1 * newAbAlpha.ancho +
      1 * (newAbAlpha.ancho - 86)) /
    1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    (2 * (newAbAlpha.ancho - 230) + 2 * (newAbAlpha.alto - 279)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    (2 * (newAbAlpha.ancho - 230) + 2 * (newAbAlpha.alto - 279)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7x7
  codigo = "FEL7X7NEFS";
  cantidad = (2 * (newAbAlpha.ancho - 155 + 20)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta central de estanqueidad en marco
  codigo = "GUAJC";
  cantidad = (1 * newAbAlpha.ancho + 2 * newAbAlpha.alto) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Manija doble para puerta batiente
  codigo = "A3060";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  //  Cierre
  switch (newAbAlpha.selCierre) {
    case "7": // Cerradura monopunto
      // Cerradura monopunto c/contraplaca para puerta
      codigo = "74135";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Cilindro descentrado de 70 mm 30/40
      codigo = "8209304094";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Embellecedor en Nylon para cilindro
      codigo = "AT1000/17";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "8": // Cerradura con 3 puntos
      // Cerradura con 3 puntos
      codigo = "72G5013508";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura central para cerradura 3 puntos
      codigo = "A038601";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura adicional para cerradura 3 puntos
      codigo = "A038701";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Bisagra para puerta batiente
  codigo = "A8060";
  cantidad = 3;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Paraf. Zincado a atarr cab chata fenda
  codigo = "PAR428";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de fundición de 29x35 para puerta
  codigo = "81-2935C";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

accesoriosAlpha.unaPuertaDosHojasBatientesAcc = async (newAbAlpha) => {
  let accesorios = [];
  let accesorio = {};
  let costoAccesorios = 0;
  let codigo = "";
  let cantidad = 0;
  // Accesorios
  // Junta central en marco
  codigo = "GUA30947";
  cantidad = ((2 * (newAbAlpha.alto)) + (1 * (newAbAlpha.alto - 80 - 4)) + (4 * (newAbAlpha.alto - 51)) + (1 * (newAbAlpha.ancho)) + (2 * (newAbAlpha.ancho - 91) / 2) ) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Exterior acristalamiento de 2 mm
  codigo = "GUA173";
  cantidad =
    ((4 * (newAbAlpha.ancho - 379)) / 2 + 4 * (newAbAlpha.alto - 279)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta Interior de cuña de 6 mm
  codigo = "GUAC6N";
  cantidad =
    ((4 * (newAbAlpha.ancho - 379)) / 2 + 4 * (newAbAlpha.alto - 279)) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Felpa 7x7
  codigo = "FEL7X7NEFS";
  cantidad = ((4 * (newAbAlpha.ancho - 229)) / 2 + 20) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Junta central de estanqueidad en marco
  codigo = "GUAJC";
  cantidad = (1 * newAbAlpha.ancho + 3 * newAbAlpha.alto) / 1000;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Encuentro terminal simple premontado
  codigo = "A4212.2";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Encuentro pasador inferior piso
  codigo = "A4234";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Pasador para perno de latón
  codigo = "A4514.32";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Manija doble para puerta batiente
  codigo = "A3060";
  cantidad = 2;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  //  Cierre
  switch (newAbAlpha.selCierre) {
    case "7": // Cerradura monopunto
      // Cerradura monopunto c/contraplaca para puerta
      codigo = "74135";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Cilindro descentrado de 70 mm 30/40
      codigo = "8209304094";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Embellecedor en Nylon para cilindro
      codigo = "AT1000/17";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
    case "8": // Cerradura con 3 puntos
      // Cerradura con 3 puntos
      codigo = "72G5013508";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura central para cerradura 3 puntos
      codigo = "A038601";
      cantidad = 1;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      // Contracerradura adicional para cerradura 3 puntos
      codigo = "A038701";
      cantidad = 2;
      accesorio = await calcAccesorio(
        codigo,
        cantidad,
        newAbAlpha.selColorAccesorio,
        "Vidriocar S.A."
      );
      costoAccesorios += accesorio.subCosto;
      accesorios.push(accesorio);
      break;
  }
  // Bisagra para puerta batiente
  codigo = "A8060";
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Paraf. Zincado a atarr cab chata fenda
  codigo = "PAR428";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Juego tapón inversosr batiente central AK108
  codigo = "MATAPC";
  cantidad = 1;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de alineación
  codigo = "6-22051-P";
  cantidad = 4;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);
  // Escuadra de fundición de 29x35 para puerta
  codigo = "81-2935C";
  cantidad = 6;
  accesorio = await calcAccesorio(
    codigo,
    cantidad,
    newAbAlpha.selColorAccesorio,
    "Vidriocar S.A."
  );
  costoAccesorios += accesorio.subCosto;
  accesorios.push(accesorio);

  costoAccesorios = Math.round(costoAccesorios * 100) / 100;
  const result = [costoAccesorios, accesorios];
  return result;
};

// FUNCIONES
calcAccesorio = async function (codigo, cantidad, color, proveedor) {
  const descripcion = await Accesorio.obtenerDescripcion(codigo);
  const precio =
    Math.round(
      ((await Accesorio.obtenerCosto(codigo, color, proveedor)) / 1.1) * 100
    ) / 100;
  let subCosto = Math.round(precio * cantidad * 100) / 100;
  if (codigo == "FEL7X7NEFS") {
    subCosto = Math.round(((precio * cantidad) / 50) * 100) / 100;
  }
  const accesorio = {
    codigo,
    descripcion,
    cantidad,
    precio,
    subCosto,
  };
  return accesorio;
};
module.exports = accesoriosAlpha;
