$(document).ready(function() {


	//#1
function squareNumber(num) {
	return Math.pow(num, 2);
}

$("#squareNumber").click(function() {
        // Get value from textbox
        var num = $("#numToSquare").val(); 
        // Do something with it
        var result = squareNumber(num);
        // Print it to the page
        $("#originalNum").html(num);
        $("#outputNum").html(result);
    });


function halfNumber(num) {
	return num / 2;
}

$("#halfOfnum").click(function() {
        // Get value from textbox
        var num = $("#num").val(); 
        // Do something with it
        var result = halfNumber(num);
        // Print it to the page
        $("#num1").html(num);
        $("#halfNum").html(result);
    });


/*function percentOf(number1, number2) {
	return number1 / number2 * 100;
}

$("#percentage").click(function() {
        // Get value from textbox
        var number1 = $("#percentageOf").val(); 
        var number2 = $("#percentageOf2").val();
        // Do something with it
        var result = percentOf(number1, number2);
        // Print it to the page
        $("#number1").html(number1);
        $("#number2").html(number2);
         $("#percentage").html(result);
    });*/

})
