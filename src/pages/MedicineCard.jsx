import React from "react";
import "./Medicin.css";

const MedicationCard = () => {
  const cardData = [
    {
      title: "Dolo 650 mg",
      manufacturer: "By MICRO LABS LIMITED",
      genericName: "Paracetamol 650 mg",
      price: "Rs.534",
      originalPrice: "Rs.34",
      discount: "15% Off",
      chemical: "CH02 || CH02",
      rating: 4.0,
      off: "15%",
      reviews: [
        " The medicine is good but a bit costly compared to the exact generic medicine",
        " The medicine is good but a bit costly compared to the exact generic medicine",
      ],
      imageUrl: "./images/logo.png",
    },
    {
      title: "Medicine 2",
      manufacturer: "By XYZ Labs",
      genericName: "Generic Name 2",
      price: "Rs.450",
      originalPrice: "Rs.40",
      discount: "10% Off",
      chemical: "CH02 || CH03",
      rating: 3.5,
      off: "15%",
      reviews: [
        " The medicine is good but a bit costly compared to the exact generic medicine",
        " The medicine is good but a bit costly compared to the exact generic medicine",
      
      ],
      imageUrl: "./images/logo.png",
    },
    {
      title: "Medicine 3",
      manufacturer: "By ABC Pharmaceuticals",
      genericName: "Generic Name 3",
      price: "Rs.600",
      originalPrice: "Rs.50",
      discount: "20% Off",
      chemical: "CH04 || CH05",
      rating: 4.5,
      off: "15%",
      reviews: [
        " The medicine is good but a bit costly compared to the exact generic medicine",
        " The medicine is good but a bit costly compared to the exact generic medicine",
      ],
      imageUrl: "./images/logo.png",
    },
    {
      title: "Medicine 4",
      manufacturer: "By DEF Medications",
      genericName: "Generic Name 4",
      price: "Rs.700",
      originalPrice: "Rs.60",
      discount: "5% Off",
      chemical: "CH06 || CH07",
      rating: 3.0,
      off: "15%",
      reviews: [
        " The medicine is good but a bit costly compared to the exact generic medicine",
        " The medicine is good but a bit costly compared to the exact generic medicine",
      ],
      imageUrl: "./images/logo.png",
    },
  ];

  return (
    <div className="container">
      <div style={{marginTop:"20px",marginBottom:"20px"}} >
        <h4 className="fw-bo">Compare Medicine</h4>
        <span>Compare Medicines price composition to make your decision</span>
      </div>
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card border h-100">
              {/* Medication Image */}

              <div className="imageContainer" style={{ textAlign: "center" }}>
                <img
                  src={card.imageUrl}
                  className="card-img-top"
                  alt={card.title}
                />
              </div>
              {/* Card Content */}
              <div className="card-body px-3">
                <h5 className="medication-title mb-1">{card.title}</h5>
                <p className="manufacturer mb-3">{card.manufacturer}</p>

                <div className="generic-name mb-2">
                  <small className="text-muted">Generic Name:</small>
                  <p className="mb-0">{card.genericName}</p>
                </div>

                <div className="price-info mb-2">
                  <small className="">Average Price:</small>
                  <p className="mb-0">{card.price}</p>
                </div>

                <div className="price-bar d-flex mb-3">
                  <div className="original-price flex-grow-1 me-1 p-2 bg-light-color rounded ">
                    <small style={{ marginRight: "150px" }}>{card.off}</small>
                    <span className="ms-2" style={{ fontWeight: "bold" }}>
                      {card.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="chemical mb-3">
                  <small className="">Chemical formation:</small>
                  <p className="mb-0">{card.chemical}</p>
                </div>

                <div className="ratings mb-2">
                  <small className="">Ratings & Reviews</small>
                  <div className="d-flex align-items-center">
                    <div className="stars me-2">
                      {[...Array(5)].map((_, idx) => (
                        <span key={idx} className="text-warning">
                          <i class="bi bi-star-fill"></i>
                        </span>
                      ))}
                    </div>
                    <span className="rating-badge bg-light-color text-dark rounded px-2">
                      {card.rating}
                    </span>
                  </div>
                </div>

                <div className="review-notes">
                  {card.reviews.map((review, idx) => (
                    <p key={idx} className="  mb-1">
                      {review}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationCard;
