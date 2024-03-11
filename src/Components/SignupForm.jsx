import React from "react";
import { useForm } from "react-hook-form";

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    reset,
  } = useForm();

  const SignupSubmit = (data) => {
    console.log(data);
    console.log(watch());
    console.log(getValues());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(SignupSubmit)}>
      <h1>Sign Up for Free</h1>

      <div className="top-row">
        <div>
          <input
            {...register("fName", { required: "Enter Your First Name" })}
            className="nameField"
            placeholder="First Nsme*"
            type="text"
            autoComplete="off"
          />
          {errors.fName && <p className="error">{errors.fName.message}</p>}
        </div>
        <div>
          <input
            {...register("lName", { required: "Enter Your Last Name" })}
            className="nameField"
            placeholder="Last Name*"
            type="text"
            autoComplete="off"
          />
          {errors.lName && <p className="error">{errors.lName.message}</p>}
        </div>
      </div>

      <div className="field-wrap">
        <input
          {...register("email", { required: "Email is reqired" })}
          className="mailField"
          placeholder="Email*"
          type="email"
          autoComplete="off"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="py-3 field-wrap">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 10,
              message: "Password must be of atleast 10 character",
            },
          })}
          className="mailField"
          placeholder="Password*"
          type="password"
          autoComplete="off"
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <button type="submit" className="submitBtn">
        Sign-up
      </button>
    </form>
  );
}
export default SignupForm;
