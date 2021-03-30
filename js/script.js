//data
// let selecteItem = null;

//create an input field for users to ask a question
const form = document.createElement('form');
const inputQuestion = document.createElement('input');
const labelQuestion = document.createElement('label');
const askButton = document.createElement('button');


// Change Type
//askButton.type = 'submit';

// Append Element
document.body.appendChild(form);
form.appendChild(labelQuestion);
form.appendChild(inputQuestion);
document.body.appendChild(askButton);

// Inner HTML
labelQuestion.innerHTML = 'Ask anything of the mighty Magic8Ball!';
askButton.innerHTML = 'ASK!';

//ask function that when clicked, will choose a random
//8ball image and insert it into 'answers' div

const getRandomMagic8BallImg = () => {
    let number = getRandomNumberInRange(1, 10);
    return `img/magic8ball_${number}.png`;
}

const answers = document.querySelector('.answers');
const answerOptions = ["It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes - definitely",
"You may rely on it", 
"As I see it, yes", 
"Most likely", 
"Outlook good", 
"Yes", "Signs point to yes",
"Don't count on it", 
"My reply is no",
"My sources say no", 
"Outlook not so good",
"Very doubtful", 
"Reply hazy, try again", 
"Ask again later", 
"Better not tell you now",
"Cannot predict now", 
"Concentrate and ask again"];

askButton.addEventListener("click", function() {
    if (inputQuestion.value.length < 1) {
      alert('Enter a question!');
    } else {
      answers.innerText = "";
      var num = Math.floor(Math.random() * Math.floor(answerOptions.length));
      answers.innerText = answerOptions[num];
    }
  });






