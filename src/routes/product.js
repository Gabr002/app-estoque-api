const express = require("express");
const route = express();
const ControllerProduct = require("../api/product");

route.use = express.Router();

route.get('/', ControllerProduct.FindAll);
route.get('/:id', ControllerProduct.FindById);
route.post('/', ControllerProduct.Create);
route.put('/:id', ControllerProduct.Update);
route.delete('/:id', ControllerProduct.Delete);

module.exports = route;