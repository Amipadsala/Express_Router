const express = require("express");
const product = require("../product");
const router = express.Router();
router.use(express.json());

router.get("/",(req,res) => {
    res.json({data:["Product Details"]});
});

router.get("/product_List",(req,res) => {
    res.json({data:product});
});


router.get("/Retrive_Seller/:sid",(req,res) => {
    const sid = req.params.sid;
    const product = product.filter((p)=>p.sellerId === parseInt(sid));

    if(product.length === 0){
        return res.json({data:"Not Found Any Record!"})
    } else {
        return res.json({data: product})
    }
});

router.get("/Retrive_Compony/:cid",(req,res) => {
    const sid = req.params.cid;
    const product = product.filter((p) => p.sellerId === parseInt(sid));

    if(product.length === 0){
        return res.json({data:"not found any record!"})
    } else {
        return res.json({data: product})
    }
});

router.post("/Add_Product",(req,res) => {

    const Product_Id = req.body.productId;
    const Title = req.body.title;
    const Price = req.body.price;
    const Category = req.body.category;
    const CompanyId = req.body.companyId;
    const SellerId = req.body.sellerId;

    const p = { productId: Product_Id,title: Title,price: Price,category: Category,companyId: CompanyId,sellerId: SellerId} 
        product.push(p);
        return res.json(p)
    
});

module.exports = router;