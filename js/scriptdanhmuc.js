let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Xóa class 'active' khỏi tất cả slides
    slides.forEach(slide => slide.classList.remove("active"));

    // Thêm class 'active' vào slide hiện tại
    slides[currentIndex].classList.add("active");

    // Dịch chuyển slider
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.nav-links li');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            const submenu = dropdown.querySelector('.dropdown-menu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            const submenu = dropdown.querySelector('.dropdown-menu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});
