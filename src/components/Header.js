import {LOGO_URL} from "../utils/constants";
const Header = () => {
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>UserProfile</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;