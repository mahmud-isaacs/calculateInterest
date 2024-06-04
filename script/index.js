let button = document.getElementById('convert')
let amountInput = document.getElementById('amount')
let percentageInput = document.getElementById('percentage')

function calculateInterest(amount, interestRate) {

    const interestDecimal = interestRate / 100;
  

    const interestAmount = amount * interestDecimal;
  
    return interestAmount.toFixed(2); 
  }
  button.addEventListener('click', function() {
    const amount = parseFloat(amountInput.value);
    const interestRate = parseFloat(percentageInput.value);

    const interestAmount = calculateInterest(amount, interestRate);

    document.getElementById('result').innerHTML = 'R' + interestAmount;
    
  });
