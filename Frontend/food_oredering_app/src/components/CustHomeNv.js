
import './navbar.css'

const CustHomeNv=()=>{
 
  
   return(
        
    <nav class="navbar navbar-expand-lg py-2 navbar-dark bg-dark shadow-sm">
<div class="container-fluid">
<a className="navbar-brand" href="/CustomerHomePage"><b style={{color:'#F7BC0F', fontSize:30}}>Foodie</b></a>
<div id="navbarSupportedContent" class="collapse navbar-collapse">
  <ul class="navbar-nav ml-auto">
  {/* <li class="nav-item"><a href="/CustomerHomePage" class="nav-link">
  <i class="fa fa-home" style={{fontSize:32 }}></i>
    </a></li> */}
    <li class="nav-item"><a href="/About" class="nav-link">About Us</a></li>
    <li class="nav-item"><a href="/Contact" class="nav-link">Contact Us</a></li>
  
    {/* <li class="nav-item"><a href="/updateprofile" class="nav-link">Update Profile</a></li> */}
    <li class="nav-item"><a href="/AddFeedback" class="nav-link">Feedback</a></li>
     <li class="nav-item"><a href="/Cart" class="nav-link"> 
     
     <i class="fas fa-shopping-cart" ></i>
      
      &nbsp; Cart
       
     {/* <ShoppingCartOutlinedIcon/> */}
       
       </a></li> 
   
    {/* <li class="nav-item"><a href="/Southindian" class="nav-link">South-Indian</a></li>
    <li class="nav-item"><a href="/Roti" class="nav-link">Roti</a></li>
    <li class="nav-item"><a href="/Rice" class="nav-link">Rice</a></li>

    <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
    <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
    <li class="nav-item"><a href="/UpdateProfile" class="nav-link">Update_profile</a></li>  */}
    {/* <div class="mybtn-right">
    <Link className="nav-link" className="btn btn-danger"  to="/Logout">Logout</Link>
  </div> */}
   



   <div className="btn-group" class="mybtn-right">
<button type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
<i class="fas fa-user"></i>
      
      &nbsp; Welcome 
     
</button>
<ul class="dropdown-menu dropdown-menu-end">

<li><a class="dropdown-item" href="/UpdateProfile">Update Profile</a></li>
<li><a class="dropdown-item" href="/signin">Log Out</a></li>


</ul>
</div>


    {/* <Link className="nav-link" to="/contact">Contact</Link>
    <Link className="nav-link" to="/about">About</Link>
    <Link className="nav-link" to="/UpdateProfile">Update_profile</Link>
     */}
  </ul>
</div>

</div>
</nav>
)
}

export default CustHomeNv;