<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<script src="${ctx}/resource/js/jquery.js"></script>
		<title>登录失败</title>
		<script type="text/javascript">
			$(function () {
                setTimeout(function (){
                    window.location.href = "${ctx}/login/uLogin";
                }, 3000);
            });
		</script>
	</head>
	<body>
		登录失败，用户名或密码错误，3秒后自动返回登录界面。
		<a href="${ctx}/login/uLogin">登录</a>
	</body>
	
</html>
