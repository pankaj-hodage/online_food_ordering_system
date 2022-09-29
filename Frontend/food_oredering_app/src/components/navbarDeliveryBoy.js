import { Link } from "react-router-dom";
const NavbarDeliveryBoy = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/deliveryBoyHome">
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
            <li class="nav-item active">
              <a href="/acceptedOrder" class="nav-link active">
                My Orders
              </a>
            </li>
            <li class="nav-item">
              <a href="/contactUs" class="nav-link">
                Contact Us
              </a>
            </li>
            <div class="mybtn-right" style={{ marginLeft: 700 }}>
              <Link
                className="nav-link"
                className="btn btn-danger"
                style={{ backgroundColor: "#5C41A8" }}
                to="/signin"
              >
                Logout
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavbarDeliveryBoy;
