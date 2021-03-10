const { Router } = require("express");
const router = Router();

const {
  renderClienteForm,
  createNewCliente,
  renderClientes,
  renderClienteEditForm,
  updateCliente,
  deleteCliente,
} = require("../controllers/clientes.controller");

const { isAuthenticated } = require("../helpers/auth");

// Cliente Nuevo
router.get("/clientes/add", isAuthenticated, renderClienteForm);

router.post("/clientes/new-cliente", isAuthenticated, createNewCliente);

// Obtener todos los clientes
router.get("/clientes", isAuthenticated, renderClientes);

// Editar los clientes
router.get("/clientes/edit/:id", isAuthenticated, renderClienteEditForm);

router.put("/clientes/edit/:id", isAuthenticated, updateCliente);

// Borrar clientes
router.delete("/clientes/delete/:id", isAuthenticated, deleteCliente);

module.exports = router;
