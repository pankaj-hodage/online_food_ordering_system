import Kalpesh from "../../images/kalpesh.jpg";
import Pankaj from "../../images/pankaj.jpg";
import Omkar from "../../images/omkar.jpeg";
import Raviraj from "../../images/raviraj.jpg";

const ContactUs = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h5>
        <b style={{ fontSize: 80, color: "#5C41A8" }}>Foodie</b>
      </h5>
      <div
        className="container"
        style={{
          textAlign: "justify",
          fontFamily: "sans-serif",
          textIndent: 30,
          fontStyle: "italic",
        }}
      >
        <p>
          This website can primarily be used in such places where extensive food
          service facility is not available and if any particular restaurant
          wants to deliver their food in such areas. This is achieved through an
          easy to use graphical interface menu options. It is managed by the
          admin. Restaurants can list their available food menus. Users can add
          number of items to the cart. different payment options are available
          to continue the order.Deliveryboy has permission to choose orders by
          their locality.
        </p>
      </div>
      <hr />
      <div className="container" style={{ margin: 30, marginLeft: 140 }}>
        <h4 style={{ marginLeft: -140 }}>Contact Us</h4>
        <div
          className="row"
          style={{ height: 50, marginTop: 30, marginRight: 100 }}
        >
          <div className="col">
            <img
              src={Kalpesh}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />
            <div style={{ marginLeft: -110, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>Kalpesh Pagar</h5>
            </div>
            <div
              style={{
                marginLeft: -40,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>kalpeshpagar96@gmail.com</h7>
            </div>
          </div>
          <div className="col">
            <img
              src={Pankaj}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />
            <div style={{ marginLeft: -100, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>Pankaj Hodage</h5>
            </div>
            <div
              style={{
                marginLeft: -60,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>pankaj.mj22@gmail.com</h7>
            </div>
          </div>
          <div className="col">
            <img
              src={Raviraj}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />
            <div style={{ marginLeft: -110, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>Raviraj Navale</h5>
            </div>
            <div
              style={{
                marginLeft: -60,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>ravinavale9899@gmail.com</h7>
            </div>
          </div>
          <div className="col">
            <img
              src={Omkar}
              className="card-img-top"
              style={{
                height: 250,
                width: 200,
                boxShadow: "0px 4px 18px 3px rgba(0,0,0,0.38)",
                display: "block",
                borderRadius: 5,
              }}
              alt="..."
            />
            <div style={{ marginLeft: -110, marginTop: 10 }}>
              {" "}
              <h5 style={{ textAlign: "center" }}>Omkar Kate</h5>
            </div>
            <div
              style={{
                marginLeft: -60,
                marginTop: 10,
                marginBottom: 20,
                color: "blue",
              }}
            >
              {" "}
              <h7 style={{ textAlign: "center" }}>omnaka98@gmail.com</h7>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
