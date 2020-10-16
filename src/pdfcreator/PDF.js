const cargar = {}
const Vidrio = require("../models/Vidrio");
cargar.vidriosPDF = async () => {
  const vidrios = await Vidrio.find().sort({ espesor: "desc" }).lean();
  // var concatenado = "";
  // vidrios.forEach(vidrio =>{
  //   concatenado += '["'+vidrio.codigo+'","'+vidrio.descripcion + '","'+vidrio.espesor.toString()+'","'+vidrio.color+'","'+vidrio.proveedor+'","'+vidrio.precio.toString()+'","'+vidrio.fechaVigente+'"],';
  // });
  // console.log(concatenado);
  var documentDefinition = {
    content: [
      {
        text:
          "Vidrios",
        style: "subheader",
      },
      "Listado de vidrios",
      {
        style: "tableExample",
        table: {
          body: [
            ["Código", "Descripción", "Espesor", "Color", "Proveedor", "Precio", "Fecha Vig."],
            [vidrios.forEach(vidrio =>{
            "[",vidrio.codigo,vidrio.descripcion,vidrio.espesor.toString(),vidrio.color,vidrio.proveedor,vidrio.precio.toString(),vidrio.fechaVigente, "]"
            })]
          ],
        },
      },
    ],
    // styles: {
    //   header: {
    //     fontSize: 18,
    //     bold: true,
    //     margin: [0, 0, 0, 10],
    //   },
    //   subheader: {
    //     fontSize: 16,
    //     bold: true,
    //     margin: [0, 10, 0, 5],
    //   },
    //   tableExample: {
    //     margin: [0, 5, 0, 15],
    //   },
    //   tableHeader: {
    //     bold: true,
    //     fontSize: 13,
    //     color: "black",
    //   },
    // },
    // defaultStyle: {
    //   // alignment: 'justify'
    // },
  };
  return documentDefinition;
}

module.exports = cargar;
