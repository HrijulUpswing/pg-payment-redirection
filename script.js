// Assuming the data object is in the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const data = JSON.parse(urlParams.get('data'));

const paymentResponse = data.paymentResponse;
const paymentGatewayURL = data.paymentGatewayURL;

// Get the form element
const form = document.getElementById('paymentForm');

// Set the form action to the payment gateway URL
form.action = paymentGatewayURL;

// Create hidden input fields for each key-value pair in the paymentResponse object
for (let key in paymentResponse) {
    let input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = paymentResponse[key];

    // Append the input field to the form
    form.appendChild(input);
}

// Automatically submit the form
form.submit();
