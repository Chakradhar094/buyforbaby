import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
//decode the login user details
import jwt_decode from "jwt-decode";
//icons
// import { FcGoogle } from "react-icons/fc";
import GLogin from "../googlelogin"
//global
import { useStateContext } from "../../context/StateContext";
import { useEffect } from "react";
import {gapi} from 'gapi-script'
import  GLogout  from "../googlelogin";

const clientId="378065727427-30rffrf9i1jpvvj4vl76gql74eu81j62.apps.googleusercontent.com";
const Login = () => {
  useEffect(()=>{
    function start(){
      gapi.auth2.init({
        clientId:clientId,
         scope:" "
      })
    };
    gapi.load('client:auth2',start);
  });
  const { setUser } = useStateContext();

  const navigate = useNavigate();

  const googleResponse = (response) => {
    var decoded = jwt_decode(response.credential);
    console.log(decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
    setUser({
      name: decoded.name,
      image: decoded.picture,
    });
    navigate("/");
  };

  return (
    <div className="login-main">
      <div className="container">
        <div className="login">
          <div className="login-container">
            <h1>Login with google</h1>
            <div className="login-btn">
              <GLogin
              />
              <GLogout />
            </div>
          </div>
        </div>
        <div className="login-mid">
          <div className="login-mid-l"></div>
          <div className="login-mid-m">OR</div>
          <div className="login-mid-r"></div>
        </div>
        <div className="signup">
          <p>Don't have an account ?</p>
          <button type="button" className="signup-btn">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
  