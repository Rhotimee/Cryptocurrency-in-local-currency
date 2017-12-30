const yargs = require('yargs');

const crypto = require('./Crypto-price/crypto');
const local = require('./local-currency/local');


const argv = yargs
    
    .help()
    .alias('help', 'h')
    .argv;

let command, countryCode;

let firstArg = argv._[0];
let secondArg = argv._[1];

let toVerify = (arg) => {
    if (typeof arg === 'string'){
        return arg.toUpperCase();
    } else {
        return ''+arg;
    }
};

command = toVerify(firstArg);
countryCode = toVerify(secondArg);
code = 'USD'+ toVerify(secondArg);


let cryptoPrice, localPrice; 

crypto.getCrypto(command).then((msg) => {
    cryptoPrice = msg.currentPrice;
    console.log(`1 ${command} = $${msg.currentPrice} USD`);
    local.getLocalCurrency(code).then((msg) => {
        localPrice = msg;
        console.log(`1 USD = ${msg} ${countryCode}`)
        console.log(`1 ${command} = ${cryptoPrice*localPrice} ${countryCode}`)
    }, (errorMessage) => {
        console.log(errorMessage)
    });
    
}, (errorMessage) => {
    console.log('Error: ', errorMessage)
})

