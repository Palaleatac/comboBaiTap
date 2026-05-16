//Tao cũng tạo .js này để chúng mày không cần làm :>>>
//Write your answer below:
// money

/*// check box
const warhammer = document.getElementById("warhammer");
const ori2 = document.getElementById("ori2");
const pragmata = document.getElementById("pragmata");
const tw = document.getElementById("tw");
const gris = document.getElementById("gris");

const submitButton = document.getElementById("submitButton");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const steam = document.getElementById("steam");
const pay = document.getElementById("pay");

const total = document.getElementById("total");

var total_money;
const result = document.getElementById("result");
var wallet = 0;

submitButton.onclick = function () {
  var walletText = document.getElementById("wallet").textContent;
  wallet = Number(walletText.replace(/\D/g, ""));
  //  lệnh xóa chữ
  var warhammercost = Number(
    document.getElementById("warhammercost").textContent.replace(/\./g, ""),
  );
  var ori2cost = Number(
    document.getElementById("ori2cost").textContent.replace(/\./g, ""),
  );
  var pragmatacost = Number(
    document.getElementById("pragmatacost").textContent.replace(/\./g, ""),
  );
  var twcost = Number(
    document.getElementById("twcost").textContent.replace(/\./g, ""),
  );
  var griscost = Number(
    document.getElementById("griscost").textContent.replace(/\./g, ""),
  );

  total_money = 0;

  if (warhammer.checked) total_money += warhammercost;
  if (ori2.checked) total_money += ori2cost;
  if (pragmata.checked) total_money += pragmatacost;
  if (tw.checked) total_money += twcost;
  if (gris.checked) total_money += griscost;

  total.textContent = "Total: " + total_money + " VND";

  if (wallet < total_money) {
    result.textContent = "đỗ nghèo khỉ";
  } else {
    result.textContent = "đỗ nghèo khỉ nay giàu nhỉ ";
  }
};

pay.onclick = function () {
  if (wallet >= total_money) {
    if (visa.checked) {
      wallet -= total_money;
      result.textContent = "thanh toán thành công ";
    } else if (mastercard.checked) {
      wallet -= total_money;
      result.textContent = "thanh toán thành công ";
    } else if (steam.checked) {
      wallet -= total_money;
      result.textContent = "thanh toán thành công ";
    } else {
      result.textContent = "chọn thẻ đi  ";
    }
  }
  if (wallet < total_money) {
    result.textContent = "đỗ nghèo khỉ";
  }

  var walletText = document.getElementById("wallet");
  walletText.textContent = "Steam wallet: " + wallet + "VND";
};*/
// siêu vip
const games = [
  { checkbox: "warhammer", cost: "warhammercost" },
  { checkbox: "ori2", cost: "ori2cost" },
  { checkbox: "pragmata", cost: "pragmatacost" },
  { checkbox: "tw", cost: "twcost" },
  { checkbox: "gris", cost: "griscost" },
];

const paymentMethods = ["visa", "mastercard", "steam"];

const submitButton = document.getElementById("submitButton");
const pay = document.getElementById("pay");
const total = document.getElementById("total");
const result = document.getElementById("result");

let total_money = 0;
let wallet = 0;

// Hàm lấy số từ text tại vì trung dùng thẻ p mà ko dùng input
const getNumber = (text) => Number(text.replace(/\D/g, ""));

submitButton.onclick = () => {
  wallet = getNumber(document.getElementById("wallet").textContent);

  total_money = games.reduce((sum, game) => {
    const isChecked = document.getElementById(game.checkbox).checked;
    const cost = getNumber(
      document.getElementById(game.cost).textContent.replace(/\./g, ""),
    );
    return isChecked ? sum + cost : sum;
  }, 0);

  total.textContent = `Total: ${total_money} VND`;

  result.textContent =
    wallet < total_money ? "đỗ nghèo khỉ" : "đỗ nghèo khỉ nay giàu nhỉ";
};

pay.onclick = () => {
  const selectedMethod = paymentMethods.find(
    (method) => document.getElementById(method).checked,
  );

  if (!selectedMethod) {
    result.textContent = "chọn thẻ đi";
    return;
  }

  if (wallet < total_money) {
    result.textContent = "đỗ nghèo khỉ";
    return;
  }

  wallet -= total_money;
  result.textContent = "thanh toán thành công";

  document.getElementById("wallet").textContent = `Steam wallet: ${wallet} VND`;
};
