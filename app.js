///////////////////// Process 1 vanila JS without any library
////////////////// Select DOM values

var val = document.getElementById("value");
var inputBtn = document.getElementById("button");

let rates;

// Get DATA from API

fetch(
  `https://api.currencyfreaks.com/latest?apikey=dffc0675950a466e95c579850072e488&`
)
  .then(response =>
    response.json().then(function(data) {
      //data.base = "EUR";
      console.log(data);
      rates = data.rates;
      console.log(rates);

      //////////////////////// Save DATA from API into a variable

      var usa = rates.USD;
      var europe = rates.EUR;
      var switzerland = rates.CHF;
      var australia = rates.AUD;
      var britain = rates.GBP;
      var macedonia = rates.MKD;
      var bulgaria = rates.BGN;
      var serbia = rates.RSD;
      var turkey = rates.TRY;
      var japan = rates.JPY;
      var russia = rates.RUB;
      var china = rates.CNY;
      var india = rates.INR;
      var denmark = rates.DKK;
      var sweden = rates.SEK;
      var newZealand = rates.NZD;
      var egypt = rates.EGP;

      ////////////////////////// Write DATA from API into the HTML DOM

      document
        .querySelector("#usa")
        .insertAdjacentHTML("beforeend", `${usa} USD`);

      document
        .querySelector("#europe")
        .insertAdjacentHTML("beforeend", `${europe} EUR`);

      document
        .querySelector("#switzerland")
        .insertAdjacentHTML("beforeend", `${switzerland} CHf`);

      document
        .querySelector("#australia")
        .insertAdjacentHTML("beforeend", `${australia} AUD`);

      document
        .querySelector("#britain")
        .insertAdjacentHTML("beforeend", `${britain} GBP`);

      document
        .querySelector("#macedonia")
        .insertAdjacentHTML("beforeend", `${macedonia} MKD`);

      document
        .querySelector("#bulgaria")
        .insertAdjacentHTML("beforeend", `${bulgaria} BGN`);

      document
        .querySelector("#serbia")
        .insertAdjacentHTML("beforeend", `${serbia} RSD`);

      document
        .querySelector("#turkey")
        .insertAdjacentHTML("beforeend", `${turkey} TL`);

      document
        .querySelector("#japan")
        .insertAdjacentHTML("beforeend", `${japan} JPY`);

      document
        .querySelector("#russia")
        .insertAdjacentHTML("beforeend", `${russia} RUB`);

      document
        .querySelector("#china")
        .insertAdjacentHTML("beforeend", `${china} CNY`);

      document
        .querySelector("#india")
        .insertAdjacentHTML("beforeend", `${india} INR`);

      document
        .querySelector("#denmark")
        .insertAdjacentHTML("beforeend", `${denmark} DKK`);

      document
        .querySelector("#sweden")
        .insertAdjacentHTML("beforeend", `${sweden} SEK`);

      document
        .querySelector("#newZealand")
        .insertAdjacentHTML("beforeend", `${newZealand} NZD`);

      document
        .querySelector("#egypt")
        .insertAdjacentHTML("beforeend", `${egypt} EGP`);
    })
  )
  .catch(err => console.log(err));

//////////////////////////////////////////// Do same function as above upon click with Button changing the value of rates

inputBtn.onclick = function() {
  fetch(
    `https://api.currencyfreaks.com/latest?apikey=dffc0675950a466e95c579850072e488&`
  )
    .then(response =>
      response.json().then(function(data) {
        newVal = val.value;
        //data.base = "EUR";
        console.log(data);
        rates = data.rates;
        console.log(rates);
        var usa = rates.USD * newVal;
        var europe = rates.EUR * newVal;
        var switzerland = rates.CHF * newVal;
        var australia = rates.AUD * newVal;
        var britain = rates.GBP * newVal;
        var macedonia = rates.MKD * newVal;
        var bulgaria = rates.BGN * newVal;
        var serbia = rates.RSD * newVal;
        var turkey = rates.TRY * newVal;
        var japan = rates.JPY * newVal;
        var russia = rates.RUB * newVal;
        var china = rates.CNY * newVal;
        var india = rates.INR * newVal;
        var denmark = rates.DKK * newVal;
        var sweden = rates.SEK * newVal;
        var newZealand = rates.NZD * newVal;
        var egypt = rates.EGP * newVal;

        document.querySelector("#usa").innerHTML = `${usa} USD`;

        document.querySelector("#europe").innerHTML = `${europe} EUR`;

        document.querySelector("#switzerland").innerHTML = `${switzerland} CHf`;

        document.querySelector("#australia").innerHTML = `${australia} AUD`;

        document.querySelector("#britain").innerHTML = `${britain} GBP`;

        document.querySelector("#macedonia").innerHTML = `${macedonia} MKD`;

        document.querySelector("#bulgaria").innerHTML = `${bulgaria} BGN`;

        document.querySelector("#serbia").innerHTML = `${serbia} RSD`;

        document.querySelector("#turkey").innerHTML = `${turkey} TL`;

        document.querySelector("#japan").innerHTML = `${japan} JPY`;

        document.querySelector("#russia").innerHTML = `${russia} RUB`;

        document.querySelector("#china").innerHTML = `${china} CNY`;

        document.querySelector("#india").innerHTML = `${india} INR`;

        document.querySelector("#denmark").innerHTML = `${denmark} DKK`;

        document.querySelector("#sweden").innerHTML = `${sweden} SEK`;

        document.querySelector("#newZealand").innerHTML = `${newZealand} NZD`;

        document.querySelector("#egypt").innerHTML = `${egypt} EGP`;
      })
    )
    .catch(err => console.log(err));
};
