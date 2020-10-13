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
router.get("/vidrios/add", renderVidrioForm);

router.post("/vidrios/new-vidrio", createNewVidrio);

// Obtener todos los vidrios
router.get("/vidrios", renderVidrios);

// Editar los vidrios
router.get("/vidrios/edit/:id", renderVidrioEditForm);

router.put("/vidrios/edit/:id", updateVidrio);

// Borrar vidrios
router.delete("/vidrios/delete/:id", deleteVidrio);

module.exports = router;
