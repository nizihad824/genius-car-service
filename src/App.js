import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      {/* <Route path="/login" element={<Login></Login>}></Route> */}
    </Routes>
    <Footer></Footer>
  </div>
    
  );
}

export default App;
