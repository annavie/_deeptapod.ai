window.addEventListener("DOMContentLoaded", () => {

  const signinBtn = document.getElementById('signin-btn');
  signinBtn.addEventListener('click', function () {
    window.location.href = '/api/auth/signin';
  });

  const signupButtons = document.querySelectorAll('.signup-btn');
  signupButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      window.location.href = '/api/auth/signup';
    });
  });

  const messageForm = document.getElementById('message-form');

    messageForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(messageForm);
    const messageData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    try {
        const response = await fetch("/api/support/submit-message", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageData)
        });

        const contentType = response.headers.get('content-type');

        if (!response.ok) {
            console.error(`Server responded with status: ${response.status}`);
        }

        let result;
        if (contentType && contentType.includes('application/json')) {
            result = await response.json();
        } else {
            result = await response.text();
        }

        console.log('Success:', result);
        alert('Message sent successfully!');
    } catch (error) {
        console.error('Fetch error:', error.message);
        alert('There was a problem submitting the message. Please try again.');
    }
});

  const refBtn = document.getElementById('api-btn-doc');
  refBtn.addEventListener('click', function () {
    fetch('/api/view/reference', { method: 'GET' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log('Success:', data);
        window.location.href = '/api/view/reference';
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  });

  let menu_icon = document.getElementById("landing-hamburger");

  function close_menu() {
    let menu_div = document.querySelector(".menu-for-phone");
    menu_div.style.animation = "fadeOut 0.5s ease forwards";
  }

  function open_menu() {
    let menu_div = document.querySelector(".menu-for-phone");
    menu_div.style.display = "block";
    menu_div.style.animation = "fadeIn 0.5s ease forwards";
  }

  menu_icon.addEventListener("click", open_menu);

  let close_icon = document.getElementById("close_icon");

  close_icon.addEventListener("click", close_menu);

  let arr = document.querySelector(".lins-for-phone").children;

  for (let i = 0; i < arr.length; ++i) {
    arr[i].addEventListener("click", () => {
      close_menu();
    });
  }

  document.body.addEventListener("click", (event) => {
    const menu_div = document.querySelector(".menu-for-phone");
    if (!menu_div.contains(event.target) && event.target !== menu_icon) {
      close_menu();
    }
  });

  const faqQuestionIcons = document.querySelectorAll(".faq-question-icon");
  faqQuestionIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      const faqAnswerDropdown = icon.nextElementSibling;
      const symbol = icon.querySelector(".material-symbols-outlined");

      if (faqAnswerDropdown.style.height === "0px" || !faqAnswerDropdown.style.height) {
        faqAnswerDropdown.style.height = faqAnswerDropdown.scrollHeight + "px";
        symbol.textContent = "remove";
      } else {
        faqAnswerDropdown.style.height = "0px";
        symbol.textContent = "add";
      }
    });
  });

  const headerLinks = document.querySelectorAll('.header-ul li a');
  const phoneLinks = document.querySelectorAll('.lins-for-phone li a');

  function handleLinkClick(event) {
    headerLinks.forEach(link => link.classList.remove('active'));
    phoneLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  }

  headerLinks.forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });

  phoneLinks.forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Existing code...

  const inputFields = document.querySelectorAll(".form-group input, .contact-form-cont .form-group input");
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

function handleInputStyles(input, action) {
  const label = input.previousElementSibling;
  const span = input.nextElementSibling;

  switch (action) {
      case "click":
      case "focus":
          label.style.color = "rgba(53, 61, 255, 1)";
          if (span) span.style.color = "rgba(53, 61, 255, 1)";
          input.style.borderColor = "rgba(53, 61, 255, 1)";
          break;
      case "focusout":
          label.style.color = "#3c4041";
          if (span) span.style.color = "#3c4041";
          input.style.borderColor = "#3c4041";
          break;
      case "mouseover":
          if (!input.matches(":focus")) {
              label.style.color = "rgba(115, 115, 115, 1)";
              if (span) span.style.color = "rgba(115, 115, 115, 1)";
              input.style.borderColor = "rgba(115, 115, 115, 1)";
          }
          break;
      case "mouseout":
          if (!input.matches(":focus")) {
              label.style.color = "#3c4041";
              if (span) span.style.color = "#3c4041";
              input.style.borderColor = "#3c4041";
          }
          break;
      default:
          break;
  }
}
