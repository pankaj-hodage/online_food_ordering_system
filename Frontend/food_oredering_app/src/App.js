import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AddAddress from './Pages/Customer/AddAddress';
import CustomerHome from './Pages/homePage/CustomerHome';
import Cart from './Pages/Customer/Cart';
import SelectAddress from './Pages/Customer/SelectAddress';



function App() {
  return (
    <div>
    <BrowserRouter>

    <Routes>
        <Route exact path='/CustomerHomePage' element={<CustomerHome/>}/>
        <Route exact path='/AddAddress' element={<AddAddress/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
        <Route exact path='/SelectAddress' element={<SelectAddress/>}/>
    </Routes>

    {/* this container is used to show toast messages */}
    <ToastContainer position='top-center' autoClose={1000} />

    </BrowserRouter>
    </div>
  );
}

export default App;
