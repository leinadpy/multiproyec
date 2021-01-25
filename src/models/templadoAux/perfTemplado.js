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

perfilesTemplado.mamparaDosHojasUnaCorredizaUnaFijaPerf = async (newAbTemplado) => {
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
  return perfil;
};
module.exports = perfilesTemplado;
