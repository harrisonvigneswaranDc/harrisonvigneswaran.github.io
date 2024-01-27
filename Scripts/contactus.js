"use strict";
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Create and id the name for each of the fields
    let name = document.getElementById('FullName').value;
    let contact = document.getElementById('ContactNumber').value;
    let email = document.getElementById('EmailAddress').value;
    let message = document.getElementById('message').value;
    let checkbox = document.getElementById('subscribeCheckBox').checked;

    // Make sure that they fill out the fields otherwise alert message would pop up
    if (!name || !email || !contact || !message || !checkbox) {
        alert('Please fill out all fields and agree to the subscription.');
        return;
    }

    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];

    // Set the modal content to display the thank you message and countdown
    let countdown = 5;
    document.getElementById("modalText").innerHTML =
        `Thank you, ${name}.<br>Your message has been sent.<br>Redirecting in <span id="countdown">${countdown}</span> seconds...`;

    modal.style.display = "block";

    // Countdown function
    let timer = setInterval(function() {
        countdown--;
        document.getElementById("countdown").textContent = countdown;
        if (countdown <= 0) {
            clearInterval(timer);
            window.location.href = 'index.html'; // Redirect to home page
        }
    }, 1000); // Update countdown every second

    span.onclick = function() {
        clearInterval(timer); // Clear the interval if the modal is closed manually
        modal.style.display = "none";
        document.getElementById('contactForm').reset();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            clearInterval(timer); // Clear the interval if the modal is closed manually
            modal.style.display = "none";
            document.getElementById('contactForm').reset();
        }
    }
});