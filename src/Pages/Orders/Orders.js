import axiosPrivate from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        
        const getOrders = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
          
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
          
           
        }
        getOrders();
    },[user])
    return (
        <div>
             <h2>Your orders: {orders.length}</h2>
            
        </div>
    );
};

export default Orders;