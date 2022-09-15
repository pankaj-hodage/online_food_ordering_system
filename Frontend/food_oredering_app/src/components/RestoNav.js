
import './navbar.css'

const RestoNav=()=>{
 
  
   return(
        
    <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
<div class="container">
<a href="#" class="navbar-brand" >
  {/* <span class="text-uppercase font-weight-bold">Availbale !!!</span> */}
</a>
<button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

<div id="navbarSupportedContent" class="collapse navbar-collapse">
  <ul class="navbar-nav ml-auto">
  <li class="nav-item"><a href="/restaurantHome" class="nav-link">
  <i class="fa fa-home" style={{fontSize:32 ,marginRight:20}}></i>
    </a></li>
    <li class="nav-item"><a href="/Products" class="nav-link">Products</a></li>
    <li class="nav-item"><a href="/Orders" class="nav-link">Orders</a></li>
  
    {/* <li class="nav-item"><a href="/updateprofile" class="nav-link">Update Profile</a></li> */}
    <li class="nav-item"><a href="/Feedbacks" class="nav-link">Feedbacks</a></li>
    
   

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

export default RestoNav;