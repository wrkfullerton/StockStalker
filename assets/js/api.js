// /**
//  * pulls information from the form and build the query URL
//  * @returns {string} URL for Yahoo API based on form inputs
//  */
// function buildQueryURL() {
//     var queryURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en";
//     // "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=" + symbol + "%252CKC%253DF%252C002210.KS%252CIWM%252CAMECX",

//     //Begin building an object to contain our API call's query parameters
//     // Set the API Key
//     var queryParams = {"api-key": "4baffcd784msh949913134da149ep161ff1jsnabed21be07b4"};

//     // Grab the text the user typed into the search input, add to the queryParam object
//     queryParams.q = $("stock-name")
//     .val()
//     .trim();

    // If the user provides a stock symbol, include it in the queryParams object
//     var stockSym = $(#"stock-sym")
//     .val()
//     .trim();
// }

$("#stock-sym").tokenInput(function(){
    return 'http://someurl.com/search?country='+ $('#country').val() +'q=';
   }, {
    method: "POST",
    searchDelay: 0,
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=MSFT%252CKC%253DF%252C002210.KS%252CIWM%252CAMECX",
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