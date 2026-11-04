
// Lay ngay hien tai
let today = new Date();

// Chuyen ngay thanh dinh dang dd/mm/yyyy
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

// Hien thi footer
document.getElementById("footerText").innerHTML =
    "Đây là bài làm của Nguyễn Nhã Uyên, thực hiện ngày "
    + day + "/" + month + "/" + year;
