document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });

  const storedData = JSON.parse(localStorage.getItem("profileData"));
  if (storedData) {
    document.getElementById("first-name").value = storedData.firstName;
    document.getElementById("last-name").value = storedData.lastName;
    document.getElementById("company").value = storedData.company;
    document.getElementById("role").value = storedData.role;
    document.getElementById("email").value = storedData.email;
    document.getElementById("phone").value = storedData.phone;
  }

  const editProfileLink = document.getElementById('nav-link1');
  const editProfileSection = document.getElementById('edit-profile-section');
  const changePasswordLink = document.getElementById('nav-link2');
  const changePasswordSection = document.getElementById('password-change');

  editProfileLink.addEventListener('click', function (event) {
    editProfileSection.style.display = 'block';
    changePasswordSection.style.display = 'none';

    editProfileSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  changePasswordLink.addEventListener('click', function (event) {
    event.preventDefault();

    changePasswordSection.style.display = 'block';
    changePasswordSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById("edit-profile-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      company: document.getElementById("company").value,
      role: document.getElementById("role").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value
    };

    localStorage.setItem("profileData", JSON.stringify(formData));

    editProfileSection.style.display = 'none';
  });
});
