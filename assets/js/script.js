// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//         "x-rapidapi-key": "4baffcd784msh949913134da149ep161ff1jsnabed21be07b4"
//     }
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);
//     console.log(response.marketSummaryResponse.result[0].regularMarketPrice.fmt)



//     $(document).ready(function () {
//         $("#results").append("<br>" + "<strong>Stock Name: </strong>" + response.marketSummaryResponse.result[0].exchange + "<br>");
//         $("#results").append("<br>" + "<strong>Price: </strong>" + response.marketSummaryResponse.result[0].regularMarketPrice.fmt + "<br>");
//     // $("#results").append("<br>" + "<strong>Job ID: </strong>" + response.jobs[0].job_id + "<br>");
// $("#results").append("<br>" + "<strong>Location: </strong>" + response.jobs[0].location + "<br>");
// $("#results").append("<br>" + "<strong>Description: </strong>" + response.jobs[0].description + "<br>");

// });

// });

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://morningstar1.p.rapidapi.com/convenient/fundamentals/yearly/restated?Mic=XNAS&Ticker=MSFT",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "morningstar1.p.rapidapi.com",
//         "x-rapidapi-key": "4baffcd784msh949913134da149ep161ff1jsnabed21be07b4",
//         "accept": "string"
//     }
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=BAC%252CKC%253DF%252C002210.KS%252CIWM%252CAMECX",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "4baffcd784msh949913134da149ep161ff1jsnabed21be07b4"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);

    $(document).ready(function () {
        $("#results").append("<br>" + "<strong>Stock Name: </strong>" + response.quoteResponse.result[0].longName + "<br>");
        $("#results").append("<br>" + "<strong>Symbol: </strong>" + response.quoteResponse.result[0].symbol + "<br>");
        $("#results").append("<br>" + "<strong>Price: </strong>" + response.quoteResponse.result[0].regularMarketPrice + "<br>");
        // $("#results").append("<br>" + "<strong>Price: </strong>" + response.marketSummaryResponse.result[0].regularMarketPrice.fmt + "<br>");
    })

});

// });

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/get-details?uuid=375879c0-08f3-32fb-8aaf-523c93ff8792",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//         "x-rapidapi-key": "4baffcd784msh949913134da149ep161ff1jsnabed21be07b4"
//     }
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);

// });

// !function () {
//     "use strict"; var t;
//     var e = ((t = {})
//     ["color-brand"] = "#2196f3",
//         t["color-gull-gray"] = "#9db2bd", t["color-scooter"] = "#38acdb",
//         t["color-curious-blue"] = "#299dcd", t);

//     var r = document.createElement("a");


// }();


// function displayStockInfo() {

//     var stock = $(this).attr("#results");

// javascript code for ticker



// javascript code for tradingview chart