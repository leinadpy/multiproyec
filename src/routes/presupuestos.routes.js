const { Router } = require("express");
const router = Router();

const {
  renderPresupuestoForm,
  createNewPresupuesto,
  sendClientes,
  sendVendedores,
  createNewAberturaAlpha,
  getPresupuestos,
  renderPresupuestos,
  renderPresupuestoEditForm,
  updatePresupuesto,
  deletePresupuesto,
} = require("../controllers/presupuestos.controller");

const { isAuthenticated } = require("../helpers/auth");

// Presupuesto Nuevo
router.get("/presupuestos/add", isAuthenticated, renderPresupuestoForm);

router.post("/presupuestos/new-presupuesto", isAuthenticated, createNewPresupuesto);

// Obtener lista de vendedores y clientes
router.get("/presupuestos/vendedores", isAuthenticated, sendVendedores)

router.get("/presupuestos/clientes", isAuthenticated, sendClientes)

router.post("/presupuestos/new-aberturaalpha", isAuthenticated, createNewAberturaAlpha);

// Obtener todos los presupuestos
router.get("/presupuestos", isAuthenticated, renderPresupuestos);
router.get("/api/presupuestos", isAuthenticated, getPresupuestos);

// Editar los presupuestos
router.get("/presupuestos/edit/:id", isAuthenticated, renderPresupuestoEditForm);

router.put("/presupuestos/edit/:id", isAuthenticated, updatePresupuesto);

// Borrar presupuestos
router.delete("/presupuestos/delete/:id", isAuthenticated, deletePresupuesto);

module.exports = router;
