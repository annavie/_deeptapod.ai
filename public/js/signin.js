document.addEventListener("DOMContentLoaded", function () {
  
  document.getElementById('signup-btn').addEventListener('click', async function () {
    window.location.href = '/api/auth/signup';
  });

  document.getElementById('logo').addEventListener('click', async function () {
    window.location.href = '/';
  });

  const inputFields = document.querySelectorAll(".form-group input");

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

  inputFields.forEach(function (input) {
    ["click", "focus", "focusout", "mouseover", "mouseout"].forEach(function (event) {
      input.addEventListener(event, function () {
        handleInputStyles(this, event);
      });
    });
  });

});

function resetStyles(input) {
  const label = input.previousElementSibling;
  const span = input.nextElementSibling;
  label.style.color = "#3c4041";
  span.style.color = "#3c4041";
  input.style.borderColor = "#3c4041";
}

const form = document.getElementById("signin-form");
const emailInput = document.getElementById('email');
const emailLabel = document.querySelector('label[for="email"]');
const emailIcon = document.querySelector('.material-symbols-outlined.email');
const passwordInput = document.getElementById('password');
const passwordLabel = document.querySelector('label[for="password"]');
const passwordIcon = document.querySelector('.material-symbols-outlined.password');

const login = async (userDetails) => {
  try {
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails)
    })
    const data = await response.json();

    if (data.errors) {
      console.log(data.errors);
      if (data.errors.email) {
        emailInput.style.borderColor = 'red';
        emailLabel.style.color = 'red';
        emailLabel.textContent = data.errors.email;
        emailIcon.style.color = 'red';
      }
      if (data.errors.password) {
        passwordInput.style.borderColor = 'red';
        passwordLabel.style.color = 'red';
        passwordLabel.textContent = data.errors.password;
        passwordIcon.style.color = 'red';
      }

      return { success: false, error: data.errors };
    }
    if (data.user) {
      return { success: true, message: data.message }
    }

  } catch (err) {
    console.error(err);
    return { success: false, error: 'An error occurred while logging in' };
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  emailLabel.textContent = "Email";
  passwordLabel.textContent = "Password";

  const res = await login({ email: email.value, password: password.value });

  if (res.success) {
    fetch('/api/view/dashboard', { method: 'GET' })  // Assuming you need to perform some GET request
      .then(data => {
        console.log('Success:', data);
        window.location.href = '/api/view/dashboard';
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  } else {
    console.log(res.error);
  }
});
