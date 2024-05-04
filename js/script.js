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
      Thank you, ${name}, for your generous donation!
      
      Donation Details:
      - Amount: $${amount}
      - Email: ${email}
      - Comment: ${comment}

      We greatly appreciate your support!
  `;

  // Display the alert message
  alert(alertMessage);

}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is in view
});

// Observe the h3 and p elements
const h3 = document.querySelector('h3');
const p = document.querySelector('p');
observer.observe(h3);
observer.observe(p);

//scroll

document.getElementById('scrollButton').addEventListener('click', function() {
    // Scroll to the footer element
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});
