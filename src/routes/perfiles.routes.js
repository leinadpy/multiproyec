const { Router } = require("express");
const router = Router();

const {
  renderPerfilForm,
  createNewPerfil,
  renderPerfiles,
  renderPerfilEditForm,
  updatePerfil,
  deletePerfil,
} = require("../controllers/perfiles.controller");

const { isAuthenticated } = require("../helpers/auth");

// Perfil Nuevo
router.get("/perfiles/add", isAuthenticated, renderPerfilForm);

router.post("/perfiles/new-perfil", isAuthenticated, createNewPerfil);

// Obtener todos los perfiles
router.get("/perfiles", isAuthenticated, renderPerfiles);

// Editar perfiles
router.get("/perfiles/edit/:id", isAuthenticated, renderPerfilEditForm);

router.put("/perfiles/edit/:id", isAuthenticated, updatePerfil);

// Borrar perfiles
router.delete("/perfiles/delete/:id", isAuthenticated, deletePerfil);

module.exports = router;
