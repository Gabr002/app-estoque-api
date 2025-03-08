const express = require("express");
const route  = require("./src/routes/product");
const database = require("./src/database");
const app = express();

const port = 3000;
app.use(express.json());

app.use('/api/v1/product', route);

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.log(`Server run an port ${port}`);
        })
    })
    .catch((e) => {
        console.log(`Not impossible connect an database: ${e}`);
    })