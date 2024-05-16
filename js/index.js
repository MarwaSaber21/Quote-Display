var Quotes = [
  {
    quoteText: "“Be yourself; everyone else is already taken.”",
    quoteAuthor: "― Oscar Wilde",
    authorImg: "images/oscar.jpg",
  },

  {
    quoteText: "“A room without books is like a body without a soul.”",
    quoteAuthor: "― Marcus Tullius Cicero",
    authorImg: "images/marcus.jpg",
  },
  {
    quoteText:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    quoteAuthor: "― Bernard M. Baruch",
    authorImg: "images/Bernard.jpg",
  },
  {
    quoteText:
      "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
    quoteAuthor: "― John Green",
    authorImg: "images/John.jpg",
  },
  {
    quoteText: "“If you tell the truth, you don't have to remember anything.”",
    quoteAuthor: "― Mark Twain",
    authorImg: "images/mark.jpg",
  },
  {
    quoteText: "“You only live once, but if you do it right, once is enough.”",
    quoteAuthor: "― Mae West",
    authorImg: "images/Mae.jpg",
  },
  {
    quoteText: "“It does not do to dwell on dreams and forget to live.”",
    quoteAuthor: "― J.K. Rowling,",
    authorImg: "images/J.K.jpg",
  },

  {
    quoteText:
      "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
    quoteAuthor: "― William Shakespeare",
    authorImg: "images/William.jpg",
  },

  {
    quoteText:
      "“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”",
    quoteAuthor: "― Maurice Switzer",
    authorImg: "images/2868190._UX200_CR0,37,200,200_.jpg",
  },
];

var previousNumber = 0;
function displayQuote() {
  let newNumber = Math.floor(Math.random() * Quotes.length);
  while (newNumber == previousNumber) {
    newNumber = Math.floor(Math.random() * Quotes.length);
  }
  previousNumber = newNumber;
  document.getElementById("quote").innerHTML = Quotes[newNumber].quoteText;
  document.getElementById("author").innerHTML = Quotes[newNumber].quoteAuthor;
  document
    .querySelector("#myImg")
    .setAttribute("src", Quotes[newNumber].authorImg);
  document
    .querySelector("#myImg")
    .setAttribute("class", "img-thumbnail rounded-circle ");
}
