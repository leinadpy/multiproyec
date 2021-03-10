const clientesCtrl = {};

const Cliente = require("../models/Cliente");

clientesCtrl.renderClienteForm = (req, res) => {
  res.render("clientes/new-cliente");
};

clientesCtrl.createNewCliente = async (req, res) => {
  const { denominacion, nombre, direccion, telefono, email, atencion } = req.body;
  const newCliente = new Cliente({ denominacion, nombre, direccion, telefono, email, atencion });
  await newCliente.save();
  req.flash("success_msg", "Cliente agregado correctamente");
  res.redirect("/clientes");
};

clientesCtrl.renderClientes = async (req, res) => {
  const clientes = await Cliente.find()
    .sort({ nombre: 1 })
    .lean();
  res.render("clientes/all-clientes", { clientes });
};

clientesCtrl.renderClienteEditForm = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id).lean();
  // if (note.user != req.user.id) {
  //   req.flash("error_msg", "Not Authorized");
  //   return res.redirect("/notes");
  // }
  res.render("clientes/edit-cliente", { cliente });
};

clientesCtrl.updateCliente = async (req, res) => {
  const { denominacion, nombre, direccion, telefono, email, atencion } = req.body;
  await Cliente.findByIdAndUpdate(req.params.id, { denominacion, nombre, direccion, telefono, email, atencion });
  req.flash("success_msg", "Cliente actualizado correctamente");
  res.redirect("/clientes");
};

clientesCtrl.deleteCliente = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Cliente eliminado correctamente");
  res.redirect("/clientes");
};

module.exports = clientesCtrl;