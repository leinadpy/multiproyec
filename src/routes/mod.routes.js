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
router.get("/mod/add", isAuthenticated, renderModForm);

router.post("/mod/new-mod", isAuthenticated, createNewMod);

// Obtener todos las mano de obras
router.get("/mod", isAuthenticated, renderMod);

// Editar las mano de obras
router.get("/mod/edit/:id", isAuthenticated, renderModEditForm);

router.put("/mod/edit/:id", isAuthenticated, updateMod);

// Borrar mano de obra
router.delete("/mod/delete/:id", isAuthenticated, deleteMod);

module.exports = router;
