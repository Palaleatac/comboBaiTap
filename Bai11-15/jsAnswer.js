//Tao cũng tạo .js này để chúng mày không cần làm :>>>
//Write your answer below:
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const submit = document.getElementById("submitButton");
const pay = document.getElementById("pay");
let total = 0;
submit.onclick = function () {
  total = 0;
  document.getElementById("total").textContent = "Total: ";
  if (item1.checked) {
    total += Number(
      document
        .getElementById("p-item1")
        .textContent.replace(" VND", "")
        .replaceAll(".", ""),
    );
  }
  if (item2.checked) {
    total += Number(
      document
        .getElementById("p-item2")
        .textContent.replace(" VND", "")
        .replaceAll(".", ""),
    );
  }
  if (item3.checked) {
    total += Number(
      document
        .getElementById("p-item3")
        .textContent.replace(" VND", "")
        .replaceAll(".", ""),
    );
  }
  if (item4.checked) {
    total += Number(
      document
        .getElementById("p-item4")
        .textContent.replace(" VND", "")
        .replaceAll(".", ""),
    );
  }
  if (item5.checked) {
    total += Number(
      document
        .getElementById("p-item5")
        .textContent.replace(" VND", "")
        .replaceAll(".", ""),
    );
  }
  document.getElementById("total").textContent =
    document.getElementById("total").textContent +
    total.toLocaleString(`vi-VN`) +
    " VND";
};
pay.onclick = function () {
  let money = document.getElementById("wallet").textContent;
  money = money.slice(money.indexOf(":") + 2, money.indexOf("V") - 1);
  money = Number(money.replaceAll(".", ""));
  switch (true) {
    case document.getElementById("e-wallet").checked:
      document.getElementById("result").textContent =
        money >= total
          ? "Thank you for your purchase!"
          : "Your e-wallet is dont has enough to pay!";
      document.getElementById("wallet").textContent =
        money >= total
          ? `E-wallet: ${(money - total).toLocaleString(`vi-VN`)} VND`
          : `E-wallet: ${money.toLocaleString(`vi-VN`)} VND`;
      break;
    case document.getElementById("credit-card").checked:
      document.getElementById("result").textContent =
        "Please pay upon delivery.";
      break;
    case document.getElementById("cash").checked:
      document.getElementById("result").textContent =
        "Please pay upon delivery.";
      break;
    default:
      document.getElementById("result").textContent = "Please chose pay method";
  }
};
