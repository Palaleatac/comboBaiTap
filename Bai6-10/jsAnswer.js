//Tao cũng tạo .js này để chúng mày không cần làm :>>>
//Write your answer below:
let count = 0;
let radius1, radius2, radius3, radius4, radius5;
submit = document.getElementById("submitButton");
randomNum = document.getElementById("random");
randomNum.onclick = function () {
  let min = 1;
  let max = 10;
  document.getElementById("radius1").value = Math.trunc(Math.random() * max + min);
  document.getElementById("radius2").value = Math.trunc(Math.random() * max + min);
  document.getElementById("radius3").value = Math.trunc(Math.random() * max + min);
  document.getElementById("radius4").value = Math.trunc(Math.random() * max + min);
  document.getElementById("radius5").value = Math.trunc(Math.random() * max + min);
};
submit.onclick = function () {
  radius1 = Number(document.getElementById("radius1").value);
  radius2 = Number(document.getElementById("radius2").value);
  radius3 = Number(document.getElementById("radius3").value);
  radius4 = Number(document.getElementById("radius4").value);
  radius5 = Number(document.getElementById("radius5").value);
  if (Math.cos(Math.PI * radius1 ** 2) > 0) ++count;
  if (Math.cos(Math.PI * radius2 ** 2) > 0) ++count;
  if (Math.cos(Math.PI * radius3 ** 2) > 0) ++count;
  if (Math.cos(Math.PI * radius4 ** 2) > 0) ++count;
  if (Math.cos(Math.PI * radius5 ** 2) > 0) ++count;
  document.getElementById("result1").textContent =
    ` Số lượng các hình tròn có cos(diện tích) > 0 : ${count}`;
  document.getElementById("result2").textContent =
    ` Rmin: ${Math.min(radius1, radius2, radius3, radius4, radius5)} `;
  console.log(
    `${Math.floor(radius1 / (2 * Math.PI))}; ${Math.floor(radius2 / (2 * Math.PI))}; ${Math.floor(radius3 / (2 * Math.PI))}; ${Math.floor(radius4 / (2 * Math.PI))}; ${Math.floor(radius5 / (2 * Math.PI))}`);
 count=0;
};
