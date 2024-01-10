<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>아이디찾기 원 포인트(One Point) - 탑티어 프리랜서 마케팅 매칭 서비스</title>
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
	integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
	crossorigin="anonymous">
<link rel="icon" sizes="57x57"
	href="https://1point.kr/favicon/apple-icon-57x57.png">
<link rel="icon" href="img/m_h1_logo.png">

<link rel="stylesheet" href="css/fideidStyle01.css">
<script src="js/loginScript01.js"></script>

</head>
<body>
<%
request.setCharacterEncoding("utf-8");
String phone = request.getParameter("phone");
%>
<sql:setDataSource var="dataSource"
	driver="oracle.jdbc.driver.OracleDriver"
	url="jdbc:oracle:thin:@localhost:1521:xe" user="C##dbexam"
	password="m1234" />


<sql:query dataSource="${ dataSource}" var="rs">
		select id from onepoint where phone =?
		<sql:param value="<%=phone%>" />
</sql:query>

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
				<h4>ONE POINT</h4>
				<h2>고객사 아이디 찾기</h2>
	<c:choose>
	<c:when test="${empty rs.rows}">
        <%-- No results found, redirect to findId.jsp with error parameter --%>
        <c:redirect url="findId.jsp?error=1"/>
    </c:when>
      <c:otherwise>
				<div class="container-fluid table-responsive mx-0">
			<table class="table table-striped text-center">
				<tr class="table-active">
					<c:forEach var="columnName" items="${rs.columnNames}">
						<th width="100"><c:out value="${columnName}"></c:out></th>
					</c:forEach>
				</tr>
				<c:forEach var="row" items="${rs.rowsByIndex}">
				
					<tr>
						<c:forEach var="column" items="${row}">
							<td>
							<c:if test="${column !=null }">
							<c:out value="${column}" />
							</c:if>
							<c:if test="${column ==null }">
							<mark>데이터 없음</mark>
							
							</c:if>
							
		

							</td>
						</c:forEach>
					</tr>
				</c:forEach>
			</table>
		</div>
		 </c:otherwise>
		</c:choose>
				<a href="login.jsp"><img src="img/close_pro.png" alt=""
					class="close"></a>
			</div>
		</div>
		</div>
		<script
			src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
			integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
			crossorigin="anonymous"></script>
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
			crossorigin="anonymous"></script>
</body>
</html>