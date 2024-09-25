import SKUPriceDetails from "./SKUPriceDetails";
import data from "../utils/getData.json";

import {useEffect} from "react";

const About=()=>{

        console.log("useEffect is called after rendering component");
        
    

    return (

        <div>
           
            {/* <CardSlider /> */}
            <SKUPriceDetails skuData={data.deliveryPricing[0]} />
        </div>
    )
}

export default About;