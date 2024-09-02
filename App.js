import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.theverygroup.com/files/Logos/very-logo.jpg"
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
const FeatureCard = (props) => {
  return (
    <div className="feature-card">
      <h3>{props.featureData}</h3>
    </div>
  );
};
const FeatureList = [
  { name: "View Rules" , id:1},
  { name: "Manage Rules" , id:2},
  { name: "Manage Exceptions" , id:3},
  { name: "View SKUs" , id:4},
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="feature-container">
        {FeatureList.map((feature) => (
          <FeatureCard key={feature.id} featureData={feature.name} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
