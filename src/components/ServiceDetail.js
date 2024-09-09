import { useParams } from "react-router-dom";

const ServiceDetails=()=>{
   const {serviceID}=useParams();
    return (
        <div>
            <h1>Welcome to service Detail page</h1>
            <h2>My dynamic id: {serviceID}</h2>
        </div>
    )
}

export default ServiceDetails;