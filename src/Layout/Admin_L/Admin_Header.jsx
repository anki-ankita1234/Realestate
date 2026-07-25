import React from 'react'
import { Link } from 'react-router-dom'

const Admin_Header = () => {
  return (
    <>
      {/* nav bar start  */}
      <header id="nav" className="site-header position-fixed text-white bg-dark w-100" style={{ zIndex: 1000 }}>
        <nav id="navbar-example2" className="navbar navbar-expand-lg py-2">
          <div className="container">
            <Link className="navbar-brand text-white fw-bold" to="/admin">
              <span className="text-primary">Estate</span>Nest <span className="badge bg-danger ms-2">Admin</span>
            </Link>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbarAdmin"
              aria-controls="offcanvasNavbarAdmin"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="offcanvas offcanvas-end bg-dark text-white"
              tabIndex={-1}
              id="offcanvasNavbarAdmin"
              aria-labelledby="offcanvasNavbarAdminLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title text-white" id="offcanvasNavbarAdminLabel">
                  Admin Menu
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav align-items-center justify-content-end flex-grow-1">
                  <li className="nav-item">
                    <Link className="nav-link active me-md-3 text-white" to="/admin">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link me-md-3 text-white" to="/admin/add-category">
                      Add Category
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link me-md-3 text-white" to="/admin/manage-category">
                      Manage Category
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn btn-outline-light ms-md-3" to="/">
                      User Site
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div style={{ paddingTop: "70px" }}></div>
    </>
  )
}

export default Admin_Header
