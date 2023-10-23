`use trict`;
// javascript phần thông tin cá nhân

// Khai báo các phần tử cần sử dụng
const emailButton = document.querySelector(".verify-email");
const personalInfo = document.getElementById("personal-info");
const checkEmail = document.querySelector(".check-email");
const email = document.getElementById("email");

// Hàm kiểm tra tính hợp lệ của email
function isValidEmail(email) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

// Thêm sự kiện click cho nút kiểm tra email
emailButton.addEventListener("click", function () {
  //Lấy giá trị email từ input
  const emailValue = email.value;
  // Kiểm tra xem email có hợp lệ hay không
  if (isValidEmail(emailValue)) {
    // Nếu email hợp lệ, hiển thị phần thông tin cá nhân và ẩn phần kiểm tra email
    personalInfo.classList.remove("hidden");
    checkEmail.classList.add("hidden");
  } else {
    // Nếu email không hợp lệ hiển thị dòng alert
    alert("Email không hợp lệ. Vui lòng nhập email hợp lệ.");
  }
});

//java script phần view-less và view-more
// Khai báo hàm sử lý ẩn hiện mục thông tin cá nhân
const viewMore = document.querySelectorAll(".view-more");
const viewLess = document.querySelectorAll(".view-less");
const detailContent = document.querySelectorAll(".detail-content");

// Hàm lắng nghe sự kiện để hiển thị button view-more
// Khi di chuyển chuột vào các trường thông tin kinh nghiệm, học vấn, sở thích được rút gọn
const viewmoreStatus = function (number) {
  detailContent[number * 2].addEventListener("mouseover", function () {
    viewMore[number].classList.remove("hidden");
  });
  detailContent[number * 2].addEventListener("mouseout", function () {
    viewMore[number].classList.add("hidden");
  });
};

// Hàm lắng nghe sự kiện để hiển thị button view-less
// Khi di chuyển chuột vào các trường thông tin kinh nghiệm, học vấn, sở thích đầy đủ
const viewlessStatus = function (number) {
  detailContent[number * 2 + 1].addEventListener("mouseover", function () {
    viewLess[number].classList.remove("hidden");
  });
  detailContent[number * 2 + 1].addEventListener("mouseout", function () {
    viewLess[number].classList.add("hidden");
  });
};

//Duyệt từng phần tử của mục thông tin kinh nghiệm, học vấn, hoạt động,..
// Để hiển thị và ẩn button view khi di chuyển chuột đến
for (let i = 0; i < viewMore.length; i++) {
  viewmoreStatus(i);
  viewlessStatus(i);
}

// Xử lý ẩn hiện modal khi click button view-more hoặc view-less
for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("click", function () {
    detailContent[i * 2].classList.add("hidden");
    detailContent[i * 2 + 1].classList.remove("hidden");
    viewlessStatus(i);
  });
  viewLess[i].addEventListener("click", function () {
    detailContent[i * 2 + 1].classList.add("hidden");
    detailContent[i * 2].classList.remove("hidden");
    viewmoreStatus(i);
  });
}

/* chú thích để có được công thức áp dụng vào các sự kiện trên*/
// view-more 0 : detail-content 0  -- view-less 0 : detail-content 1    i = 0  // kinh nghiem
// view-more 1 : detail-content 2  -- view-less 1 : detail-content 3    i = 1  // hoc van
// view-more 2 : detail-content 4  -- view-less 2 : detail-content 5    i = 2  // hoat dong
// view-more 3 : detail-content 6  -- view-less 3 : detail-content 7    i = 3  // so thich
// view-more 4 : detail-content 8  -- view-less 4 : detail-content 9    i = 4  // ngon ngu
// view-more 5 : detail-content 10 -- view-less 5 : detail-content 11   i = 5  // ki nang

// => detailContent(viewMore) = i(viewMore) * 2
// => detailContent(viewLess) = i(viewLess) * 2 + 1
