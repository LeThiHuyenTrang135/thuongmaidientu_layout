document.addEventListener('DOMContentLoaded', function () {
    const tabItems = document.querySelectorAll('.product-describe-rating .tab-nav li');

    tabItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Lấy vị trí của tab đang active và tab được click
            const currentActive = document.querySelector('.tab-nav li.active');
            const newActive = this;

            // Tính toán khoảng cách di chuyển
            const currentRect = currentActive.getBoundingClientRect();
            const newRect = newActive.getBoundingClientRect();
            const distance = newRect.left - currentRect.left;

            // Tạo element border di chuyển
            let movingBorder = document.querySelector('.moving-border');
            if (!movingBorder) {
                movingBorder = document.createElement('div');
                movingBorder.className = 'moving-border';
                document.querySelector('.tab-nav').appendChild(movingBorder);
            }
            // Bắt đầu animation
            movingBorder.style.width = currentRect.width + 'px';
            movingBorder.style.left = currentRect.left - document.querySelector('.tab-nav').getBoundingClientRect().left + 'px';

            setTimeout(() => {
                movingBorder.style.width = newRect.width + 'px';
                movingBorder.style.left = newRect.left - document.querySelector('.tab-nav').getBoundingClientRect().left + 'px';

                // Khi animation kết thúc
                setTimeout(() => {
                    tabItems.forEach(tab => tab.classList.remove('active'));
                    newActive.classList.add('active');

                    document.querySelectorAll('.product-tab-content').forEach(content => {
                        content.classList.add('display-none');
                    });

                    const tabText = newActive.textContent.trim().toLowerCase();
                    const contentId = `tab-${tabText === 'description' ? 'describe' : 'rating'}`;
                    document.getElementById(contentId)?.classList.remove('display-none');
                }, 300);
            }, 10);
        });
    });


    // Hiển thị ảnh sản phẩm
    const mainImg = document.querySelector(".main-img")
    const subImg = document.querySelectorAll('.main-left-content ul li img.sub-img')
    subImg.forEach(item => {
        item.addEventListener('click', function (e) {
            // Tạo một bản sao của ảnh hiện tại để làm hiệu ứng
            let cloneImg = mainImg.cloneNode(true);
            cloneImg.style.position = 'absolute';
            cloneImg.style.top = '0';
            cloneImg.style.left = '0';
            document.querySelector('.main-img-wrapper').appendChild(cloneImg);

            // Ảnh cũ trượt sang trái
            mainImg.style.transform = 'translateX(-100%)';

            // Ảnh mới bắt đầu từ bên phải (ngoài khung nhìn)
            let newImg = new Image();
            newImg.src = this.src;
            newImg.className = 'main-img';
            newImg.style.transform = 'translateX(100%)';
            newImg.style.opacity = '0';
            document.querySelector('.main-img-wrapper').appendChild(newImg);

            // Hiệu ứng đồng thời:
            setTimeout(() => {
                // Ảnh cũ biến mất hoàn toàn
                cloneImg.style.opacity = '0';

                // Ảnh mới trượt từ phải sang
                newImg.style.transform = 'translateX(0)';
                newImg.style.opacity = '1';

                // Sau khi hoàn thành, dọn dẹp
                setTimeout(() => {
                    document.querySelector('.main-img-wrapper').removeChild(cloneImg);
                    document.querySelector('.main-img-wrapper').removeChild(mainImg);
                    newImg.style.position = ''; // Reset về mặc định
                    newImg.classList.add('main-img'); // Đảm bảo class được giữ lại
                }, 500);
            }, 50);
        });
    });


    // Tăng qty
    const plusQtyBtn = document.querySelector('#plus-qty')
    const minusQtyBtn = document.querySelector('#minus-qty')
    const qtyNum = document.querySelector('#qty-number')

    plusQtyBtn.addEventListener('click', function (e) {
        qtyNum.value = parseInt(qtyNum.value) + 1
    })

    minusQtyBtn.addEventListener('click', function (e) {
        if (parseInt(qtyNum.value) > 1)
            qtyNum.value = parseInt(qtyNum.value) - 1
        else
            qtyNum.value = 1
    })


    //Đổi size
    document.querySelectorAll("ul.product-size li").forEach(item => {
        item.addEventListener('click', function (e) {
            document.querySelectorAll("ul.product-size li").forEach(li => {
                li.classList.remove('product-size-selected');
            });

            this.classList.add("product-size-selected");
        });
    });
})

