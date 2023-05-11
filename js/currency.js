export const getCurrency = () => {
    fetch("https://api.freecurrencyapi.com/v1/latest?apikey=MYTzMwId4Gm2jg9e4V5FrLrQWPNQmwfjYLKTKA66", {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

