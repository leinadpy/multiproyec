const { Schema, model } = require("mongoose");

const AberturaSchema = new Schema(
  {
    item: String,
    cantidad: Number,
    descripcion: String,
    precioUnitario: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Abertura", AberturaSchema);
