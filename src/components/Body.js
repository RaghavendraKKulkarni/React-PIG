import FeatureCard from "./FeatureCard";
import FeatureList from "../utils/mockData";
import {useState} from "react";


const Body = () => {

//Local state variable - super powerful variable
const [listOfFeatures,setListOfFeatures]=useState(FeatureList);

//   let listOfFeatures = [
//     { name: "View Rules", id: 1, readOnly:true},
//     { name: "Manage Rules", id: 2, readOnly:false }
//   ];
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="read-only">
        <button
          className="read-only-btn"
          onClick={() => {
            console.log("read only clicked:");
            
            const filteredList=listOfFeatures.filter(
                (data) => (data.readOnly)
              );
              setListOfFeatures(filteredList);
            console.log(filteredList);
          }}
        >
          Read_Only_Features
        </button>
      </div>
      <div className="feature-container">
        {listOfFeatures.map((feature) => (
          <FeatureCard key={feature.id} featureData={feature.name} />
        ))}
      </div>
    </div>
  );
};

export default Body;
