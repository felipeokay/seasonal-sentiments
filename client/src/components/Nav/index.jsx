import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-10 m-5">
            {/* <div className="container mx-auto text-center"> */}
            <Link to="/store">
              Store
            </Link>
            {/* </div> */}
          </li>
          <li className="mx-10 m-5">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-10 m-5">
            <div className="container mx-auto text-center my-10">
            <Link to="/store">
              Store
            </Link>
            </div>
          </li>
          <li className="mx-10 m-5">
            <div className="container mx-auto text-center my-10">
            <Link to="/signup">
              Signup
            </Link>
            </div>
          </li>
          <li className="mx-10 m-5">
            <div className="container mx-auto text-center my-10">
            <Link to="/login">
              Login
            </Link>
            </div>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-80">
      <h1>
      <div className="container mx-auto text-center m-3">
        <Link to="/">
          Seasonal Sentiments
        </Link>
        </div>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;