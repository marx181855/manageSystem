写一个图片预览功能
组件名字大驼峰命名

开发规范

pages/是页面

页面名字采用小驼峰



目录结构

菜单文件目录和菜单路由记录文件通过脚本自动生成，

菜单文件如果已存在就不生成，如果没有就生成，

菜单路由记录文件如果存在就删除重新生成

菜单文件目录自动自动生成，

如果当前是父路由，那就是直接是route-view

如果就是一个当前是结尾子路由，内容就是一个当前路由名字的文本