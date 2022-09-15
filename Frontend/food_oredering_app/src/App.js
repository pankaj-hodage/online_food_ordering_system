import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AddAddress from './Pages/Customer/AddAddress';
import CustomerHome from './Pages/homePage/CustomerHome';
import Cart from './Pages/Customer/Cart';
import SelectAddress from './Pages/Customer/SelectAddress';
import Payment from './Pages/Customer/Payment';
import Products from './Pages/Restaurent/Products';





function App() {
  return (
    <div>
    <BrowserRouter>

    <Routes>
        <Route exact path='/CustomerHomePage' element={<CustomerHome/>}/>
        <Route exact path='/AddAddress' element={<AddAddress/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
        <Route exact path='/SelectAddress' element={<SelectAddress/>}/>
        <Route exact path='/Payment' element={<Payment/>}/>
        <Route exact path='/Products' element={<Products/>}/>
    
    </Routes>

    {/* this container is used to show toast messages */}
    <ToastContainer position='top-center' autoClose={1000} />

    </BrowserRouter>
    </div>
  );
}

export default App;
