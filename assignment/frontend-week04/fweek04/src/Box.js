import React from 'react'
import styled from "styled-components"
import data from "./data/data.json" 
import "./Box.css";
import Like from './Like';
import { Link } from 'react-router-dom';

const LittleBox=styled.div`
display:flex;
flex-direction:column;
`

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
    return <>
        {data.products.map((product, i) => (
            <StyledBox>
                <img src={product.img} alt="no img"></img>
                <p><b>{product.title}</b></p>
                <p className="address">{product.address}</p>
                <p className="price">{product.price}</p>
                <LittleBox>
                    <Like></Like>
                    <Link to={`/detail/${product.id}`} key={i}> 더보기 >  </Link>
                </LittleBox>

            </StyledBox>
        ))}
        

        
        </>;
    
};

export default Box;