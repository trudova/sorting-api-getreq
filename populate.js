require("dotenv").config();
const connectDb = require("./db/connect");

const Product = require("./models/product");

const jsonProduct = require("./products.json");

const start = async()=>{
    try {
        await connectDb(process.env.MONGO_URI);

        await Product.deleteMany();
        await Product.create(jsonProduct);
        process.exit(0)
    } catch (error) {
        console.log(error);
          process.exit(1);
    }
}
start();