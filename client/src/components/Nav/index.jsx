import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-10">
            <Link to="/store">
              Store
            </Link>
          </li>
          <li className="mx-10">
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
            <Link to="/store">
              Store
            </Link>
          </li>
          <li className="mx-10 m-5">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-10 m-5">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-80">
      <h1>
        <Link to="/">
          Seasonal Sentiments
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;