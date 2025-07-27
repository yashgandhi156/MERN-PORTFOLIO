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
                  src="https://cdn.prod.website-files.com/653a8b0e56e4a44a90d64931/65fc9dbd6fac491685435066_image%20401.webp"
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">MERN stack</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">Open AI</span>
                <span className="card-detail-badge">Tailwind CSS</span>
                <span className="card-detail-badge">Cloudinary</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">AI-Image Generator</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/yashgandhi156/AI-Image-Generation-APP"
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
                  src="https://lh3.googleusercontent.com/S3bwgG5p3Ncq36MRNVxWtMt667HVO0wIRDIvSOl8Kt4ryW-be4Z_H0ixileIevn4ktL0SyxY0EDb1vmhqBPaIrhS=s1280-w1280-h800"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">Javascript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Youtube Bookmarker Chrome Extension
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/yashgandhi156/youtube-bookmark-Chrome-Extension"
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
