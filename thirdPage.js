function myCheckbox() {
    const myCheckbox = document.getElementById('myCheckbox');
    const button = document.getElementById('button');
    myCheckbox.checked = !myCheckbox.checked;
    if (myCheckbox.checked){
        button.style.backgroundColor = 'rgb(231,234,246)';
    }else {
        button.style.backgroundColor = 'transparent';
    }
}

function myCheckbox2() {
    const myCheckbox = document.getElementById('myCheckbox2');
    const button = document.getElementById('button2');
    myCheckbox.checked = !myCheckbox.checked;
    if (myCheckbox.checked){
        button.style.backgroundColor = 'rgb(231,234,246)';
    }else {
        button.style.backgroundColor = 'transparent';
    }
}

function myCheckbox3() {
    const myCheckbox3 = document.getElementById('myCheckbox3');
    const button3 = document.getElementById('button3');
    myCheckbox3.checked = !myCheckbox3.checked;
    if (myCheckbox3.checked){
        button3.style.backgroundColor = 'rgb(231,234,246)';
    }else {
        button3.style.backgroundColor = 'transparent';
    }
}

var selectedOption = localStorage.getItem('selectedOption');

var pricingContent1 = document.getElementById('pricingContent1');
var pricingContent2 = document.getElementById('pricingContent2');
var pricingContent3 = document.getElementById('pricingContent3');
 
if (selectedOption === 'monthly'){
    pricingContent1.innerHTML = '+$10/yr' ;
    pricingContent2.innerHTML = '+$20/yr' ;
    pricingContent3.innerHTML = '+$30/yr' ;
}else {
    pricingContent1.innerHTML = '+$1/mo' ;
    pricingContent2.innerHTML = '+$2/mo' ;
    pricingContent3.innerHTML = '+$3/mo';
}