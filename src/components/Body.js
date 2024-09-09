import FeatureCard from "./FeatureCard";
import FeatureList from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import CardSlider from "./CardSlider";

const Body = () => {
  console.log("Body called");
  //Local state variable - super powerful variable
  const [listOfFeatures, setListOfFeatures] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [btnName, setbtnName] = useState("Read_Only_Features");

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("useEffect is called after rendering component");
    fetchData();
  }, []);

  //call API and get data -mocking
  const fetchData = () => {
    setTimeout(() => {
      setListOfFeatures(FeatureList);
      setAPIData(FeatureList);
    }, 300);
  };

  //conditional rendering
  // if(listOfFeatures.length==0){
  //     return <Shimmer/>;
  // }

  //ternary conditions instead of if else etc
  return listOfFeatures.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e.target.value);
              const filteredList = APIData.filter((data) =>
                data.name.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setListOfFeatures(filteredList);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log("search clicked");
              const filteredList = APIData.filter((data) =>
                data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfFeatures(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="read-only">
          <button
            className="read-only-btn"
            onClick={() => {
              console.log("read only clicked:");
              let filteredList;
              if (btnName == "Read_Only_Features") {
                filteredList = listOfFeatures.filter((data) => data.readOnly);
                setListOfFeatures(filteredList);
                setbtnName("All_Features");
              } else {
                console.log("all access now");

                setListOfFeatures(APIData);
                setbtnName("Read_Only_Features");
              }
              // console.log(filteredList);
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
      <div className="feature-container">
        {listOfFeatures.map((feature) => (
         <Link key={feature.id} to={"/Services/"+feature.id}>
          <FeatureCard featureData={feature.name} />
          {/* <CardSlider /> */}
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
