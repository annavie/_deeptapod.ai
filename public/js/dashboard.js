document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('copyIcon')
    .addEventListener('click', () => {
      const apiKey = document.getElementById('apiKey').innerText;
      navigator.clipboard.writeText(apiKey)
        .then(() => {
          alert('API key copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    });

  const refBtn = document.getElementById('api-btn-doc');
  refBtn.addEventListener('click', function() {
    fetch('/api/view/reference', { method: 'GET' })  // Assuming you need to perform some GET request
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

  // const homeBtn = document.getElementById('home-link');
  // homeBtn.addEventListener('click', function() {
  //   fetch('/', { method: 'GET' })  // Assuming you need to perform some GET request
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.text();
  //     })
  //     .then(data => {
  //       console.log('Success:', data);
  //       window.location.href = '/';
  //     })
  //     .catch(error => {
  //       console.error('Fetch error:', error);
  //     });
  // });

  const logoutBtn = document.getElementById('user-btn');
  logoutBtn.addEventListener('click', function() {
    fetch('/api/auth/signout', { method: 'GET' })  // Assuming you need to perform some GET request
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log('Success:', data);
        window.location.href = '/';
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  });
})
