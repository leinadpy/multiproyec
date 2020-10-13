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
router.get("/perfiles/add", renderPerfilForm);

router.post("/perfiles/new-perfil", createNewPerfil);

// Obtener todos los perfiles
router.get("/perfiles", renderPerfiles);

// Editar perfiles
router.get("/perfiles/edit/:id", renderPerfilEditForm);

router.put("/perfiles/edit/:id", updatePerfil);

// Borrar perfiles
router.delete("/perfiles/delete/:id", deletePerfil);

module.exports = router;
