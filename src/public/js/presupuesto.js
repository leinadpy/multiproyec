const formulario = document.querySelector("#formPrincipal");

const buttonAdd = document.querySelector("#addAlpha");
buttonAdd.addEventListener("click", (e) => addDetail(e));

const buttonSave = document.querySelector("#guardar");
buttonSave.addEventListener("click", (e) => saveEverything(e));

const inputIdCliente = document.querySelector("#cliente");
const inputNombreCliente = document.querySelector("#clienteNombre")
function selCliente(){
  listClients.forEach((cliente) => {
    if(cliente.nombre===inputNombreCliente.value){
      inputIdCliente.value=cliente._id;
    }
  })
}
const inputIdVendedor = document.querySelector("#vendedor");
const inputNombreVendedor = document.querySelector("#vendedorNombre")
function selVendedor(){
  listVendedores.forEach((vendedor) => {
    if(vendedor.nombre===inputNombreVendedor.value){
      inputIdVendedor.value=vendedor._id;
    }
  })
}

function saveEverything(e) {
  e.preventDefault();
  formulario.setAttribute("action", "/presupuestos/new-presupuesto");
  formulario.submit();
}

function addDetail(e) {
  e.preventDefault();
  formulario.setAttribute("action", "/presupuestos/new-aberturaalpha");
  formulario.submit();
}

const dataListClients = document.getElementById("clients");
var listClients = [];

const dataListVendedores = document.getElementById("salerman");
var listVendedores = [];

fetch("http://localhost:4000/presupuestos/vendedores")
  .then((response) => response.json())
  .then((vendedores) => {
    vendedores.forEach((vendedor) => {
      const option = document.createElement("option");
      option.value = vendedor.nombre;
      dataListVendedores.append(option);
      listVendedores.push(vendedor);
    });
  });

fetch("http://localhost:4000/presupuestos/clientes")
  .then((response) => response.json())
  .then((clientes) => {
    clientes.forEach((cliente) => {
      const option = document.createElement("option");
      option.value = cliente.nombre;
      dataListClients.append(option);
      listClients.push(cliente);
    });
  });
