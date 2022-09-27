import "./navbar.css";

import "./navbar.css";

const CustHomeNv = () => {
  return (
    <nav class="navbar navbar-expand-lg py-2 navbar-dark bg-dark shadow-sm">
      <div class="container-fluid">
        <a className="navbar-brand" href="/CustomerHomePage">
          <b style={{ color: "#F7BC0F", fontSize: 30 }}>Foodie</b>
        </a>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="/Cart" class="nav-link">
                <i class="fas fa-shopping-cart"></i>
                &nbsp; Cart
                {/* <ShoppingCartOutlinedIcon/> */}
              </a>
            </li>
            <li class="nav-item">
              <a href="/MyOrders" class="nav-link">
                <i class="fas fa-concierge-bell"></i>
                &nbsp; MyOrders
              </a>
            </li>

            <li class="nav-item">
              <a href="/AddFeedback" class="nav-link">
                <i class="fas fa-edit"></i>
                &nbsp;Feedback
              </a>
            </li>

            <li class="nav-item">
              <a href="/contactUs" class="nav-link">
                Contact Us
              </a>
            </li>

            {/* <div className="btn-group" class="mybtn-right">
              <button
                type="button"
                class="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user"></i>
                &nbsp; Welcome
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="/UpdateProfile">
                    Update Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/signin">
                    Log Out
                  </a>
                </li>
              </ul>
            </div> */}

            <div className="btn-group" class="mybtn-right">
              <button
                type="button"
                class="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user"></i>
                &nbsp; Welcome
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="/updateProfile">
                    Update Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/signin">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustHomeNv;
