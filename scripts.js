
// Mobile menu toggle
document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Video Modal
var modal = document.getElementById("videoModal");
var videoFrame = document.getElementById("videoFrame");
var videoTrigger = document.getElementById("videoTrigger");
var closeModal = document.querySelector(".close-modal");

// Open the modal when image is clicked
videoTrigger.onclick = function() {
    modal.style.display = "block";
    videoFrame.src = "https://youtu.be/gnyoUXgl74c?si=Ua5z1D8UW30adwpA"; // Replace with your YouTube video ID
}

// Close the modal when the close button is clicked
closeModal.onclick = function() {
    modal.style.display = "none";
    videoFrame.src = ""; // Stop the video by clearing the iframe source
}

// Close the modal when clicking outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        videoFrame.src = ""; // Stop the video by clearing the iframe source
    }
}

// Stats counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
});


const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let scrollAmount = 0;
let autoScrollInterval;

// Automatic scrolling every 3 seconds
function autoScroll() {
    autoScrollInterval = setInterval(() => {
        scrollAmount += carousel.clientWidth / 4;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = 0;
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, 3000);
}

// Start auto-scrolling
autoScroll();

// Manual scrolling for next and previous buttons
next.addEventListener('click', () => {
    clearInterval(autoScrollInterval);  // Stop auto-scroll when manually scrolled
    scrollAmount += carousel.clientWidth / 4;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
    autoScroll();  // Resume auto-scroll after interaction
});

prev.addEventListener('click', () => {
    clearInterval(autoScrollInterval);  // Stop auto-scroll when manually scrolled
    scrollAmount -= carousel.clientWidth / 4;
    if (scrollAmount < 0) {
        scrollAmount = carousel.scrollWidth - carousel.clientWidth;
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
    autoScroll();  // Resume auto-scroll after interaction
});