const { Router } = require("express");
const router = Router();

const {
  renderVidrioForm,
  createNewVidrio,
  renderVidrios,
  renderVidrioEditForm,
  updateVidrio,
  deleteVidrio,
} = require("../controllers/vidrios.controller");

const { isAuthenticated } = require("../helpers/auth");

// Vidrio Nuevo
router.get("/vidrios/add", isAuthenticated, renderVidrioForm);

router.post("/vidrios/new-vidrio", isAuthenticated, createNewVidrio);

// Obtener todos los vidrios
router.get("/vidrios", isAuthenticated, renderVidrios);

// Editar los vidrios
router.get("/vidrios/edit/:id", isAuthenticated, renderVidrioEditForm);

router.put("/vidrios/edit/:id", isAuthenticated, updateVidrio);

// Borrar vidrios
router.delete("/vidrios/delete/:id", isAuthenticated, deleteVidrio);

module.exports = router;
