const database = new Array("mouse", "webcam", "monitor")

class Product{
    FindAll(){
        return database;
    }
}

module.exports = new Product();