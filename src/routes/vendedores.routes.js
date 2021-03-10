const { Router } = require("express");
const router = Router();

const {
  renderVendedorForm,
  createNewVendedor,
  renderVendedores,
  renderVendedorEditForm,
  updateVendedor,
  deleteVendedor,
} = require("../controllers/vendedores.controllers");

const { isAuthenticated } = require("../helpers/auth");

// Vendedor Nuevo
router.get("/vendedores/add", isAuthenticated, renderVendedorForm);

router.post("/vendedores/new-vendedor", isAuthenticated, createNewVendedor);

// Obtener todos los vendedores
router.get("/vendedores", isAuthenticated, renderVendedores);

// Editar los vendedores
router.get("/vendedores/edit/:id", isAuthenticated, renderVendedorEditForm);

router.put("/vendedores/edit/:id", isAuthenticated, updateVendedor);

// Borrar vendedores
router.delete("/vendedores/delete/:id", isAuthenticated, deleteVendedor);

module.exports = router;
