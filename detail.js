import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let 박스 = styled.div`
  padding: 20px;
`;

function Detail(props) {
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState();
  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    // return function 어쩌구(){실행할코드~~}
    // return은 사라질 때 실행됨, 무조건 함수 써야댐
  }, [alert]);
  //  첫 렌더링 이후엔 [alert]라는 state가 업데이트 될 떄만 실행해줘 라는 조건
  //   단, 조건 안에 아무것도 없을 땐 첫렌더링 이후 안 나옴

  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((a) => a.id == id);
  console.log(찾은상품);
  return (
    <>
      <div className="container">
        <박스>
          <div className="red">Detail</div>
        </박스>
        <input
          onChange={(e) => {
            inputData변경(e.target.value);
          }}
        />
        {alert === true ? (
          <div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다!</p>
          </div>
        ) : null}

        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.goBack();
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
