import React, {useState} from 'react';
import ProductDetails from './ProductDetails';

const SKUPriceDetails = ({ skuData , productData}) => {
  if (!skuData) return null;

  const { productDeliveryPriceResponse } = productData;
  const product = productDeliveryPriceResponse.product[0];

  const [activeTab, setActiveTab] = useState('prices'); // State for active tab
  const [searchText, setSearchText] = useState("");
  // Extract data for easier access
  const { very, littlewoods, 'very.ie': veryIe } = skuData;

  return (
    <div className="sku-price-details">
      <div className="search">
          <input
            type="text"
            placeholder="Search here.."
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
       {/* Tab Buttons */}
       <div className="tab-container">
        <button
          className={activeTab === 'details' ? 'active' : ''}
          onClick={() => setActiveTab('details')}
        >
          Product Details
        </button>
        <button
          className={activeTab === 'prices' ? 'active' : ''}
          onClick={() => setActiveTab('prices')}
        >
          Product Prices
        </button>
      </div>
       {/* Displaying Product Details or Prices based on activeTab */}
       {activeTab === 'details' ? (
        <>
        <ProductDetails product={product} />
        </>):(<>
      <h1>Price Details</h1>
      <h2>SKU: {skuData.sku}</h2>
      <div className="brands-container">
        {/* Display brands in the first row */}
        <div className="brand-card">
          <h3>Very</h3>
          <div className="price-list">
            {Object.entries(very.prices).map(([category, price]) => (
              <div key={category} className="price-item">
                <span>{category}:</span> <span>GBP {price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="modal-key">
            <strong>Modal Content Key:</strong> {very.modalContentKey}
          </div>
        </div>
        <div className="brand-card">
          <h3>Littlewoods</h3>
          <div className="price-list">
            {Object.entries(littlewoods.prices).map(([category, price]) => (
              <div key={category} className="price-item">
                <span>{category}:</span> <span>GBP {price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="modal-key">
            <strong>Modal Content Key:</strong> {littlewoods.modalContentKey}
          </div>
        </div>
        <div className="brand-card">
          <h3>Very.ie</h3>
          <div className="price-list">
            {Object.entries(veryIe.prices).map(([category, price]) => (
              <div key={category} className="price-item">
                <span>{category}:</span> <span>GBP {price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="modal-key">
            <strong>Modal Content Key:</strong> {veryIe.modalContentKey}
          </div>
        </div>
      </div>
      </>)}
    </div>
  );
};

export default SKUPriceDetails;
