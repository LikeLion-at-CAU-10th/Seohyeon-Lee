import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledDom = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 5vh;
    flex-direction: column;
`;

const TitleDom = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
    margin-top: 20vh;
`;

const Detail = () => {
	const { state } = useLocation();

	return (
		<>
        <TitleDom>
<h3>여기는 디테일 페이지~</h3>
        </TitleDom>
			<StyledDom>
				<p> 상품번호:{state.id}</p>
				<p> 상품번호:{state.title}</p>
				<p> 거래하는 곳 주소:{state.address}</p>
				<p> 가격:{state.price}</p>
			</StyledDom>
		</>
	);
};

export default Detail;
