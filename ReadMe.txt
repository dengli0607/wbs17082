1.使用npm本地安装模块，安装到当前目录
    语法：npm install 模块名
    默认安装到当前所在位置，会在当前位置自动创建node_modules目录

    npm install jquery --安装当前最新稳定版
    npm install bootstrap

    npm install jquery@1.11.1 --安装指定版本

2.使用npm全局安装模块
    默认安装到C:\Users\用户\AppData\Roaming\npm\node_modules目录下    
    注：在Mac OS下默认安装/usr/local/lib/node_modules目录下

    npm install swiper -g
    npm install jquery -g

3.卸载模块
    语法：npm uninstall 模块名 [-g]

4.查看已安装模块
    npm ls [-g]  
