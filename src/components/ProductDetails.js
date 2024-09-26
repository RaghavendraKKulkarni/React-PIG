// ProductDetails.js
import React, { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <h2>SKU: {product.sku}</h2>
      <div className="accordion">
        <div className="accordion-item">
          <h3 >
            Basic Information
          </h3>
          {/* {activeSection === 'basicInfo' && ( */}
            <div className="accordion-content">
              <p><strong>Style:</strong> {product.style}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Short Description:</strong> {product.shortDescription}</p>
              <p><strong>Size:</strong> {product.size}</p>
              <p><strong>Color:</strong> {product.colour}</p>
              <p><strong>Season:</strong> {product.season}</p>
              <p><strong>Supplier:</strong> {product.supplier}</p>
              <p><strong>Direct Shipping:</strong> {product.isDirectShipping ? 'Yes' : 'No'}</p>
            </div>
          {/* )} */}
        </div>
        <div className="accordion-item">
          <h3 onClick={() => toggleSection('dimensions')}>
            Dimensions & Weight
          </h3>
          {/* {activeSection === 'dimensions' && ( */}
            <div className="accordion-content">
              <p><strong>Length:</strong> {product.length} cm</p>
              <p><strong>Width:</strong> {product.width} cm</p>
              <p><strong>Height:</strong> {product.height} cm</p>
              <p><strong>Weight:</strong> {product.weight} grams</p>
            </div>
          {/* )} */}
        </div>
        <div className="accordion-item">
          <h3 onClick={() => toggleSection('dimensions')}>
            Dimensions & Weight
          </h3>
          {/* {activeSection === 'dimensions' && ( */}
            <div className="accordion-content">
              <p><strong>Length:</strong> {product.length} cm</p>
              <p><strong>Width:</strong> {product.width} cm</p>
              <p><strong>Height:</strong> {product.height} cm</p>
              <p><strong>Weight:</strong> {product.weight} grams</p>
            </div>
          {/* )} */}
        </div>
        <div className="accordion-item">
          <h3 onClick={() => toggleSection('dimensions')}>
            Others
          </h3>
          {/* {activeSection === 'dimensions' && ( */}
            <div className="accordion-content">
              <p><strong>Length:</strong> {product.length} cm</p>
              <p><strong>Width:</strong> {product.width} cm</p>
              <p><strong>Height:</strong> {product.height} cm</p>
              <p><strong>Weight:</strong> {product.weight} grams</p>
            </div>
          {/* )} */}
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default ProductDetails;
