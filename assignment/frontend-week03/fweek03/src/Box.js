import React from 'react'
import styled from "styled-components"
import data from "./data.json" 
// 데이터.json 을 data라는 이름으로 불러올거야!
import "./Box.css";
import Like from './Like';

const StyledBox=styled.button`
border: 2px solid transparent;
width:30vh;
Height:30vh;
font-size:15px;
background-color:white;
text-align: left;
margin: 0vh 2vh 5vh 0vh;
`;

const Box = () => {
    return <>{data.products.map((product) => (
        <StyledBox key={product.id}>
            <img src={product.img} alt="no img"></img>
            <p><b>{product.title}</b></p>
            <p className="address">{product.address}</p>
            <p className="price">{product.price}</p>
            <Like></Like>
        </StyledBox>
        ))}</>;
    // 데이터안에있는 프로덕트를 가져와서 맵함수를 돌릴거야! 보여지는 이름은 프로덕트로
};

export default Box;