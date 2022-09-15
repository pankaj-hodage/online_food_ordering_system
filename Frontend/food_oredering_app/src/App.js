import SignIn from './Pages/User/SignIn/signin';
import Home from './Pages/homePage/Home';
import Signup from './Pages/User/SignUp/signup';
import CustomerHome from './Pages/Customer/customerHome';
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



function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path='/'  element={<Home />} ></Route>
  <Route path='/signin'  element={<SignIn />} ></Route>
  <Route path='/signup'  element={<Signup />} ></Route>
  <Route path='/forgotPassword'  element={<ForgotPassword />} ></Route>
  <Route path='/customerHome'  element={<CustomerHome />} ></Route>
  <Route path='/adminHome'  element={<AdminHome />} ></Route>
  <Route path='/restaurantHome'  element={<RestaurantHome />} ></Route>
  <Route path='/deliveryBoyHome'  element={<DeliveryBoyHome />} ></Route>
  <Route path='/registerRestaurant'  element={<RegisterRestaurant />} ></Route>
  <Route path='/deliveryBoyList'  element={<DeliveryBoyList />} ></Route>
  <Route path='/customerList'  element={<CustomerList />} ></Route>
  <Route path='/restaurantList'  element={<RestaurantList />} ></Route>
  <Route path='/getRestaurantDetails'  element={<GetRestaurantDetails />} ></Route>
  
</Routes>
<ToastContainer position='top-center' autoClose={1000} />
</BrowserRouter>
      
     
    </div>
  );
}

export default App;
