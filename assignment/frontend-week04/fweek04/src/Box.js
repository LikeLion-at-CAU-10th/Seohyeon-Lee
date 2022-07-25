import React from 'react'
import styled from "styled-components"
import data from "./data/data.json" 
import "./Box.css";
import Like from './Like';
// import {useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const StyledBox=styled.button`
border: 2px solid transparent;
width:30vh;
Height:30vh;
font-size:15px;
background-color:white;
text-align: left;
margin: 0vh 2vh 12vh 0vh;
`;

const Box = () => {
    // const navigate = useNavigate();

	// const handleClick = (url) => {
	// 	navigate(url);
	// };

    return <>
        {data.products.map((product, i) => (
            <StyledBox key={product.id}>
                <img src={product.img} alt="no img"></img>
                <p><b>{product.title}</b></p>
                <p className="address">{product.address}</p>
                <p className="price">{product.price}</p>
                <Like></Like>
                {/* <p className="detail" onClick={() => handleClick("/detail")}> 더보기 > </p> */}
                <Link to={`/detail/${product.id}`} key={i}> 더보기 >  </Link>

            </StyledBox>
        ))}
        

        
        </>;
    
};

export default Box;