const express = require('express')
const app = express()
let price = require('crypto-price')

app.get('/eth', (req, res) => {
    console.log("ETH appelé")

  price.getCryptoPrice("EUR", "ETH").then(obj => {
    let value = obj.price.substring(0, 7)
    res.send('<div>ETH : '+ value +'</div>')
}).catch(err => {
    console.log(err)
})
})

app.get('/lpt', (req, res) => {
    console.log("LPT appelé")

  price.getCryptoPrice("EUR", "LPT").then(obj => {
    let value = obj.price.substring(0, 5)
    res.send('<div>LPT : '+ value +'</div>')
}).catch(err => {
    console.log(err)
})
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

