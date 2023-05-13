export const getCurrency = async (currency) => {

    let value = null;

    await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=MYTzMwId4Gm2jg9e4V5FrLrQWPNQmwfjYLKTKA66", {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(function(json) {
      if(currency == "USD") {
        value = json.data.USD
      }
      if(currency == "EUR") {
        value = json.data.EUR
      }
      if(currency == "GBP") {
        value = json.data.GBP
      } 
     })
    
    return value.toFixed(1) 
     
}


