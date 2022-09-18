import { Link } from "react-router-dom";
import Header from "../../../components/header";
import config from "../../../config";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    if (email.length === 0) {
      //  alert('please enter email')
      toast.warning("please enter email");
    } else if (password.length === 0) {
      //alert('please enter password')
      toast.warning("please enter password");
    } else {
      axios
        .post(
          config.serverURL + "/user/signin",
          { email: email, password: password },
          { "Content-Type": "application/json" }
        )
        .then((response) => {
          // alert('i am in axios ')

          console.log(response);
          const result = response.data;
          console.log(result.status);
          if (result.status === "Success") {
            console.log("login Successfull!!!!!");

            if (result.data.role === "CUSTOMER") {
              sessionStorage.setItem("customerId", result.data.id);
              navigate("/CustomerHomePage");
              toast.success("Welcome to foodies!!! enjoy every bite...");
            } else if (result.data.role === "ADMIN") {
              sessionStorage.setItem("adminId", result.data.id);

              navigate("/adminHome");
            } else if (result.data.role === "RESTAURANT") {
              sessionStorage.setItem("restaurentId", result.data.id);
              
              navigate("/restaurantHome");
              toast.success("Welcome to Foodie");
            } else if (result.data.role === "DELIVERYBOY") {
              sessionStorage.setItem("deliveryBoyId", result.data.id);


              navigate("/deliveryBoyHome");
              toast.success("Welcome to Foodie");
            }
          }
          // else {
          //   toast.error('invalid username or password')

          //   console.log('invalid')
          //   navigate('/signin')

          // }
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
          toast.error("invalid username or password");

          console.log("invalid");
          navigate("/signin");
        });
    }
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: 70 }}>
        <div style={styles.container}>
          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              required=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              required=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3" style={{ marginTop: 30 }}>
            <div style={{ marginLeft: 190 }}>
              <Link style={{ textDecoration: "none" }} to="/forgotPassword">
                Forgot your password?
              </Link>
            </div>
            <button onClick={signinUser} style={styles.signinButton}>
              Signin
            </button>
            <div style={{ marginTop: 10 }}>
              Dont have an account yet?{" "}
              <Link style={{ textDecoration: "none" }} to="/signup">
                Register here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    height: 320,
    padding: 20,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#5C41A8",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  signinButton: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#5C41A8",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default SignIn;
