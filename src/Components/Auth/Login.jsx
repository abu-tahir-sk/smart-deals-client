import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const { userSignIn, signInGoogle } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignInGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image : result.user.photoURL
        }
        fetch("http://localhost:3000/users",{
          method: "POST",
          headers: {
            "content-type":"application/json"
          },
          body: JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-md p-10  flex flex-col justify-center items-center">
        <div>
          <h3 className="text-center text-3xl font-semibold">Login Now!</h3>
          <p className="text-center pt-2">
            Already have an account?{" "}
            <Link
              className="bg-linear-to-r from-[#632EE3] to-[#8639f2] bg-clip-text text-transparent"
              to="/register"
            >
              Register Now
            </Link>
          </p>

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="fieldset-legend">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="fieldset-legend">Password</label>
              <input
                name="password"
                type={show ? "text" : "password"}
                className="input"
                placeholder="Enter your password"
              />
            </fieldset>
            <fieldset onClick={() => setShow(!show)} className="fieldset ">
              <label className="label">
                <input type="checkbox" defaultChecked className="" />
                {show ? <span>Show Password</span> : <span>Hide password</span>}
              </label>
            </fieldset>
            {/* login button */}
            <button className="text-white bg-linear-to-r from-[#632EE3] to-[#8639f2] w-full rounded-md py-2 my-3">
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          {/* Google */}
          <button
            onClick={handleSignInGoogle}
            className="btn bg-white text-black border-[#e5e5e5] w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
