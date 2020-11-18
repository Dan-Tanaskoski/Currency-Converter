///////////////// Proces 2 with JQUERY library
////////////////// Select DOM values

var val = document.getElementById("value");
var inputBtn = document.getElementById("button");

let rates;

// Get DATA from API

function clearForms() {
  $(":input")
    .not(":button, :submit, :reset, :hidden, :checkbox, :radio")
    .val("");
  $(":checkbox, :radio").prop("checked", false);
}

//////////////////////// Save DATA from API into a variable

fetch(
  `https://api.currencyfreaks.com/latest?apikey=dffc0675950a466e95c579850072e488&`
)
  .then(response =>
    response.json().then(function(data) {
      //data.base = "EUR";
      console.log(data);
      rates = data.rates;
      console.log(rates);

      /////////////// Round DATA from API to 2 decimals

      var us = rates.USD * 1;
      var usa = us.toFixed(2);
      var eur = rates.EUR * 1;
      var europe = eur.toFixed(2);
      var swiss = rates.CHF * 1;
      var switzerland = swiss.toFixed(2);
      var aud = rates.AUD * 1;
      var australia = aud.toFixed(2);
      var brtn = rates.GBP * 1;
      var britain = brtn.toFixed(2);
      var mkd = rates.MKD * 1;
      var macedonia = mkd.toFixed(2);
      var bgn = rates.BGN * 1;
      var bulgaria = bgn.toFixed(2);
      var srb = rates.RSD * 1;
      var serbia = srb.toFixed(2);
      var tk = rates.TRY * 1;
      var turkey = tk.toFixed(2);
      var jp = rates.JPY * 1;
      var japan = jp.toFixed(2);
      var ru = rates.RUB * 1;
      var russia = ru.toFixed(2);
      var ch = rates.CNY * 1;
      var china = ch.toFixed(2);
      var ind = rates.INR * 1;
      var india = ind.toFixed(2);
      var dk = rates.DKK * 1;
      var denmark = dk.toFixed(2);
      var sw = rates.SEK * 1;
      var sweden = sw.toFixed(2);
      var nz = rates.NZD * 1;
      var newZealand = nz.toFixed(2);
      var egp = rates.EGP * 1;
      var egypt = egp.toFixed(2);

      ////////////////////////// Write DATA from API into the HTML DOM

      $(".usa").append(usa + " USD");
      $(".europe").append(europe + " EUR");
      $(".switzerland").append(switzerland + " CHf");
      $(".australia").append(australia + " AUD");
      $(".britain").append(britain + " GBP");
      $(".macedonia").append(macedonia + " MKD");
      $(".bulgaria").append(bulgaria + " BGN");
      $(".serbia").append(serbia + " SRB");
      $(".turkey").append(turkey + " TK");
      $(".japan").append(japan + " JP");
      $(".russia").append(russia + " RU");
      $(".china").append(china + " CH");
      $(".india").append(india + " IND");
      $(".denmark").append(denmark + " DK");
      $(".sweden").append(sweden + " SW");
      $(".newZealand").append(newZealand + " NZD");
      $(".egypt").append(egypt + " EGP");
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
        var us = rates.USD * newVal;
        var usa = us.toFixed(2);
        var eur = rates.EUR * newVal;
        var europe = eur.toFixed(2);
        var swiss = rates.CHF * newVal;
        var switzerland = swiss.toFixed(2);
        var aus = rates.AUD * newVal;
        var australia = aus.toFixed(2);
        var btrn = rates.GBP * newVal;
        var britain = btrn.toFixed(2);
        var mkd = rates.MKD * newVal;
        var macedonia = mkd.toFixed(2);
        var bgn = rates.BGN * newVal;
        var bulgaria = bgn.toFixed(2);
        var srb = rates.RSD * newVal;
        var serbia = srb.toFixed(2);
        var tk = rates.TRY * newVal;
        var turkey = tk.toFixed(2);
        var jp = rates.JPY * newVal;
        var japan = jp.toFixed(2);
        var ru = rates.RUB * newVal;
        var russia = ru.toFixed(2);
        var ch = rates.CNY * newVal;
        var china = ch.toFixed(2);
        var ind = rates.INR * newVal;
        var india = ind.toFixed(2);
        var dk = rates.DKK * newVal;
        var denmark = dk.toFixed(2);
        var sw = rates.SEK * newVal;
        var sweden = sw.toFixed(2);
        var nz = rates.NZD * newVal;
        var newZealand = nz.toFixed(2);
        var egp = rates.EGP * newVal;
        var egypt = egp.toFixed(2);

        $(".usa")
          .empty()
          .append(usa + " USD");
        $(".europe")
          .empty()
          .append(europe + " EUR");
        $(".switzerland")
          .empty()
          .append(switzerland + " CHf");
        $(".australia")
          .empty()
          .append(australia + " AUD");
        $(".britain")
          .empty()
          .append(britain + " GBP");
        $(".macedonia")
          .empty()
          .append(macedonia + " MKD");
        $(".bulgaria")
          .empty()
          .append(bulgaria + " BGN");
        $(".serbia")
          .empty()
          .append(serbia + " SRB");
        $(".turkey")
          .empty()
          .append(turkey + " TK");
        $(".japan")
          .empty()
          .append(japan + " JP");
        $(".russia")
          .empty()
          .append(russia + " RU");
        $(".china")
          .empty()
          .append(china + " CH");
        $(".india")
          .empty()
          .append(india + " IND");
        $(".denmark")
          .empty()
          .append(denmark + " DK");
        $(".sweden")
          .empty()
          .append(sweden + " SW");
        $(".newZealand")
          .empty()
          .append(newZealand + " NZD");
        $(".egypt")
          .empty()
          .append(egypt + " EGP");
      })
    )
    .catch(err => console.log(err));
};
