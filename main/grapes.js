var counterValue = document.getElementById('counter-value');

    // Initial value
    var value = 0;

    // Function to increment the value
    function increment() {
        value++;
        counterValue.textContent = value;
    }

    // Function to decrement the value
    function decrement() {
        if (value > 0) {
            value--;
            counterValue.textContent = value;
        }
    }