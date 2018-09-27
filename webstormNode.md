### Step 1 下载node.js并配置全局
***
① [点此进入nodejs下载界面](https://nodejs.org/zh-cn/download/)
![下载 .msi 安装包](https://upload-images.jianshu.io/upload_images/7167628-2092e1b506c9de3a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
② 双击安装

③ 在安装目录下新建 node_cache 和 node_global 两个文件夹
![新建文件夹后](https://upload-images.jianshu.io/upload_images/7167628-f6c04a1d52e16a00.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
④ 打开 ` 高级系统设置` 设置环境变量：
变量名：`NODE_PATH `
值：`D:\nodejs\node_global\node_modules`
>注：
Ⅰ. 不知道在哪找高级系统设置就直接在小娜的输入框搜索
Ⅱ. 文件夹node_global的绝对路径下加一个node_modules，但是并不需要在node_global新建这个文件夹

⑤检查node环境是否配置成功： 

![cmd进入任何目录下，验证node和npm版本号 ](https://upload-images.jianshu.io/upload_images/7167628-486a2ca430e5367f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### Step 2 在webstrom中配置node.js
***
File -> Settings->🔍（node.js）->Node.js and NPM
![进入配置界面（配置前）](https://upload-images.jianshu.io/upload_images/7167628-466f932cddae4d46.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

① Node interpreter -> 🔽 -> Add... -> Add Local -> node.js的绝对路径

② 选中 Coding assistance ...
![配置好nodejs后](https://upload-images.jianshu.io/upload_images/7167628-0e6d6d3b2f555f6b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)注：定位到安装目录后不做任何操作Package不会有那么多内容


### 参考资料
***
[webstorm中配置nodejs环境及npm](https://blog.csdn.net/lpf1215/article/details/51991904)
