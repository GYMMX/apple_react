import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "가경이짱",
  ]);

  function 제목바꾸기() {
    var newArr = [...글제목];
    newArr[0] = "여자 코트 추천";
    글제목변경(newArr);
  }
  function 가나다() {
    var arr = [...글제목];
    arr.sort();
    글제목변경(arr);
    console.log(arr);
  }

  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [모달, 모달변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <button onClick={가나다}>가나다</button>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {a}
              <span
                onClick={() => {
                  let like = [...따봉];
                  like[i]++;
                  return 따봉변경(like);
                }}
              >
                👍🏻
              </span>
              <span>{따봉[i]}</span>
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      {/* <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      /> */}
      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let a = [...글제목];
            a.unshift(입력값);
            글제목변경(a);
          }}
        >
          저장
        </button>
      </div>

      <button
        onClick={() => {
          모달변경(!모달);
        }}
      >
        열고닫기
      </button>
      {모달 === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
