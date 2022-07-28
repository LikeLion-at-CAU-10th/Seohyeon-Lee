import React from 'react'
import data from './data/data.json';
import { useParams } from 'react-router-dom';
import styled from "styled-components"

const StyledDom=styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:50vh;
`

const Detail = () => {
  const a = useParams();
  const id = parseInt(a.id); //parseInt를 써서 스트링 타입을 정수타입으로 변환해야 ===를 쓸 수 있음
  const thing = data.products.filter((product) => product.id === id)[0];

  return (
    <>
        <StyledDom>
            <div> {thing.id}번째 상품이 쨔잔~ 상품이름은 {thing.title}이지롱! </div> 
        </StyledDom>
       

    </>
  )
}

export default Detail;