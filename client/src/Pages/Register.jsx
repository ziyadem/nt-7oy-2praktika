
import { Link, useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  let navigate = useNavigate();
  let tokenId = localStorage.getItem("token");
  console.log(tokenId);
  // if(tokenId){navigate("/")}
   const getUserInfo =async (e) => {
     e.preventDefault();

     let { username, email, password,name } = e.target;

    let res=await fetch("http://localhost:1717/register", {
       method: "POST",
       body: JSON.stringify({
         username: username.value,
         email: email.value,
         password: password.value,
         name:name.value
       }),
     })
       .then((res) => res.json())
       alert(res.msg)
       username.value = "";
       email.value = "";
       password.value = "";
       name.value = "";
      if(res.id){
        localStorage.setItem("token",res.id);
        navigate('/')
      }
   };

  return (
    <>
      <div className="maxDiv">
        <form onSubmit={(e) => getUserInfo(e)}>
          <h2>Register</h2>
          <div class="form-group">
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Your name"
              id="name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Your email"
              id="email"
            />
          </div>
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
            to="/login"
            className="text-danger p-4 text-decoration-underline"
          >
            Log In
          </Link>
        </form>
      </div>
    </>
  );
};
export default Register;
