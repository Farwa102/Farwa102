
//donor says
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");
    let currentTestimonial = 0;

    function fadeOut(element) {
        element.style.opacity = "0";
        setTimeout(() => (element.style.display = "none"), 500);
    }

    function fadeIn(element) {
        element.style.display = "block";
        setTimeout(() => (element.style.opacity = "1"), 100);
    }

    function rotateTestimonials() {
        fadeOut(testimonials[currentTestimonial]);
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        fadeIn(testimonials[currentTestimonial]);
    }

    // Initially  comments show first testimonial
    testimonials.forEach((card, index) => {
        card.style.opacity = index === 0 ? "1" : "0";
        card.style.display = index === 0 ? "block" : "none";
    });

    setInterval(rotateTestimonials, 4000); // Auto-rotate every 4 seconds
});


// service Donor Registration Form
document.getElementById('donor-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const name = document.getElementById('donor-name').value;
    const bloodGroup = document.getElementById('donor-blood-group').value;
    const contact = document.getElementById('donor-contact').value;

    // Display form values (for testing purposes)
    console.log(`Donor Registered:
        Name: ${name}
        Blood Group: ${bloodGroup}
        Contact: ${contact}
    `);

    alert("Thank you for registering as a donor!");
    document.getElementById('donor-form').reset(); // Reset the form
});



// JavaScript for Blood Request Submission
document.getElementById('request-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Retrieve form values
    const patientName = document.getElementById('patient-name').value;
    const bloodGroup = document.getElementById('required-blood-group').value;
    const contact = document.getElementById('request-contact').value;

    // Display form values
    console.log(`Blood Request:
        Patient Name: ${patientName}
        Required Blood Group: ${bloodGroup}
        Contact: ${contact}
    `);

    alert("Your blood request has been submitted!");
    document.getElementById('request-form').reset();
});



/*buttom*/
const btn = document.querySelector('.btn');
  btn.addEventListener('mouseover', () => {
    btn.style.transform = 'scale(1.1)';
  });
  
  btn.addEventListener('mouseout', () => {
    btn.style.transform = 'scale(1)';
  });
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});




/*process*/
const steps = document.querySelectorAll('.process-step');
steps.forEach(step => {
  step.addEventListener('mouseover', () => {
    step.style.transform = 'scale(1.05)';
    step.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  });

  step.addEventListener('mouseout', () => {
    step.style.transform = 'scale(1)';
    step.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  });
});




// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    } 

    alert ('Thank you, ${name}, for reaching out! We will get back to you soon.');
    this.reset();
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// Scroll-to-Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Sticky Navbar on Scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
