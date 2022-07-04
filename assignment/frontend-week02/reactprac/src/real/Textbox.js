import React from 'react';
import './css/Textbox.css';
import data from './data.json';

const Textbox = () => {
    return <>{data.kuromi.map((kuromi) => (
            <div className="titlecon" key={kuromi.id}>
                <p className="title">{kuromi.title}</p>
            </div>
        ))}</>;
};

export default Textbox;