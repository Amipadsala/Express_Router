const express = require("express");
const company = require("../company");
const product = require("../product");
const router = express.Router();
router.use(express.json());

router.get("/",(req,res) => {
    res.json({data:"Company Details"});
});

router.post("/Add_Company",(req,res) => {

    const Company_Id = req.body.companyId;
    const Name = req.body.name;
    const Product_Id = req.body.productId;

    const Company = company.filter((p)=>p.companyId === compId);
    if(Company.length === 0){
        company.push({companyId: Company_Id,name: Name,productId: Product_Id});
        return res.json({data:"Company added!"})
    } else {
        return res.json({data:"Company already exist!"})
    }
});

router.get("/List",(req,res) => {
    res.json({data: company});
});

router.get("/Company_Detail_Product/:title",(req,res) => {

    const pname = req.params.title;
    const prod = product.filter((p)=>p.title === pname);

    if(prod.length === 0){
        return res.json({data:"not found any record!"})
    } else {
        const pid = prod.productId;
        const comp = company.filter((p)=>p.productId === pid);
        return res.json({data: prod})

    }
});

module.exports = router;