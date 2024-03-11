import { useForm } from "react-hook-form";
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const loginSubmit = (data) => {
    console.log(data);
    reset;
  };
  return (
    <form onSubmit={handleSubmit(loginSubmit)}>
      <h1>Welcome Back</h1>

      <div className="field-wrap py-3">
        <input
          {...register("email", { required: "Enter your email" })}
          placeholder="Enter your Email here....."
          className="mailField"
          type="email"
          autoComplete="off"
        />
        {errors.email && <p className="error"> {errors.email.message}</p>}
      </div>
      <div className="field-wrap">
        <input
          {...register("password", { required: "Enter your password" })}
          placeholder="Enter your Password here....."
          className="mailField"
          type="password"
          autoComplete="off"
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
      <p
        className="text-end p-0 m-0"
        style={{ color: "red", cursor: "pointer" }}
      >
        Forgot password?
      </p>
      <button type="submit" className="submitBtn">
        Login
      </button>
    </form>
  );
}
export default LoginForm;
