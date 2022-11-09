
function additionNum(){
    var first_number = parseInt(document.getElementById("input_1").value);
    var second_number = parseInt(document.getElementById("input_2").value);
    var result;
    document.getElementById("result").innerHTML = "Result :" + result;
}

function subtractionNum(){
    var first_number = parseInt(document.getElementById("input_1").value);
    var second_number = parseInt(document.getElementById("input_2").value);
    var result;
    document.getElementById("result").innerHTML = "Result :" + result;
}

function multiplicationNum(){
    var first_number = parseInt(document.getElementById("input_1").value);
    var second_number = parseInt(document.getElementById("input_2").value);
    var result;
    document.getElementById("result").innerHTML = "Result :" + result;
}

function divisionNum(){
    var first_number = parseInt(document.getElementById("input_1").value);
    var second_number = parseInt(document.getElementById("input_2").value);
    var result;
    document.getElementById("result").innerHTML = "Result :" + result;
}

document.getElementById("add_btn").onclick=additionNum
document.getElementById("sub_btn").onclick=subtractionNum
document.getElementById("mul_btn").onclick=multiplicationNum
document.getElementById("div_btn").onclick=divisionNum
