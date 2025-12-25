document.addEventListener('DOMContentLoaded', function() {
    console.log('Trang web đã tải xong!');

    // Ví dụ về chức năng tương tác đơn giản: Hiển thị ngày giờ hiện tại
    const footer = document.querySelector('footer');
    const dateElement = document.createElement('p');
    const now = new Date();
    dateElement.textContent = 'Hôm nay là: ' + now.toLocaleDateString('vi-VN');
    dateElement.style.fontSize = '0.8em';
    dateElement.style.color = '#bdc3c7';
    footer.appendChild(dateElement);

    // Render Blog Posts from Data
    if (typeof blogData !== 'undefined') {
        const javaContainer = document.getElementById('java-posts');
        const jsContainer = document.getElementById('javascript-posts');

        function createPostElement(post, type) {
            const article = document.createElement('article');
            article.className = 'blog-post';
            // Xác định đường dẫn file chi tiết
            let detailPath = '';
            if (type === 'java') {
                detailPath = `blogdata/java-${post.id}.html`;
            } else if (type === 'javascript') {
                detailPath = `blogdata/js-${post.id}.html`;
            }
            article.innerHTML = `
                <h2>${post.title}</h2>
                <div class="meta">Đăng ngày: ${post.date} | Chủ đề: ${post.topic}</div>
                <p>${post.description}</p>
                <a class="read-more-link" href="${detailPath}">Đọc thêm</a>
            `;
            return article;
        }

        if (javaContainer && blogData.java) {
            javaContainer.innerHTML = ''; // Clear existing content if any
            blogData.java.forEach(post => {
                javaContainer.appendChild(createPostElement(post, 'java'));
            });
        }

        if (jsContainer && blogData.javascript) {
            jsContainer.innerHTML = ''; // Clear existing content if any
            blogData.javascript.forEach(post => {
                jsContainer.appendChild(createPostElement(post, 'javascript'));
            });
        }
    }

    // Modal Logic đã bị loại bỏ vì chuyển sang trang mới

    // Slider Logic
    let slideIndex = 1;
    // Check if slides exist before running slider logic
    if (document.getElementsByClassName("slide").length > 0) {
        showSlides(slideIndex);
    }

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (slides[slideIndex-1]) {
            slides[slideIndex-1].style.display = "block";  
        }
        if (dots[slideIndex-1]) {
            dots[slideIndex-1].className += " active";
        }
    }

    // Contact Form Logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Cảm ơn bạn đã liên hệ! Tin nhắn của bạn đã được gửi.');
            contactForm.reset();
        });
    }
});
