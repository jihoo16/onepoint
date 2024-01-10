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

				<div class="col">
					
					<%
					String msg = request.getParameter("msg");
					if (msg != null) {
						if (msg.equals("0"))
							out.print("<h2 class='alert alert-primary text-center'>회원 정보가 수정되었습니다.</h2>");
						else if (msg.equals("1")){
							out.print("<h2 class='alert alert-info text-center'>회원 가입을 축하드립니다. 다시 로그인 해주세요</h2>");
						out.println("<a href='login.jsp'><button class='btn btn-success'>로그인 하러가기 돌아가기</button></a>");
						}else if (msg.equals("2")) {
							String loginId = (String) session.getAttribute("sessionId");
							
							out.print("<h2 class='alert text-center'>" + loginId + "님 환영합니다.</h2>");
							out.println("<a href='index.jsp'><button class='btn btn-primary'>홈페이지로 돌아가기</button></a>");
						}
							
					} else {
						out.println("<h2 class='alert alert-danger text-center'>회원 정보가 삭제되었습니다.</h2>");
					}
					%>
				</div>
				<a href="index.jsp"><img src="img/close_pro.png" alt=""
					class="close"></a>

			</div>
		</div>
	</div>
	
</body>
</html>