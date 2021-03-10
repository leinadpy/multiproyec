const { Schema, model } = require("mongoose");
const Cliente = require("./Cliente");
const Vendedor = require("./Vendedor");
const Abertura = require("./Abertura");

const PresupuestoSchema = new Schema(
  {
    nropresupuesto: { type: String, required: true },
    fecha: { type: String, required: true },
    referencia: { type: String, required: true },
    cliente: { type: Schema.Types.ObjectId, ref: "Cliente" },
    atencion: String,
    titulo: String,
    aberturas: [{ type: Schema.Types.ObjectId, ref: "Abertura" }],
    observaciones: String,
    total: Number,
    totalLetras: String,
    plazoEntrega: String,
    vendedor: { type: Schema.Types.ObjectId, ref: "Vendedor" },
    formaPago: String,
    oferta: String,
    factor: Number,
    tasaCambio: Number,
    comisionCliente: { type: Number, default: 1 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Presupuesto", PresupuestoSchema);
