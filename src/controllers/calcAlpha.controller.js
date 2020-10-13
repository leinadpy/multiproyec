const abAlphaCtrl = {};

const AbAlpha = require("../models/AbAlpha");

abAlphaCtrl.renderAbAlphaForm = (req, res) => {
  res.render("calculadoras/alpha");
};

abAlphaCtrl.calcAbAlphaForm = async (req, res) => {
  const { selAbertura, cantidad, ancho, alto, altofijo, selPremarco, selContramarco, selColorAluminio, selColorVidrio, proveedorvidrio, selEspesorVidrio, selColorAccesorio, selCierre, selRefuerzo, costo } = req.body;
  const newAbAlpha = new AbAlpha({ selAbertura, cantidad, ancho, alto, altofijo, selPremarco, selContramarco, selColorAluminio, selColorVidrio, proveedorvidrio, selEspesorVidrio, selColorAccesorio, selCierre, selRefuerzo, costo });
  // newAbAlpha.costo = 100;
  newAbAlpha.costo = await newAbAlpha.calcularAlpha(newAbAlpha);
  // await newAbAlpha.save();
  // await AbAlpha.findByIdAndDelete(newAbAlpha._id);
  res.render("calculadoras/calcalpha", {newAbAlpha});
};

module.exports = abAlphaCtrl;