
function additionNum(){
    var first_number = Number(document.getElementById("input_1").value);
    var second_number = Number(document.getElementById("input_2").value);
    var result = first_number + second_number;
    document.getElementById("result").innerHTML = "Result :" + result;
}

function subtractionNum(){
    var first_number = Number(document.getElementById("input_1").value);
    var second_number = Number(document.getElementById("input_2").value);
    var result = first_number - second_number;
    document.getElementById("result").innerHTML = "Result :" + result;
}

function multiplicationNum(){
    var first_number = Number(document.getElementById("input_1").value);
    var second_number = Number(document.getElementById("input_2").value);
    var result = first_number * second_number;
    document.getElementById("result").innerHTML = "Result :" + result;
}

function divisionNum(){
    var first_number = Number(document.getElementById("input_1").value);
    var second_number = Number(document.getElementById("input_2").value);
    var result = first_number / second_number;
    document.getElementById("result").innerHTML = "Result :" + result;
}

function squareNum(){
    var first_number = Number(document.getElementById("input_1").value);
    var second_number = Number(document.getElementById("input_2").value);
    var result1 = first_number * first_number;
    var result2 = second_number * second_number;
    document.getElementById("result").innerHTML = "Result :" + result1 + ", " + result2;
}

function cubeNum(){
    var first_number = Number(document.getElementById("input_1").value);
    var second_number = Number(document.getElementById("input_2").value);
    var result1 = first_number * first_number * first_number;
    var result2 = second_number * second_number * second_number;
    document.getElementById("result").innerHTML = "Result :" + result1 + ", " + result2;
}

document.getElementById("add_btn").onclick=additionNum
document.getElementById("sub_btn").onclick=subtractionNum
document.getElementById("mul_btn").onclick=multiplicationNum
document.getElementById("div_btn").onclick=divisionNum
document.getElementById("sq_btn").onclick=squareNum
document.getElementById("cube_btn").onclick=cubeNum
