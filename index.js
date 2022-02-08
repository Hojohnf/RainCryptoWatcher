const express = require('express')
const app = express()
const port = process.env.PORT || 80
const axios = require('axios');
const { API_KEY, BASE_URL, ETH, LPT } = require('./config')

app.get('/eth', (req, res) => {
let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get(BASE_URL+ETH, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
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
    response = await axios.get(BASE_URL+LPT, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
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

