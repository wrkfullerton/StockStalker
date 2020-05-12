// function collects user input data, appends results to screen 
function sConsole() {
    var data = document.getElementById("stockInput");
    console.log(stockInput.value); // data is the element, and we want its value

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=" + stockInput.value + "%252CKC%253DF%252C002210.KS%252CIWM%252CAMECX",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "4baffcd784msh949913134da149ep161ff1jsnabed21be07b4"
        }

    }
    $.ajax(settings).done(function (response) {
        console.log(response);

        $(document).ready(function () {
            $("#results").append("<hr>");
            $("#results").append("<h5><strong>Company:</strong></h5>");
            $("#results").append("<br>" + "<strong>Stock Name: </strong>" + response.quoteResponse.result[0].longName + "<br>");
            $("#results").append("<br>" + "<strong>Symbol: </strong>" + response.quoteResponse.result[0].symbol + "<br>");
            $("#results").append("<br>" + "<strong>Price: $</strong>" + response.quoteResponse.result[0].regularMarketPrice + "<br>");

        })

    })

}

function Console() {
    var data = document.getElementById("stockInput");
    console.log(stockInput.value); // data is the element, and we want its value

    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://bloomberg-market-and-financial-news.p.rapidapi.com/stock/get-statistics?id=" + stockInput.value + "%253Aus",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com",
            "x-rapidapi-key": "dbfbc65486msheb30cfc9fd5f9b7p1920c1jsn7932b76c94ef"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);

        $(document).ready(function () {
            $("#results2").append("<h5><strong>Latest Financials:</strong></h5>");
            $("#results2").append("<br>" + "<strong>Price / Earnings Ratio: </strong>" + response.result[0].table[0].value + "<br>");
            $("#results2").append("<br>" + "<strong>Earnings Per Share: </strong>" + response.result[0].table[3].value + "<br>");
            $("#results2").append("<br>" + "<strong>Market Capitalization: </strong>" + response.result[0].table[6].value + "<br>");
            $("#results2").append("<br>" + "<strong>Shares Outstanding: </strong>" + response.result[0].table[7].value + "<br>");
            $("#results2").append("<br>" + "<strong>Price / Book Ratio: </strong>" + response.result[0].table[8].value + "<br>");
            $("#results2").append("<br>" + "<strong>Price / Sales Ratio: </strong>" + response.result[0].table[9].value + "<br>");
            $("#results2").append("<br>" + "<strong>Dividend Indicated Gross Yield: </strong>" + response.result[0].table[10].value + "<br>");
            $("#results2").append("<br>" + "<strong>Average Volume: </strong>" + response.result[0].table[14].value + "<br>");

        })
        // resets the page when submit/enter is pressed, appends results for new user input
        $("#submit").click(function () {
            $("#results").empty(),
                $("#results2").empty();
        })
    })
}

// function for the stock ticker 3rd party API
(function (f, i, n, t, e, c, h) {
    f['IntrinioWidgetsObject'] = e; f[e] = f[e] || function () {
        (f[e].q = f[e].q || []).push(arguments)
    }, f[e].l = 1 * new Date(); c = i.createElement(n),
        h = i.getElementsByTagName(n)[0]; c.async = 1; c.src = t; h.parentNode.insertBefore(c, h)
})(window, document, 'script', 'https://widget-api-cdn.intrinio.com/intrinio-widgets.min.js', 'iw');
iw('initialize', { userId: '2095ee9f024bec25b2c782d4fe019433bdd1271613906cd7b5125229f23d654b' });



// function for modal 
$(document).ready(function () {
    $('.modal').modal();

});





