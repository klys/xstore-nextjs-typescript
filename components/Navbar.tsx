import React, {useContext} from "react";
import { AppContext } from "@context/AppContext";

const Navbar = () => {
  const {toggleLogin,toggleShoppingcart,toggleSignup} = useContext(AppContext);
  const buttonLogin = () => {
    //context.globalDispatch({ type: "TOGGLE_LOGIN" });
    toggleLogin()
  };
  const buttonShoppingCart = () => {
    //context.globalDispatch({ type: "TOGGLE_SHOPPINGCART" });
    toggleShoppingcart()
  };
  const buttonSignup = () => {
    //context.globalDispatch({ type: "TOGGLE_SIGNUP" });
    toggleSignup()
  };
    return <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"/>
      <span aria-hidden="true"/>
      <span aria-hidden="true"/>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-blank" onClick={buttonShoppingCart}>
                🛒
          </a>
          <a className="button is-primary" onClick={buttonSignup}>
            <strong>Sign up</strong>
          </a>
          <a className="button is-light" onClick={buttonLogin}>
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </>
}

export default Navbar;