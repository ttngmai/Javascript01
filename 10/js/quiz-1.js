window.onload = openPop;

function openPop() {
    var newWin = window.open("current.html", "", "width=300, height=50");
    if (newWin == null) {
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제하고 새로고침 해주세요.");
    }
}