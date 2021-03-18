import Customer from "../models/Customer";

const customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
    { id: 2, name: "Google", site: "http://google.com.br" },
    { id: 3, name: "Uol", site: "http://uol.com.br" },
];

class CustomersControllers {
    // Listagem dos registros
    async index(req, res) {
        const data = await Customer.findAll({
            limit: 1000,
        });

        return res.json(data);
    }

    // Recupera um Customer
    show(req, res) {
        const id = parseInt(req.params.id, 10);
        const customer = customers.find((item) => item.id === id);
        const status = customer ? 200 : 404;

        console.warn("GET :: /customers/:id ", JSON.stringify(customer));

        return res.status(status).json(customer);
    }

    // Cria um Customer
    create(req, res) {
        const { name, site } = req.body;
        const id = customers[customers.length - 1].id + 1;
        const newCustomer = { id, name, site };

        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    }

    // Atualiza um Customer
    update(req, res) {
        const id = parseInt(req.params.id, 10);
        const { name, site } = req.body;
        const index = customers.findIndex((item) => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers[index] = { id: parseInt(id, 10), name, site };
        }

        return res.status(status).json(customers[index]);
    }

    // Exclui um Customer
    destroy(req, res) {
        const id = parseInt(req.params.id, 10);
        const index = customers.findIndex((item) => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers.splice(index, 1);
        }

        return res.status(status).json();
    }
}

export default new CustomersControllers();
