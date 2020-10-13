const { Schema, model } = require("mongoose");

const PerfilSchema = new Schema({
  codigo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  linea: {
    type: String,
    required: true,
  },
  pesoPorMetro: {
    type: Number,
    required: true,
  },
  longitudBarra: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  proveedor: {
    type: String,
    required: true,
  },
  precioPorBarra: {
    type: Number,
    required: true,
  },
  fechaVigente: {
    type: String,
    require: true,
  },
});

PerfilSchema.statics.obtenerCosto = async function (codigo, color, proveedor) {
  const costo = await this.find(
    { codigo, color, proveedor },
    { precioPorBarra: 1, _id: 0 }
  ).lean();
  return costo[0].precioPorBarra;
};

PerfilSchema.statics.obtenerDescripcion = async function (codigo) {
  const desc = await this.find({ codigo }, { descripcion: 1, _id: 0 }).lean();
  return desc[0].descripcion;
};

PerfilSchema.statics.obtenerPeso = async function (codigo) {
  const peso = await this.find({ codigo }, { pesoPorMetro: 1, _id: 0 }).lean();
  return peso[0].pesoPorMetro;
};

module.exports = model("Perfil", PerfilSchema);
