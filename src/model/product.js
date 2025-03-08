const database = require("../database");

class Product{
    constructor(){
        this.model = database.db.define("products", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            value: {
                type: database.db.Sequelize.INTEGER,
            }
        })
    }
}

module.exports = new Product().model;