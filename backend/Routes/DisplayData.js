const express = require('express')
const router = express.Router()
router.post('/carData',(req,res)=>{
    try {
        // console.log(global.car_Category)
        res.send([global.car_items,global.car_category])
    } catch (error) {
        console.error(error.message);
        res.send("server Error")
    }
})
module.exports = router;