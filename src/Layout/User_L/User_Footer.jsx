import React from 'react'
import { Link } from 'react-router-dom'
const User_Footer = () => {
  return (
    <>
     {/* Footer start  */}
  <section id="footer">
    <div className="container footer-container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5  ">
        <div className=" col-md-4">
          <h3>
            <img src="images/logo.png" alt="image" />
          </h3>
          <p>
            Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi
            augue.
          </p>
          <i className="bi-facebook pe-4" />
          <i className="bi-instagram pe-4" />
          <i className="bi-twitter pe-4" />
          <i className="bi-youtube pe-4" />
        </div>
        <div className="col-md-2 ">
          <h5>Project</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Houses
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Rooms
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Flats
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Appartments
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2 ">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                How we work ?
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Capital{" "}
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Security{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2 ">
          <h5>Movement</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Movement
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Support us
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2 ">
          <h5>Help</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Privacy{" "}
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Condition
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                Blog
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 ">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    <footer className="d-flex flex-wrap justify-content-between align-items-center border-top" />
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 ">
        <div className="col-md-8 d-flex align-items-center">
          <p>© 2023 TemplatesJungle, Inc. All rights reserved.</p>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <p>
            HTML template by:{" "}
            <Link
              to="https://templatesjungle.com/"
              className="link-primary"
              target="_blank"
            >
              TemplatesJungle
            </Link>{" "}
            <br /> Distributed by:{" "}
            <Link
              to="https://themewagon.com"
              className="link-primary"
              target="_blank"
            >
              ThemeWagon
            </Link>
          </p>
        </div>
      </footer>
    </div>
  </section>

    </>
  )
}

export default User_Footer
