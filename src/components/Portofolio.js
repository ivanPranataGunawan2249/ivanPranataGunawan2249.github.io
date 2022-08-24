import React from "react";
import "./Portofolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Portofolio() {
  return (
    <div id="portofolio" className="portfolio">
      <div className="portfolio-section text-center">
        <h2>
          <span> </span>PORTFOLIO<span> </span>
        </h2>
      </div>
      <div className="row text-center">
        <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src="./images/tender1.png" />
            <div className="card-body">
              <h5 className="card-title">Website "The Agency Tender Client"</h5>
              <p className="card-text">Building website using Angular and Bootstrap framework</p>
              <a href="https://theagency.id/tender/client/#/" target="_blank" className="btn btn-primary">
                Go Check
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src="./images/lelang-bandwidth.png" />
            <div className="card-body">
              <h5 className="card-title">Landing Page Website "Lelang Bandwidth"</h5>
              <p className="card-text">Building website using Angular and Bootstrap framework</p>
              <a href="https://lelangbandwidth.com/#/" target="_blank" className="btn btn-primary">
                Go Check
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center mt-20">
        <div className="col-md-6">
          <div className="card">
            <img className="portfolio-img-android" src="./images/adakita-mobile.jpg" />
            <div className="card-body">
              <h5 className="card-title">Mobile App "Adakita"</h5>
              <p className="card-text">Building website using React Native framework</p>
              <a href="https://play.google.com/store/apps/details?id=com.adakita" target="_blank" className="btn btn-primary">
                Go Check
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src="./images/adakita-web.png" />
            <div className="card-body">
              <h5 className="card-title">Web App "Adakita Web"</h5>
              <p className="card-text">Building website using ReactJs and Bootstrap framework</p>
              <a href="https://akita.macroad.co.id/" target="_blank" className="btn btn-primary">
                Go Check
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center mt-20">
        <div className="col-md-6">
          {/* <a href="https://play.google.com/store/apps/details?id=com.codify.sobattani" target="_blank">
            <img className="portfolio-img-android img-fluid" src="./images/sobat-tani.jpg" />
          </a>
          <p>Mobile App "Sobat Tani" </p> */}
          <div className="card">
            <img className="portfolio-img-android" src="./images/sobat-tani.jpg" />
            <div className="card-body">
              <h5 className="card-title">Mobile App "Sobat Tani"</h5>
              <p className="card-text">Building website using Angular and Ionic framework</p>
              <a href="https://play.google.com/store/apps/details?id=com.codify.sobattani" target="_blank" className="btn btn-primary">
                Go Check
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p className="text-CMS">
            And some CMS admin applications <br />
            that can't be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
