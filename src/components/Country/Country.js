import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, flag } = props.country
    return (
        <div className="country">
            <h2>name: {name}</h2>
            <h2>capital: {capital}</h2>
            <img src={flag} alt="" />
        </div>
    );
};

export default Country;