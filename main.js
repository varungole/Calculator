var buttonIds = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '=' , '+' , '-', '*' , '/' , '%', 'C'];

var operatorClicked = false;
var firstOperand = 0;
var secondOperand = 0;
var operator = '';

buttonIds.forEach(function(id) {
    var button = document.getElementById(id);
    button.addEventListener('click' , function() {

        if(button.value == 'clear')
        {
            document.getElementById('output-data').value = '';
            operatorClicked = false;
        }
        else if(button.value === '+')
        {
            document.getElementById('output-data').value = '';
            document.getElementById('output-data').value = '+';
            operator = '+';
            operatorClicked = true
        }

        else if(button.value === '-')
        {
            document.getElementById('output-data').value = '';
            document.getElementById('output-data').value = '-';
            operator = '-';
            operatorClicked = true
        }

        else if(button.value === '/')
        {
            document.getElementById('output-data').value = '';
            document.getElementById('output-data').value = '/';
            operator = '/';
            operatorClicked = true
        }

        else if(button.value === '*')
        {
            document.getElementById('output-data').value = '';
            document.getElementById('output-data').value = '*';
            operator = '*';
            operatorClicked = true
        }
        else if(button.value === '=')
        {
            if(operator == '+')
            {
            var result = firstOperand + secondOperand;
            operatorClicked = false
            document.getElementById('output-data').value = result;
            firstOperand = 0;
            secondOperand = 0;
            }

            else if(operator == '-')
            {
            var result = firstOperand - secondOperand;
            operatorClicked = false
            document.getElementById('output-data').value = result;
            firstOperand = 0;
            secondOperand = 0;
            }

            else if(operator == '*')
            {
            var result = firstOperand * secondOperand;
            operatorClicked = false
            document.getElementById('output-data').value = result;
            firstOperand = 0;
            secondOperand = 0;
            }

            else if(operator == '/')
            {
            var result = firstOperand / secondOperand;
            operatorClicked = false
            document.getElementById('output-data').value = result;
            firstOperand = 0;
            secondOperand = 0;
            }

            else if(operator == '%')
            {
            var result = firstOperand % secondOperand;
            operatorClicked = false
            document.getElementById('output-data').value = result;
            firstOperand = 0;
            secondOperand = 0;
            }
        }
        else
        {
            if(!operatorClicked)
            {
             firstOperand = parseInt(button.value);
             console.log(firstOperand);
             document.getElementById('output-data').value = firstOperand;
            }
            else
            {
                document.getElementById('output-data').value = '';
                secondOperand = parseInt(button.value);
                console.log(secondOperand);
                document.getElementById('output-data').value = secondOperand;

            }
        }
    })
})