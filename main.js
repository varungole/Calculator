var buttonIds = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '=' , '+' , '-', '*' , '/' , '%', 'C'];

var operatorClicked = false;
var firstOperand = '';
var secondOperand = 0;
var operator = '';

buttonIds.forEach(function(id) {
    var button = document.getElementById(id);
    button.addEventListener('click' , function() {

        if(button.value == 'clear')
        {
            document.getElementById('output-data').value = '';
            operatorClicked = false;
            firstOperand = 0;
            secondOperand = 0;
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

        else if(button.value === '%')
        {
            document.getElementById('output-data').value = '';
            document.getElementById('output-data').value = '%';
            operator = '%';
            operatorClicked = true
        }
        else if(button.value === '=')
        {
            if(operator == '+')
            {
            var result = firstOperand + secondOperand;
            operatorClicked = false
            document.getElementById('output-data').value = result;
            firstOperand = result;
            secondOperand = 0;
            }

            else if(operator == '-')
            {
            var result = firstOperand - secondOperand;
            operatorClicked = false
            document.getElementById('output-data').value = result;
            firstOperand = result;
            secondOperand = 0;
            }

            else if(operator == '*')
            {
            var result = firstOperand * secondOperand;
            operatorClicked = false
            document.getElementById('output-data').value = result;
            firstOperand = result;
            secondOperand = 0;
            }

            else if(operator == '/')
            {
            var result = firstOperand / secondOperand;
            operatorClicked = false
            document.getElementById('output-data').value = result;
            firstOperand = result;
            secondOperand = 0;
            }

            else if(operator == '%')
            {
            var result = firstOperand % secondOperand;
            operatorClicked = false
            document.getElementById('output-data').value = result;
            firstOperand = result;
            secondOperand = 0;
            }
        }
        else
        {
            if(!operatorClicked)
            {
             firstOperand += button.value;
             firstOperand = parseInt(firstOperand);
             document.getElementById('output-data').value = firstOperand;
            }
            else
            {
                document.getElementById('output-data').value = '';
                secondOperand += button.value;
                secondOperand = parseInt(secondOperand);
                document.getElementById('output-data').value = secondOperand;
            }
        }
    })
})