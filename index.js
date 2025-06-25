function outcome(){

let num1 = Number (document.getElementById('num-one').value)

let total = 0

if(document.getElementById('box1').checked)
    total = num1 * 0.10
else if (document.getElementById('box2').checked)
    total = num1 * 0.15
else if (document.getElementById('box3').checked)
    total = num1 * 0.20
else
    total = num1 * 0.25

document.getElementById('resultArea').innerHTML = 'Result: $' + String(total)
}

