import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
  {/* billboard start  */}
  <section id="billboard">
    <div className="container ">
      <div className="row flex-lg-row-reverse align-items-center ">
        <div className="col-lg-6">
          <img
            src="images/billboard.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className=" text-capitalize  lh-1 my-3">
            Perfect way to buy and sell a home
          </h1>
          <p className="lead">
            Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna,
            massa aliqua dui pellentesque. Ac, gravida in eget non amet eget
            purus non.
          </p>
          <nav className="navbar navbar-expand-lg billboard-nav">
            <div className="container billboard-search p-0">
              <div className="row billboard-row">
                <div className="col-lg-3 billboard-select">
                  <select
                    className="form-select mb-2 mb-lg-0"
                    aria-label="Purpose"
                  >
                    <option selected="">Purpose</option>
                    <option value={1}>Buy</option>
                    <option value={2}>Rent</option>
                    <option value={3}>Sell</option>
                    <option value={4}>Something else here</option>
                  </select>
                </div>
                <div className="col-lg-3 billboard-select">
                  <select
                    className="form-select mb-2 mb-lg-0"
                    aria-label="Location"
                  >
                    <option selected="">Location</option>
                    <option value={1}>Texas</option>
                    <option value={2}>Miami</option>
                    <option value={3}>Chicago</option>
                    <option value={4}>New York</option>
                    <option value={5}>Something else here</option>
                  </select>
                </div>
                <div className="col-lg-3 billboard-select">
                  <select
                    className="form-select mb-2 mb-lg-0"
                    aria-label="Type"
                  >
                    <option selected="">Type</option>
                    <option value={1}>House</option>
                    <option value={2}>Appartment</option>
                    <option value={3}>Villa</option>
                    <option value={4}>Loft</option>
                    <option value={5}>Bungalow</option>
                    <option value={3}>Something else here</option>
                  </select>
                </div>
                <div className="col-lg-3 billboard-btn">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg billboard-search"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/* Feature start  */}
  <section id="feature">
    <div className="container py-5">
      <div className="row">
        <div className="section-header align-center mb-5">
          <h2 className=" text-capitalize m-0">Featured In</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-2 ">
          <div
            className="my-3"
            role="group"
            aria-label="3 / 7"
            style={{ width: "158.667px", marginRight: 20 }}
          >
            <img alt="image" src="images/logo1.png" />
          </div>
        </div>
        <div className="col-md-2">
          <div
            className="my-3"
            role="group"
            aria-label="3 / 7"
            style={{ width: "158.667px", marginRight: 20 }}
          >
            <img alt="image" src="images/logo2.png" />
          </div>
        </div>
        <div className="col-md-2">
          <div
            className="my-3"
            role="group"
            aria-label="3 / 7"
            style={{ width: "158.667px", marginRight: 20 }}
          >
            <img alt="image" src="images/logo3.png" />
          </div>
        </div>
        <div className="col-md-2">
          <div
            className="my-3"
            role="group"
            aria-label="3 / 7"
            style={{ width: "158.667px", marginRight: 20 }}
          >
            <img alt="image" src="images/logo4.png" />
          </div>
        </div>
        <div className="col-md-2">
          <div
            className="my-3"
            role="group"
            aria-label="3 / 7"
            style={{ width: "158.667px", marginRight: 20 }}
          >
            <img alt="image" src="images/logo6.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Residence start  */}
  <section id="residence">
    <div className="container  my-5 py-5">
      <h2 className="text-capitalize m-0 py-lg-5">Popular Residence</h2>
      <div className="swiper-button-next residence-swiper-next  residence-arrow" />
      <div className="swiper-button-prev residence-swiper-prev residence-arrow" />
      <div className="swiper residence-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="card">
              <Link to="index.html">
                <img
                  src="images/item15.png"
                  className="card-img-top"
                  alt="image"
                />
              </Link>
              <div className="card-body p-0">
                <Link to="index.html">
                  <h5 className="card-title pt-4">Aliva Priva Jalvin</h5>
                </Link>
                <p className="card-text">1087 Pin Oak Drive, Clinton, USA</p>
                <div className="card-text">
                  <ul className="d-flex">
                    <li className="residence-list">
                      {" "}
                      <img src="images/bed.png" alt="image" /> 4 bed
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/bath.png" alt="image" /> 2 bath
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/square.png" alt="image" /> 1203 Sqft.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <Link to="index.html">
                <img
                  src="images/item16.png"
                  className="card-img-top"
                  alt="image"
                />
              </Link>
              <div className="card-body p-0">
                <Link to="index.html">
                  <h5 className="card-title pt-4">Aliva Priva Jalvin</h5>
                </Link>
                <p className="card-text">1087 Pin Oak Drive, Clinton, USA</p>
                <div className="card-text">
                  <ul className="d-flex">
                    <li className="residence-list">
                      {" "}
                      <img src="images/bed.png" alt="image" /> 4 bed
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/bath.png" alt="image" /> 2 bath
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/square.png" alt="image" /> 1203 Sqft.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <Link to="index.html">
                <img
                  src="images/item17.png"
                  className="card-img-top"
                  alt="image"
                />
              </Link>
              <div className="card-body p-0">
                <Link to="index.html">
                  <h5 className="card-title pt-4">Aliva Priva Jalvin</h5>
                </Link>
                <p className="card-text">1087 Pin Oak Drive, Clinton, USA</p>
                <div className="card-text">
                  <ul className="d-flex">
                    <li className="residence-list">
                      {" "}
                      <img src="images/bed.png" alt="image" /> 4 bed
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/bath.png" alt="image" /> 2 bath
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/square.png" alt="image" /> 1203 Sqft.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <Link to="index.html">
                <img
                  src="images/item1.jpg"
                  className="card-img-top"
                  alt="image"
                />
              </Link>
              <div className="card-body p-0">
                <Link to="index.html">
                  <h5 className="card-title pt-4">Aliva Priva Jalvin</h5>
                </Link>
                <p className="card-text">1087 Pin Oak Drive, Clinton, USA</p>
                <div className="card-text">
                  <ul className="d-flex">
                    <li className="residence-list">
                      {" "}
                      <img src="images/bed.png" alt="image" /> 4 bed
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/bath.png" alt="image" /> 2 bath
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/square.png" alt="image" /> 1203 Sqft.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <Link to="index.html">
                <img
                  src="images/item2.jpg"
                  className="card-img-top"
                  alt="image"
                />
              </Link>
              <div className="card-body p-0">
                <Link to="index.html">
                  <h5 className="card-title pt-4">Aliva Priva Jalvin</h5>
                </Link>
                <p className="card-text">1087 Pin Oak Drive, Clinton, USA</p>
                <div className="card-text">
                  <ul className="d-flex">
                    <li className="residence-list">
                      {" "}
                      <img src="images/bed.png" alt="image" /> 4 bed
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/bath.png" alt="image" /> 2 bath
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/square.png" alt="image" /> 1203 Sqft.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <Link to="index.html">
                <img
                  src="images/item3.jpg"
                  className="card-img-top"
                  alt="image"
                />
              </Link>
              <div className="card-body p-0">
                <Link to="index.html">
                  <h5 className="card-title pt-4">Aliva Priva Jalvin</h5>
                </Link>
                <p className="card-text">1087 Pin Oak Drive, Clinton, USA</p>
                <div className="card-text">
                  <ul className="d-flex">
                    <li className="residence-list">
                      {" "}
                      <img src="images/bed.png" alt="image" /> 4 bed
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/bath.png" alt="image" /> 2 bath
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/square.png" alt="image" /> 1203 Sqft.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card">
              <Link to="index.html">
                <img
                  src="images/item4.jpg"
                  className="card-img-top"
                  alt="image"
                />
              </Link>
              <div className="card-body p-0">
                <Link to="index.html">
                  <h5 className="card-title pt-4">Aliva Priva Jalvin</h5>
                </Link>
                <p className="card-text">1087 Pin Oak Drive, Clinton, USA</p>
                <div className="card-text">
                  <ul className="d-flex">
                    <li className="residence-list">
                      {" "}
                      <img src="images/bed.png" alt="image" /> 4 bed
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/bath.png" alt="image" /> 2 bath
                    </li>
                    <li className="residence-list">
                      {" "}
                      <img src="images/square.png" alt="image" /> 1203 Sqft.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="residence-btn">
        <Link to="index.html" className="btn btn-primary btn-lg my-5">
          View All Properties
        </Link>
      </div>
    </div>
  </section>
  {/*About us start  */}
  <section id="about-us">
    <div className="container">
      <div className="row py-lg-5">
        <h2 className="text-capitalize text-center m-0 py-lg-5">
          Why to choose us
        </h2>
        <div className="text-center col-lg-4">
          <img
            src="images/search.png"
            className="bd-placeholder-img rounded-circle"
            alt="Bootstrap Themes"
            width={140}
            height={140}
            loading="lazy"
          />
          <h4 className="fw-normal mt-5 ">Easy to find</h4>
          <p>
            Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec
            mattis lectus quam pretium amet facilisis.
          </p>
        </div>
        <div className="text-center col-lg-4">
          <img
            src="images/price.png"
            className="bd-placeholder-img rounded-circle"
            alt="Bootstrap Themes"
            width={140}
            height={140}
            loading="lazy"
          />
          <h4 className="fw-normal mt-5">Affordable Prices</h4>
          <p>
            Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec
            mattis lectus quam pretium amet facilisis.
          </p>
        </div>
        <div className="text-center col-lg-4">
          <img
            src="images/time.png"
            className="bd-placeholder-img rounded-circle"
            alt="Bootstrap Themes"
            width={140}
            height={140}
            loading="lazy"
          />
          <h4 className="fw-normal mt-5 ">Quickly Process</h4>
          <p>
            Ac, gravida in diam vitae, nec mattis lectus quam pretium amet
            facilisis. Urna, massa aliqua dui pellentesque.{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial start  */}
  <section id="testimonial">
    <div className="container my-5">
      <div className="swiper testimonial-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="row my-5 py-lg-5">
              <div className="col-md-8 mx-auto">
                <img
                  src="images/quote.png"
                  className="rounded mx-auto d-inline"
                  alt="..."
                />
                <p className="testimonial-p mt-4">
                  Massa semper non rutrum orci facilisi sit. Lectus porta quam a
                  fringilla eget viverra sem. Vulputate massa hendrerit turpis
                  gravida tempor, porttitor.
                </p>
                <div className="row">
                  <div className="col-md-8">
                    <p className="pt-5 mb-1">Elena Pravo</p>
                    <p className="">Ceo, Upstate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="row my-5 py-lg-5">
              <div className="col-md-8 mx-auto">
                <img
                  src="images/quote.png"
                  className="rounded mx-auto d-inline"
                  alt="..."
                />
                <p className="testimonial-p mt-4">
                  Massa semper non rutrum orci facilisi sit. Lectus porta quam a
                  fringilla eget viverra sem. Vulputate massa hendrerit turpis
                  gravida tempor, porttitor.
                </p>
                <div className="row">
                  <div className="col-md-8">
                    <p className="pt-5 mb-1">Elena Pravo</p>
                    <p className="">Ceo, Upstate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="row my-5 py-lg-5">
              <div className="col-md-8 mx-auto">
                <img
                  src="images/quote.png"
                  className="rounded mx-auto d-inline"
                  alt="..."
                />
                <p className="testimonial-p mt-4">
                  Massa semper non rutrum orci facilisi sit. Lectus porta quam a
                  fringilla eget viverra sem. Vulputate massa hendrerit turpis
                  gravida tempor, porttitor.
                </p>
                <div className="row">
                  <div className="col-md-8">
                    <p className="pt-5 mb-1">Elena Pravo</p>
                    <p className="">Ceo, Upstate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" testimonial-swiper-button col-md-3 position-absolute">
          <div className="swiper-button-prev testimonial-arrow" />
          <div className="arrow-divider"> | </div>
          <div className="swiper-button-next testimonial-arrow" />
        </div>
      </div>
    </div>
  </section>
  {/* Help start  */}
  <section
    id="help"
    className="py-5"
    style={{
      background:
        "linear-gradient(270deg, #F1F5F9 0.01%, rgba(241, 245, 249, 0.00) 100%)"
    }}
  >
    <div className="container-lg my-5">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md-6">
          <div className="image-holder d-flex">
            <img
              src="images/group.png"
              className="img-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-content ps-md-5 mt-4 mt-md-0">
            <h2 className="text-capitalize">We help people to find homes</h2>
            <p>
              Mauris orci donec blandit maecenas. Orci lorem purus porttitor
              massa consectetur. Neque, vestibulum sed varius magna et at. Eu,
              adipiscing morbi augue justo. Nibh laoreet volutpat quis velit.
              Blandit aliquam donec sed morbi congue eget lorem viverra porta id
              lobortis.
            </p>
            <Link to="index.html" className="btn btn-primary btn-lg">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Lets start  */}
  <section id="start">
    <div className="container my-5 py-5">
      <div className="row featurette py-lg-5 ">
        <div className="col-md-5 order-md-1 d-flex">
          <h1 className="text-capitalize  lh-1 mb-3">
            Let’s simply begin with rentiz.
          </h1>
        </div>
        <div className="col-md-7 order-md-2">
          <div className="text-content ps-md-5 mt-4 mt-md-0">
            <p className="py-lg-2">
              Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi
              augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam
              donec sed morbi congue eget lorem viverra porta id lobortis.
            </p>
            <Link
              to="index.html"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  </>

  )
}

export default Home
