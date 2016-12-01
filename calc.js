var input = "";

$(document).ready(function(){
	$(".key").click(function(){
		var num = $(this).val();
		$("#display").val($("#display").val() + num);
		input = input + $(this).val();
	});
	$(".op").click(function(){
		var op = $(this).val();
		$("#display").val($("#display").val() + " " + op + " ");
		input = input + " " + $(this).val() + " ";
	});
	$("#reset").click(function(){
		input = "";
	});
	$("#equal").click(function(){
		var temp1 = input.split(" ");
		if(temp1.length == 1){
			alert("Missing Operand");
			$("#display").text("Operand Missing");
		}
		else {
			var answer = read_operand(temp1);
			$("#display").val(answer);
			input = answer;
		}
	});
	$(".PM").click(function() {
		var check = [input];
		var equalss = parseInt(check[0]);
		if (check[0] < 0){
			var new1 = input * (-1);
			$("#display").val(new1);
			input = new1;
			result = new1;
		}
		else if (check[0] > 0) {
			var new2 = input * (-1);
			$("#display").val(new2);
			result = new2;
			input = new2;
		}
	});
	function read_operand(tokens){
		var first = 0;
		var final1 = 0;
		var count;
		var count1;
		var next;
		if (tokens[0] != ""){
			for(count1 = 0; count1 < tokens.length; count1 ++){
				if (tokens[count1].charCodeAt(0) == 215 || tokens[count1].charCodeAt(0) ==247){
					next = count1;
					tokens = compute(next, tokens);
					if (tokens.length == 1){
						final1 = tokens[0];
						first = 1;
					}
				}
			}
			if (tokens.length != 0 && first != 1){
				for (count = 0; count < tokens.length-2; count ++){
					var hello = parseInt(tokens[0]);
					tokens.shift();
					var yo = tokens[0];
					if (yo == "+") {
						tokens.shift();
						var goodbye = parseInt(tokens[0]);
						final1 = hello + goodbye;
					}
					else if (yo == "-"){
						tokens.shift();
						var goodbye = parseInt(tokens[0]);
						final1 = hello - goodbye;
					}
					else{
						$("#display").text("Nan");
					}
				}
			}
			count = 0;
			var result = final1.toString();
			return result;
		}
		else {
			$("#display").text('Numbers missing');
		}
	}
	function compute(i, tokens){
		var count;
		var final1 = 0;
		var numeroUno = tokens[i-1];
		var operand = tokens[i];
		var numeroDos = tokens[i+1];
		if (numeroDos != ""){
			var one = parseInt(numeroUno);
			if (tokens[i].charCodeAt(0) == 215) {
				var two = parseInt(numeroDos);
				final1 = one * two;
				tokens[i-1] = final1;
				tokens.splice(i, 2);
			}
			else if (tokens[i].charCodeAt(0) == 247){
				var two = parseInt(numeroDos);
				final1 = one/two;
				tokens[i-1] = final1;
				tokens.splice(index,2);
			}
			else{
				$("#display").text("NaN");
			}
		}
		count = 0;
		return tokens;
	}
});
	