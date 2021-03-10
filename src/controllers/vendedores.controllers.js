const vendedoresCtrl = {};

const Vendedor = require("../models/Vendedor");

vendedoresCtrl.renderVendedorForm = (req, res) => {
  res.render("vendedores/new-vendedor");
};

vendedoresCtrl.createNewVendedor = async (req, res) => {
  const { nombre, email, iniciales, telefono } = req.body;
  const newVendedor = new Vendedor({ nombre, email, iniciales, telefono });
  await newVendedor.save();
  req.flash("success_msg", "Vendedor agregado correctamente");
  res.redirect("/vendedores");
};

vendedoresCtrl.renderVendedores = async (req, res) => {
  const vendedores = await Vendedor.find()
    .sort({ nombre: 1 })
    .lean();
  res.render("vendedores/all-vendedores", { vendedores });
};

vendedoresCtrl.renderVendedorEditForm = async (req, res) => {
  const vendedor = await Vendedor.findById(req.params.id).lean();
  // if (note.user != req.user.id) {
  //   req.flash("error_msg", "Not Authorized");
  //   return res.redirect("/notes");
  // }
  res.render("vendedores/edit-vendedor", { vendedor });
};

vendedoresCtrl.updateVendedor = async (req, res) => {
  const { nombre, email, iniciales, telefono } = req.body;
  await Vendedor.findByIdAndUpdate(req.params.id, { nombre, email, iniciales, telefono });
  req.flash("success_msg", "Vendedor actualizado correctamente");
  res.redirect("/vendedores");
};

vendedoresCtrl.deleteVendedor = async (req, res) => {
  await Vendedor.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Vendedor eliminado correctamente");
  res.redirect("/vendedores");
};

module.exports = vendedoresCtrl;