$('.button').on('click', function() {
	$.getJSON("https://jsonp.afeld.me/?url=http://quotes.stormconsultancy.co.uk/quotes.json",function(json) {
    //$(".quote").html(JSON.stringify(json));
    var html = "";  
    var author = "";
    randomQuote = Math.floor(Math.random()*(45-1)+1);
    json = json.filter(function(val) {
      console.log(val.id);
      console.log("ram" + randomQuote);
      return (val.id === randomQuote);
    });

    console.log(json);
    html += "<p>"+ json[0].quote
    html += "</p>"

    author += "<p>"+ json[0].author
    author += "</p>"

    $(".txt").html(html);
    $(".author").html(author);
  });
});