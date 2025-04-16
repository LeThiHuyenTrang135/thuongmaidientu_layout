
new Swiper('.card-wrapper', {
    
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
    
});
 
    
document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item:not(.text)');
  
    gridItems.forEach(item => {
      const img = item.querySelector('img');
      const loop = item.querySelector('.loop');
      const src = img.getAttribute('src');
  
      loop.style.backgroundImage = `url(${src})`;
      loop.style.pointerEvents = 'none';
  
      item.addEventListener('mousemove', function (e) {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
  
        loop.style.display = 'block';
        loop.style.left = x + 'px';
        loop.style.top = y + 'px';
  
        const zoom = 2.5;
        const bgWidth = img.offsetWidth * zoom;
        const bgHeight = img.offsetHeight * zoom;
  
        loop.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
  
        const percentX = (x / img.offsetWidth) * 100;
        const percentY = (y / img.offsetHeight) * 100;
  
        loop.style.backgroundPosition = `${percentX}% ${percentY}%`;
      });
  
      item.addEventListener('mouseleave', function () {
        loop.style.display = 'none';
      });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const cardItems = document.querySelectorAll('.card-item');

    cardItems.forEach((item) => {
        const link = item.querySelector('.card-link');

        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * -10;

            link.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
        });

        item.addEventListener('mouseleave', () => {
            const link = item.querySelector('.card-link');
            link.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
});
