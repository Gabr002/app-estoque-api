const product = require("../model/product");

class ServiceProduct {
    FindAll(){
        return product.FindAll();
    }

    FindByIndex(index){
        return product.FindByIndex(index);
    }
}

module.exports = new ServiceProduct();