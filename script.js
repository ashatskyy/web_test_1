"use strict";

const arrQ = [
  [
    "Learn as if you will live forever, live like you will die tomorrow.",
    "—Mahatma Gandhi",
  ],
  [
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "—Mark Twain",
  ],
  [
    "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
    "—Eleanor Roosevelt",
  ],
  [
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "—Winston Churchill",
  ],
  [
    "Success usually comes to those who are too busy to be looking for it.",
    "—Henry David Thoreau",
  ],
  ["I never dreamed about success. I worked for it.", "—Estée Lauder"],
  [
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "—Winston Churchill",
  ],
  ["Don’t let yesterday take up too much of today.", "—Will Rogers"],
  [
    "Experience is a hard teacher because she gives the test first, the lesson afterward.",
    "—Vernon Sanders Law",
  ],
  ["Either you run the day or the day runs you.", "—Jim Rohn"],
  [
    "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    "—Thomas Edison",
  ],
  ["He who conquers himself is the mightiest warrior.", "—Confucius"],
  [
    "Try not to become a man of success, but rather become a man of value.",
    "—Albert Einstein",
  ],
  ["One man with courage makes a majority.", "—Andrew Jackson"],
  [
    "Education is the most powerful weapon which you can use to change the world.",
    "—Nelson Mandela",
  ],
  [
    "Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.",
    "—Augustine Og Mandino",
  ],
  [
    "Keep your eyes on the stars, and your feet on the ground.",
    "—Theodore Roosevelt",
  ],
  ["Work until your bank account looks like a phone number.", "—Unknown"],
  [
    "Just one small positive thought in the morning can change your whole day.",
    "—Dalai Lama",
  ],
  ["Do the best you can. No one can do more than that.", "—John Wooden"],
  [
    "When you arise in the morning, think of what a privilege it is to be alive, to think, to enjoy, to love.",
    "—Marcus Aurelius",
  ],
  [
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "—Albert Einstein",
  ],
  ["Live out of your imagination, not your history.", "—Stephen Covey"],
  ["A year from now you will wish you had started today.", "—Unknown"],
  [
    "I do not try to dance better than anyone else. I only try to dance better than myself.",
    "—Arianna Huffington",
  ],
  ["If you don’t risk anything, you risk even more.", "—Erica Jong"],
  ["If it makes you nervous, you’re doing it right.", "—Childish Gambino"],
  ["I choose to make the rest of my life the best of my life.", "—Louise Hay"],
  ["No one changes the world who isn’t obsessed.", "—Billie Jean King"],
];

const colors = [
  "#BF3E97",
  "#057fAb",
  "#18AF50",
  "#0A7375",
  "#FA602A",
  "#CE14B9",
  "#Cf115A",
  "#53266E",
  "#316232",
  "#404593",
  "#7D71D6",
  "#F04242F9",
  "#077345",
  "#E67614",
  "#3103D1",
  "#AA1B48",
  "#E42416",
  "#B42C40",
  "#0C56EA",
  "#2B60C8",
  "#2D8705",
  "#8B008B",
  "#0D7555",
  "#1A4264",
  "#3F67CC",
  "#68625c",
  "#3E82B2",
  "#2D920F",
  "#6A0EAF",
];

const blueQuote = document.getElementById("bluesky-quote");
const twtQuote = document.getElementById("tweet-quote");
const newQuote = document.getElementById("new-quote");

const text = document.getElementById("text");
const author = document.getElementById("author");

const root_theme = document.querySelector(":root");

let rendomParam = generateQuoteAndColor();
onClickFn([rendomParam[0],rendomParam[1]]);

newQuote.addEventListener("click", () => {
	checkRendom();
});

function onClickFn(quteAndColor) {

  const color = colors[quteAndColor[1]];
  const msg = `"` + arrQ[quteAndColor[0]][0] + `"`;
  const msgAutor = arrQ[quteAndColor[0]][1];

  root_theme.style.setProperty("--main-theme-color", `${color}`);

  setTimeout(() => {
    root_theme.style.setProperty("--hover-color", `${color}`);
  }, 350);

  root_theme.style.setProperty("--color", "#FFFFFF");

  setTimeout(() => {
    root_theme.style.setProperty("--color", `${color}`);
    text.innerText = msg;
    author.innerText = msgAutor;
  }, 1000);

  blueQuote.href = `https://bsky.app/intent/compose?text=${msg + msgAutor}`;
	twtQuote.href = `https://twitter.com/intent/tweet?text=${msg + msgAutor}`;
}

function generateQuoteAndColor() {
  const min = 0;
  const max = 28;
  const quoteNumber = Math.round(getRandomNumber(min, max));
  const colorNumber = Math.round(getRandomNumber(min, max));

  function getRandomNumber(min, max) {
    return min + Math.random() * (max - min);
  }

  return [quoteNumber, colorNumber];
}

function checkRendom(){ 
  const rendomParamNew = generateQuoteAndColor();
	if (rendomParamNew[0] !== rendomParam[0] && rendomParamNew[1] !== rendomParam[1]) {
		onClickFn([rendomParamNew[0], rendomParamNew[1]]);
		rendomParam= [rendomParamNew[0],rendomParamNew[1]]
		return;
	} else {checkRendom()}
}