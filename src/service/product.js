const product = require("../model/product");

class ServiceProduct {
    async FindAll({ transaction }){
        return product.findAll({ transaction });
    }

    async FindById(id, transaction){
        return product.findByPk(id, { transaction });
    }

    async Create(name, value, transaction){
        if(!name){
            throw new Error("Please enter your name");
        }else if(!value){
            throw new Error("Please enter your value");
        }

        return product.create({
            name, value
        }, { transaction });
    }

    async Update(id, name, value, transaction){
        const oldProduct = await this.FindById(id, transaction);

        oldProduct.name = name || oldProduct.name;
        oldProduct.value = value || oldProduct.value;

        oldProduct.save({ transaction });

        return oldProduct;
    }

    async Delete(id, transaction){
        const product = await this.FindById(id, transaction);
        product.destroy({ transaction });

        return true;
    }
}

module.exports = new ServiceProduct();