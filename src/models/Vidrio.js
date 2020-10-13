const { Schema, model } = require("mongoose");

const VidrioSchema = new Schema({
  codigo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  espesor: {
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
  precio: {
    type: Number,
    required: true,
  },
  fechaVigente: {
    type: String,
    require: true,
  },
});

VidrioSchema.statics.obtenerCosto = async function (codigo, color, proveedor) {
  const costo = await this.find(
    { codigo, color, proveedor },
    { precio: 1, _id: 0 }
  ).lean();
  return costo[0].precio;
};

module.exports = model("Vidrio", VidrioSchema);
