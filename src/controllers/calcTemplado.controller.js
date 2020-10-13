const abTempladoCtrl = {};

const AbTemplado = require("../models/AbTemplado");

abTempladoCtrl.renderAbTempladoForm = (req, res) => {
  res.render("calculadoras/templado");
};

abTempladoCtrl.calcAbTempladoForm = async (req, res) => {
  const { selAbertura, cantidad, ancho, alto, altofijoinf, altofijosup, altofijolat1, altofijolat2, tipoEspejo, tipoCierre, tipoBrazo, selColorAluminio, proveedoraluminio, tipoManijon, colorvidrio, proveedorvidrio, espesorvidrio, coloraccesorio, proveedoraccesorio, cierreopc, costo } = req.body;
  const newAbTemplado = new AbTemplado({ selAbertura, cantidad, ancho, alto, altofijoinf, altofijosup, altofijolat1, altofijolat2, tipoEspejo, tipoCierre, tipoBrazo, selColorAluminio, proveedoraluminio, tipoManijon, colorvidrio, proveedorvidrio, espesorvidrio, coloraccesorio, proveedoraccesorio, cierreopc, costo });
  newAbTemplado.costo = 100;
  console.log(newAbTemplado)
  // await newAbTemplado.save();
  // await AbTemplado.findByIdAndDelete(newAbTemplado._id);
  res.render("calculadoras/calctemplado", {newAbTemplado});
};

module.exports = abTempladoCtrl;