const { Schema, model } = require("mongoose");

const AbTempladoSchema = new Schema({
  selAbertura: { type: String, required: true },
  cantidad: { type: Number, required: true },
  ancho: { type: Number, required: true },
  alto: { type: Number, required: true },
  altofijoinf: { type: Number },
  altofijosup: { type: Number },
  altofijolat1: { type: Number },
  altofijolat2: { type: Number },
  tipoEspejo: { type: String },
  tipoCierre: { type: String },
  tipoBrazo: { type: String },
  selColorAluminio: { type: String },
  proveedoraluminio: { type: String },
  tipoManijon: { type: String },
  colorvidrio: { type: String },
  proveedorvidrio: { type: String },
  espesorvidrio: { type: String },
  coloraccesorio: { type: String },
  proveedoraccesorio: { type: String },
  cierreopc: { type: String },
  costo: { type: Number },
});

module.exports = model("AbTemplado", AbTempladoSchema);
