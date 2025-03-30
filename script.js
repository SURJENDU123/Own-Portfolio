// Sidebar Toggle
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
    var sidebar = document.querySelector(".sidebar");
    var menuToggle = document.querySelector(".menu-toggle");
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let resumeOverlay = document.getElementById("resumeOverlay");
    let resumeBtn = document.getElementById("resumeBtn");
    let closeResume = document.getElementById("closeResume");

    // Ensure it's hidden on page load
    resumeOverlay.style.display = "none";

    // Show the resume popup when clicking the resume button
    resumeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        resumeOverlay.style.display = "flex";
    });

    // Hide when clicking the close button
    closeResume.addEventListener("click", function () {
        resumeOverlay.style.display = "none";
    });

    // Hide when clicking outside the popup
    window.addEventListener("click", function (event) {
        if (event.target === resumeOverlay) {
            resumeOverlay.style.display = "none";
        }
    });
});

  //use for showing the projects img and its description on the above screen
function showPopup(imageSrc, title, description) {
    document.getElementById('popup-img').src = imageSrc;
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

