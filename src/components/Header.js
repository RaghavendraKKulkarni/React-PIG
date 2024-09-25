import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_TOKEN } from "../utils/constants";

const Header = () => {
  // let btName = "Login";
  console.log("Header called");
  const [btnName, setbtnName] = useState("Login");

  
  // const callApi = async () => {
  //   const accessToken = API_TOKEN;
  // const apiUrl = 'https://cors-anywhere.herokuapp.com/https://nonprd-outbound-logistics.api.theverygroup.com/osl/delivery-pricing-group/qa/get?brand=LAI';

   
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });
   
  //     if (!response.ok) {
  //       throw new Error('Error res calling the API');
  //     }
   
  //     const data = await response.json();
  //     console.log('API response:', data);
  //   } catch (error) {
  //     console.error('Error calling API:', error);
  //   }
  // };

  // console.log(callApi);

  return (
    <>
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="title">
        <p>P.I.G</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/userprofile">UserProfile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              console.log("onClick called");
              //callApi();
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Header;
