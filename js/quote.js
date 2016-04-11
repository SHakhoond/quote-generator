$("document").ready(function(){
  
  /*var random = function(){
  // On document load, load a quote

    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
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

})*/


   var quotes = [
    
    
    {
      "quote": "I've learned that people will forget what you said, \
              people will forget what you did, but people will never \
              forget how you made them feel.",
      "author": "Maya Angelou" 
    },
    {
      "quote": "I am determined that my children shall be brought up \
                in their father's religion, if they can find out what \
                 it is.",
      "author": "Charles Lamb (1775 - 1834)"
    },
    {
      "quote": "Right now I'm having amnesia and déjà vu at the same \
              time - I think I've forgotten this before.",
      "author": "Steven Wright"
    },
    {
      "quote": "Self-love is a good thing but self-awareness is more \
              important. You need to once in a while go, ‘Uh, I'm \
              kind of an asshole'.",
      "author": "Louis C.K."
    },
    {
      
      "quote": "I am determined that my children shall be brought \
                p in their father's religion, if they can find out \
                     what it is..",
      "author": "Charles Lamb (1775 - 1834)"
    },
    {
      "quote": "The ability to delude yourself may be an important \
                survival tool.",
      "author": "Jane Wagner"
    },
    {
      "quote": "Words calculated to catch everyone may catch no one.",
      "author": "Adlai E. Stevenson Jr. (1900 - 1965)"
    },
    {
      "quote": "It's better to be a company than to work for a company.",
      "author": "Jim Coudal, Keynote Speech, SXSW 2006"
    },
    {
      "quote": "Jim Coudal, Keynote Speech, SXSW 2006",
      "author": "Saint Augustine (354 AD - 430 AD)"
    },
    {
      "quote": "If you wish me to weep, you must mourn first yourself.",
      "author": "Horace (65 BC - 8 BC)"
    },
    {
      "quote": "If you can find a path with no obstacles, it probably \
                doesn't lead anywhere.",
      "author": "Frank A. Clark"
    },
    {
      "quote": "The only people we can still believe are normal \
              are those we don't know very well.",
      "author": "Alain de Botton"
    },
  ]  
  $("#btn-new").click(function () {
    function newQuote() {
      var random = Math.floor(Math.random() * quotes.length);
      $("#quote").text(quotes[random].quote);
      $("#author").text(quotes[random].author);
    }
    newQuote();
  });
});
