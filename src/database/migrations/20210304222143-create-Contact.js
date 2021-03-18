module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.createTable("contacts", {
            id: {
                type: Sequelize.INTEGER,
                allowNUll: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNUll: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNUll: false,
                unique: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNUll: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNUll: false,
            },
            customer_id: {
                type: Sequelize.INTEGER,
                reference: { model: "customers", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                allowNull: false,
            },
        }),

    down: async (queryInterface) => queryInterface.dropTable("contacts"),
};
