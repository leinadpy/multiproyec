const select = document.querySelector("#selAbertura");
mostrarInputsTemp(select);
select.addEventListener("change", () => mostrarInputsTemp(select));
// Para templado
function mostrarInputsTemp(dato) {
  // Función para Templado
  var valor = dato.value;
  switch (valor) {
    case "1": // Ventana/Puerta dos hojas, una corrediza y otra fija
      generalEspesorOpt();
      corredizaOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      mostrarDiv("#guiaEmbutida");
      break;
    case "2": // Ventana/Puerta de cuatro hojas, dos corredizas y dos fijas
      generalEspesorOpt();
      corredizaOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      mostrarDiv("#guiaEmbutida");
      break;
    case "3": // Ventana/Puerta dos hojas, una corrediza y una fija, con paño fijo inf o sup
      generalEspesorOpt();
      corredizaOpt();
      mostrarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      mostrarDiv("#guiaEmbutida");
      break;
    case "4": // Ventana/Puerta dos hojas, una corrediza y una fija, con paño fijo inf y sup
      generalEspesorOpt();
      corredizaOpt();
      mostrarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "5": // Ventana/Puerta de una hoja corrediza con guía prolongada
      generalEspesorOpt();
      corredizaOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      mostrarDiv("#guiaEmbutida");
      break;
    case "11": // Puerta de una hoja pivotante
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      ocultarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "12": // Puerta de dos hojas pivotantes
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      ocultarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "13": // Puerta de una hoja pivotante y un paño fijo lateral
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      mostrarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "14": // Puerta de una hoja pivotante y dos paños fijos laterales
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      mostrarDiv("#divAnchoFijoLat1");
      mostrarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "15": // Puerta de una hoja pivotante y paño fijo superior
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "16": // Puerta de dos hojas pivotantes y paño fijo superior
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "17": // Puerta de dos hojas pivotantes y paño fijo lateral
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      mostrarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "18": // Puerta de dos hojas pivotantes y dos paños fijos laterales
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      mostrarDiv("#divAnchoFijoLat1");
      mostrarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "21": // Ventana de una hoja proyectante
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      mostrarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "22": // Ventana de una hoja proyectante con paño fijo superior o inferior
      generalEspesorOpt();
      mostrarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      mostrarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "23": // Ventana de una hoja proyectante con paño fijo superior e inferior
      generalEspesorOpt();
      mostrarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      mostrarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "24": // Ventana de dos hojas proyectantes
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      mostrarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "31": // Mampara para box de baño frontal 2 hojas
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "32": // Mampara para box de baño fija
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      ocultarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "33": // Mampara para box de baño esquinero, dos corredizas y dos fijas
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      mostrarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "34": // Mampara para box de baño esquinero, una corrediza y dos fijas
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      mostrarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "35": // Mampara para box de baño de una hoja batiente
      generalEspesorOpt();
      puertaBatOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "36": // Mampara para box de baño de una hoja batiente con fijo lateral
      generalEspesorOpt();
      puertaBatOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      mostrarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "37": // Mampara para box de baño de dos hojas batientes
      generalEspesorOpt();
      puertaBatOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "41": // Espejo pegado a la pared / flotante
      espejoOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      mostrarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      ocultarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "51": // Paño fijo de un módulo
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      ocultarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "52": // Paño fijo de un módulo con tubos 50x50 alrededor
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      ocultarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "53": // Paño fijo de un módulo con tubos 50x100 alrededor
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      ocultarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "71": // Ventana una hoja pivotante
      generalEspesorOpt();
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "72": // Ventana una hoja pivotante con fijo superior o inferior
      generalEspesorOpt();
      mostrarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    case "73": // Ventana una hoja pivotante con fijo superior e inferior
      generalEspesorOpt();
      mostrarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAncho2");
      ocultarDiv("#divAnchoFijoLat1");
      ocultarDiv("#divAnchoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      ocultarDiv("#guiaEmbutida");
      break;
    default:
      console.log("Select no definido");
  }
}

function mostrarDiv(idDiv) {
  const divpf = document.querySelector(idDiv);
  divpf.style.display = "";
}

function ocultarDiv(idDiv) {
  const divpf = document.querySelector(idDiv);
  divpf.style.display = "none";
}

function generalEspesorOpt() {
  const array = ["8 mm", "10 mm"];
  const values = ["8", "10"];
  const select = document.querySelector("#espesorvidrio");
  limpiarSelect(select);
  for (var i in array) {
    const option = document.createElement("option");
    option.text = array[i];
    option.value = values[i];
    select.add(option);
  }
}

function espejoOpt() {
  const array = ["4 mm", "5 mm", "6 mm"];
  const values = ["4", "5", "6"];
  const select = document.querySelector("#espesorvidrio");
  limpiarSelect(select);
  for (var i in array) {
    const option = document.createElement("option");
    option.text = array[i];
    option.value = values[i];
    select.add(option);
  }
}

function puertaBatOpt() {
  const array = ["Cerradura de centro santa marina", "Sin cerradura"];
  const values = ["5", "6"];
  const select = document.querySelector("#cierreopc");
  limpiarSelect(select);
  for (var i in array) {
    const option = document.createElement("option");
    option.text = array[i];
    option.value = values[i];
    select.add(option);
  }
}

function corredizaOpt() {
  const array = [
    "Cerradura con llave",
    "Cerradura click chica",
    "Tirador y pasador",
    "Cerradura click chica y pasador",
  ];
  const values = ["1", "2", "3", "4"];
  const select = document.querySelector("#cierreopc");
  limpiarSelect(select);
  for (var i in array) {
    const option = document.createElement("option");
    option.text = array[i];
    option.value = values[i];
    select.add(option);
  }
}

function limpiarSelect(select) {
  for (let i = select.options.length; i >= 0; i--) {
    select.remove(i);
  }
}
