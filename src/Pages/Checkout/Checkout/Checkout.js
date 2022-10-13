import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetails from '../../../hooks/useServiceDetails';

const Checkout = () => {
    const {serviceId}=useParams();
    const [service]=useServiceDetails(serviceId)
    const [user] = useAuthState(auth);

   /*  console.log(user) */
    
    
   /*  const [user, setUser] = useState({
         name: 'Akbar The Great',
        email: 'akbar@momo.taj',
        address: 'Tajmohol Road Md.pur',
         phone: '01711111111'
     });

     const handleAdressChange=event =>{
        console.log(event.target.value);
        const {address, ...rest}=user;
        console.log(address,rest)
        const newAddress =event.target.value;
        
        const newUser = {address: newAddress, ...rest};
        console.log(newUser);
        setUser(newUser)



     } */


    const handlePlaceOrder = event =>{
        
        event.preventDefault();
        const order = {
            email:user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }
        
    

    
    

    return (
        <div>
            <div className='mx-5'>
                <h2>Please Order :{service.name}</h2>
                <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName}  name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly />
                <br />
               {/*  <input className='w-100 mb-2' type="text" value={user.address} onChange={handleAdressChange} name="address" placeholder='address' autoComplete='off' required /> */}
                <input className='w-100 mb-2' type="text" value={user.address}  name="address" placeholder='address' autoComplete='off' required />
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