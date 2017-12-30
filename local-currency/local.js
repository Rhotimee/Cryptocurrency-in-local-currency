const request = require('request');

let getLocalCurrency = (realCode) => {
      
    return new Promise((resolve, reject) => {
        
        request({
            url: `http://www.apilayer.net/api/live?access_key=a1c2abd1172003288d57872b5da731c4`,
            json: true
        }, (error, response, body) => {
            // resolve(body.quotes.USDNGN)
            if (!error && response.statusCode === 200){
                // resolve(body.quotes.realCode)
                // reject ('cannot find')
                if (body.quotes[realCode]){
                    resolve(body.quotes[realCode])
                } reject ('cannot find')
            } reject ('cannot connect to server')
        }
    )
    })

}


module.exports = {
    getLocalCurrency
}