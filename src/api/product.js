const ServiceProduct = require("../service/product")

class ControllerProduct {    
    
    FindAll(_, res){
        try{    
            const response = ServiceProduct.FindAll();
            res.status(200).send({ response });
        }catch(e){
            res.status(500).send({ message: e.message });
        }
    }

    FindByIndex(req, res){
        try{
            const index = req.params;    
            const response = ServiceProduct.FindAll(index);
            res.status(200).send({ response });
        }catch(e){
            res.status(500).send({ message: e.message });
        }
    }

    Create(_, res){
        try{    
            const response = ServiceProduct.FindAll();
            res.status(200).send({ response });
        }catch(e){
            res.status(500).send({ message: e.message });
        }
    }

    Update(_, res){
        try{    
            const response = ServiceProduct.FindAll();
            res.status(200).send({ response });
        }catch(e){
            res.status(500).send({ message: e.message });
        }
    }

    Delete(_, res){
        try{    
            const response = ServiceProduct.FindAll();
            res.status(200).send({ response });
        }catch(e){
            res.status(500).send({ message: e.message });
        }
    }
}

module.exports = new ControllerProduct();