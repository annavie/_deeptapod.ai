document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('signin-btn').addEventListener('click', function() {
        window.location.href = '/api/auth/signin';
    });

    document.getElementById('logo').addEventListener('click', function() {
        window.location.href = '/';
    });

    document.getElementById('dashboard-link').addEventListener('click', function() {
        fetch('/api/view/dashboard', { method: 'GET' })  // Assuming you need to perform some GET request
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.text();
          })
          .then(data => {
              console.log('Success:', data);
              window.location.href = '/api/view/dashboard';
          })
          .catch(error => {
              console.error('Fetch error:', error);
          });
    });

    const inputFields = document.querySelectorAll(".form-group input");
    inputFields.forEach(function(input) {
        input.addEventListener("click", function() {
            handleInputStyles(this, "click");
        });

        input.addEventListener("focus", function() {
            handleInputStyles(this, "focus");
        });

        input.addEventListener("focusout", function() {
            handleInputStyles(this, "focusout");
        });

        input.addEventListener("mouseover", function() {
            handleInputStyles(this, "mouseover");
        });

        input.addEventListener("mouseout", function() {
            handleInputStyles(this, "mouseout");
        });
    });
});

function resetStyles(input) {
    input.classList.remove('error');
    const label = input.previousElementSibling;
    const span = input.nextElementSibling;
    label.style.color = "";
    span.style.color = "";
}

function handleInputStyles(input, action) {
    const label = input.previousElementSibling;
    const span = input.nextElementSibling;

    switch (action) {
        case "click":
        case "focus":
            label.style.color = "rgba(53, 61, 255, 1)";
            span.style.color = "rgba(53, 61, 255, 1)";
            input.style.borderColor = "rgba(53, 61, 255, 1)";
            break;
        case "focusout":
            label.style.color = "#3c4041";
            span.style.color = "#3c4041";
            input.style.borderColor = "#3c4041";
            break;
        case "mouseover":
            if (!input.matches(":focus")) {
                label.style.color = "rgba(115, 115, 115, 1)";
                span.style.color = "rgba(115, 115, 115, 1)";
                input.style.borderColor = "rgba(115, 115, 115, 1)";
            }
            break;
        case "mouseout":
            if (!input.matches(":focus")) {
                label.style.color = "#3c4041";
                span.style.color = "#3c4041";
                input.style.borderColor = "#3c4041";
            }
            break;
        default:
            break;
    }
}

function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    const registrationForm = document.querySelector(".reg-cont");
    registrationForm.style.display = "none";
    popup.style.display = "block";
}

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailIcon = document.querySelector('.material-symbols-outlined.email');
const passwordInput = document.getElementById("password");
const passwordLabel = document.querySelector('label[for="password"]');
const passwordIcon = document.querySelector('.material-symbols-outlined.password');
const confirmPasswordInput = document.getElementById("confirm-password");
const confirmPasswordLabel = document.querySelector('label[for="confirm-password"]');
const confirmPasswordIcon = document.querySelector('.material-symbols-outlined.conf-password');

async function register(userDetails) {
    try {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userDetails)
        })
        const data = await response.json();

        if (data.errors) {
            if (data.errors.email) {
                emailLabel.textContent = data.errors.email;
                emailInput.style.borderColor = "red";
                emailLabel.style.color = "red";
                emailIcon.style.color = "red";
            }
            if (data.errors.password) {
                passwordLabel.textContent = data.errors.password;
                passwordInput.style.borderColor = "red";
                passwordLabel.style.color = "red";
                passwordIcon.style.color = "red";
            }

            return { success: false, error: data.errors };
        }
        if (data.user) {
            return { success: true, message: data.message }
        }

    } catch (err) {
        console.error(err);
        return { success: false, error: 'An error occurred while registering' };
    }
}

const form = document.getElementById("registration-form");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    emailLabel.textContent = "Email";
    passwordLabel.textContent = "Password";

    let hasError = false;

    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.classList.add('error');
        confirmPasswordInput.classList.add('error');

        passwordInput.style.borderColor = 'red';
        passwordLabel.style.color = 'red';
        passwordIcon.style.color = 'red';
        confirmPasswordInput.style.borderColor = 'red';
        confirmPasswordLabel.style.color = 'red';
        confirmPasswordIcon.style.color = 'red';

        hasError = true;
    }
    if (!hasError) {
        const response = await register({
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        });
        if (response.success) {
            showPopup("success-popup");
            fetch('/api/auth/confirmation', { method: 'GET' })
            .then(data => {
                console.log('Success:', data);
                window.location.href = '/api/auth/confirmation';
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        } else {
            console.log(response.error);
        }
    }
});

