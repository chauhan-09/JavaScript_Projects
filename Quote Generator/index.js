const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');

const quotes = [
    {
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Winston Churchill"
    },
    {
      "quote": "You miss 100% of the shots you don’t take.",
      "author": "Wayne Gretzky"
    },
    {
      "quote": "The best way to predict the future is to invent it.",
      "author": "Alan Kay"
    },
    {
      "quote": "Your time is limited, so don’t waste it living someone else’s life.",
      "author": "Steve Jobs"
    },
    {
      "quote": "Life is what happens when you're busy making other plans.",
      "author": "John Lennon"
    },
    {
      "quote": "Do not wait to strike till the iron is hot; but make it hot by striking.",
      "author": "William Butler Yeats"
    },
    {
      "quote": "The only limit to our realization of tomorrow is our doubts of today.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "quote": "Whether you think you can or you think you can't, you're right.",
      "author": "Henry Ford"
    },
    {
      "quote": "In the middle of difficulty lies opportunity.",
      "author": "Albert Einstein"
    },
    {
        "quote": "A journey of a thousand miles begins with a single step.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "Be not afraid of growing slowly, be afraid only of standing still.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "Teachers open the door, but you must walk through it yourself.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "A wise man makes his own decisions; an ignorant man follows the public opinion.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "The more you sweat in practice, the less you bleed in battle.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "Do not confine your children to your own learning, for they were born in another time.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "When the winds of change blow, some people build walls, others build windmills.",
        "author": "Chinese Proverb"
      },
      {
        "quote": "The man who moves a mountain begins by carrying away small stones.",
        "author": "Chinese Proverb"
      }
  ]
  

btn.addEventListener('click',f1);

function f1()
{
    const indx = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[indx].quote;
    author.innerHTML = quotes[indx].author;
}
