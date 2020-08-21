var num1 = parseInt(prompt("덧셈할 첫번째 숫자를 입력해주세요."));
var num2 = parseInt(prompt("덧셈할 두번째 숫자를 입력해주세요."));
add(num1, num2);

function add(num1, num2) {
    var result = num1 + num2;
    document.write("<p>" + num1 + " + " + num2 + " = " + result + "</p>");
}