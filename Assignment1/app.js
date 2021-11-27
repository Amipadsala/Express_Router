const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;

const Product_Route = require("./Router/PRODUCT");
const Seller_Route = require("./Router/SELLER");
const Company_Route = require("./Router/COMPANY");



app.get('/', (req, res) => res.send('Product Management APIs (EXPRESS ROUTER)'));

app.use("/product", Product_Route);
app.use("/seller", Seller_Route);
app.use("/company", Company_Route);



app.listen(port, () => console.log(`Example app listening on port `+ port +`!`));
