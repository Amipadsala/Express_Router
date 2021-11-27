const express = require("express");
const seller = require("../seller");
const product = require("../product");
const router = express.Router();
router.use(express.json());

router.get("/",(req,res) => {
    res.json({data:["Seller Details"]});
});

router.get("/Seller_List",(req,res) => {
    res.json({data:seller});
});

router.post("/Add_Seller",(req,res) => {

    const Seller_Id = req.body.sellerId;
    const Name = req.body.name;
    const Product_Id = req.body.productId;

    const seller = seller.filter((s)=>s.sellerId === sellId);
    if(seller.length === 0){
        seller.push({sellerId: Seller_Id,name: Name,productId: Product_Id});
        return res.json({data:"Seller added!"})
    } else {
        return res.json({data:"Seller already exist!"})
    }
});

router.get("/Seller_Detail_Product/:title",(req,res) => {

    const pname = req.params.title;
    const prod = product.filter((p)=>p.title === pname);

    if(prod.length === 0){
        return res.json({data:"Product not exist!"})
    } else {
        const pid = prod.productId;
        const sell = seller.filter((p)=>p.productId === parseInt(pid));
        return res.json({data:sell})
    }
});

module.exports = router;