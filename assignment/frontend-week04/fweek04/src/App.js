import React from 'react'
import Box from './Box';
import styled from "styled-components";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Detail from './Detail';
const StyledApp=styled.div`
display:flex;
justify-content:center;
`;

const StyledCard=styled.div`
    width: 100vh;
    `;

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={
                <StyledApp>
                <StyledCard>
                    <h3> 인기 중고 </h3>
                    <Box></Box>
                </StyledCard>
                </StyledApp>
            }>
            </Route>
        

            <Route path="/detial:detid" element={<Detail/>}> </Route>

        </Routes>
    </>
  )
}

export default App