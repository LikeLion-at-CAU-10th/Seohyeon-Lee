import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Box.css";
import Like from "./Like";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LittleBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledBox = styled.button`
	border: 2px solid transparent;
	width: 30vh;
	height: 30vh;
	font-size: 15px;
	background-color: white;
	text-align: left;
	margin: 0vh 2vh 12vh 0vh;
`;
// 시작

const Box = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await axios.get(
				"https://cd6255d1-90e4-4c34-b1fc-4a90b2cafb7a.mock.pstmn.io/list2"
			);
			setProducts(response.data);
			setLoading(false);
		};
		fetchData();
	}, []);
	console.log(products);

	if (loading) {
		return <h1>loading....</h1>;
	}

	if (!products) {
		return null;
	}

	const handleClick = (url, id) => {
		navigate(url, { state: products[id - 1] });
	};

	return (
		<>
			{products.map((product) => (
				<StyledBox>
					<img src={product.img} alt="no img"></img>
					<LittleBox>{product.title}</LittleBox>
					<Like />
					<p
						key={product.id}
						onClick={() => handleClick(`${product.id}`, product.id)}
					>
						더보기 >{" "}
					</p>
				</StyledBox>
			))}
		</>
	);
};

export default Box;
