const { Schema, model } = require("mongoose");

const ModSchema = new Schema({
  codigo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  unidad: {
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

ModSchema.statics.obtenerCosto = async function (codigo) {
  const costo = await this.find({ codigo }, { precio: 1, _id: 0 }).lean();
  return costo[0].precio;
};

module.exports = model("MOD", ModSchema);
