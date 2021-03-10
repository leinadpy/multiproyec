const { Schema, model } = require("mongoose");

const VendedorSchema = new Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    iniciales: { type: String, required: true },
    telefono: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Vendedor", VendedorSchema);
