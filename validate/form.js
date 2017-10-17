	var beauty = function()
	{
		return $('#username1').text();
	}


	$('#form-register').on('submit',function(){
		var isValid = true;
		if($('#hoten').val().trim()==''){
			$('#hoten').next('span').text("Invalid");
			document.getElementById("hoten").placeholder = "Vui lòng nhập họ tên vào đây";
			isValid = false;		
		}
		else
		{
			$('#hoten').next('span').text(' ');
		}
		if($('#password').val().trim()==''){
			$('#password').next('span').text("Invalid");
			document.getElementById("password").placeholder = "Vui lòng nhập mật khẩu vào đây";
			isValid = false;		
		}
		else
		{
			$('#password').next('span').text(' ');
		}
		if($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)==null){
			$('#email').next('span').text("Invalid");
			document.getElementById("email").placeholder = "Vui lòng nhập email vào đây";
			isValid = false;		
		}
		else
		{
			$('#email').next('span').text(' ');
		}
		if($('#phone').val().match(/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4})$/)==null){
			$('#phone').next('span').text('Invalid');
			document.getElementById("phone").placeholder = "Vui lòng nhập số điện thoại vào đây";
			isValid = false;		
		}
		else
		{
			$('#phone').next('span').text(' ');
		}
		if($('#add').val().trim()==''){
			$('#add').next('span').text("Invalid");
			document.getElementById("add").placeholder = "Vui lòng nhập địa chỉ vào đây";
			isValid = false;		
		}
		else
		{
			$('#add').next('span').text(' ');
		}
		if($('#select3').val().trim()==''){
			$('#select3').next('span').text("Invalid");
			isValid = false;		
		}
		else
		{
			$('#select3').next('span').text(' ');
		}


		return isValid;
	});
