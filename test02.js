/**
 * 用户登陆
 */
//加载模板
var http=require('http');
var queryString=require('querystring');

var server=http.createServer((request,response)=>{
	var url=request.url;
	switch(url){
		case '/showLogin':
			//显示登陆页面
			showLogin(request,response);
			break;
		case '/login':
			//用户登陆
			login(request,response);
			break;
		default:
			response.writeHead(404,{});
			response.end();
			break;			
	}
});

server.listen(9999,function(){});

//显示登陆页面
function showLogin(request,response){
	response.writeHead(200,{
		'Content-Type':'text/html;charset=utf-8'
	});
	response.write('<!DOCTYPE html>');
	response.write('<html lang="en">');
	response.write('<head>');
	response.write('	<meta charset="UTF-8">');
	response.write('	<title>用户登陆</title>');
	response.write('</head>');
	response.write('<body>');
	response.write('	<form action="login" method="post">');
	response.write('		<table border="1px">');
	response.write('			<tr>');
	response.write('				<td>用户名:</td>');
	response.write('				<td><input type="text" name="username"></td>');
	response.write('			</tr>');
	response.write('			<tr>');
	response.write('				<td>密码：</td>');
	response.write('				<td><input type="password" name="password" id=""></td>');
	response.write('			</tr>');
	response.write('			<tr>');
	response.write('				<td colspan="2">');
	response.write('					<input type="reset" value="重置">');
	response.write('					<input type="submit" value="登陆">');
	response.write('				</td>');
	response.write('			</tr>');
	response.write('		</table>');
	response.write('	</form>');
	response.write('</body>');
	response.write('</html>');
	response.end();
}

//处理登陆
function login(request,response){
	var params='';
	//绑定data事件，每当获取到请求参数时触发
	request.on('data',function(part){
		params+=part;
	});
	//绑定end事件，当请求参数接收完毕时触发
	request.on('end',function(){
		console.log(params); //username=admin&password=123
		var obj=queryString.parse(params); //将字符串解析为对象
		console.log(obj);
		if(obj.username=='admin'&&obj.password=='123'){
			response.write('欢迎您：'+obj.username);
		}else{
			response.write('用户名或密码不正确！');
		}
		response.end();
	});
}