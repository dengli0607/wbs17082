/**
 * 处理HTTP请求并响应
 */
//加载http模板，用来创建HTTP服务器
var http=require('http');

//创建一个HTTP服务器
var server=http.createServer((request,response)=>{
	console.log('有一个客户端连接上来了，呵呵呵');
	/**
	 * 浏览器每次发起请求时，都会同时请求favicon.ico（favorite icon）
	 */
	// console.log(request.url);
	if('/favicon.ico'==request.url){ //过滤图标请求
		return;
	}
	//指定响应头信息
	response.writeHead(200,{
		'Content-Type':'text/html;charset=utf-8'
	});
	//响应数据
	response.write('<h1>welcome to itany</h1>');
	response.write('<h1>欢迎来到南京网博</h1>');
	response.end(); //响应结束
});

//启动服务器，指定监听的端口，来接受客户端的请求
server.listen(8888,function(){
	console.log('开始监听8888端口，等待客户端的连接。。。。');
});