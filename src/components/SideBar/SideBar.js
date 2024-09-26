import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      // Delay the display of the list when opening
      if (newState) {
        setTimeout(() => setShowList(true), 250); // Adjust the timeout to match your transition duration
      } else {
        setShowList(false);
      }
      return newState;
    });
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={handleToggle}>
        &#9776; {/* Hamburger icon */}
      </div>
      {showList && isOpen && (
        <div className="sidenav-items">
          <ul>
            <li>
              <Link to="/">Manage Groups</Link>
            </li>
            <li>
              <Link to="/about">Manage Rules</Link>
            </li>
            <li>
              <Link to="/about">Manage Prices</Link>
            </li>
            <li>
              <Link to="/about">Exceptions</Link>
            </li>
            <li>
              <Link to="/about">Evaluate SKU</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
