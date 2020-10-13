const { Schema, model } = require("mongoose");

const AccesorioSchema = new Schema({
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
  color: {
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

AccesorioSchema.statics.obtenerCosto = async function (
  codigo,
  color,
  proveedor
) {
  const costo = await this.find(
    { codigo, color, proveedor },
    { precio: 1, _id: 0 }
  ).lean();
  return costo[0].precio;
};

AccesorioSchema.statics.obtenerDescripcion = async function (codigo) {
  const desc = await this.find({ codigo }, { descripcion: 1, _id: 0 }).lean();
  return desc[0].descripcion;
};

module.exports = model("Accesorio", AccesorioSchema);
