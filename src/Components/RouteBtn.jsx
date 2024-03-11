import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function RouteBtn() {
  //   const [signClass, setsignClass] = useState("routeBtn clicked");
  //   const [logClass, setlogClass] = useState("routeBtn");
  let signClass = useRef("routeBtn clicked");
  let logClass = useRef("routeBtn");
  const navigate = useNavigate();
  //   var signClass = "routeBtn clicked";
  //   var logClass = "routeBtn";
  //   const ChangeRoute = (event) => {
  //     let text = event.target.innerText;
  //     let eClass = event.target.parentElement.className;
  //     console.log(eClass);
  //     console.log(text);
  //     if (text == "Sign-up" && eClass == "routeBtn") {
  //     } else if (text == "Log-in" && eClass == "routeBtn") {
  //     }
  //   };
  //   const [signUp, setsignUp] = useState("false");
  //   const [login, setlogin] = useState("false");
  //   var signUp = document.getElementById("signUp");
  //   var login = document.getElementById("login");
  const signUpClass = () => {
    // console.log(document.getElementById("login").className);
    // console.log(document.getElementById("signUp").className);

    // document.getElementById("login").className.remove("clicked");
    // document.getElementById("signUp").className.add("clicked");
    // setsignClass(!signClass);
    // setlogClass(!logClass);
    signClass.current = "routeBtn clicked";
    logClass.current = "routeBtn";
    // console.log(signClass, logClass);
    navigate("/");
  };
  const loginClass = () => {
    // document.getElementById("signUp").className.remove("clicked");
    // document.getElementById("login").className.add("clicked");
    // setsignClass("routeBtn ");
    // setlogClass("routeBtn clicked");
    signClass.current = "routeBtn";
    logClass.current = "routeBtn clicked";
    // console.log(signClass, logClass);
    navigate("/login");
  };
  return (
    <div className="d-flex py-3">
      <button id="signUp" className={signClass.current} onClick={signUpClass}>
        Sign-up
      </button>
      <button id="login" className={logClass.current} onClick={loginClass}>
        Log-in
      </button>
    </div>
  );
}
export default RouteBtn;
