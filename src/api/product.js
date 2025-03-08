const ServiceProduct = require("../service/product")

class ControllerProduct {    
    
    async FindAll(_, res){
        try{    
            const response = await ServiceProduct.FindAll();
            res.status(200).send({ response });
        }catch(e){
            res.status(500).send({ message: e.message });
        }
    }

    async FindById(req, res){
        try{
            const { id } = req.params;    
            const response = await ServiceProduct.FindById(id);
            res.status(200).send({ response });
        }catch(e){
            res.status(500).send({ message: e.message });
        }
    }

    async Create(req, res){
        try{  
            const { name, value } = req.body;  
            await ServiceProduct.Create(name, value);
            res.status(201).send({});
        }catch(e){
            res.status(500).send({ message: e.message });
        }
    }

    async Update(req, res){
        try{ 
            const { id } = req.params;
            const { name, value }  = req.body;
            await ServiceProduct.Update(id, name, value);
            res.status(200).send({});
        }catch(e){
            res.status(500).send({ message: e.message });
        }
    }

    async Delete(req, res){
        try{
            const { id } = req.params;    
            await ServiceProduct.Delete(id);
                res.status(204).send({});
        }catch(e){
            res.status(500).send({ message: e.message });
        }
    }
}

module.exports = new ControllerProduct();