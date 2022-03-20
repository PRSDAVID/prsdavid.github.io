const quotes = [
  {
    quote:
      "Music expresses feeling and thought, without language; it was below and before speech, and it is above and beyond all words.",
    author: "Robert G. Ingersoll",
  },

  {
    quote:
      "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
    author: "Kahlil Gibran",
  },

  {
    quote: "Music is the moonlight in the gloomy night of life.",
    author: "John Paul Friedrich Richter",
  },

  {
    quote:
      "If Music is a Place — then Jazz is the City, Folk is the Wilderness, Rock is the Road, Classical is a Temple.",
    author: "Vera Nazarin",
  },

  {
    quote: "Music is the art which is most nigh to tears and memory.",
    author: "Oscar Wilde",
  },

  {
    quote: "One good thing about music, when it hits you, you feel no pain.",
    author: "Bob Marley",
  },

  {
    quote: "Where words fail, music speaks.",
    author: "Hans Christian Anderson",
  },

  {
    quote:
      "There are two means of refuge from the misery of life — music and cats.",
    author: "Albert Schweitzer",
  },

  {
    quote:
      "The true beauty of music is that it connects people. It carries a message, and we, the musicians, are the messengers.",
    author: "Roy Ayers",
  },

  {
    quote:
      "A painter paints pictures on canvas. But musicians paint their pictures on silence.",
    author: "Leopold Stokowski",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = ` - ${todaysQuote.author}`;
