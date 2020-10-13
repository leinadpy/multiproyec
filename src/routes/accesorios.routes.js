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
router.get("/accesorios/add", renderAccesorioForm);

router.post("/accesorios/new-accesorio", createNewAccesorio);

// Obtener todos los accesorios
router.get("/accesorios", renderAccesorios);

// Editar los accesorios
router.get("/accesorios/edit/:id", renderAccesorioEditForm);

router.put("/accesorios/edit/:id", updateAccesorio);

// Borrar accesorios
router.delete("/accesorios/delete/:id", deleteAccesorio);

module.exports = router;
