const { Router } = require("express");
const router = Router();

const {
  renderModForm,
  createNewMod,
  renderMod,
  renderModEditForm,
  updateMod,
  deleteMod,
} = require("../controllers/mod.controller");

const { isAuthenticated } = require("../helpers/auth");

// Mano de obra Nuevo
router.get("/mod/add", renderModForm);

router.post("/mod/new-mod", createNewMod);

// Obtener todos las mano de obras
router.get("/mod", renderMod);

// Editar las mano de obras
router.get("/mod/edit/:id", renderModEditForm);

router.put("/mod/edit/:id", updateMod);

// Borrar mano de obra
router.delete("/mod/delete/:id", deleteMod);

module.exports = router;
