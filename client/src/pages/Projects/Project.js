import React from "react";
import "./Project.css";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">NodeJS</span>
                <span className="card-detail-badge">ExpressJS</span>
                <span className="card-detail-badge">ReactJS</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Mern Ecommerce Website</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/yashgandhi156/ecommerce-app"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://inotebook.in/assets/images/inotebook.png"
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">MERN stack</span>
                <span className="card-detail-badge">Bootstrap</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">INotbook</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/yashgandhi156/inotebook"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://s3-alpha.figma.com/hub/file/1349586731/a3778eae-12c5-4776-9cdf-2682394d9013-cover.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">ReactJS</span>
                {/* <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span> */}
                <span className="card-detail-badge">Javascript</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">API</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Newsapp</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/yashgandhi156/Newsapp"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
