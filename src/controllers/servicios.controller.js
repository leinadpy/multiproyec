const serviciosCtrl = {};

const Servicio = require("../models/Servicio");

serviciosCtrl.renderServicioForm = (req, res) => {
  res.render("servicios/new-servicio");
};

serviciosCtrl.createNewServicio = async (req, res) => {
  const { codigo, descripcion, proveedor, precio, fechaVigente } = req.body;
  const newServicio = new Servicio({ codigo, descripcion, proveedor, precio, fechaVigente });
  await newServicio.save();
  req.flash("success_msg", "Servicio agregado correctamente");
  res.redirect("/servicios");
};

serviciosCtrl.renderServicios = async (req, res) => {
  const servicios = await Servicio.find()
    .lean();
  res.render("servicios/all-servicios", { servicios });
};

serviciosCtrl.renderServicioEditForm = async (req, res) => {
  const servicio = await Servicio.findById(req.params.id).lean();
  // if (note.user != req.user.id) {
  //   req.flash("error_msg", "Not Authorized");
  //   return res.redirect("/notes");
  // }
  res.render("servicios/edit-servicio", { servicio });
};

serviciosCtrl.updateServicio = async (req, res) => {
  const { codigo, descripcion, proveedor, precio, fechaVigente } = req.body;
  await Servicio.findByIdAndUpdate(req.params.id, { codigo, descripcion, proveedor, precio, fechaVigente });
  req.flash("success_msg", "Servicio actualizado correctamente");
  res.redirect("/servicios");
};

serviciosCtrl.deleteServicio = async (req, res) => {
  await Servicio.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Servicio eliminado correctamente");
  res.redirect("/servicios");
};

module.exports = serviciosCtrl;