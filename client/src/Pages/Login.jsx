import { Link, useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
  let tokenId = localStorage.getItem("token");
  console.log(tokenId);
  // if(tokenId){navigate("/")}
  const getUserInfo = async (e) => {
    e.preventDefault();

    let { username,password } = e.target;

    let res = await fetch("http://localhost:1717/login", {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    }).then((res) => res.json());
    console.log(res);
    alert(res.msg);
    username.value = "";
    password.value = "";
    if (res.data.id) {
      localStorage.setItem("token", res.data.id);
      navigate("/");
    }
  };

  return (
    <>
      <div className="maxDiv">
        <form onSubmit={(e) => getUserInfo(e)}>
          <h2>Log In</h2>
          <div class="form-group">
            <input
              type="text"
              name="username"
              class="form-control"
              placeholder="username"
              id="username"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="password"
              id="pwd"
            />
          </div>
          <button type="submit" class="btn btn-danger">
            register
          </button>
          <Link
            to="/register"
            className="text-danger p-4 text-decoration-underline"
          >
            Register
          </Link>
        </form>
      </div>
    </>
  );
};
export default Login;
