<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>비밀번호찾기 원 포인트(One Point) - 탑티어 프리랜서 마케팅 매칭 서비스</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
	<link rel="icon" sizes="57x57" href="https://1point.kr/favicon/apple-icon-57x57.png">
	<link rel="stylesheet" href="css/fideidStyle01.css">
	<link rel="icon" href="img/m_h1_logo.png">
	
	<script src="js/loginScript01.js"></script>
<script>
	function checkForm(){
		if(!document.findOut.phone.value){
			alert("전화번호를 입력하세요");
			return false;
		}
		if(!document.findOut.id.value){
			alert("아이디를 입력하세요");
			return false;
		}
	}
</script>
</head>
<body>
	<div id="wrapper">
		<div class="left">
			<a href="index.html"><img src="img/h-logo.png" alt=""></a>
			<div class="box"></div>
			<div class="box flexbox "><span class="colorp">상위 10% 마케터를</span><p>필요한 만큼 고용하세요</p>
				<small>탑티어 프리랜서 마케터 매칭 서비스</small></div>

				<div class="box"></div>
			</div>
			<div class="right">
				<div class="formwrap">
					<h4>ONE POINT</h4>
					<h2>고객사 비밀번호 찾기</h2>
					<p>가입하신 이메일을 입력해주세요</p>
					<form name="findOut"action="findPwOut.jsp" class="needs-validation" novalidate onsubmit="return checkForm()" method="post">
						<div class="inputbox">
							<label for="validationTooltip01">
								
							</label>
							<input type="text" class="form-control" id="validationTooltip01" value="" required placeholder="이메일" name="id">
							
							</div>
								<div class="inputbox">
							<label for="validationTooltip01">
								
							</label>
							<input type="text" class="form-control my-3" id="validationTooltip01" value="" required placeholder="전화번호" name="phone">
							
							</div>
								<%
    String error = request.getParameter("error");
   	if(error !=null){
   		out.println("<div class='alert alert-danger'>");
   		out.println("이메일과 전화번호를 확인해주세요.");
   		out.println("</div>");
   	}
   %>
						<button class="btn btn-primary btn2" type="submit">비밀번호 찾기</button>
						</form>
					
				</div>
				<a href="login.jsp"><img src="img/close_pro.png" alt="" class="close"></a>
			</div>
			</div>
			<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
		</body>
		</html>