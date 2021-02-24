const { Router } =  require("express");
const routes = new Router();

routes.get("/hello", (req, res) => {
    return res.json({message: "Hello da nova rota"})
});

module.exports = routes;