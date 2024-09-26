import SKUPriceDetails from "./SKUPriceDetails";
import data from "../utils/getData.json";
import productData from "../utils/getSKUDetails.json";

const About=()=>{
    return (
        <div>
           
            {/* <CardSlider /> */}
            <SKUPriceDetails skuData={data.deliveryPricing[0]} productData={productData} userAccess="write" />
        </div>
    )
}

export default About;