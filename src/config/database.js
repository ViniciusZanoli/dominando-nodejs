// comon js
module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "123456",
    database: "DominandoNodeJs",
    define: {
        timestamp: true, // Cria duas colunas: createdAt e updatedAt
        underscored: true, // Altera a nomenclatura de camelCase para _
        underscoredAll: true,
    },
};
