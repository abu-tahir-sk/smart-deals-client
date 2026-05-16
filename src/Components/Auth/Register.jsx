import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser } = use(AuthContext);
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const imageURL = form.imageURL.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/")
      })
      .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    navigate("*")
  });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-md p-10  flex flex-col justify-center items-center">
        <div>
          <h3 className="text-center text-3xl font-semibold">Register Now!</h3>
          <p className="text-center pt-2">
            Already have an account?{" "}
            <Link
              className="bg-linear-to-r from-[#632EE3] to-[#8639f2] bg-clip-text text-transparent"
              to="/login"
            >
              Login Now
            </Link>
          </p>

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="fieldset-legend">Name</label>
              <input
                type="name"
                name="name"
                className="input"
                placeholder="Enter your name"
              />
            </fieldset>
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
              <label className="fieldset-legend">Image-URL</label>
              <input
                type="URL"
                name="imageURL"
                className="input"
                placeholder="Enter your Image-URL"
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
              Register{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
