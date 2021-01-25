const { Schema, model } = require("mongoose");

const ServicioSchema = new Schema({
  codigo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  proveedor: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  fechaVigente: {
    type: String,
    require: true,
  },
});

ServicioSchema.statics.obtenerCosto = async function (
  codigo,
  proveedor
) {
  const costo = await this.find(
    { codigo, proveedor },
    { precio: 1, _id: 0 }
  ).lean();
  return costo[0].precio;
};

ServicioSchema.statics.obtenerDescripcion = async function (codigo) {
  const desc = await this.find({ codigo }, { descripcion: 1, _id: 0 }).lean();
  return desc[0].descripcion;
};

module.exports = model("Servicio", ServicioSchema);