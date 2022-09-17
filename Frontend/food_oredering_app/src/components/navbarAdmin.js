import { Link } from "react-router-dom";
const NavbarAdmin = () => {
  return (
    <nav class="navbar navbar-expand-lg py-2 navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/adminHome">
          <b style={{ color: "#F7BC0F", fontSize: 30 }}>Foodie</b>
        </a>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="/customerList" class="nav-link">
                User-List
              </a>
            </li>
            <li class="nav-item">
              <a href="/restaurantList" class="nav-link">
                Restaurants
              </a>
            </li>


            <li class="nav-item">
              <a href="/deliveryBoyList" class="nav-link">
                DeliveryBoy-List
              </a>
            </li>
            <li class="nav-item">
              <a href="/Category" class="nav-link">
                Categories
              </a>
            </li>
            <div class="mybtn-right" style={{ marginLeft: 700 }}>
              <Link
                className="nav-link"
                className="btn btn-danger"
                style={{ backgroundColor: "#5C41A8", marginTop: 10 }}
                to="/signin"
              >
                Logout
              </Link>
            </div>
          </ul>
        </div>
        {/* <a className="navbar-brand" href="/adminHome"><b style={{color:'#F7BC0F'}}>Foodie</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div> */}
      </div>
    </nav>
  );
};


export default NavbarAdmin;
