$('.button').on('click', function() {
	$.getJSON("https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/quotes.json",function(json) {
    //$(".quote").html(JSON.stringify(json));
    var html = "";  
    var author = "";
    randomQuote = Math.floor(Math.random()*(45-1)+1);
    json = json.filter(function(val) {
      return (val.id === randomQuote);
    });

    html += "<p>"+ json[0].quote
    html += "</p>"

    author += "<p>"+ json[0].author
    author += "</p>"

    $(".txt").html(html);
    $(".author").html(author);
  });
});