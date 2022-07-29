const quotes = [
    {
        quote: "Hello1",
        author: "Sojoneg Yoo",
    },
    {
        quote: "Hello2",
        author: "Sojoneg Yoo",
    },
    {
        quote: "Hello3",
        author: "Sojoneg Yoo",
    },
    {
        quote: "Hello4",
        author: "Sojoneg Yoo",
    },
    {
        quote: "Hello5",
        author: "Sojoneg Yoo",
    },
    {
        quote: "Hello6",
        author: "Sojoneg Yoo",
    },
    {
        quote: "Hello7",
        author: "Sojoneg Yoo",
    },
    {
        quote: "Hello8",
        author: "Sojoneg Yoo",
    },
    {
        quote: "Hello9",
        author: "Sojoneg Yoo",
    },
    {
        quote: "Hello10",
        author: "Sojoneg Yoo",
    },
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
