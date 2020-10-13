const modCtrl = {};

const MOD = require("../models/MOD");

modCtrl.renderModForm = (req, res) => {
  res.render("mod/new-mod");
};

modCtrl.createNewMod = async (req, res) => {
  const { codigo, descripcion, unidad, precio, fechaVigente } = req.body;
  const modCtrl = new MOD({
    codigo,
    descripcion,
    unidad,
    precio,
    fechaVigente,
  });
  await modCtrl.save();
  req.flash("success_msg", "Mano de obra agregado correctamente");
  res.redirect("/mod");
};

modCtrl.renderMod = async (req, res) => {
  const mod = await MOD.find().sort({ espesor: "desc" }).lean();
  res.render("mod/all-mod", { mod });
};

modCtrl.renderModEditForm = async (req, res) => {
  const mod = await MOD.findById(req.params.id).lean();
  // if (note.user != req.user.id) {
  //   req.flash("error_msg", "Not Authorized");
  //   return res.redirect("/notes");
  // }
  res.render("mod/edit-mod", { mod });
};

modCtrl.updateMod = async (req, res) => {
  const { codigo, descripcion, unidad, precio, fechaVigente } = req.body;
  await MOD.findByIdAndUpdate(req.params.id, {
    codigo,
    descripcion,
    unidad,
    precio,
    fechaVigente,
  });
  req.flash("success_msg", "Mano de obra actualizado correctamente");
  res.redirect("/mod");
};

modCtrl.deleteMod = async (req, res) => {
  await MOD.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Mano de obra eliminado correctamente");
  res.redirect("/mod");
};

module.exports = modCtrl;
