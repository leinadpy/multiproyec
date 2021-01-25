const abServicioCtrl = {};

const AbServicio = require("../models/AbServicio");

abServicioCtrl.renderAbServicioForm = (req, res) => {
  res.render("calculadoras/servicio");
};

abServicioCtrl.calcAbServicioForm = async (req, res) => {
  const {
    codServicio,
    cantidad,
    ancho,
    alto,
    proveedor,
    costo
  } = req.body;
  const newAbServicio = new AbServicio({
    codServicio,
    cantidad,
    ancho,
    alto,
    proveedor,
    costo
  });
  newAbServicio.costo = await newAbServicio.calcularServicio(newAbServicio);
  // await newAbTemplado.save();
  // await AbTemplado.findByIdAndDelete(newAbTemplado._id);
  res.render("calculadoras/calcservicio", { newAbServicio });
};

module.exports = abServicioCtrl;
