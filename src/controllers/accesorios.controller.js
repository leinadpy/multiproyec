const accesoriosCtrl = {};

const Accesorio = require("../models/Accesorio");

accesoriosCtrl.renderAccesorioForm = (req, res) => {
  res.render("accesorios/new-accesorio");
};

accesoriosCtrl.createNewAccesorio = async (req, res) => {
  const { codigo, descripcion, linea, color, proveedor, precio, fechaVigente } = req.body;
  const newAccesorio = new Accesorio({ codigo, descripcion, linea, color, proveedor, precio, fechaVigente });
  await newAccesorio.save();
  req.flash("success_msg", "Accesorio agregado correctamente");
  res.redirect("/accesorios");
};

accesoriosCtrl.renderAccesorios = async (req, res) => {
  const accesorios = await Accesorio.find()
    .sort({ linea: "desc" })
    .lean();
  res.render("accesorios/all-accesorios", { accesorios });
};

accesoriosCtrl.renderAccesorioEditForm = async (req, res) => {
  const accesorio = await Accesorio.findById(req.params.id).lean();
  // if (note.user != req.user.id) {
  //   req.flash("error_msg", "Not Authorized");
  //   return res.redirect("/notes");
  // }
  res.render("accesorios/edit-accesorio", { accesorio });
};

accesoriosCtrl.updateAccesorio = async (req, res) => {
  const { codigo, descripcion, linea, color, proveedor, precio, fechaVigente } = req.body;
  await Accesorio.findByIdAndUpdate(req.params.id, { codigo, descripcion, linea, color, proveedor, precio, fechaVigente });
  req.flash("success_msg", "Accesorio actualizado correctamente");
  res.redirect("/accesorios");
};

accesoriosCtrl.deleteAccesorio = async (req, res) => {
  await Accesorio.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Accesorio eliminado correctamente");
  res.redirect("/accesorios");
};

module.exports = accesoriosCtrl;