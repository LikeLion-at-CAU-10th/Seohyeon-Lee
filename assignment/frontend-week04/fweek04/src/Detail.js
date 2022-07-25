import React from 'react'
import data from './data/data.json';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const a = useParams();
  const id = a.id;

  const thing = data.products.filter((product) => product.id === id)[0];

  return (
    <>
       <div> {thing.id} 번째 상품이 쨔잔~ {thing.title} </div> 

    </>
  )
}

export default Detail;