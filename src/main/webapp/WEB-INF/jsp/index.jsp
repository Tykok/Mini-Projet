<%@page import="java.util.List"%>
<%@page import="vin.mecalife.com.miniprojet.Option"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
String listOption = (String) request.getAttribute("optionVehicule");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Liste des options du véhicules</title>
</head>
<body>


	<%=listOption%>


</body>
</html>