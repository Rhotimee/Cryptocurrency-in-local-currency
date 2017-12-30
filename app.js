const yargs = require('yargs');

const crypto = require('./Crypto-price/crypto')


const argv = yargs
    
    .help()
    .alias('help', 'h')
    .argv;

let command, countryCode;
// let command2;
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


crypto.getCrypto(command).then((msg) => {
    console.log(`Name: ${msg.name}`);
    console.log(`Current Price: $${msg.currentPrice} USD`);
    console.log(`Market Cap: $${msg.marketCap} USD`);
}, (errorMessage) => {
    console.log('Error: ', errorMessage)
})