//Tao cũng tạo .js này để chúng mày không cần làm :>>>
//Write your answer below:



let x, y, z, gia = 0;
let hang = "";
let kte = tien > 10 ? "du tien k e" : "Chua du dau e";

document.getElementById("button").onclick = function () {
    x = document.getElementById("thit").checked;
    y = document.getElementById("rau").checked;
    z = document.getElementById("nuoc").checked;
    if (x) {
        hang += "thit";
        gia += 20;
    }
    if (y) {
        hang += "rau";
        gia += 10;
    }
    if (z) {
        hang += "nuoc";
        gia += 5;
    }
    console.log(hang, gia);
    document.getElementById("don").textContent = "Don hang cua ban la:" + hang + "   |Gia tien:" + gia;
}
document.getElementById("thanhtoan").onclick = function () {
    tien = Number(document.getElementById("tien").value);
    let ketqua = tien >= gia ? "Thanh toan thanh cong" : "ku e chua du r";
    console.log(ketqua);
    document.getElementById("end").textContent = ketqua;

}