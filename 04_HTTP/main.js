// -=-=-=-=-=-=-=- Fetch -=-=-=-=-=-=-=-

const api_url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

let result = fetch(api_url)
    .then(body => body.json())
    .then((content) => {
        console.log("Result: ", content);

        for (const i of content) {
            document.body.innerHTML += `<p>Currency: ${i.ccy} Sale: ${i.sale} Buy: ${i.buy}</p>`;
        }
    });
