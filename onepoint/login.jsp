<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>로그인 원 포인트(One Point) - 탑티어 프리랜서 마케팅 매칭 서비스</title>
<%@ include file="link.jsp"%>

<link rel="stylesheet" href="css/loginStyle01.css">
<script src="js/loginScript01.js"></script>

</head>
<body>

	<div id="wrapper">
	
		<div class="left">
			<a href="index.jsp"><img src="img/h-logo.png" alt=""></a>
			<div class="box"></div>
			<div class="box flexbox ">
				<span class="colorp">상위 10% 마케터를</span>
				<p>필요한 만큼 고용하세요</p>
				<small>탑티어 프리랜서 마케터 매칭 서비스</small>
			</div>

			<div class="box"></div>
		</div>
		<div class="right">
			<div class="formwrap">

				<form class="needs-validation" novalidate
					action="processloginMember.jsp" method="post">
					<h2>고객사 로그인</h2>
					<div class="form-row p-0">

						<div class="col-12  p-0">
							<label for="email"></label> <input type="email"
								class="form-control" id="email" name="id"
								placeholder="아이디@이메일.com" required>
							<div class="invalid-feedback">이메일을 입력해 주세요.</div>
						</div>
						<div class="col-12 mb-3 p-0">
							<label for="pw"></label> <input type="text" class="form-control"
								id="pw" value="" name="pw" required placeholder="비밀번호">
							<div class="invalid-feedback">비밀번호를 입력해주세요</div>
						</div>
					</div>
					<%
    String error = request.getParameter("error");
   	if(error !=null){
   		out.println("<div class='alert alert-danger'>");
   		out.println("아이디와 비밀번호를 확인해 주세요.");
   		out.println("</div>");
   	}
   %>
					<div class="abox">
						<a href="findId.jsp">아이디를 잊으셨나요?</a> | <a href="findPw.jsp">비밀번호를
							잊으셨나요?</a>
					</div>
					<button class="btn btn-primary" type="submit">로그인 하기</button>

					<div class="abox2">
						<a href="application.html">처음이라면? <span>신청하고 가입하기</span></a>
					</div>
				</form>
				<a href="index.jsp"><img src="img/close_pro.png" alt=""
					class="close"></a>
				<script>

						(function() {
							'use strict';
							window.addEventListener('load', function() {
    
								var forms = document.getElementsByClassName('needs-validation');
   
								var validation = Array.prototype.filter.call(forms, function(form) {
									form.addEventListener('submit', function(event) {
										if (form.checkValidity() === false) {
											event.preventDefault();
											event.stopPropagation();
										}
										form.classList.add('was-validated');
									}, false);
								});
							}, false);
						})();
					</script>
			</div>
		</div>
	</div>
</body>
</html>