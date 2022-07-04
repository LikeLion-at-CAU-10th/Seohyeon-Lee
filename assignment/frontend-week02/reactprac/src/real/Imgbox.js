import React from 'react';
import './css/Imgbox.css';
import data from './data.json';

const Imgbox = () => {
    return <>{data.kuromi.map((kuromi) => (
            <div className={kuromi.id}>
                <img className="img" src={kuromi.img} alt="no img"></img>
            </div>
        ))}</>;
};

export default Imgbox;