// Dark/Light Mode Toggle
// const themeToggle = document.getElementById("theme-toggle");
// const themeToggleSidebar = document.getElementById("theme-toggle-sidebar");
// const mode = document.getElementById("mode");

// function toggleTheme() {
//     document.body.classList.toggle("dark-mode");
//     document.body.classList.toggle("light-mode");
//     mode.textContent = document.body.classList.contains("dark-mode")? "Dark Mode": "Light Mode";
// }

// themeToggle.addEventListener("click", toggleTheme);
// themeToggleSidebar.addEventListener("click", toggleTheme);

// Sidebar Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Close sidebar when clicking outside
document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

// Toggle Feature Details
function toggleFeature(id) {
    let featureCard = document.getElementById(`feature-${id}`).parentElement;
    
    if (featureCard.classList.contains("active")) {
        featureCard.classList.remove("active");
    } else {
        document.querySelectorAll(".feature-card").forEach(card => card.classList.remove("active"));
        featureCard.classList.add("active");
    }
}
const name = document.getElementById("fullName").value;
const email = document.getElementById("emergencyEmail").value;
const password = document.getElementById("password").value;
// Open Sign Up Modal
function openSignup() {
    document.getElementById("signupModal").style.display = "flex";
    document
.getElementById("signupForm")
.addEventListener("submit", function (e) {
    closeSignup();
  e.preventDefault();

  if (name && email && password) {
    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    document.querySelector(".success").style.display = "block";
    this.reset(); // Clear form
    closeSignup();
  }
});
}

// Close Sign Up Modal
function closeSignup() {
    document.getElementById("signupModal").style.display = "none";
}

// Close Modal When Clicking Outside
window.onclick = function(event) {
    let modal = document.getElementById("signupModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Get elements
const helpBtn = document.getElementById("helpBtn");
const helpModal = document.getElementById("helpModal1");
const clos = document.querySelector(".clos");
const simpleAlertBtn = document.getElementById("simpleAlertBtn");
const emergencyBtn = document.getElementById("emergencyBtn");
const beepSound = document.getElementById("beepSound");

// Show Modal on Help Button Click
helpBtn.addEventListener("click", () => {
  helpModal1.style.display = "flex";
});

// Close Modal
clos.addEventListener("click", () => {
  helpModal1.style.display = "none";
});

// Click Outside to Close Modal
window.addEventListener("click", (e) => {
  if (e.target === helpModal) {
    helpModal1.style.display = "none";
  }
});

const userData = localStorage.getItem("user");

if (userData) {
    const user = JSON.parse(userData); // Convert back to an object
    console.log("User Name:", user.email);
}
// Emergency Button: Direct Action (Send SOS Alert)
emergencyBtn.addEventListener("click", () => {
  alert(
    "🚨 Emergency Alert Sent! Authorities and Trusted Contacts Notified!"
  );

  // Simulate Sending an SOS Request (Can be connected to a backend API)
  console.log("Sending emergency alert...");

  // Close Modal
  helpModal1.style.display = "none";
});

// Simple Alert Button: Play High-Frequency Beep
simpleAlertBtn.addEventListener("click", () => {
  beepSound.play();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        var locationLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

        // Send Email with Live Location
        emailjs
          .send("service_yymc3ur", "template_rzrimln", {
            from_name: "Women Safety System", // Fixed sender name
            from_email: "bnvm001167@gmail.com", // Fixed sender email (set in EmailJS)
            to_email: document.getElementById("emergencyEmail").value, // Dynamic recipient email
            message:"Hello",
          //   message: document.getElementById("message").value,
            location: locationLink,
          })
          .then(
            function (response) {
              document.getElementById("status").innerHTML =
                "✅ Email Sent Successfully!";
            },
            function (error) {
              document.getElementById("status").innerHTML =
                "❌ Failed to Send Email: " + error.text;
            }
          );
      },
      function (error) {
        document.getElementById("status").innerHTML =
          "❌ Location access denied!";
      }
    );
  } else {
    document.getElementById("status").innerHTML =
      "❌ Geolocation is not supported by your browser.";
  }
});

console.log(document.getElementById("emergencyEmail").value);

const showPopup = document.getElementById("simpleAlertBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Show Popup
showPopup.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close Popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
  beepSound.pause();
});

// Close when clicking outside popup
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});


(function () {
  emailjs.init("Dd8k2ww36DYf7nZIZ"); // Replace with your EmailJS Public Key
})();

// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();  //Prevent page reload
