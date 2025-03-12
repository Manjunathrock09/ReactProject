import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CoworkingSpaces = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-md-start text-center">
          <h5 className="text-uppercase text-danger">Work From Everywhere</h5>
          <h2 className="fw-bold">
            Need a change of scenery now and again? <br />
            Use a desk in a co-working space in Dublin with a Workhub Day Pass.
          </h2>
          <p>
            Workhub offers convenient co-working day passes in Dublin, providing 
            access to top-quality Business Centres for up to 8 hours a day. These 
            passes can be purchased individually or in bundles of 5, 10, or 20.
          </p>
          <p>
            Coworking in Dublin has grown in popularity as it offers a community 
            feel, structure, and convenient office services. It’s an ideal solution 
            for freelancers, virtual workers, salespeople, and startup entrepreneurs.
          </p>
        </div>
        {/* Right Image Section */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <div className="card border-0 shadow">
            <img
              src="/images/coworking-space.png"
              alt="Coworking Space"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="text-center mt-5">
        <h5 className="text-uppercase text-danger">CO-WORKING</h5>
        <h2 className="fw-bold">Co-Working Plans and Prices</h2>
        <p>
          Our 4 virtual office plans have been carefully created to meet a range of business 
          requirements. If you need advice about which plan to choose, please contact us.
        </p>
      </div>

      <div className="row mt-4">
        {/* Co-Working Day Pass */}
        <div className="col-md-6">
          <div className="card p-4 border-0 shadow-sm">
            <h6 className="text-danger text-uppercase">CO-WORKING</h6>
            <h4 className="fw-bold">Co-Working Day Pass</h4>
            <p>
              Individuals access to coworking space at one of our locations for up to 
              8 hours a day. From 1 to 60 days.
            </p>
            <p className="fw-bold text-muted">FROM</p>
            <h3 className="text-danger fw-bold">€69 <span className="fs-6">/ day + VAT</span></h3>
            <div className="d-flex gap-2 mt-3">
              <button className="btn btn-outline-dark">Know more</button>
              <button className="btn btn-dark">Buy now</button>
            </div>
          </div>
        </div>

        {/* Dedicated Desk Plan */}
        <div className="col-md-6">
          <div className="card p-4 border-0 shadow-sm">
            <h6 className="text-danger text-uppercase">CO-WORKING</h6>
            <h4 className="fw-bold">Dedicated Desk Plan</h4>
            <p>
              Fixed Desk in an open-plan office. Use of all the facilities within the 
              selected location. From 3 months to 1 year.
            </p>
            <p className="fw-bold text-muted">FROM</p>
            <h3 className="text-danger fw-bold">€1050 <span className="fs-6">/ 3 months + VAT</span></h3>
            <div className="d-flex gap-2 mt-3">
              <button className="btn btn-outline-dark">Know more</button>
              <button className="btn btn-dark">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoworkingSpaces;
