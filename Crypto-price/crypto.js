const request = require('request');

let getCrypto = (command) => {
    return new Promise ((resolve, reject) => {
        request({
            url: `https://api.coinmarketcap.com/v1/ticker/`,
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200){
                for (let i = 0; i < body.length; i++){
                if (body[i].symbol === command /*|| body[i].id === command2 */){
                        resolve({
                            name: body[i].name,
                            currentPrice: body[i].price_usd,
                            marketCap: body[i].market_cap_usd
                        });
                        // console.log(`Name: ${body[i].name}`);
                        // console.log(`Current Price: $${body[i].price_usd} USD`);
                        // console.log(`Market Cap: $${body[i].market_cap_usd} USD`);
                        break;
                    } 
                }reject(`${command} could not be found`); 
            } else {reject(`The server could not be reached`)}   
        });

    })
}

module.exports = {
    getCrypto
}