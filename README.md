# 应聘登记表源码

## 源码文件层级导航

```bash
application_form
	|————css							 ||CSS样式文件夹
		|————normalize.css				 	 ||bootStrap格式化样式文档
		|————rolldate.css				 	 ||rolldate样式文件
		|————style.css						 ||索引页样式文件
				 
	|————iconfont							 ||图标字体文件
	|————js								 ||js逻辑代码文件夹
		|————createPage.js                    			 ||构建页面逻辑代码
		|————createRollDate.js     	              		 ||构建rollDate组件代码
		|————rolldate.js				    	 ||rolldate.js日期组件函数
	|————json							 ||json数据库
		|————data.json						 ||页面数据文档
	|————.gitignore							 ||git忽略文件配置
	|————index.html					         	 ||索引页面
	|————README.md					          	 ||应聘登记表源码源码内容简介
```

## 源码说明

本页面的开发基于MVVM的框架开发思想，将数据、页面、是视图模型分离，以便于维护

整个页面基于jQuery函数库和BootStrap框架构建，页面中的日期滚选组件基于rolldate.js函数组件开发。

由于此页面的主体部分样式统一，因此将构建页面所需要的数据集成到json/data.json文件中，然后通过jQuery中ajax请求相对路径下的data.json数据，createPage.js为页面构建函数，将ajax请求的数据应用于页面构建函数，创建页面主体。

页面中点击事件触发的日期滚选组件是基于rolldate.js函数组件开发。因为组件默认样式与需求不符，对源码中的页面模型代码进行了重构，并将其中的css样式分离到rolldate.css文件，方便自定义样式文件；

rolldate.js没有解决日期组件显示之后，底层页面的默认事件(如mousescroll,touchmove)仍会触发问题，通过给body元素添加`overflow:hidden`解决，但效果不是十分完美，有待一个更好的解决方案。



