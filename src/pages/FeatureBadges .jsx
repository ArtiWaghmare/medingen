import React from 'react';
import "./Bag.css";

const FeatureBadges = () => {
  const features = [
    {
      image: "/images/mobile.png", 
      title: "Safe and Secured",
      subtitle: "Payment"
    },
    {
      image: "/images/hands.png",
      title: "100% Authentic",
      subtitle: "Products"
    },
    {
      image: "/images/Like.png",
      title: "5 Lac + Happy",
      subtitle: "Customers"
    }
  ];

  return (
    <div className='container'>
      <div className=" card feature-badges border bg-white rounded-3 shadow p-3">
        <div className="row g-4 justify-content-center align-items-center">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="feature-item text-center">
                <div className="icon-wrapper mb-2 d-flex justify-content-center">
                  <img src={feature.image} alt={feature.title} className="icon" />
                </div>
                <div className="feature-text">
                  <h6 className="title mb-0">{feature.title}</h6>
                  <p className="subtitle mb-0">{feature.subtitle}</p>
                </div>
              </div>
              {index < features.length - 1 && (
                <div className="feature-divider d-none d-md-block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBadges;
