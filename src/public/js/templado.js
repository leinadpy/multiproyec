const select = document.querySelector("#selAbertura");
mostrarInputsTemp(select);
select.addEventListener("change", () => {
  mostrarInputsTemp(select);
});
// Para templado
function mostrarInputsTemp(dato) {
  // Función para Templado
  var valor = dato.value;
  switch (valor) {
    case "1": // Ventana/Puerta dos hojas, una corrediza y otra fija
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "2": // Ventana/Puerta de cuatro hojas, dos corredizas y dos fijas
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "3": // Ventana/Puerta dos hojas, una corrediza y una fija, con paño fijo inf o sup
      mostrarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "4": // Ventana/Puerta dos hojas, una corrediza y una fija, con paño fijo inf y sup
      mostrarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "5": // Ventana/Puerta de una hoja corrediza con guía prolongada
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "11": // Puerta de una hoja pivotante
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      ocultarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "12": // Puerta de dos hojas pivotantes
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      ocultarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "13": // Puerta de una hoja pivotante y un paño fijo lateral
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      mostrarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "14": // Puerta de una hoja pivotante y dos paños fijos laterales
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      mostrarDiv("#divAltoFijoLat1");
      mostrarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "15": // Puerta de una hoja pivotante y paño fijo superior
      ocultarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "16": // Puerta de dos hojas pivotantes y paño fijo superior
      ocultarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "17": // Puerta de dos hojas pivotantes y paño fijo lateral
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      mostrarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "18": // Puerta de dos hojas pivotantes y dos paños fijos laterales
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      mostrarDiv("#divAltoFijoLat1");
      mostrarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      mostrarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      mostrarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "21": // Ventana de una hoja proyectante
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      mostrarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "22": // Ventana de una hoja proyectante con paño fijo superior o inferior
      mostrarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      mostrarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "23": // Ventana de una hoja proyectante con paño fijo superior e inferior
      mostrarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      mostrarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "24": // Ventana de dos hojas proyectantes
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      mostrarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "31": // Mampara para box de baño frontal 2 hojas
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "32": // Mampara para box de baño fija
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      ocultarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "33": // Mampara para box de baño esquinero, dos corredizas y dos fijas
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "34": // Mampara para box de baño esquinero, una corrediza y dos fijas
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "35": // Mampara para box de baño de una hoja batiente
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "36": // Mampara para box de baño de una hoja batiente con fijo lateral
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      mostrarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "37": // Mampara para box de baño de dos hojas batientes
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      mostrarDiv("#divCierre");
      break;
    case "41": // Espejo pegado a la pared / flotante
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      mostrarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      ocultarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "51": // Paño fijo de un módulo
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      ocultarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "52": // Paño fijo de un módulo con tubos alrededor
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      ocultarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "61": // Servicio ploteado ciego
      // code block
      break;
    case "62": // Servicio ploteado complejo
      // code block
      break;
    case "63": // Servicio arenado ciego
      // code block
      break;
    case "64": // Servicio arenado complejo
      // code block
      break;
    case "65": // Servicio pulido
      // code block
      break;
    case "66": // Servicio biselado
      // code block
      break;
    case "71": // Ventana una hoja pivotante
      ocultarDiv("#divAltoFijoInf");
      ocultarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "72": // Ventana una hoja pivotante con fijo superior o inferior
      mostrarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
      break;
    case "73": // Ventana una hoja pivotante con fijo superior e inferior
      mostrarDiv("#divAltoFijoInf");
      mostrarDiv("#divAltoFijoSup");
      ocultarDiv("#divAltoFijoLat1");
      ocultarDiv("#divAltoFijoLat2");
      ocultarDiv("#divTipoEspejo");
      ocultarDiv("#divTipoCierre");
      ocultarDiv("#divTipoBrazo");
      mostrarDiv("#divColorAluminio");
      ocultarDiv("#divTipoManijon");
      mostrarDiv("#divColorVidrio");
      mostrarDiv("#divEspesorVidrio");
      mostrarDiv("#divColorAccesorio");
      ocultarDiv("#divCierre");
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
