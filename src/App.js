import React, { useState } from 'react';
import './App.css';

function App() {

 let [글제목,글제목변경] = useState(['State라는 내장 함수 불러오기', '배열도 가능'])
 let [글제목2,글제목변경2] = useState('리액트 배우기')
 let posts = '리액트 배우기';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] }</h3>
        <p>6월 8일 발행</p>
             <hr/>
       </div>

      </div>
  );
}

export default App;
