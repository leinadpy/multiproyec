const { Schema, model } = require("mongoose");
const Servicio = require("./Servicio");

const AbServicioSchema = new Schema({
  codServicio: { type: String, required: true },
  cantidad: { type: Number, required: true },
  ancho: { type: Number, required: true },
  alto: { type: Number, required: true },
  proveedor: { type: String, required: true },
  costo: Number,
});

AbServicioSchema.methods.calcularServicio = async (newAbServicio) => {
  let costo = 0;
  switch (newAbServicio.codServicio) {
    case "ACiego": // Arenado Sin Dibujo/Pleno (Ciego)
      costo = await newAbServicio.arenado(newAbServicio);
      break;
    case "ADSimple": // Dibujos Simples
      costo = await newAbServicio.arenado(newAbServicio);
      break;
    case "ADComp": // Dibujos Complejos
      costo = await newAbServicio.arenado(newAbServicio);
      break;
    case "SatinadoComp": // Satinado Complejo
      costo = await newAbServicio.arenado(newAbServicio);
      break;
    case "APlastif": // Plastificado
      costo = await newAbServicio.arenado(newAbServicio);
      break;
  }
  return costo;
};

AbServicioSchema.methods.arenado = async (newAbServicio) => {
  // Arenado
  const precio =
    (await Servicio.obtenerCosto(
      newAbServicio.codServicio,
      newAbServicio.proveedor
    )) / 1.1;
  const area =
    (newAbServicio.ancho * newAbServicio.alto * newAbServicio.cantidad) /
    1000000;
  const costoT = Math.round(precio * area * 100) / 100;
  return costoT;
};

module.exports = model("AbServicio", AbServicioSchema);
