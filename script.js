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

// Đặt slide đầu tiên thành active khi load trang
showSlide(currentIndex);
// Automatically switch slides every 3 seconds
setInterval(nextSlide, 3000);