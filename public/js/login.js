/**
 * 
 */
var handleLogin = function() {

	$('.login-form').validate(
			{
				errorElement : 'span', //default input error message container
				errorClass : 'help-block', // default input error message class
				focusInvalid : false, // do not focus the last invalid input
				rules : {
					username : {
						required : true
					},
					password : {
						required : true
					},
					remember : {
						required : false
					}
				},

				messages : {
					username : {
						required : "请填写好账号."
					},
					password : {
						required : "请输入密码."
					}
				},

				invalidHandler : function(event, validator) { //display error alert on form submit   
					console.log(event);
					$('#login-msg').show().html(" 请输入您的账号和密码以及验证码. ");
				},

				highlight : function(element) { // hightlight error inputs
					$(element).closest('.form-group').addClass('has-error'); // set error class to the control group
				},

				success : function(label) {
					label.closest('.form-group').removeClass('has-error');
					label.remove();
				},

				errorPlacement : function(error, element) {
					error.insertAfter(element.closest('.input-icon'));
				},

				submitHandler : function(form) {
					//form.submit(); // form validation success, call ajax form submit
					var _url = $(form).attr("action");
					var $submitBtn = $(form).find("button[type=submit]");
					$submitBtn.text("正在登陆中...").prop("disabled", true);
					$.post(_url, $(form).serializeArray(), function(result) {
						console.log(result);
						if (result.code == 200) {
							console.log(location.href);
							window.location.href = $(form).data("default")
									|| _url;
							return;
						}
						$('#login-msg').show().html(result.result);
						$submitBtn.text("登陆").prop("disabled", false);
					}, "json");
				}
			});

	$('.login-form input').keypress(function(e) {
		if (e.which == 13) {
			if ($('.login-form').validate().form()) {
				$('.login-form').submit(); //form validation success, call ajax form submit
			}
			return false;
		}
	});
}
$(function(){
	handleLogin();
});