//data
let selecteItem = null;

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
form.appendChild(askButton);

// Inner HTML
labelQuestion.innerHTML = 'Ask anything of the mighty Magic8Ball!';
askButton.innerHTML = 'ASK!';

//ask function that when clicked, will choose a random
//8ball image and insert it into 'answers' div
form.addEventListener('clicked', function(event){
    event.preventDefault();
    if
})


