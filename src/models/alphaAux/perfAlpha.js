const Perfil = require("../../models/Perfil");
const perfilesAlpha = {};

perfilesAlpha.dosHojasCorredizasPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Guía
  codigo = "AK202";
  medida = newAbAlpha.ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho - 8) / 2 / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = (newAbAlpha.ancho - 222) / 2 / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Premarco
  if (newAbAlpha.selPremarco == "1") {
    codigo = "CM200";
    medida = (newAbAlpha.ancho + 28) / 1000;
    corte = "45/45";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Contramarco
  if (newAbAlpha.selContramarco == "1") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Marco
  codigo = "AK202";
  medida = newAbAlpha.alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.alto - 70) / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Cruce
  codigo = "AK211";
  medida = (newAbAlpha.alto - 70) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = (newAbAlpha.alto - 211) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 1;
    } else {
      cantidad = 2;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 1;
    } else {
      cantidad = 2;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Premarco
  if (newAbAlpha.selPremarco == "1") {
    codigo = "CM200";
    medida = (newAbAlpha.alto + 28) / 1000;
    corte = "45/45";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Contramarco
  if (newAbAlpha.selContramarco == "1") {
    codigo = "RM019";
    medida = (newAbAlpha.alto + 131) / 1000;
    corte = "45/45";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.dosHojasUnaCorredizaUnaFijaPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Guía
  codigo = "AK202";
  medida = newAbAlpha.ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho - 8) / 2 / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = (newAbAlpha.ancho - 222) / 2 / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Premarco
  if (newAbAlpha.selPremarco == "1") {
    codigo = "CM200";
    medida = (newAbAlpha.ancho + 28) / 1000;
    corte = "45/45";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Contramarco
  if (newAbAlpha.selContramarco == "1") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Marco
  codigo = "AK202";
  medida = newAbAlpha.alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.alto - 70) / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Cruce
  codigo = "AK211";
  medida = (newAbAlpha.alto - 70) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = (newAbAlpha.alto - 211) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 1;
    } else {
      cantidad = 2;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 1;
    } else {
      cantidad = 2;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Premarco
  if (newAbAlpha.selPremarco == "1") {
    codigo = "CM200";
    medida = (newAbAlpha.alto + 28) / 1000;
    corte = "45/45";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Contramarco
  if (newAbAlpha.selContramarco == "1") {
    codigo = "RM019";
    medida = (newAbAlpha.alto + 131) / 1000;
    corte = "45/45";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

// FUNCIONES
calcPerfil = async function (
  codigo,
  lado,
  medida,
  corte,
  cantidad,
  color,
  proveedor
) {
  const descripcion = await Perfil.obtenerDescripcion(codigo);
  const peso = await Perfil.obtenerPeso(codigo);
  const subKG = Math.round(peso * medida * cantidad * 100) / 100;
  const precioPorMetro =
    Math.round(
      ((await Perfil.obtenerCosto(codigo, color, proveedor)) / 6.6) * 100
    ) / 100;
  const subCosto =
    Math.round(medida * precioPorMetro * cantidad * 100 * 1.05) / 100;

  const perfil = {
    codigo,
    lado,
    descripcion,
    peso,
    medida,
    corte,
    cantidad,
    subKG,
    precioPorMetro,
    subCosto,
  };
  return perfil;
};
module.exports = perfilesAlpha;