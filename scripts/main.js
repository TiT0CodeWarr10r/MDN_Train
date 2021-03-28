var myImg = document.querySelector('img');

myImg.onclick  = function() {
  var mySrc = myImg.getAttribute('src');
  if(mySrc === '/img/code.png') {
    myImg.setAttribute ('src', '/img/code2.png');
  }else {
    myImg.setAttribute ('src', '/img/code.png');
  }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Enter your Name ');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hi there ' + myName;

  if(!localStorage.getItem('name')) {
    setUserName();
  }else {
    var storedName = localStorage.getItem('name');
    myHeading.texxtContent = 'Hi there ' + storedName;
  }
} 

myButton.onclick = function() {
  setUserName();
}