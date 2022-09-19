import { Link } from "react-router-dom";
import Header from "../../../components/header";
import config from "../../../config";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('')

  // this function is used to navigate from one component to another programmatically
  // userNavigate() returns a function reference
  const navigate = useNavigate();

  const validate = (value) => {
 
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setPassword(value);
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
  }
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmail(email)
      setMessage("valid Email !!");
    } else {
      setMessage("Please, enter valid Email !!");
    }
  }
  const signup = () => {
    // check if user has really entered any value
    if (name.length === 0) {
      toast.error("please enter name");
    } else if (email.length === 0) {
      toast.error("please enter email");
    } else if (contact.length === 0) {
      toast.error("please enter phone number");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else if (confirmPassword.length === 0) {
      toast.error("please confirm password");
    } else if (password !== confirmPassword) {
      toast.error("password does not match");
    } else if (role.length === 0) {
      toast.error("please select role");
    } else {
      // make the API call to check if user exists
      axios
        .post(config.serverURL + "/user/signup", {
          name,
          email,
          contact,
          password,
          role,
        })
        .then((response) => {
          const result = response.data;

          if (result["status"] == "Success") {
            toast.success("Successfully signed up new user");

            // navigate to the signin page
            navigate("/signin");
          } else {
            toast.error(result["error"]);
          }
          // // get the data returned by server
          // const result = response.data

          // // check if user's authentication is successfull
          // if (result.data.status === 'Success') {
          //   toast.success('successfully registered a new user')

          //   // navigate to the singin page
          //   navigate('/signin')
          //   //toast.error('invalid email or password')
          // }
        });
      // .catch((error) => {
      //   console.log('error')
      //   console.log(error)
      //   toast.error('invalid email or password')
      // })
    }
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: 70, marginBottom: 20 }}>
        <div style={styles.container}>
          <div className="mb-3">
            <label>Name</label>
            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="form-control"
              type="text"
              required=""
            />
            
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input
              onChange={(event) => {
                setContact(event.target.value);
              }}
              className="form-control"
              type="tel"
              required=""
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              onChange={(e) => validateEmail(e)}
              className="form-control"
              type="email"
              required=""
             
            />
            <small style={{color:"green"}}>{message}</small>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
             onChange={(e) => validate(e.target.value)}

              className="form-control"
              type="password"
              required=""
              placeholder="Min 8 charactors"
            />
            {errorMessage === '' ? null :
        <small style={{
          
          color: 'green',
        }}>{errorMessage}</small>}
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              className="form-control"
              type="password"
              required=""
            />
          </div>
          <div className="mb-3">
            <label>Role</label>
            <select
              className="form-select form-select mb-3"
              aria-label=".form-select-lg example"
              required=""
              onChange={(event) => {
                setRole(event.target.value);
              }}
            >
              <option selected>Select Role</option>
              <option value="CUSTOMER">Customer</option>
              <option value="DELIVERYBOY">Delivery Boy</option>
            </select>
          </div>

          <div className="mb-3" style={{ marginTop: 40 }}>
            <div>
              Already have an account? <Link to="/signin">Signin here</Link>
            </div>
            <button onClick={signup} style={styles.signinButton} type="submit">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    height: 650,
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

export default Signup;
