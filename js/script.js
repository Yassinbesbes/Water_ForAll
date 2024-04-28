// Toggle donation form visibility
document.getElementById('donate-button').addEventListener('click', function () {
    const donationForm = document.getElementById('donation-form');
    if (donationForm.style.display === 'none') {
      donationForm.style.display = 'block';
    } else {
      donationForm.style.display = 'none';
    }
  });

  // Function to handle form submission
  function submitDonation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    // Add your logic here to handle the donation data

    alert(`Thank you, ${name}, for your donation of $${amount}! We will send a confirmation to ${email}.`);
    // Reset the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('amount').value = '';
  }

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
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
