const express = require('express')
const app = express()
const port = process.env.PORT || 80
const axios = require('axios');

app.get('/eth', (req, res) => {
let response = null;
new Promise(async (resolve, reject) => {
  try {
    const BASE_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH&convert=EUR"
    response = await axios.get(BASE_URL, {
      headers: {
        'X-CMC_PRO_API_KEY': '***YOUR API KEY***',
      }
    });
  } catch(ex) {
    response = null;
    console.log(ex);
    reject(ex);
  }
  if (response) {
    const json = response.data;
    resolve(json);
    res.send('<div>ETH : '+ json.data.ETH.quote.EUR.price.toString().substr(0, 7)+'</div>')
  }
})
}),

app.get('/lpt', (req, res) => {
let response = null;
new Promise(async (resolve, reject) => {
  try {
    const BASE_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=LPT&convert=EUR"
    response = await axios.get(BASE_URL, {
      headers: {
        'X-CMC_PRO_API_KEY': '0dee75a6-d363-4dd4-bc57-5359fdc7650b',
      }
    });
  } catch(ex) {
    response = null;
    console.log(ex);
    reject(ex);
  }
  if (response) {
    const json = response.data;
    resolve(json);
    res.send('<div>LPT : '+ json.data.LPT.quote.EUR.price.toString().substr(0, 5)+'</div>')
  }
})
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

