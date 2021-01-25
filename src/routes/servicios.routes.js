const { Router } = require("express");
const router = Router();

const {
  renderServicioForm,
  createNewServicio,
  renderServicios,
  renderServicioEditForm,
  updateServicio,
  deleteServicio,
} = require("../controllers/servicios.controller");

const { isAuthenticated } = require("../helpers/auth");

// Servicio Nuevo
router.get("/servicios/add", isAuthenticated, renderServicioForm);

router.post("/servicios/new-servicio", isAuthenticated, createNewServicio);

// Obtener todos los servicios
router.get("/servicios", isAuthenticated, renderServicios);

// Editar los servicios
router.get("/servicios/edit/:id", isAuthenticated, renderServicioEditForm);

router.put("/servicios/edit/:id", isAuthenticated, updateServicio);

// Borrar servicios
router.delete("/servicios/delete/:id", isAuthenticated, deleteServicio);

module.exports = router;
