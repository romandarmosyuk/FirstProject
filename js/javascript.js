var body = document.querySelector('body');
var information = document.createElement('div');
information.classList.add('information');
body.prepend(information);

var informationContainer = document.createElement('div');
informationContainer.classList.add('information__container');
information.appendChild(informationContainer);

var informationText = document.createElement('p');
informationText.textContent = 'Get your dream house in a week.';
informationText.classList.add('information__text');
informationContainer.appendChild(informationText);

var informationButton = document.createElement('button');
informationButton.classList.add('information__button');
informationContainer.appendChild(informationButton);

var picture = document.createElement('img');
picture.src = '../img/close.svg';
picture.classList.add('close');
informationButton.appendChild(picture);

informationButton.addEventListener('click', function() {
   console.log('click');
   body.removeChild(information);
});

