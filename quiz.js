
        document.addEventListener('DOMContentLoaded', function() {
            // Select DOM elements
            const submitButton = document.getElementById('submit-answer');
            const feedbackElement = document.getElementById('feedback');
            const progressBar = document.getElementById('quiz-progress');
            
            // Initialize quiz state
            let currentQuestion = 1;
            const totalQuestions = 3;
            progressBar.style.width = (currentQuestion/totalQuestions)*100 + '%';
            
            // Add event listeners to options for better UX
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    // Remove selected class from all options
                    options.forEach(opt => opt.classList.remove('selected'));
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Check the radio input inside this option
                    const radioInput = this.querySelector('input[type="radio"]');
                    radioInput.checked = true;
                });
            });
            
            // Check answer function
            function checkAnswer() {
                // Define correct answer
                const correctAnswer = "4";
                
                // Get selected option
                const selectedOption = document.querySelector('input[name="quiz"]:checked');
                
                if (selectedOption) {
                    const userAnswer = selectedOption.value;
                    
                    if (userAnswer === correctAnswer) {
                        feedbackElement.textContent = "Correct! Well done.";
                        feedbackElement.className = "correct";
                    } else {
                        feedbackElement.textContent = "That's incorrect. Try again!";
                        feedbackElement.className = "incorrect";
                    }
                } else {
                    feedbackElement.textContent = "Please select an answer!";
                    feedbackElement.className = "incorrect";
                }
            }
            
            // Add event listener to submit button
            submitButton.addEventListener('click', checkAnswer);
            
            // Add keyboard support
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    checkAnswer();
                }
            });
        });
  