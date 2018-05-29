# 快速上手React+TypeScript+Redux技术栈

2018年的六一儿童节已到，特此一篇来献给小盆友们。此处应该有掌声....

![明猪不装暗逼.png](https://upload-images.jianshu.io/upload_images/5243706-05642b29878fdd9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

写在前面: 
首先，什么是TypeScript？

官方原话:TypeScript is a typed superset of JavaScript that complies to plain JavaScript. Any host. Any OS. Open source.--TypeScript是JavaScript类型的超集(强类型版本)，它可以编译成纯的JavaScript，它可以再任何浏览器，任何计算机和任何操作系统上运行，并且开源。

嗯，是的，你可以理解为TypeScript硬是把JavaScript(弱类型语言)"掰弯"了，变成强类型语言；强类语言的优势在于静态类型的检查，TypeScript虽然是强类型的语言，但是如果对象被声明为any类型，就会忽略所有的类型检查。这种灵活的结构保证了它整体有强类语言检查优势的同时，在一些细节问题上保持了弱类型的灵活。

**_1.为了能够快速搭建应用，我们将使用create-react-app官方脚手架为基础进行扩展。_**

` 创建一个项目(TypeScript版本)
 
 npx create-react-app 应用名称 --scripts-version=react-scripts-ts`