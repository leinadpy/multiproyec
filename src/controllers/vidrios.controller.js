const vidriosCtrl = {};

const Vidrio = require("../models/Vidrio");

vidriosCtrl.renderVidrioForm = (req, res) => {
  res.render("vidrios/new-vidrio");
};

vidriosCtrl.createNewVidrio = async (req, res) => {
  const { codigo, descripcion, espesor, color, proveedor, precio, fechaVigente } = req.body;
  const newVidrio = new Vidrio({ codigo, descripcion, espesor, color, proveedor, precio, fechaVigente });
  await newVidrio.save();
  req.flash("success_msg", "Vidrio agregado correctamente");
  res.redirect("/vidrios");
};

vidriosCtrl.renderVidrios = async (req, res) => {
  const vidrios = await Vidrio.find()
    .sort({ espesor: "desc" })
    .lean();
  res.render("vidrios/all-vidrios", { vidrios });
};

vidriosCtrl.renderVidrioEditForm = async (req, res) => {
  const vidrio = await Vidrio.findById(req.params.id).lean();
  // if (note.user != req.user.id) {
  //   req.flash("error_msg", "Not Authorized");
  //   return res.redirect("/notes");
  // }
  res.render("vidrios/edit-vidrio", { vidrio });
};

vidriosCtrl.updateVidrio = async (req, res) => {
  const { codigo, descripcion, espesor, color, proveedor, precio, fechaVigente } = req.body;
  await Vidrio.findByIdAndUpdate(req.params.id, { codigo, descripcion, espesor, color, proveedor, precio, fechaVigente });
  req.flash("success_msg", "Vidrio actualizado correctamente");
  res.redirect("/vidrios");
};

vidriosCtrl.deleteVidrio = async (req, res) => {
  await Vidrio.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Vidrio eliminado correctamente");
  res.redirect("/vidrios");
};

module.exports = vidriosCtrl;