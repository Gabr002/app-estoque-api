const database = require("../../src/database");
const ServiceProduct = require("../../src/service/product");

describe("tests for products", () => {
    beforeAll(async () => {
        this.transaction = await database.db.transaction();
    })
    afterAll(async () => {
        this.transaction.rollback();
    });

    it("Should create an user", async () => {
        const product = {
            name: "desktop",
            value: 5000
        };

        const addProduct = await ServiceProduct.Create(product.name, product.value, this.transaction);
        this.id = addProduct.id;

        expect(addProduct.name).toBe(product.name);
        expect(addProduct.value).toBe(product.value);
    });

    it("Should update an product", async () => {
        const product = {
            id: this.id,
            name: "keys",
            value: 15
        };

        const updateProduct = await ServiceProduct.Update(product.id, product.name, product.value, this.transaction);

        expect(updateProduct.name).toBe(product.name);
        expect(updateProduct.value).toBe(product.value);
    })

    it("Should delete an product", async () => {
        const product = {
            id: this.id
        };

        const response = await ServiceProduct.Delete(product.id, this.transaction);

        expect(response).toBe(true);
    })
})