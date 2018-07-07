import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="portfolio single-column">
          <h3>Portfolio</h3>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img className="d-block w-100" src="images/sunrise.jpg" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                      <img className="d-block w-100" src="images/treetopmoon.jpg" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                      <img className="d-block w-100" src="images/sierrameadow.jpg" alt="Third slide" />
                  </div>
              </div>
              <a className="carousel-control-prev hidden" href="#portfolio" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next hidden" href="#portfolio" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
          <a href="#testimonials"><i className="fa fa-chevron-down fa-2x"></i></a>
      </section>
    )
  }
}

export default Portfolio;
