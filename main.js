// var mainDiv = document.getElementById('main');
// var div = document.createElement('div');
// mainDiv.appendChild(div);
// var span = document.createElement('span');
// div.appendChild(span);
// span.innerHTML = '我是中国人'; 


// 用来创建工作
import React from 'react';
// 用来操作元素的
import ReactDOM from 'react-dom';
// 用来创建一个元素。参数1 要创建元素的标签
// 2：参数创建元素的属性 参数：3 标签的子元素

var div = React.createElement('div',{id:'dv'},'我是中国人');
// 将react元素渲染到页面上
ReactDOM.render(div,document.getElementById('main'));

