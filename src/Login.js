import { Outlet, Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-screen h-screen bg-primary flex justify-center items-center">
        <form
          className="p-8 bg-white rounded-lg drop-shadow-xl space-y-4 mx-4"
          action=""
        >
          <div className="font-title text-primary inline-flex font-bold text-3xl transition-all duration-200">
            <span className="capitalize">mate</span>
            <span className="text-black capitalize">Ly</span>
          </div>
        
         
          {/* <!-- Admin id --> */}
          <div className="flex flex-col">
            {/* <label for="message">Admin's Id</label> */}
            <input
            type="text"
              name="admin-id"
              id="admin-id"
              cols="30"
              rows="3"
              required
              className=" peer rounded-md border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
              placeholder="Admin Id"
            ></input>
            <p className="invisible peer-invalid:visible text-gray-400 text-sm font-light my-2">
              This field cannot be empty
            </p>
          </div>
          <div className="flex flex-col">
            {/* <label for="message">Password</label> */}
            <input
            type="password"
              name="password"
              id="password"
              cols="30"
              rows="3"
              required
              className="peer rounded-md border-gray-400 focus:ring focus:ring-indigo-200 focus:border-indigo-300 my-2 w-full max-w-xs "
              placeholder="Enter Password"
            ></input>
            <p className="invisible peer-invalid:visible text-gray-400 text-sm font-light my-2">
              This field cannot be empty
            </p>
          </div>
          <Link to="/admin-dashboard" type="submit" className="btn bg-primary w-full shadow-md">
            Login
          </Link>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
