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

  // Rodamientos 250 kg
  codigo = "AP50120";
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

  // Rodamientos 250 kg
  codigo = "AP50120";
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
