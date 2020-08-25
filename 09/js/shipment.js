var nameInfo = document.order.billingName;
var telInfo = document.order.billingTel;
var addrInfo = document.order.billingAddr;

var check = document.ship.shippingInfo;

check.addEventListener("click", clickCheckBox);

function clickCheckBox() {
    if (check.checked == true) {
        console.log("눌렀다");
        document.ship.shippingName.value = nameInfo.value;
        document.ship.shippingTel.value = telInfo.value;
        document.ship.shippingAddr.value = addrInfo.value;
    }
    else {
        document.ship.shippingName.value = "";
        document.ship.shippingTel.value = "";
        document.ship.shippingAddr.value = "";
    }
}
