const select = document.querySelector("#selAbertura");
mostrarInputsTemp(select);
select.addEventListener("change", () => {
  mostrarInputsTemp(select);
});
// Para Alpha
function mostrarInputsTemp(dato) {
  // Función para Alpha
  var valor = dato.value;
  switch (valor) {
    case "1": // Ventana/Puerta dos hojas corredizas
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "1F": // Ventana/Puerta dos hojas corredizas con fijo inferior
      mostrarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "2": // Ventana/Puerta de dos hojas, una corrediza y una fija
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "2F": // Ventana/Puerta de dos hojas, una corrediza y una fija, con paño fijo inferior
      mostrarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "3": // Ventana/Puerta tres hojas corredizas
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "4": // Ventana/Puerta tres hojas, dos corredizas y una fija
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "5": // Ventana/Puerta de cuatro hojas, dos corredizas y dos fijas
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "5F": // Ventana/Puerta de cuatro hojas, dos corredizas y dos fijas, con paño fijo inferior
      mostrarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "6": // Ventana/Puerta de cuatro hojas corredizas
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "7": // Ventana/Puerta de cuatro hojas, tres corredizas y una fija
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "8": // Ventana/Puerta de cinco hojas corredizas
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "9": // Ventana/Puerta de seis hojas, cuatro corredizas y dos fijas encuentro central
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "10": // Ventana/Puerta de seis hojas, cinco corredizas y una fija
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "11": // Ventana/Puerta de dos hojas corredizas con tela mosquera
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "12": // Ventana/Puerta de dos hojas, una corrediza y otra fija con tela mosquera
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "13": // Ventana/Puerta de cuatro hojas, dos corredizas y dos fijas, con tela mosquera
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      mostrarDiv("#refuerzo");
      ocultarDiv("#divSolera");
      corredizaOpt();
      break;
    case "21": // Ventana de una hoja batiente
      ocultarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "21F": // Ventana de una hoja batiente con paño fijo inferior
      mostrarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "22": // Ventana de dos hojas batientes
      ocultarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "22F": // Ventana de dos hojas batientes con paño fijo inferior
      mostrarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "23": // Ventana de una hoja oscilobatiente
      ocultarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "23F": // Ventana de una hoja oscilobatiente con paño fijo inferior
      mostrarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "24": // Ventana de dos hojas, una oscilobatiente y una batiente
      ocultarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "24F": // Ventana de dos hojas, una oscilobatiente y una batiente con paño fijo inferior
      mostrarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "25": // Puerta de una hoja batiente
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      puertaBatOpt();
      break;
    case "26": // Puerta de dos hojas batientes
      ocultarDiv("#altofijodiv");
      mostrarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      puertaBatOpt();
      break;
    case "31": // Ventana de una hoja proyectante
      ocultarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "31F": // Ventana de una hoja proyectante con paño fijo inferior
      mostrarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "41": // Ventana de una hoja abatible
      ocultarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    case "51": // Ventana de una hoja fija
      ocultarDiv("#altofijodiv");
      ocultarDiv("#cierre");
      ocultarDiv("#refuerzo");
      mostrarDiv("#divSolera");
      break;
    default:
      console.log("Select no definido");
  }
}
ambosOpt();
function mostrarDiv(idDiv) {
  const divpf = document.querySelector(idDiv);
  divpf.style.display = "";
}

function ocultarDiv(idDiv) {
  const divpf = document.querySelector(idDiv);
  divpf.style.display = "none";
}

function puertaBatOpt() {
  const array = ["Cerradura monopunto con llave", "Cerradura con 3 puntos"];
  const values = ["7", "8"];
  const select = document.querySelector("#selCierre");
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
    "Cierre automático sin llave",
    "Cierre automático con llave",
    "Cerradura multipunto sin llave 2 puntos",
    "Cerradura multipunto sin llave 3 puntos",
    "Cerradura con llave con concha ciega",
    "Cerradura con llave con puxador",
  ];
  const values = ["1", "2", "3", "4", "5", "6"];
  const select = document.querySelector("#selCierre");
  limpiarSelect(select);
  for (var i in array) {
    const option = document.createElement("option");
    option.text = array[i];
    option.value = values[i];
    select.add(option);
  }
}

function ambosOpt() {
  const array = [
    "Cierre automático sin llave",
    "Cierre automático con llave",
    "Cerradura multipunto sin llave 2 puntos",
    "Cerradura multipunto sin llave 3 puntos",
    "Cerradura con llave con concha ciega",
    "Cerradura con llave con puxador",
    "Cerradura monopunto con llave",
    "Cerradura con 3 puntos",
  ];
  const values = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const select = document.querySelector("#selCierre");
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
