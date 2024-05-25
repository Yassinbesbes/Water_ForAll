document.getElementById('donationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  submitDonation();
});

function submitDonation() {
  // Collect the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;
  const comment = document.getElementById('comment').value;

  // Create an informative alert message
  const alertMessage = `
    Name: ${name}
    Email: ${email}
    Donation Amount: $${amount}
    Comment: ${comment}
  `;

  // Display the alert message
  alert(alertMessage);

  // Reset the form
  document.getElementById('donationForm').reset();
}

//Scroll parte:
document.addEventListener("DOMContentLoaded", function() {
  // Get the button element by its ID
  var button = document.getElementById("scrollButton");

  // Add an event listener for the 'click' event
  button.addEventListener("click", function() {
      // Get the footer element
      var footer = document.getElementById("section3");

      // Scroll to the footer element smoothly
      footer.scrollIntoView({ behavior: "smooth" });
  });
});