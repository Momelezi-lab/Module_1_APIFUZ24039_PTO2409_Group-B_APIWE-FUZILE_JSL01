function validateSyntax() {
    let input = document.getElementById('petInput').value.trim(); // Get input and remove extra spaces
    let result = ''; // Placeholder for validation result

    // Validation logic: Check if input starts with 'pet_' and is followed by alphanumeric characters
    const regex = /^pet_[a-zA-Z0-9]+$/;

    if (regex.test(input)) {
        result = 'Valid Syntax.';
    } else {
        result = 'Invalid Syntax.';
    }

    // Display the result in the element with ID 'result'
    document.getElementById('result').innerText = result;
}



