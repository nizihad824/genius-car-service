import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const Checkout = () => {
    const {serviceId}=useParams();
    const [service]=useServiceDetails(serviceId)

    const handlePlaceOrder = event =>{
        event.preventDefault();
        
    }

    
    

    return (
        <div>
            <div className='mx-5'>
                <h2>Please Order :{service.name}</h2>
                <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text"  name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email"  name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
            </div>
        </div>
    );
};

export default Checkout;