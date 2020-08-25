var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

pw1.addEventListener("change", checkPw1);
pw2.addEventListener("change", checkPw2);

function checkId() {
    if (userId.value.length < 4 || userId.value.length > 15) {
        alert("아이디는 4~15자리로 구성해주세요.");
        userId.select();
    }
}

function checkPw1() {
    if (pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상으로 구성해주세요.");
        pw1.focus();
    }
}

function checkPw2() {
    if (pw1.value != pw2.value) {
        alert("비밀번호가 일치하지 않습니다.");
        pw2.value = "";
    }
}