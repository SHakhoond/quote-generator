$("document").ready(function(){
  
  var random = function(){
  // On document load, load a quote

    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?"
    // Quote Api Url
    $.getJSON(url, function(data){
      // Get JSON data
      $("#quote").text(data.quoteText);
      // Set quote text
      if (data.quoteAuthor === "") {
        $("#author").text(data.quoteAuthor = "Unknown");
        // If quote has no author, return "Unknown"
      }else { 
        $("#author").text(data.quoteAuthor);
        // else, set author text
      }
      tweetUpdate(data.quoteText, data.quoteAuthor)
    })
      

    
  }
  var tweetUpdate = function(quote, author){
        $("#tweet-content").empty()
      
      
      
      twttr.widgets.createHashtagButton(window.location.href, document.getElementById("tweet-content"),{
      text: (quote + "\n" + "by " + author),
      size:"large"
      }
      );
    }
      $("#btn-new").click(function(){
      // On button click, load a quote
      random()
      })
  random()

})
