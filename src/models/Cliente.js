const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema(
  {
    denominacion: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    direccion: String,
    telefono: String,
    email: String,
    atencion: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Cliente", ClienteSchema);
