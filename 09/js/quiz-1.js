var checkbx = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");

for (var i = 0; i < checkbx.length; i++) {
  checkbx[i].onclick = calcPrice;
}

var sum = 24000;
function calcPrice() {
  if (this.checked == true) {
    sum += parseInt(this.value);
  }
  else {
    sum -= parseInt(this.value);
  }
  total.value = sum;
}