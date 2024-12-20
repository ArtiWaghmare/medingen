import React from "react";
import "./Main.css";
function MainPage() {
  return (
    <div className="container">
         <div>
            <span className="icon-size">
              <i className="bi bi-chevron-left"></i>
            </span>
            <span className="bold-text">Paracetamol/acetaminophen</span>
          </div>
      <div className="row">
        {/* Left Section - Medicine Details */}
        <div className="col-md-8">
       

          <div className="card card-one">   Medicine Details</div>

          <div className=" leftContent border p-4 rounded shadow-sm">
            <h5 className="fw-bold">About UDILIV 300MG TABLET 15'S</h5>
            <p>
              UDILIV 300MG TABLET 15'S (UDCA) is naturally occurring bile acid
              derived from the i bear bile, and it is also produced
              synthetically. It has been used for for several decades as a
              therapeutic agent to manage various liver disorders. UDCA is
              primarily known for its hepatoprotective properties and is used in
              the treatment of gallstones, primary biliory cholangitis (PBC),
              and other cholestatic liver conditions. This bile acid works by
              reducing cholesterol absorption, improving bile flow, and exerting
              anti-inflammatory effects, thereby
            </p>

            <h5 className="fw-bold ">Uses of UDILIV 300MG TABLET 15'S</h5>
            <ul className="contens-ui">
              <li>H Helps in dissolving gallstones</li>
              <li>
                Is used in the treatment of primary biliary cholangitis (PBC)
              </li>
              <li>Aids in managing other cholestatic liver disorders.</li>
              <li>Can be used to prevent gallistone formation</li>
              <li>Can be used to prevent gallistone formation</li>
            </ul>

            <h5 className="fw-bold ">How UDILIV 300MG TABLET 15'S Works</h5>
            <ul className="contens-ui">
              <li>
                Dosage for children: The dosage of UDILIV 300MG TABLET 15'S for
                children depends on their boddy weight and the specific liver
                disorder being treated. It is fypically prescribed by a
                pediatrician or gastroenterologist who will determine the
                appropriate dosage.
              </li>
              <li>
                Dosage for Adults: The recommended dosege of UDILIV 300MG TABLET
                15'5 for adults varies depending on the indication. For
                gallistone dissolution, the usual dose is 8-10 mg/kg body weight
                per day, divided into two to three doses. In the treatment of
                primary biliary cholangitis (PBC), the typical dose ranges from
                13-15 mg/kg body weight per day, also divided into multiple
                doses. However, dosages may differ based on individual patient
                factors, and it is essential to follow the specific instructions
                provided by a healthcare professional.
              </li>
            </ul>

            <h5 className="fw-bold ">
              Side Effects OfF UDILIV 300MG TABLET 15'S
            </h5>
            <span className="common">Common Side Effects of UDLIV 500MG TABLET IS'S</span>
            <ul className="contens-ui">
              <li>Diarrhea</li>
              <li>Abdominal discomfort</li>
              <li> Nausea</li>
              <li>Vomiting</li>
              <li>Hair loss (rare)</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Generic Medicine Alternatives */}
        <div className="col-md-4">
          <h6 className="fw-bold">Generic Medicine Alternative</h6>
          <div className="list-group">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="list-group-item  card-color d-flex justify-content-between align-items-center border shadow-sm mb-2"
              >
                 <img src="./images/tablet.png" alt="" style={{width:'100px',background:"white"}} />
              
                <div>
               
                  <h6 className="mb-0">DOLOWIN PLUS TAB</h6>
                  <small>Micro Labs Limited</small>
                  <p className="mb-0">Paracetamol 650</p>
                  <span className="rs">Rs.95</span>
                  <span className="text-muted fw-bold">Rs.34</span>
                  <span className="price">75% less Price</span>
                </div>
                <button className="btn btn-outline-primary">+ Add</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
