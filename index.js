const express = require("express");
const route  = require("./src/routes/product");
const app = express();

const port = 3000;
app.use(express.json());

app.use('/api/v1/product', route);

app.listen(port, () => {
    console.log(`Server run an port ${port}`);
})