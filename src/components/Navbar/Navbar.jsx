import React,{useState,useEffect} from "react";
import "./Navbar.scss";
import logo from "../../assets/login/logo.svg";
import google from "../../assets/login/google.svg";
import twitter from "../../assets/login/twitter.svg";
import { Link,useNavigate } from "react-router-dom";
const Navbar = ({ sign,value }) => {
  const [signinValue,setSigninValue] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    if(value){
      setSigninValue(true)
    }
  },[])

  
  const handleSignin=async (e)=>{
    setSigninValue(true);
    navigate('/signin')
  }
  
  const handleSignup=(e)=>{
    setSigninValue(false);
    navigate('/')
  }


  return (
    <>
      <div className="nav">
        <nav className="nav-container">
          <div className="nav-container-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-container-item">
            <div className={signinValue?"nav-container-item-second":"nav-container-item-first"}>
              <span onClick={()=>handleSignup()}>Sign up</span>
            </div>
            <div className={signinValue?"nav-container-item-first":"nav-container-item-second"}>
              <span onClick={()=>handleSignin()}>Sign in</span>
            </div>
          </div>
          <div className="nav-container-item-demo"></div>
        </nav>
        <div className="nav-heading">
          <h1>Sign {sign} to get started.</h1>
        </div>
        {/* <div className="nav-social">
          <div className="nav-social-container">
            <div className="nav-social-container-first">
              <img src={twitter} alt="twitter" />
              <div className="nav-social-container-first-text">
                <h5>Sign in as John</h5>
                <p>Johnexample@gmail.com</p>
              </div>
            </div>
            <div className="nav-social-container-second">
              <img src={google} alt="google" />
            </div>
          </div>
        </div> */}
        {/* <div className="nav-social">
          <div className="nav-social-container">
            <div className="nav-social-container-first">
              <img src={twitter} alt="image" />
            </div>
            <div className="nav-social-container-second">
              <img src={google} alt="image" />
            </div>
          </div>
        </div> */}
        <div className="nav-social">
          <div className="wrapper">
            <div className="button">
              <div className="icon">
                <img src={twitter} alt="twitter" />
              </div>
              <span>
                John
                <p>example@gmail.com</p>
              </span>
            </div>
            <div className="button">
              <div className="icon">
                <img src={google} alt="google" />
              </div>
              <span>Twitter</span>
            </div>
          </div>
        </div>

        <div className="nav-or">
          <div className="nav-or-divider"></div>
          <div className="nav-or-or">Or</div>
          <div className="nav-or-divider"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
