import homeImage from "../../images/banner.png"
import "./home.css"
import { useNavigate } from "react-router-dom"
const Home = () => {

    const navigate = useNavigate()
    const loginUser=()=>{
        navigate('/signin')
    }
    const SignupUser=()=>{
        navigate('/signup')
    }
    const RegisterRest=()=>{
        navigate('/registerRestaurant')
    }
    return(
        <div className="container-fluid">
          
            <div class="nav">
            <nav className="navbar navbar-expand-lg "  >
                
                    <div className="container-fluid">
                     <ul  className='navbar-nav me-auto mb-2 mb-lg-0'>
                     <li className='nav-item' > <button className="btn"
                     onClick={RegisterRest}>
                        Add Restaurants
                       </button></li>
                       <li className='nav-item '> 
                        <button className="btn" onClick={loginUser} >
                        Login
                        </button>
                       </li>
                       <li className='nav-item' class="d">
                         <button  className="btn" onClick={SignupUser} >
                         Sign Up
                         </button>
                         </li>
                    </ul>
                    </div>
                  </nav>
                 
            </div>
      
           <div class="p">
           <div className="row">
            <div className="col col-7" >
            <div class="foodi">Order today<b > Foodie</b></div>
               <form>
               <div className="row">
                    <div className="col">
                        <div className="mb-3" class="a">
                        <input className="form-control" placeholder="Enter your location"/>
                        </div>
                    </div>
                    <div className="col">
                        <div class="b">
                        <button className="btn" type="submit" ><span>search</span></button>
                        </div>
                    </div>
                </div>
               </form>
                
            </div>
            <div className="col col-5">
            <img alt='Home' src={homeImage} style={{
                height: 400, width: 400, marginleft: 70
                }}/>
            </div>
        </div>
           </div>
            
        </div>
   
 
    );
}

export default Home;