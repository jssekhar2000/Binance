const express = require('express');
const router = express.Router();
let axios = require("axios")



router.get("/test-me", async function (req, res) {
    
    try {
        setInterval(async() =>{
        
        let data = await axios.get('https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","ENJUSDT","GRTUSDT"]');
        //console.log( data)
        let final =JSON.parse(JSON.stringify(data.data))
        console.log(final)
       // console.log(final)
       //res.status(200).send({ msg:final, status: true })
        },5000)
        

    }catch (err) {
        console.log(err);
      }
})

   
   
    // try {
    //     let options = {
    //         method: 'post',
    //         url: 'https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","ENJUSDT","GR TUSDT"]'
    //     }
    //     let result = await axios(options);
    //     console.log(result)
    //     let data = result.data
    //     res.status(200).send({ msg: data, status: true })
    // }
    // catch (err) {
    //     console.log(err)
    //     res.status(500).send({ msg: err.message })
    // }



module.exports = router;