require("dotenv").config();
// syncerrors
require("express-async-errors");


const express = require( "express");
const app = express();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect")
const procuctRoute = require("./routes/products");
//middleware
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("<h1> StoreAPI</h1> <a href= '/api/v1/products'> products rout</a>")
});
app.use("/api/v1/products", procuctRoute)

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async ()=>{
    try {
        connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        
    }
}
start();