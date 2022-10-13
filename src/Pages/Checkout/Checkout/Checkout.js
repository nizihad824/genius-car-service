import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId}=useParams();
    

    return (
        <div>
            <div>
                <h2>Please Checkout your booking</h2>
            </div>
        </div>
    );
};

export default Checkout;