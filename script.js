const displayQuote = document.querySelector(".quote");
const displayAuthor = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".new-quote");
const tweetBtn = document.querySelector(".twitter-share-button");

async function getQuote() {
  const apiResponse = await fetch(
    `https://stoicquotesapi.com/v1/api/quotes/random`
  );
  const data = await apiResponse.json();
  // console.log(data)
  const quote = data.body;
  const author = data.author;
  displayQuote.innerText = quote;
  displayAuthor.innerText = author;
  tweetBtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  tweetBtn.target = "_blank";
}

newQuoteBtn.addEventListener("click", getQuote);

getQuote();
