const { Router } = require("express");
const router = Router();

// LINEA TEMPLADO

const {
  renderAbTempladoForm,
  calcAbTempladoForm
} = require("../controllers/calcTemplado.controller");

const { isAuthenticated } = require("../helpers/auth");

// Acceder al formulario de la calculadora de templado
router.get("/calcTemplado", renderAbTempladoForm);
// Calcular y devolver el costo
router.post("/calcTemplado", calcAbTempladoForm);

// LINEA ALPHA

const {
  renderAbAlphaForm,
  calcAbAlphaForm
} = require("../controllers/calcAlpha.controller");

// Acceder al formulario de la calculadora de alpha
router.get("/calcAlpha", renderAbAlphaForm);
// Calcular y devolver el costo
router.post("/calcAlpha", calcAbAlphaForm);

module.exports = router;
