const { Router } = require("express");
const router = Router();

const {
  renderAccesorioForm,
  createNewAccesorio,
  renderAccesorios,
  renderAccesorioEditForm,
  updateAccesorio,
  deleteAccesorio,
} = require("../controllers/accesorios.controller");

const { isAuthenticated } = require("../helpers/auth");

// Accesorio Nuevo
router.get("/accesorios/add", isAuthenticated, renderAccesorioForm);

router.post("/accesorios/new-accesorio", isAuthenticated, createNewAccesorio);

// Obtener todos los accesorios
router.get("/accesorios", isAuthenticated, renderAccesorios);

// Editar los accesorios
router.get("/accesorios/edit/:id", isAuthenticated, renderAccesorioEditForm);

router.put("/accesorios/edit/:id", isAuthenticated, updateAccesorio);

// Borrar accesorios
router.delete("/accesorios/delete/:id", isAuthenticated, deleteAccesorio);

module.exports = router;
