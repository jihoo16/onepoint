<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
request.setCharacterEncoding("utf-8");
String id = request.getParameter("id");
String pw = request.getParameter("pw");
String name = request.getParameter("name");
String category = request.getParameter("category");
String phone = request.getParameter("phone");
%>

<sql:setDataSource var="dataSource"
	driver="oracle.jdbc.driver.OracleDriver"
	url="jdbc:oracle:thin:@localhost:1521:xe" user="C##dbexam"
	password="m1234" />


<sql:update dataSource="${ dataSource}" var="rs">
		insert into onepoint values(?,?,?,?,?,sysdate,sysdate)
		<sql:param value="<%=id%>" />
	<sql:param value="<%=pw%>" />
	<sql:param value="<%=phone%>" />
	<sql:param value="<%=name%>" />
	<sql:param value="<%=category%>" />
	
</sql:update>


<c:if test = "${rs>=1}">
	<c:redirect url="resultMember.jsp?msg=1"/>
</c:if>
