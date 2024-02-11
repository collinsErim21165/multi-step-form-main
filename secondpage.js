function  pressButton(){
    var button = document.getElementById("buttons");
    var buttonOne = document.getElementById("buttonOne");
    var buttonTwo = document.getElementById('buttonTwo');
    button.style.border = '1px solid blue';
    button.style.backgroundColor = '#ececec';
    buttonOne.style.border = '1px solid #ececec';
   buttonOne.style.backgroundColor = 'transparent';
   buttonTwo.style.border = '1px solid #ececec';
   buttonTwo.style.backgroundColor = 'transparent';
};

function  pressButtonOne(){
    var buttonOne = document.getElementById("buttonOne");
    var button = document.getElementById("buttons");
    var buttonTwo = document.getElementById('buttonTwo');
    buttonOne.style.border = '1px solid blue';
    buttonOne.style.backgroundColor = '#ececec';
    button.style.border = '1px solid #ececec';
    button.style.backgroundColor = 'transparent';
    buttonTwo.style.border = '1px solid #ececec';
    buttonTwo.style.backgroundColor = 'transparent';
};

function pressButtonTwo() {
    var buttonTwo = document.getElementById('buttonTwo');
    var buttonOne = document.getElementById("buttonOne");
    var button = document.getElementById("buttons");
    buttonTwo.style.border = '1px solid blue';
    buttonTwo.style.backgroundColor = '#ececec';
    buttonOne.style.border = '1px solid #ececec';
    buttonOne.style.backgroundColor = 'transparent';
    button.style.border = '1px solid #ececec';
    button.style.backgroundColor = 'transparent';
};




function toggleSwitch(){
    const leftParagraph = document.getElementById('leftParagraph');
    const rightParagraph = document.getElementById('rightParagraph');
    const toggleSwitch = document.getElementById('toggleSwitch');
   if (toggleSwitch.checked){
    rightParagraph.style.color = 'blue';
    rightParagraph.style.fontSize = '20px';
    leftParagraph.style.fontSize = '14px';
    leftParagraph.style.color = 'black';
    localStorage.setItem('selectedOption', 'monthly');
   }else {
    rightParagraph.style.color = 'black';
    rightParagraph.style.fontSize = '15px';
    leftParagraph.style.fontSize = '20px';
    leftParagraph.style.color = 'blue';
    localStorage.setItem('selectedOption', 'yearly');
   }
   
}



function sendData(buttonText){
    localStorage.setItem('selectedButton', buttonText);
    window.location.href = './fourthpage.html';
}


