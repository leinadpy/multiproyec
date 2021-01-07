const perfilesCtrl = {};

const Perfil = require("../models/Perfil");

perfilesCtrl.renderPerfilForm = (req, res) => {
  res.render("perfiles/new-perfil");
};

perfilesCtrl.createNewPerfil = async (req, res) => {
  const { codigo, descripcion, pesoPorMetro, linea, longitudBarra, color, proveedor, precioPorBarra, fechaVigente } = req.body;
  const newPerfil = new Perfil({ codigo, descripcion, pesoPorMetro, linea, longitudBarra, color, proveedor, precioPorBarra, fechaVigente });
  await newPerfil.save();
  req.flash("success_msg", "Perfil agregado correctamente");
  res.redirect("/perfiles");
};

perfilesCtrl.renderPerfiles = async (req, res) => {
  const perfiles = await Perfil.find()
    .sort({ codigo:"desc", linea: "desc" })
    .lean();
  res.render("perfiles/all-perfiles", { perfiles });
};

perfilesCtrl.renderPerfilEditForm = async (req, res) => {
  const perfil = await Perfil.findById(req.params.id).lean();
  // if (note.user != req.user.id) {
  //   req.flash("error_msg", "Not Authorized");
  //   return res.redirect("/notes");
  // }
  res.render("perfiles/edit-perfil", { perfil });
};

perfilesCtrl.updatePerfil = async (req, res) => {
  const { codigo, descripcion, pesoPorMetro, linea, longitudBarra, color, proveedor, precioPorBarra, fechaVigente } = req.body;
  await Perfil.findByIdAndUpdate(req.params.id, { codigo, descripcion, pesoPorMetro, linea, longitudBarra, color, proveedor, precioPorBarra, fechaVigente });
  req.flash("success_msg", "Perfil actualizado correctamente");
  res.redirect("/perfiles");
};

perfilesCtrl.deletePerfil = async (req, res) => {
  await Perfil.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Perfil eliminado correctamente");
  res.redirect("/perfiles");
};

module.exports = perfilesCtrl;