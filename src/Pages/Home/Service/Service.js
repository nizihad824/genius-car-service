import React from 'react';

const Service = ({service}) => {
    const {name, img, description, price} = service;

    return (
        <div>
            <img className='w-100' src={img} alt="" />
           <h2>{name}</h2>
            <p>Price: {price}</p>  
        </div>
    );
};

export default Service;