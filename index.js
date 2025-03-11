import { products } from "./data.js";
const ProductManeger = class {
    static create(data) {
        products.push(data);
    }
    static updatePrice(data) {
        for (const item of products) {
            if (item.id === data.id) {
                item.price = data.price;
            }
        }
    }
    static getById(id) {
        return products.find((item) => item.id === id);
    }
    static get() {
        return products;
    }
    static delete(id) {
        const index = products.findIndex((item) => item.id === id);
        if (index !== -1) {
            products.splice(index, 1);
        }
    }
};
// console.log("create new product");
// console.log(ProductManeger.get());
// ProductManeger.create(createData);
// console.log(ProductManeger.get());
console.log("update price prodyct");
console.log(ProductManeger.getById(2));
ProductManeger.updatePrice({ id: 2, price: 1 });
console.log(ProductManeger.getById(2));
// console.log("get by id product");
// console.log(ProductManeger.getById(1));
// console.log("get all product");
// console.log(ProductManeger.get());
// console.log(" delete product");
// console.log(ProductManeger.getById(1));
// ProductManeger.delete(1);
// console.log(ProductManeger.getById(1));
