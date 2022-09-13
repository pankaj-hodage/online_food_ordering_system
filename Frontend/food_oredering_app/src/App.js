import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AddAddress from './Pages/Customer/AddAddress';


function App() {
  return (
    <div>
    <BrowserRouter>

    <Routes>
        <Route exact path='/AddAddress' element={<AddAddress/>}/>
    </Routes>

    {/* this container is used to show toast messages */}
    <ToastContainer position='top-center' autoClose={1000} />

    </BrowserRouter>
    </div>
  );
}

export default App;
