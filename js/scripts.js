// Business (or back-end) logic:

// User interface (or front-end) logic:

$(document).ready(function() {
	$("form#triangle").submit(function(event) {
		event.preventDefault();
		var firstLength = parseInt($("#input1").val());
		var secondLength = parseInt($("#input2").val());
		var thirdLength = parseInt($("#input3").val());

		var result;
			if (firstLength === secondLength && firstLength === thirdLength) {
				result = "Equilateral";
			} else if (firstLength + secondLength <= thirdLength) {
        result = "These lengths do not make a triangle."
      } else if (secondLength + thirdLength <= firstLength) {
        result = "These lengths do not make a triangle."
      } else if (firstLength + thirdLength <= secondLength) {
        result = "These lengths do not make a triangle."
      } else if (firstLength === secondLength && firstLength != thirdLength) {
				result = "isosceles";
			} else if (secondLength === thirdLength && secondLength != firstLength) {
				result = "isosceles";
			} else if (firstLength === thirdLength && firstLength != secondLength) {
        result = "isosceles"
      } else if (firstLength != secondLength && firstLength != thirdLength && secondLength != thirdLength) {
				result = "scalene";
			}
		$("#output").text(result);
	});
});
