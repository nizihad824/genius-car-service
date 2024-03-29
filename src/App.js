import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout/Checkout';

import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import { ToastContainer } from 'react-toastify';
import Orders from './Pages/Orders/Orders';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={
        <RequireAuth>
           <Home></Home>
        </RequireAuth>
     }></Route>
      <Route path="/home" element={<Home></Home>
        
     }></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      {/* <Route path="/login" element={<Login></Login>}></Route> */}
      <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }>

        </Route>
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService></AddService>
            </RequireAuth>
        }>
      </Route>
        <Route path="/manage" element={
          <RequireAuth>
           <ManageServices></ManageServices>
            </RequireAuth>
        }>
      </Route>
        <Route path="/orders" element={
          <RequireAuth>
           <Orders></Orders>
            </RequireAuth>
        }>
      </Route>
        
           
           
          

      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
  </div>
    
  );
}

export default App;
