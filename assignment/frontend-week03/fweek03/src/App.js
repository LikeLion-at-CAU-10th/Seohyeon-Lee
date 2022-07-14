import React from 'react'
import Box from './Box';
import styled from "styled-components";
import "./App.css";

const StyledApp=styled.div`
display:flex;
justify-content:center;
`;

const StyledCard=styled.div`
    width: 100vh;
    `;

const App = () => {
  return (
    <div>
        <StyledApp>
            <StyledCard>
                <h3> 인기 중고 </h3>
                <Box></Box>
            </StyledCard>
        </StyledApp>

    </div>
  )
}

export default App