const { Router } = require("express");
const router = Router();

// SERVICIOS

const {
  renderAbServicioForm,
  calcAbServicioForm
} = require("../controllers/calcServicio.controller");

const { isAuthenticated } = require("../helpers/auth");

// Acceder al formulario de la calculadora de templado
router.get("/calcServicio", isAuthenticated, renderAbServicioForm);
// Calcular y devolver el costo
router.post("/calcServicio", isAuthenticated, calcAbServicioForm);

// LINEA TEMPLADO

const {
  renderAbTempladoForm,
  calcAbTempladoForm
} = require("../controllers/calcTemplado.controller");

// Acceder al formulario de la calculadora de templado
router.get("/calcTemplado", isAuthenticated, renderAbTempladoForm);
// Calcular y devolver el costo
router.post("/calcTemplado", isAuthenticated, calcAbTempladoForm);

// LINEA ALPHA

const {
  renderAbAlphaForm,
  calcAbAlphaForm
} = require("../controllers/calcAlpha.controller");

// Acceder al formulario de la calculadora de alpha
router.get("/calcAlpha", isAuthenticated, renderAbAlphaForm);
// Calcular y devolver el costo
router.post("/calcAlpha", isAuthenticated, calcAbAlphaForm);

module.exports = router;
