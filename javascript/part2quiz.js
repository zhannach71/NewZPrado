// add to draggables
//This function is designed to evaluate the answer selected by the user from a set of radio buttons.
function checkAnswer() {
    // Retrieve all the radio button elements with the name 'answer' into an array-like object.
    const options = document.getElementsByName('answer');
    let selectedValue; // This variable will store the value of the selected radio button.

    // Loop through each radio button to determine which one is selected.
    for (let i = 0; i < options.length; i++) {
        // If the current radio button in the loop is checked (selected),
        if (options[i].checked) {
            // Assign its value to the selectedValue variable.
            selectedValue = options[i].value;
            // Break out of the loop since we found the selected radio button.
            break;
        }
    }

    // Get a reference to the HTML element with ID 'feedback' to display the feedback message.
    const feedbackDiv = document.getElementById('feedback');

    // Check the selected radio button's value and determine the feedback to be shown.
    if (!selectedValue) { // If no radio button was selected
        feedbackDiv.textContent = "Please select an option!";
        feedbackDiv.style.color = "red"; // Set feedback text color to red
    } else if (selectedValue === 'g') { // If the selected answer's value is 'c' (assuming this is the correct answer)
        feedbackDiv.textContent = "Correct! Koton or Rando was fatally shot while trying to apprehend a suspect in the murder of a police officer. He was also a famous actor who played in the 1989 movie K-9 with James Belushi!";
        feedbackDiv.style.color = "green"; // Set feedback tex
    } else { // If any other radio button was selected
        feedbackDiv.textContent = "Wrong answer. Try again.";
        feedbackDiv.style.color = "red"; // Set feedback text color to red
    }
}
