import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    //Navbar 🔰🔰🔰
    <>
      <div className="navbar bg-base-100 drop-shadow-md rounded-lg ">
        <div className="navbar-start">
          <a
            href="/"
            aria-current="page"
            aria-label="Homepage"
            className="flex-0 btn btn-ghost px-2"
          >
            <div className="font-title text-primary inline-flex text-3xl transition-all duration-200">
              <span className="capitalize">mate</span>
              <span className="text-black capitalize">Ly</span>
            </div>
          </a>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn bg-primary shadow-md">
            Admin
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
