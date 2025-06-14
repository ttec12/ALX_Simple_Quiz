
        document.addEventListener('DOMContentLoaded', function() {
            // DOM elements
            const number1Input = document.getElementById('number1');
            const number2Input = document.getElementById('number2');
            const resultSpan = document.getElementById('calculation-result');
            const historyList = document.getElementById('history-list');
            const clearHistoryBtn = document.getElementById('clear-history');
            
            // Initialize calculation history array
            let calculationHistory = [];
            
            // Arithmetic operations
            function add(a, b) {
                return a + b;
            }
            
            function subtract(a, b) {
                return a - b;
            }
            
            function multiply(a, b) {
                return a * b;
            }
            
            function divide(a, b) {
                if (b === 0) {
                    return "Cannot divide by zero";
                }
                return a / b;
            }
            
            // Function to perform calculation
            function performCalculation(operation, symbol) {
                const num1 = parseFloat(number1Input.value) || 0;
                const num2 = parseFloat(number2Input.value) || 0;
                
                let result;
                switch(operation) {
                    case 'add':
                        result = add(num1, num2);
                        break;
                    case 'subtract':
                        result = subtract(num1, num2);
                        break;
                    case 'multiply':
                        result = multiply(num1, num2);
                        break;
                    case 'divide':
                        result = divide(num1, num2);
                        break;
                }
                
                // Display result with animation
                resultSpan.textContent = result;
                resultSpan.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    resultSpan.style.transform = 'scale(1)';
                }, 300);
                
                // Add to history
                const historyEntry = {
                    operation: symbol,
                    num1: num1,
                    num2: num2,
                    result: result
                };
                
                calculationHistory.unshift(historyEntry);
                updateHistory();
            }
            
            // Update history display
            function updateHistory() {
                historyList.innerHTML = '';
                
                calculationHistory.slice(0, 5).forEach(entry => {
                    const historyItem = document.createElement('div');
                    historyItem.classList.add('history-item');
                    historyItem.textContent = `${entry.num1} ${entry.operation} ${entry.num2} = ${entry.result}`;
                    historyList.appendChild(historyItem);
                });
            }
            
            // Event listeners for operation buttons
            document.getElementById('add').addEventListener('click', () => {
                performCalculation('add', '+');
            });
            
            document.getElementById('subtract').addEventListener('click', () => {
                performCalculation('subtract', '-');
            });
            
            document.getElementById('multiply').addEventListener('click', () => {
                performCalculation('multiply', '×');
            });
            
            document.getElementById('divide').addEventListener('click', () => {
                performCalculation('divide', '÷');
            });
            
            // Clear history
            clearHistoryBtn.addEventListener('click', () => {
                calculationHistory = [];
                updateHistory();
            });
            
            // Keyboard support
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    document.getElementById('add').click();
                }
            });
        });
   