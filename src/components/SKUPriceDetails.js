import React from 'react';

const SKUPriceDetails = ({ skuData }) => {
  if (!skuData) return null;

  // Extract data for easier access
  const { very, littlewoods, 'very.ie': veryIe } = skuData;

  return (
    <div className="sku-price-details">
       <h1 >Product Price Details</h1>
      <h2>SKU: {skuData.sku}</h2>
      <div className="brands-container">
        {/* Display brands in the first row */}
        <div className="brand-card">
          <h3>Very</h3>
          <div className="price-list">
            {Object.entries(very.prices).map(([category, price]) => (
              <div key={category} className="price-item">
                <span>{category}:</span> <span>${price.toFixed(2)}</span>
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
                <span>{category}:</span> <span>${price.toFixed(2)}</span>
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
                <span>{category}:</span> <span>${price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="modal-key">
            <strong>Modal Content Key:</strong> {veryIe.modalContentKey}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SKUPriceDetails;
