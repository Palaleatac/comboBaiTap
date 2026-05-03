//Tao cũng tạo .js này để chúng mày không cần làm :>>>
//Write your answer below:
// Bài 1
/*
let x, y, total;
document.getElementById("submitButton").onclick = function() {
  x = document.getElementById("x").value ;
  y = document.getElementById("y").value ;
  x= Number(x);
  y= Number(y);
  console.log(typeof x);
  console.log(typeof y);
  total= x+y;
  document.getElementById("result").textContent = `Tổng: ${total}`;
};
*/
// Bài 2
/*
document.getElementById("submitButton").onclick = function() {
    document.getElementById("line").textContent = ` Tên: ${document.getElementById("name").value} ; Tuổi: ${document.getElementById("age").value} .`;
}
*/
//Bài 3
/*
let x,y,z,result;
document.getElementById("submitButton").onclick = function() {
    x=document.getElementById("x").value;
    y=document.getElementById("y").value;
    z=document.getElementById("z").value;
    x= Number(x);
    y= Number(y);
    z= Number(z);
    result = (x+y+z)/(3**3);
    result=String(result);
    result+=1;
    console.log(`Kết quả cần tìm: ${result}`);
    document.getElementById("result").textContent = ` Kết quả cần tìm: ${typeof result}`;
}
*/