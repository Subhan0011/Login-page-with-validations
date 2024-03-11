import { Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
function RoutesFile() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<SignupForm />} />
    </Routes>
  );
}
export default RoutesFile;
