import SKUPriceDetails from "./SKUPriceDetails";
import data from "../utils/getData.json";

const About=()=>{
    return (
        <div>
           
            {/* <CardSlider /> */}
            <SKUPriceDetails skuData={data.deliveryPricing[0]} />
        </div>
    )
}

export default About;