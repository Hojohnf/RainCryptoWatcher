
# RainCryptoWatcher

RainCryptoWatcher is a rainmeter skin powered with an nodejs api which fetch crypto currencies value.




## Requirements

- Node
- Rainmeter


## Download

Clone the project

```bash
  git clone https://github.com/Hojohnf/RainCryptoWatcher.git
```
    
## Installation & launch

Install and launch RainCryptoWatcher server locally with npm

```bash
  cd RainCryptoWatcher
  npm i
  node/nodemon index.js


  And then install the .rmskin 
```

## Screenshots

![App Screenshot](https://zupimages.net/up/22/06/vaxp.png)


## API Reference

#### Get

```http
  GET /quotes/latest?symbol=ETH&convert=EUR
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `X-CMC_PRO_API_KEY` | `string` | **Required**. Your API key |



## Authors

- [@Hojohnf](https://www.github.com/Hojohnf)



[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


## Roadmap

- Add several crypto binding
- Additional cloud support
- Add more integrations

