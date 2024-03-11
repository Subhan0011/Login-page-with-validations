import { useState } from "react";
function Form() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="form">
      <form action="" className="formData">
        {/* <button className="formBtn"> Sign-up</button>
        <button className="formBtn"> Login</button> */}
        <div className="container">
          <div className="inputLable">
            <label htmlFor="fname" className="lable">
              First Name{" "}
            </label>{" "}
            <input
              className="inputField"
              type="text"
              onChange={(e) => setfirstName(e.target.value)}
              value={firstName}
            />{" "}
          </div>
          <div className="inputLable">
            <label htmlFor="lname">Last Name </label>
            <input
              className="inputField"
              type="text"
              onChange={(e) => setlastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="inputLable">
            <label htmlFor="password"> Email </label>
            <input
              className="inputField"
              type="email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </div>
          <div className="inputLable">
            <label htmlFor="password"> Password </label>
            <input
              className="inputField"
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="formBtn">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Form;
