$(document).ready(function(){
	 $form = $('#myForm');
	  $form.find(':input[type="submit"]').prop('disabled', true);
	  $form.find(':input').keyup(function() {
		var disable = false;
		$form.find(':input').not('[type="submit"]').each(function(i, el) {
        if ($.trim(el.value) === '') {
            disable = true;
        }
    });
    $form.find(':input[type="submit"]').prop('disabled', disable);
});
});
	function alphaValidation(id, errorId){
		var thisId= $(id).attr('id');
		var regex = /^[a-zA-Z]*$/;
		var firstVal = $("#"+thisId).val();
		if(!regex.test(firstVal)){
			$("#"+thisId).val("");
			$("#"+errorId).html("Enter Alphabets only").show().fadeOut(2000);
		}
		else{
			$("#"+errorId).hide();
		}
	};
	
	
	function phoneValidation(id, errorId){
		var thisId= $(id).attr('id');
		//var reg = /^[0-9-()]+$/;
		var reg = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
		var phoneVal = $("#"+thisId).val();
		if(!reg.test(phoneVal)){
			$("#"+thisId).val("");
			$("#"+errorId).html("Invalid phone number").show().fadeOut(2000);
		}
		else{
			$("#"+errorId).hide();
		}
	}
	
	function emailValidation(id, errorId){
		var thisId= $(id).attr('id');
		var reg = /^[\.a-z0-9_\-]+[@][a-z0-9_\-]+([.][a-z0-9_\-]+)+[a-z]{1,4}$/i;
		var emailVal = $("#"+thisId).val();
		if((!reg.test(emailVal))){
			$("#"+thisId).val("");
			$("#"+errorId).html("Invalid email address").show().fadeOut(2000);
		}
		else{
			$("#"+errorId).hide();
		}
	}
