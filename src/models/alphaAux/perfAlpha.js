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
  const parametro = newAbAlpha.parametro;
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
    parametro,
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
    parametro,
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
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
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
    parametro,
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
    parametro,
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
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
  const parametro = newAbAlpha.parametro;
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
    parametro,
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
    parametro,
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
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
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
    parametro,
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
    parametro,
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.tresHojasCorredizasPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho + 54) / 3 / 1000;
  corte = "45/45";
  cantidad = 6;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho + 54) / 3 - 108) / 1000;
  corte = "90/90";
  cantidad = 6;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
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
  cantidad = 6;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 6;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 2;
    } else {
      cantidad = 4;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 2;
    } else {
      cantidad = 4;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.tresHojasDosCorredizasUnaFijaPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho + 54) / 3 / 1000;
  corte = "45/45";
  cantidad = 6;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho + 54) / 3 - 108) / 1000;
  corte = "90/90";
  cantidad = 6;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
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
  cantidad = 6;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 6;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 2;
    } else {
      cantidad = 4;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 2;
    } else {
      cantidad = 4;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.cuatroHojasDosCorredizasDosFijasPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho + 50) / 4 / 1000;
  corte = "45/45";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho + 50) / 4 - 108) / 1000;
  corte = "90/90";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Encastre central
  codigo = "AK212";
  medida = (newAbAlpha.alto - 40) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 2;
    } else {
      cantidad = 4;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 2;
    } else {
      cantidad = 4;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.cuatroHojasCorredizasPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.ancho / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho + 50) / 4 / 1000;
  corte = "45/45";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho + 50) / 4 - 108) / 1000;
  corte = "90/90";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.alto / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 6;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 3;
    } else {
      cantidad = 6;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 3;
    } else {
      cantidad = 6;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.cuatroHojasTresCorredizasUnaFijaPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.ancho / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho + 50) / 4 / 1000;
  corte = "45/45";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho + 50) / 4 - 108) / 1000;
  corte = "90/90";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.alto / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 6;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 3;
    } else {
      cantidad = 6;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 3;
    } else {
      cantidad = 6;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.cincoHojasCorredizasPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.ancho / 1000;
  corte = "45/45";
  cantidad = 6;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5 / 1000;
  corte = "45/45";
  cantidad = 10;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5 - 108) / 1000;
  corte = "90/90";
  cantidad = 10;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.alto / 1000;
  corte = "45/45";
  cantidad = 6;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 10;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 10;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 4;
    } else {
      cantidad = 8;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 4;
    } else {
      cantidad = 8;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.cincoHojasCuatroCorredizasUnaFijaPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.ancho / 1000;
  corte = "45/45";
  cantidad = 6;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5 / 1000;
  corte = "45/45";
  cantidad = 10;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4) / 5 - 108) / 1000;
  corte = "90/90";
  cantidad = 10;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.alto / 1000;
  corte = "45/45";
  cantidad = 6;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 10;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 10;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 4;
    } else {
      cantidad = 8;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 4;
    } else {
      cantidad = 8;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.seisHojasCorredizasPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.ancho / 1000;
  corte = "45/45";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6 / 1000;
  corte = "45/45";
  cantidad = 12;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6 - 108) / 1000;
  corte = "90/90";
  cantidad = 12;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.alto / 1000;
  corte = "45/45";
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 12;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 10;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 12;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 5;
    } else {
      cantidad = 10;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 5;
    } else {
      cantidad = 10;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.seisHojasCincoCorredizasUnaFijaPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.ancho / 1000;
  corte = "45/45";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6 / 1000;
  corte = "45/45";
  cantidad = 12;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 5) / 6 - 108) / 1000;
  corte = "90/90";
  cantidad = 12;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
  medida = newAbAlpha.alto / 1000;
  corte = "45/45";
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 12;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 10;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 12;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 5;
    } else {
      cantidad = 10;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 5;
    } else {
      cantidad = 10;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.seisHojasCuatroCorredizasDosFijasPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4 - 4.4) / 6 / 1000;
  corte = "45/45";
  cantidad = 12;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho - 35 * 2 + 31.3 * 2 * 4 - 4.4) / 6 - 108) / 1000;
  corte = "90/90";
  cantidad = 12;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
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
  cantidad = 12;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Encastre central
  codigo = "AK212";
  medida = (newAbAlpha.alto - 40) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 12;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 6;
    } else {
      cantidad = 12;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 6;
    } else {
      cantidad = 12;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.dosHojasCorredizasFijoInferiorPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const altoCorrediza = newAbAlpha.alto - newAbAlpha.altofijo;
  const parametro = newAbAlpha.parametro;
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
    parametro,
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
    parametro,
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco perimetral combinable con corrediza
  codigo = "AK107";
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.ancho - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Unión - clip
  codigo = "AK158";
  medida = newAbAlpha.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  codigo = "AK202";
  medida = altoCorrediza / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (altoCorrediza - 70) / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Cruce
  codigo = "AK211";
  medida = (altoCorrediza - 70) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = (altoCorrediza - 211) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (altoCorrediza - 70) / 1000;
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (altoCorrediza - 70) / 1000;
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (altoCorrediza - 70) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  //  Marco perimetral combinable con corrediza
  codigo = "AK107";
  medida = newAbAlpha.altofijo / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  //  Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.altofijo - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.dosHojasUnaCorredizaUnaFijaFijoInferiorPerf = async (
  newAbAlpha
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const altoCorrediza = newAbAlpha.alto - newAbAlpha.altofijo;
  const parametro = newAbAlpha.parametro;
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
    parametro,
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
    parametro,
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco perimetral combinable con corrediza
  codigo = "AK107";
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.ancho - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Unión - clip
  codigo = "AK158";
  medida = newAbAlpha.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  codigo = "AK202";
  medida = altoCorrediza / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (altoCorrediza - 70) / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Cruce
  codigo = "AK211";
  medida = (altoCorrediza - 70) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = (altoCorrediza - 211) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (altoCorrediza - 70) / 1000;
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (altoCorrediza - 70) / 1000;
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (altoCorrediza - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  //  Marco perimetral combinable con corrediza
  codigo = "AK107";
  medida = newAbAlpha.altofijo / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  //  Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.altofijo - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.cuatroHojasDosCorredizasDosFijasFijoInferiorPerf = async (
  newAbAlpha
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const altoCorrediza = newAbAlpha.alto - newAbAlpha.altofijo;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 / 1000;
  corte = "45/45";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 - 108) / 1000;
  corte = "90/90";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco perimetral combinable con corrediza
  codigo = "AK107";
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.ancho - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Unión - clip
  codigo = "AK158";
  medida = newAbAlpha.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  codigo = "AK202";
  medida = altoCorrediza / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (altoCorrediza - 70) / 1000;
  corte = "45/45";
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Cruce
  codigo = "AK211";
  medida = (altoCorrediza - 70) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Encastre central
  codigo = "AK212";
  medida = (altoCorrediza - 40) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = (altoCorrediza - 211) / 1000;
  corte = "90/90";
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (altoCorrediza - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 2;
    } else {
      cantidad = 4;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (altoCorrediza - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 2;
    } else {
      cantidad = 4;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (altoCorrediza - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  //  Marco perimetral combinable con corrediza
  codigo = "AK107";
  medida = newAbAlpha.altofijo / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  //  Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.altofijo - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  pesoPerfiles += perfil.subKG;
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.dosHojasCorredizasConTelaPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 108) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tela
  codigo = "AK208";
  medida = (newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
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
    parametro,
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
    parametro,
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tela
  codigo = "AK208";
  medida = (newAbAlpha.alto - 70) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.dosHojasUnaCorredizaUnaFijaConTelaPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 - 108) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tela
  codigo = "AK208";
  medida = (newAbAlpha.ancho + 31.3 * 2 * 1 - 35 * 2) / 2 / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
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
    parametro,
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
    parametro,
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tela
  codigo = "AK208";
  medida = (newAbAlpha.alto - 70) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.cuatroHojasDosCorredizasDosFijasConTelaPerf = async (
  newAbAlpha
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK207";
  medida = (newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 / 1000;
  corte = "45/45";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK219";
  medida = ((newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 - 108) / 1000;
  corte = "90/90";
  cantidad = 8;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tela
  codigo = "AK208";
  medida = (newAbAlpha.ancho + 31.3 * 2 * 2 - 35 * 2 - 4.4) / 4 / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Multi riel
  codigo = "AK214";
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
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Encastre central
  codigo = "AK212";
  medida = (newAbAlpha.alto - 40) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tela
  codigo = "AK208";
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
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Enguiador para cierre multipunto
  if (newAbAlpha.selCierre == "3" || newAbAlpha.selCierre == "4") {
    codigo = "AK224";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Refuerzo 1- Sin refuerzos, 2- Un lado refuerzo y 3- Doble refuerzo
  if (newAbAlpha.selRefuerzo != "1") {
    codigo = "AK222";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 2;
    } else {
      cantidad = 4;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "AK223";
    medida = (newAbAlpha.alto - 70) / 1000;
    corte = "90/90";
    if (newAbAlpha.selRefuerzo == "2") {
      cantidad = 2;
    } else {
      cantidad = 4;
    }
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.unaHojaOscilobatientePerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (ancho - 40) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 124) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  let oscilobat = 329;
  if (ancho < 450) {
    oscilobat = 329;
  } else if (ancho < 650) {
    oscilobat = 360;
  } else {
    oscilobat = 548;
  }
  medida = (ancho - oscilobat) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  codigo = "AK101";
  medida = alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (alto - 40) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (alto - 166) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (alto / 2 - 130) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (alto / 2 - 167) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.unaHojaOscilobatienteFijoInferiorPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (ancho - 40) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 124) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  let oscilobat = 329;
  if (ancho < 450) {
    oscilobat = 329;
  } else if (ancho < 650) {
    oscilobat = 360;
  } else {
    oscilobat = 548;
  }
  medida = (ancho - oscilobat) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco perimetral para el fijo
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Unión - Clip
  codigo = "AK158";
  medida = ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  const altoBat = alto - newAbAlpha.altofijo;
  codigo = "AK101";
  medida = altoBat / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (altoBat - 40) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (altoBat - 166) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (altoBat / 2 - 130) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (altoBat / 2 - 167) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco perimetral para el fijo
  codigo = "AK101";
  medida = newAbAlpha.altofijo / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.altofijo - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.unaHojaBatientePerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (ancho - 38) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 122) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  codigo = "AK101";
  medida = alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (alto - 38) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (alto - 164) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (alto / 2 - 138) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (alto / 2 - 138) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.unaHojaBatienteFijoInferiorPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (ancho - 38) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 122) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco perimetral para el fijo
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Unión - Clip
  codigo = "AK158";
  medida = ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  const altoBat = alto - newAbAlpha.altofijo;
  codigo = "AK101";
  medida = altoBat / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (altoBat - 38) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (altoBat - 164) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = ((altoBat - 38) / 2 - 138) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = ((altoBat - 38) / 2 - 138) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco perimetral para el fijo
  codigo = "AK101";
  medida = newAbAlpha.altofijo / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.altofijo - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.dosHojasBatientesPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (ancho - 44) / 2 / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = ((ancho - 44) / 2 - 84) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  codigo = "AK101";
  medida = alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (alto - 38) / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (alto - 164) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Batiente central doble hoja
  codigo = "AK108";
  medida = (alto - 104) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (alto / 2 - 138) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (alto / 2 - 138) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.dosHojasBatientesFijoInferiorPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (ancho - 44) / 2 / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = ((ancho - 44) / 2 - 84) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja Fija
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Unión - Clip
  codigo = "AK158";
  medida = ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  const altoBat = alto - newAbAlpha.altofijo;
  codigo = "AK101";
  medida = altoBat / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (altoBat - 38) / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (altoBat - 164) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Batiente central doble hoja
  codigo = "AK108";
  medida = (altoBat - 104) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = ((altoBat - 38) / 2 - 138) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = ((altoBat - 38) / 2 - 138) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja fijo
  codigo = "AK101";
  medida = newAbAlpha.altofijo / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.altofijo - 25 * 2) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.dosHojasOscilobatientesPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (ancho - 46) / 2 / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = ((ancho - 46) / 2 - 84) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  let oscilobat = 329;
  if (ancho / 2 < 450) {
    oscilobat = 329;
  } else if (ancho / 2 < 650) {
    oscilobat = 360;
  } else {
    oscilobat = 548;
  }
  medida = (ancho / 2 - oscilobat) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  codigo = "AK101";
  medida = alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (alto - 40) / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (alto - 166) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (alto / 2 - 130) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (alto / 2 - 167) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Batiente central doble hoja
  codigo = "AK108";
  medida = (alto - 106) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.dosHojasOscilobatientesFijoInferiorPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (ancho - 46) / 2 / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = ((ancho - 46) / 2 - 84) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  let oscilobat = 329;
  if (ancho / 2 < 450) {
    oscilobat = 329;
  } else if (ancho / 2 < 650) {
    oscilobat = 360;
  } else {
    oscilobat = 548;
  }
  medida = (ancho / 2 - oscilobat) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco perimetral para el fijo
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Unión - Clip
  codigo = "AK158";
  medida = ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  const altoBat = alto - newAbAlpha.altofijo;
  codigo = "AK101";
  medida = altoBat / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (altoBat - 40) / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (altoBat - 166) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (altoBat / 2 - 130) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (altoBat / 2 - 167) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Batiente central doble hoja
  codigo = "AK108";
  medida = (altoBat - 106) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco perimetral para el fijo
  codigo = "AK101";
  medida = newAbAlpha.altofijo / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.altofijo - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.unaPuertaHojaBatientePerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 1 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral para puerta
  codigo = "AK104";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Zócalo inferior puerta batiente
  codigo = "AK120";
  medida = (ancho - 230) / 1000;
  corte = "45/45";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja puerta apertura batiente
  codigo = "AK110";
  medida = (ancho - 86) / 1000;
  corte = "45/45";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 230) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Cortavientos inferior zócalo
  codigo = "AK122";
  medida = (ancho - 155 + 20) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Vedación base para piso
  codigo = "AK118";
  medida = ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
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
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Marco
  codigo = "AK104";
  medida = alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK110";
  medida = (alto - 47 - 4) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (alto - 279) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbAlpha.selCierre == "8") {
    // Varilla para accionamiento
    codigo = "AK154";
    medida = (alto - 47 - 4) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.unaPuertaDosHojasBatientesPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 1 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral para puerta
  codigo = "AK104";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Zócalo inferior puerta batiente
  codigo = "AK120";
  medida = (ancho - 379) / 2 / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja puerta apertura batiente
  codigo = "AK110";
  medida = (ancho - 91) / 2 / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 379) / 2 / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Cortavientos inferior zócalo
  codigo = "AK122";
  medida = ((ancho - 229) / 2 + 20) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Vedación base para piso
  codigo = "AK118";
  medida = ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
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
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Marco
  codigo = "AK104";
  medida = alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK110";
  medida = (alto - 47 - 4) / 1000;
  corte = "45/45";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (alto - 279) / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Batiente central doble hoja
  codigo = "AK108";
  medida = (alto - 80 - 4) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbAlpha.selCierre == "8") {
    // Varilla para accionamiento
    codigo = "AK154";
    medida = (alto - 47 - 4) / 1000;
    corte = "90/90";
    cantidad = 1;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.unaHojaProyectantePerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK134";
  medida = (ancho - 38) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 138) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (ancho - 128) / 2 / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Desagote interior proyectante
  codigo = "AK160";
  medida = (ancho - 38) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  codigo = "AK101";
  medida = alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK134";
  medida = (alto - 38) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (alto - 180) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.unaHojaProyectanteFijoInferiorPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK134";
  medida = (ancho - 38) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 138) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Varilla de conexión
  codigo = "AK154";
  medida = (ancho - 128) / 2 / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Desagote interior proyectante
  codigo = "AK160";
  medida = (ancho - 91) / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco perimetral FIJO
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 25 * 2) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Unión - clip
  codigo = "AK158";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  const altoProy = alto - newAbAlpha.altofijo;
  // Marco
  codigo = "AK101";
  medida = altoProy / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK134";
  medida = (altoProy - 38) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (altoProy - 180) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Marco FIJO
  codigo = "AK101";
  medida = newAbAlpha.altofijo / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (newAbAlpha.altofijo - 25 * 2) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.unaHojaAbatiblePerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let ancho = 0;
  let alto = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }
  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (ancho - 38) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 122) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  codigo = "AK101";
  medida = alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Hoja
  codigo = "AK109";
  medida = (alto - 38) / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (alto - 164) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }
  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesAlpha.unaHojaFijaPerf = async (newAbAlpha) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let corte = "";
  let ancho = 0;
  let alto = 0;
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  const parametro = newAbAlpha.parametro;
  // Perfiles calcPerfil(codigo, medida, corte, cantidad)
  // Solera
  if (newAbAlpha.solera == "si") {
    ancho = newAbAlpha.ancho - 15 * 2 - 2;
    alto = newAbAlpha.alto - 17 * 2 - 2;
    codigo = "IN044";
    medida = (newAbAlpha.ancho - 15 * 2) / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    codigo = "IN043";
    medida = newAbAlpha.alto / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else {
    ancho = newAbAlpha.ancho;
    alto = newAbAlpha.alto;
  }

  // Marco perimetral
  codigo = "AK101";
  medida = ancho / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (ancho - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  } else if (newAbAlpha.selContramarco == "2") {
    codigo = "RM019";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    codigo = "RM020";
    medida = (newAbAlpha.ancho + 131) / 1000;
    corte = "45/45";
    cantidad = 1;
    lado = "ANCHO";
    perfil = await calcPerfil(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
  }

  // Marco
  codigo = "AK101";
  medida = alto / 1000;
  corte = "45/45";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Contravidrio
  codigo = "AK130";
  medida = (alto - 25 * 2) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfil(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    newAbAlpha.selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

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
      parametro,
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
      parametro,
      newAbAlpha.selColorAluminio,
      "Vidriocar S.A."
    );
    pesoPerfiles += perfil.subKG;
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
  parametro,
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
    Math.round(medida * precioPorMetro * cantidad * 100 * parametro) / 100;
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
