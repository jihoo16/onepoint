<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
request.setCharacterEncoding("utf-8");
String id = request.getParameter("id");
String pw = request.getParameter("pw");

%>

<sql:setDataSource var="dataSource"
	driver="oracle.jdbc.driver.OracleDriver"
	url="jdbc:oracle:thin:@localhost:1521:xe" user="C##dbexam"
	password="m1234" />


<sql:query dataSource="${ dataSource}" var="rs">
		select * from onepoint where id=? and pw= ?
		<sql:param value="<%=id%>" />
	<sql:param value="<%=pw%>" />

</sql:query>

<c:forEach var="row" items="${rs.rows}">
	<%
	 session.setAttribute("sessionId",id);
	%>
	<c:redirect url="findOut.jsp"/>
</c:forEach>


	<c:redirect url="login.jsp?error=1"/>


