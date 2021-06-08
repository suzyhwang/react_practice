import React, { useState } from 'react';
import './App.css';

function App() {

 let [글제목,글제목변경] = useState(['State라는 내장 함수 불러오기', '배열도 가능','리액트는 재밌지만 어려워','공부를 열심히 하자'])
 let [글제목2,글제목변경2] = useState('리액트 배우기')
 let [좋아요,좋아요변경] = useState(0);
//let posts = '리액트 배우기';
  
  function 제목바꾸기(){
    let newArray = [...글제목];
    newArray[3]='공부를 더 더 더 열심히 하자'
    글제목변경( newArray )
  }


 
 
 return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
        <button className="top__button" onClick={ 제목바꾸기 }> 버튼 </button>
      </div>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={()=>{좋아요변경(좋아요+1)}}>👍</span> {좋아요} </h3>
        <p>6월 8일 발행</p>
             <hr/>
       </div>
       <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>6월 9일 발행</p>
             <hr/>
       </div>
       <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>6월 10일 발행</p>
             <hr/>
       </div>
       <div className="list">
        <h3>{ 글제목[3] }</h3>
        <p>6월 11일 발행</p>
             <hr/>
       </div>
      <Modal />
    </div>
  );
}
function Modal(){
 return( 
 <div className="modal">
   <h2>제목</h2>
    <p>날짜</p>
     <p>상세내용</p>
  </div>  
 )
}


export default App;
