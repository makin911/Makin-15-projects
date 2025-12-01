
const apiUrl = "https://api.quotable.io/random";
// let newQuote = document.getElementById('newQuote')


let quote = document.getElementById('quote');
let author = document.getElementById('author');

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
    
    
  }


  function tweet(){
    window.open(href="https://twitter.com/intent/tweet?text="+quote.innerHTML+"---- by "+author.innerHTML)
  }


