const Perfil = require("../../models/Perfil");
const perfilesTemplado = {};

perfilesTemplado.dosHojasUnaCorredizaUnaFijaPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX229") : (codigo = "BX257");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX066") : (codigo = "BX206");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapa Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX184") : (codigo = "BX258");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Doble ángulo (si va embutido)
  if (newAbTemplado.embutido == "Si") {
    codigo = "CT013";
    medida = newAbTemplado.ancho / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfilTemplado(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      selColorAluminio,
      proveedoraluminio
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Perfil Lateral
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX246") : (codigo = "BX261");
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );

  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.cuatroHojasDosCorredizasDosFijasPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX229") : (codigo = "BX257");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX066") : (codigo = "BX206");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapa Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX184") : (codigo = "BX258");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil de encuentro
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX226") : (codigo = "BX209");
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Doble ángulo (si va embutido)
  if (newAbTemplado.embutido == "Si") {
    codigo = "CT013";
    medida = newAbTemplado.ancho / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfilTemplado(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      selColorAluminio,
      proveedoraluminio
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Perfil Lateral
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX246") : (codigo = "BX261");
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );

  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.unaHojaCorredizaPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX229") : (codigo = "BX257");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX066") : (codigo = "BX206");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapa Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX184") : (codigo = "BX258");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Doble ángulo (si va embutido)
  if (newAbTemplado.embutido == "Si") {
    codigo = "CT013";
    medida = newAbTemplado.ancho / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfilTemplado(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      selColorAluminio,
      proveedoraluminio
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Perfil Lateral
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX246") : (codigo = "BX261");
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );

  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.pañoFijoPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.mamparaFijaPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.mamparaDosHojasUnaCorredizaUnaFijaPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX229") : (codigo = "BX257");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX066") : (codigo = "BX206");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapa Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX184") : (codigo = "BX258");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const altoCorrediza = newAbTemplado.alto - newAbTemplado.altofijoinf;
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX229") : (codigo = "BX257");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX066") : (codigo = "BX206");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapa Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX184") : (codigo = "BX258");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = altoCorrediza / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.altofijoinf / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Doble ángulo (si va embutido)
  if (newAbTemplado.embutido == "Si") {
    codigo = "CT013";
    medida = newAbTemplado.ancho / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfilTemplado(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      selColorAluminio,
      proveedoraluminio
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Perfil Lateral
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX246") : (codigo = "BX261");
  medida = altoCorrediza / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.dosHojasUnaCorredizaUnaFijaFijoInferiorSuperiorPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const altoCorrediza =
    newAbTemplado.alto - newAbTemplado.altofijoinf - newAbTemplado.altofijosup;
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX229") : (codigo = "BX257");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX066") : (codigo = "BX206");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapa Guía Superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX184") : (codigo = "BX258");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = altoCorrediza / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.altofijoinf / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.altofijosup / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Doble ángulo (si va embutido)
  if (newAbTemplado.embutido == "Si") {
    codigo = "CT013";
    medida = newAbTemplado.ancho / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfilTemplado(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      selColorAluminio,
      proveedoraluminio
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Perfil Lateral
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX246") : (codigo = "BX261");
  medida = altoCorrediza / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.tresHojasDosCorredizasUnaFijaPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Juego guía superior y tapa guía superior
  codigo = "JUEGODOBLE";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior Doble
  codigo = "CK315";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = (newAbTemplado.ancho / 3 / 1000) * 2;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Doble ángulo (si va embutido)
  if (newAbTemplado.embutido == "Si") {
    codigo = "CT013";
    medida = newAbTemplado.ancho / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfilTemplado(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      selColorAluminio,
      proveedoraluminio
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Perfil Lateral
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX246") : (codigo = "BX261");
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );

  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.seisHojasCuatroCorredizasDosFijasPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Juego guía superior y tapa guía superior
  codigo = "JUEGODOBLE";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior Doble
  codigo = "CK315";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    "Vidriocar S.A."
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = (newAbTemplado.ancho / 3 / 1000) * 2;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Doble ángulo (si va embutido)
  if (newAbTemplado.embutido == "Si") {
    codigo = "CT013";
    medida = newAbTemplado.ancho / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfilTemplado(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      selColorAluminio,
      proveedoraluminio
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  // Perfil Encuentro
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX226") : (codigo = "BX209");
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil Lateral
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX246") : (codigo = "BX261");
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 8;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.mamparaEsquineroDosCorredizasDosFijasPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)

  // Guía Superior Ancho1
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX229") : (codigo = "BX257");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Superior Ancho2
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX229") : (codigo = "BX257");
  medida = newAbTemplado.ancho2 / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior Ancho1
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX066") : (codigo = "BX206");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior Ancho2
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX066") : (codigo = "BX206");
  medida = newAbTemplado.ancho2 / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapa Guía Superior Ancho1
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX184") : (codigo = "BX258");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapa Guía Superior Ancho2
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX184") : (codigo = "BX258");
  medida = newAbTemplado.ancho2 / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior Ancho1
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior Ancho2
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = newAbTemplado.ancho2 / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil Encuentro
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX226";
  } else {
    codigo = "BX209";
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.mamparaEsquineroUnaCorredizaDosFijasPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)

  // Guía Superior Ancho1
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX229") : (codigo = "BX257");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Guía Inferior Ancho1
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX066") : (codigo = "BX206");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapa Guía Superior Ancho1
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX184") : (codigo = "BX258");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tapita inferior / superior Ancho1
  newAbTemplado.espesorvidrio == 8 ? (codigo = "BX068") : (codigo = "CL022");
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017"
  medida = newAbTemplado.ancho2 / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho2 / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  medida = newAbTemplado.alto / 1000;
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017"
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.puertaUnaHojaPivotantePañoFijoLatPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.anchofijolat1 / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.puertaUnaHojaPivotantePañosFijosLatPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.anchofijolat1 / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  medida = newAbTemplado.anchofijolat2 / 1000;
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.puertaUnaHojaPivotantePañoFijoSupPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.altofijosup / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.puertaDosHojasPivotantesPañoFijoSupPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.altofijosup / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.puertaDosHojasPivotantesPañoFijoLatPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.anchofijolat1 / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.puertaDosHojasPivotantesPañosFijosLatPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.anchofijolat1 / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.anchofijolat2 / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.proyectanteUnaHojaPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Angulo 15x15
  codigo = "CT084";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  medida = newAbTemplado.alto / 1000;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.proyectanteUnaHojaPañoFijoInfPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  const altoProyectante = newAbTemplado.alto - newAbTemplado.altofijoinf;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Angulo 15x15
  codigo = "CT084";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Angulo 15x15
  codigo = "CT084";
  medida = altoProyectante / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.altofijoinf / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.proyectanteUnaHojaPañoFijoInfSupPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  const altoProyectante =
    newAbTemplado.alto - newAbTemplado.altofijoinf - newAbTemplado.altofijosup;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Angulo 15x15
  codigo = "CT084";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Angulo 15x15
  codigo = "CT084";
  medida = altoProyectante / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.altofijoinf / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.altofijosup / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.proyectanteDosHojasPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Angulo 15x15
  codigo = "CT084";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  cantidad = 4;
  medida = newAbTemplado.alto / 1000;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.ventanaPivotanteUnaHojaPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Tubo 50x25
  codigo = "TG073";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Angulo 15x15
  codigo = "CT084";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 3;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  cantidad = 2;
  medida = newAbTemplado.alto / 1000;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.ventanaPivotanteUnaHojaFijoInfPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  const altoPivotante = newAbTemplado.alto - newAbTemplado.altofijoinf;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Angulo 15x15
  codigo = "CT084";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 3;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.altofijoinf / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Angulo 15x15
  codigo = "CT084";
  medida = altoPivotante / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.ventanaPivotanteUnaHojaFijoInfSupPerf = async (
  newAbTemplado
) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  const altoPivotante =
    newAbTemplado.alto - newAbTemplado.altofijoinf - newAbTemplado.altofijosup;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 4;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Angulo 15x15
  codigo = "CT084";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 3;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = (newAbTemplado.altofijoinf + newAbTemplado.altofijosup) / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Angulo 15x15
  codigo = "CT084";
  medida = altoPivotante / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.espejoPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  if (newAbTemplado.tipoEspejo == "1") {
    costoPerfiles = 0;
  } else {
    switch (newAbTemplado.tipoEspejo) {
      case "2": // Flotante con U
        // Perfil U
        selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
        break;
      case "3": // Flotante con tubo 25x25
        // Tubo 25x25
        codigo = "TQ007";
        break;
      case "4": // Flotante con tubo 50x25
        // Tubo 50x25
        codigo = "TG073";
        break;
      case "5": // Flotante con tubo 50x50
        // Tubo 50x50
        codigo = "TQ017";
        break;
      case "6": // Flotante con angulo 20x20
        // Angulo 20x20
        codigo = "CT085";
        break;
    }
    medida = newAbTemplado.ancho / 1000;
    corte = "90/90";
    cantidad = 2;
    lado = "ANCHO";
    perfil = await calcPerfilTemplado(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      selColorAluminio,
      proveedoraluminio
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);

    medida = newAbTemplado.alto / 1000;
    cantidad = 2;
    lado = "ALTO";
    perfil = await calcPerfilTemplado(
      codigo,
      lado,
      medida,
      corte,
      cantidad,
      parametro,
      selColorAluminio,
      proveedoraluminio
    );
    pesoPerfiles += perfil.subKG;
    costoPerfiles += perfil.subCosto;
    perfiles.push(perfil);
  }

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.mamparaUnaBatientePerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Angulo 25x25
  codigo = "CT013";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.mamparaUnaBatienteFijoLatPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Tubo 50x50
  codigo = "TQ017";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil Encuentro 8 mm / 10 mm
  codigo = newAbTemplado.espesorvidrio == "8" ? "BX226" : "BX209";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.mamparaDosBatientesPerf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil Encuentro 8 mm / 10 mm
  codigo = "CT013";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil Encuentro 8 mm / 10 mm
  medida = newAbTemplado.alto / 1000;
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil Encuentro 8 mm / 10 mm
  codigo = newAbTemplado.espesorvidrio == "8" ? "BX226" : "BX209";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 1;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.pañoFijoTubos50x50Perf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubos 50x50
  codigo = "TQ017";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubos 50x50
  codigo = "TQ017";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

perfilesTemplado.pañoFijoTubos50x100Perf = async (newAbTemplado) => {
  let perfiles = [];
  let perfil = {};
  let lado = "";
  let medida = 0;
  let cantidad = 0;
  let corte = "";
  let pesoPerfiles = 0;
  let costoPerfiles = 0;
  let codigo = "";
  const selColorAluminio = newAbTemplado.selColorAluminio;
  const proveedoraluminio = newAbTemplado.proveedoraluminio;
  const parametro = newAbTemplado.parametro;
  // Perfiles calcPerfilTemplado(codigo, medida, corte, cantidad)
  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubos 50x100
  codigo = "TG072";
  medida = newAbTemplado.ancho / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ANCHO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Perfil U
  if (newAbTemplado.espesorvidrio == 8) {
    codigo = "BX065";
  } else {
    selColorAluminio == "Blanco" ? (codigo = "PU329") : (codigo = "PU344");
  }
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  // Tubos 50x100
  codigo = "TG072";
  medida = newAbTemplado.alto / 1000;
  corte = "90/90";
  cantidad = 2;
  lado = "ALTO";
  perfil = await calcPerfilTemplado(
    codigo,
    lado,
    medida,
    corte,
    cantidad,
    parametro,
    selColorAluminio,
    proveedoraluminio
  );
  pesoPerfiles += perfil.subKG;
  costoPerfiles += perfil.subCosto;
  perfiles.push(perfil);

  costoPerfiles = Math.round(costoPerfiles * 100) / 100;
  const result = [costoPerfiles, pesoPerfiles, perfiles];
  return result;
};

// FUNCIONES
calcPerfilTemplado = async function (
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
  // console.log(descripcion, medida, subCosto)
  return perfil;
};
module.exports = perfilesTemplado;
