	var url = new URL(window.location.href);


	var searchParams = new URLSearchParams(url.search);


	$("#hoten").html("Họ tên: "+searchParams.get("hoten"));
	$("#email").html("Email: "+searchParams.get("email"));
	$("#password").html("Password: "+searchParams.get("password"));
	$("#phone").html("Số điện thoại: "+searchParams.get("phone"));
	$("#add").html("Địa chỉ: "+searchParams.get("add"));
	$("#date").html("Ngày sinh "+ searchParams.get("date")+" tháng " +searchParams.get("month") + " năm " + searchParams.get("year"));
	$("#gender").html("Giới tính: " + searchParams.get("gender"));
	
