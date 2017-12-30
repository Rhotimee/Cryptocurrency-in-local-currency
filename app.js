const yargs = require('yargs');

const crypto = require('./Crypto-price/crypto')


const argv = yargs
    
    .help()
    .alias('help', 'h')
    .argv;

let command;
// let command2;
let x = argv._[0];

if (typeof x === 'string'){
    command = x.toUpperCase();
    // command2 = x.toLowerCase() ;
} else {
    command = ''+x;
}

// let cryp = () => {
//     return new Promise ((resolve, reject) => {

//         request({
//             url: `https://api.coinmarketcap.com/v1/ticker/`,
//             json: true
//         }, (error, response, body) => {
        
//             if (!error && response.statusCode === 200){
//                 for (let i = 0; i < body.length; i++){
//                     if (body[i].symbol === command || body[i].id === command2){
//                         resolve({
//                             name: body[i].name,
//                             currentPrice: body[i].price_usd,
//                             marketCap: body[i].market_cap_usd
//                         });
//                         // console.log(`Name: ${body[i].name}`);
//                         // console.log(`Current Price: $${body[i].price_usd} USD`);
//                         // console.log(`Market Cap: $${body[i].market_cap_usd} USD`);
//                         break;
//                     } else {
//                         reject(`${argv._[0]} could not be found`); break;
//                     }
//                 } 
//             } else {reject(`The server could not be reached`)}   
//         });

//     })
// }

crypto.getCrypto(command).then((msg) => {
    console.log(`Name: ${msg.name}`);
    console.log(`Current Price: $${msg.currentPrice} USD`);
    console.log(`Market Cap: $${msg.marketCap} USD`);
}, (errorMessage) => {
    console.log('Error: ', errorMessage)
})