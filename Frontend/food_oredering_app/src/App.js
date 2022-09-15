
import SignIn from './Pages/User/SignIn/signin';
import Home from './Pages/homePage/Home';
import Signup from './Pages/User/SignUp/signup';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from './Pages/User/forgot_password/forgotPassword';
import AdminHome from './Pages/Admin/adminHome';
import RestaurantHome from './Pages/Restaurant/restaurantHome';
import DeliveryBoyHome from './Pages/DeliveryBoy/deliveryBoyHome';
import RegisterRestaurant from './Pages/Restaurant/registerRestaurant';
import DeliveryBoyList from './Pages/Admin/DeliveryBoylist/deliveryBoyList';
import CustomerList from './Pages/Admin/CustomerList/customerList';
import RestaurantList from './Pages/Admin/restaurantList/restaurantList';
import GetRestaurantDetails from './Pages/Admin/restaurantList/getRestaurantDetails';
import AddAddress from './Pages/Customer/AddAddress';
import Cart from './Pages/Customer/Cart';
import SelectAddress from './Pages/Customer/SelectAddress';
import Payment from './Pages/Customer/Payment';
import Products from './Pages/Restaurant/Products';
import CustomerHome from './Pages/homePage/CustomerHome';
import AddMenu from './Pages/Restaurant/AddMenu';
import EditMenu from './Pages/Restaurant/EditMenu';



function App() {
  return (
    <div>
    <BrowserRouter>
<Routes>
        <Route path='/'  element={<Home />} ></Route>
        <Route path='/signin'  element={<SignIn />} ></Route>
        <Route path='/signup'  element={<Signup />} ></Route>
        <Route path='/forgotPassword'  element={<ForgotPassword />} ></Route>       
        <Route path='/adminHome'  element={<AdminHome />} ></Route>
        <Route path='/restaurantHome'  element={<RestaurantHome />} ></Route>
        <Route path='/deliveryBoyHome'  element={<DeliveryBoyHome />} ></Route>
        <Route path='/registerRestaurant'  element={<RegisterRestaurant />} ></Route>
        <Route path='/deliveryBoyList'  element={<DeliveryBoyList />} ></Route>
        <Route path='/customerList'  element={<CustomerList />} ></Route>
        <Route path='/restaurantList'  element={<RestaurantList />} ></Route>
        <Route path='/getRestaurantDetails'  element={<GetRestaurantDetails />} ></Route>
        <Route exact path='/CustomerHomePage' element={<CustomerHome/>}/>
        <Route exact path='/AddAddress' element={<AddAddress/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
        <Route exact path='/SelectAddress' element={<SelectAddress/>}/>
        <Route exact path='/Payment' element={<Payment/>}/>
        <Route exact path='/Products' element={<Products/>}/>
        <Route exact path='/AddMenu' element={<AddMenu/>}/>
        <Route exact path='/EditMenu' element={<EditMenu/>}/>

    </Routes>

    {/* this container is used to show toast messages */}
    <ToastContainer position='top-center' autoClose={2000} />

    </BrowserRouter>

    </div>
  );
}

export default App;
