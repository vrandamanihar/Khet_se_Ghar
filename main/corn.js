document.addEventListener('DOMContentLoaded', function () {
    const incrementButton = document.querySelector('.increment');
    const decrementButton = document.querySelector('.decrement');
    const valueDisplay = document.querySelector('.value');
  
    let counterValue = 0;
  
    function updateCounter() {
      valueDisplay.textContent = counterValue;
    }
  
    incrementButton.addEventListener('click', function () {
      counterValue++;
      updateCounter();
    });
  
    decrementButton.addEventListener('click', function () {
      if (counterValue > 0) {
        counterValue--;
        updateCounter();
      }
    });
  });