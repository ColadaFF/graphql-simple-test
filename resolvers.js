var mongoose = require("mongoose");
var { Clientes } = require("./db");

const clientesDB = {};

module.exports = {
  Query: {
    getCliente: (root, { id }) => {
      return Clientes.findOne({ _id: id }).exec();
    }
  },
  Mutation: {
    crearCliente: (root, { input }) => {
      const nuevoCliente = new Clientes({
        id: input.id,
        nombre: input.nombre,
        apellido: input.apellido,
        empresa: input.empresa,
        emails: input.emails,
        edad: input.edad,
        tipo: input.tipo,
        pedidos: input.pedido
      });

      nuevoCliente.id = nuevoCliente._id;

      console.log({ input, nuevoCliente });

      return nuevoCliente.save().then(data => {
        console.log({ data });
        return data;
      });
    }
  }
};
