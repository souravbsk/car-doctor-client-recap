import React, { useContext, useState } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shareds/SocialLogin/SocialLogin";
const Login = () => {
  const [error, setError] = useState("");

  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname;
  

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        navigate(from,{replace:true})
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((err) => {
        setError(err.message)
      });
  };

  return (
    <div className="container mb-16 md:mb-32">
      <div className="hero">
        <div className="hero-content p-0 w-full justify-between flex-col lg:flex-row">
          <div className="text-center flex-1 lg:text-left">
            <img className=" md:w-10/12 w-full" src={loginImg} alt="" />
          </div>
          <div className="card flex-1 border">
            <div className="card-body p-6 md:p-16">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <form onSubmit={handleSignIn}>
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Your password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#FF3811]"
                    type="submit"
                    value="Sign In"
                  />
                </div>
              </form>
              <p className="text-center mt-5">
                Have an account?{" "}
                <Link className="text-red-600 font-semibold" to="/register">
                  Sign In
                </Link>
              </p>
              <p className="text-center text-red-500 text-sm">{error}</p>
            <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
