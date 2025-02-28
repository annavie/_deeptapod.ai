document.addEventListener("DOMContentLoaded", function () {
    const refBtn = document.getElementById('home-link');
    refBtn.addEventListener('click', function () {
        window.location.href = '/';
    });
});