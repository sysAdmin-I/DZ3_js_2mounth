// 1 задание

function func1() {
    var a = prompt("1 задание: Введите число1");
    a = Number(a)

    var b = prompt("1 задание: Введите число2");
    b = Number(b);

    if (a < b) {
        console.log(a);
    } else if (a > b) {
        console.log(b);
    }
}

func1()

// 2 задание

var func2 = function (i = prompt("2 задание: Введите параметр1")) {
    String(i) === i
    console.log(i);
}

func2()

// 3 задание

function  func3 () {
    var num1 = prompt("3 задание: Введите Число1");
    num1 = Number(num1);

    var calc = prompt("3 задание: Введите ' + ', ' - ', ' * ' или ' / ' ");

    var num2 = prompt("3 задание: Введите Число2");
    num2 = Number(num2);

    if (num1 === 0 && calc === "/") {
        alert("Ошибка!!! Вы не можете делить числа на '0' !")
    } else if (calc === "/" && num2 === 0) {
        alert("Ошибка!!! Вы не можете делить числа на '0' !")
    } else if (calc === "+") {
        var result1 = num1 + num2;
        alert("Равен: " + result1);
    } else if (calc === "-") {
        var result2 = num1 - num2;
        alert("Равен: " + result2);
    } else if (calc  === "*") {
        var result3 = num1 * num2;
        alert("Равен: " + result3);
    } else if (calc  === "/") {
        var result4 = num1 / num2;
        alert("Равен: " + result4);
    }
}

func3()
