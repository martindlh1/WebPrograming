function add() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var result = num1 + num2;
    document.getElementById('result').value = result;
}

function minus(){
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var result = num1 - num2;
    document.getElementById('result').value = result;
}

function multiply(){
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var result = num1 * num2;
    document.getElementById('result').value = result;
}

function divide(){
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    if(num2 == 0){
        alert('Can not divide')
    } else {
        var result = num1 / num2;
        document.getElementById('result').value = result;
    }
    
}
