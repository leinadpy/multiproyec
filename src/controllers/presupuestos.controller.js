const presupuestoCtrl = {};

const Presupuesto = require("../models/Presupuesto");
const Cliente = require("../models/Cliente");
const Vendedor = require("../models/Vendedor");

presupuestoCtrl.renderPresupuestoForm = async (req, res) => {
  const clientes = await Cliente.find().lean();
  const vendedores = await Vendedor.find().lean();
  res.render("presupuestos/new-presupuesto", { clientes, vendedores });
};

presupuestoCtrl.sendClientes = async (req, res) => {
  const clientes = await Cliente.find().lean();
  res.json(clientes);
};

presupuestoCtrl.sendVendedores = async (req, res) => {
  const vendedores = await Vendedor.find().lean();
  res.json(vendedores);
};

presupuestoCtrl.createNewPresupuesto = async (req, res) => {
  const {
    nropresupuesto,
    fecha,
    referencia,
    cliente,
    atencion,
    titulo,
    aberturas,
    observaciones,
    total,
    totalLetras,
    plazoEntrega,
    vendedor,
    formaPago,
    oferta,
    tasaCambio,
    factor,
    comisionCliente,
  } = req.body;
  const newPresupuesto = new Presupuesto({
    nropresupuesto,
    fecha,
    referencia,
    cliente,
    atencion,
    titulo,
    aberturas,
    observaciones,
    total,
    totalLetras,
    plazoEntrega,
    vendedor,
    formaPago,
    oferta,
    tasaCambio,
    factor,
    comisionCliente,
  });
  await newPresupuesto.save();
  req.flash("success_msg", "Presupuesto agregado correctamente");
  res.redirect("/presupuestos");
};

presupuestoCtrl.createNewAberturaAlpha = async (req, res) => {
  // req.flash("success_msg", "Presupuesto agregado correctamente");
  // res.redirect("/presupuestos");
  res.json({ message: "Creando nueva abertura" });
};

presupuestoCtrl.renderPresupuestos = async (req, res) => {
  const presupuestos = await Presupuesto.find().lean();
  res.render("presupuestos/all-presupuestos", { presupuestos });
};

presupuestoCtrl.getPresupuestos = async (req, res) => {
  const presupuestos = await Presupuesto.find().lean();
  res.json({ presupuestos });
};

presupuestoCtrl.renderPresupuestoEditForm = async (req, res) => {
  const presupuesto = await Presupuesto.findById(req.params.id).lean();
  // if (note.user != req.user.id) {
  //   req.flash("error_msg", "Not Authorized");
  //   return res.redirect("/notes");
  // }
  res.render("presupuestos/edit-presupuesto", { presupuesto });
};

presupuestoCtrl.updatePresupuesto = async (req, res) => {
  const {
    nropresupuesto,
    fecha,
    referencia,
    cliente,
    atencion,
    titulo,
    aberturas,
    observaciones,
    total,
    totalLetras,
    plazoEntrega,
    vendedor,
    formaPago,
    oferta,
    tasaCambio,
    factor,
    comisionCliente,
  } = req.body;
  console.log(req.params.id)
  console.log(req.body)
  await Presupuesto.findByIdAndUpdate(req.params.id, {
    nropresupuesto,
    fecha,
    referencia,
    cliente,
    atencion,
    titulo,
    aberturas,
    observaciones,
    total,
    totalLetras,
    plazoEntrega,
    vendedor,
    formaPago,
    oferta,
    tasaCambio,
    factor,
    comisionCliente,
  });
  
  req.flash("success_msg", "Presupuesto actualizado correctamente");
  res.redirect("/presupuestos");
};

presupuestoCtrl.deletePresupuesto = async (req, res) => {
  await Presupuesto.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Presupuesto eliminado correctamente");
  res.redirect("/presupuestos");
};

module.exports = presupuestoCtrl;
