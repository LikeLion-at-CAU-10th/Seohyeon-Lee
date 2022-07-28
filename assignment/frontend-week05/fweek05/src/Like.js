import React, {useState} from 'react'
import styled from "styled-components"

const LikeButton = styled.div`
    height : 17px;
    width: 47px;
    // background-color: ${(props) => props.btnColor};
    background-color:orange;
    border-radius: 10px;
    display:flex;
    justify-content: center;
    align-items:center;
    color:white;
    font-size:14px;
`;

const Like = (props) => {
  const [count,setCount] = useState(0);

  const pushLike = () => {
        setCount((c) => c +1 );
        console.log(count);
  };
  return (
    <>
        <LikeButton onClick={pushLike}>좋아요</LikeButton>
        <span> 좋아요 개수: {count} </span>
    </>
  )
}

export default Like;