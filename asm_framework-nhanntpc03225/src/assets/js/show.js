document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
        const userDropdown = document.querySelector(".demo-navbar-user .nav-link");
        const dropdownMenu = document.querySelector(".demo-navbar-user .dropdown-menu");

        if (event.target === userDropdown) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click
            if (dropdownMenu.classList.contains("show")) {
                dropdownMenu.classList.remove("show");
            } else {
                dropdownMenu.classList.add("show");
            }
        } else {
            // Nếu click vào bất kỳ phần tử nào khác, ẩn menu dropdown (nếu đang hiển thị)
            dropdownMenu.classList.remove("show");
        }
    });
});