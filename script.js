//your JS code here. If required.

function determineDOMLevel() {
    
    const targetElement = document.getElementById('level');
    
    
    let level = 0;
    
    
    let currentElement = targetElement;
    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement;
    }
    
    // Display the result using alert
    alert(`The level of the element is: ${level}`);
}

// Call the function to determine and display the DOM level
determineDOMLevel();

