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

function clickhandler(){
    console.log(this); //这个this是undefined
    alert('111');
}


// -------------------------------------------------------------
// function clickhandler(){
//     console.log(this); //这个this是undefined
//     alert('111');
// }

// 上面的方法还可以这样写
// 第1种
// clickhandler=()=>{
//      console.log(this); //这个this是undefined
//      alert('111');
//  }
// var btn = <button onClick={ clickhandler.bind(this) }>按钮</button>

// 第2种
// function clickhandler(){
//     console.log(this); //这个this是undefined
//     alert('111');
// }
// // console.log(this); //这个this是undefined
// var btn = <button onClick={ ()=>{clickhandler();} }>按钮</button>
// ------------------------------------------------------------------------------------------




// 改变this指向的方法
// call [this，是一个一个传] call 方法会立即执行
// apply [this 传数组[]]  apply 方法也会立即执行
// bind [this, 是一个一个传] bind方法会将原来的方
// 法复制一份并将this指向改变
// （）=>{} 他的this是外层作用域的他本身没有this



var btn = <button onClick={ clickhandler.bind(this) }>按钮</button>
// var btn = <button>按钮</button>
//创建一个按钮在这个页面上
ReactDOM.render(btn, document.getElementById('main'));


// 原生js方法
// document.querySelector('button').onclick = function(){
//     console.log(this);  //这个this谁调用就是谁
//     alert('我是中国人')
// }

