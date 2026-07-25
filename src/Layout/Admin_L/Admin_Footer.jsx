import React from 'react'
import { Link } from 'react-router-dom'

const Admin_Footer = () => {
  return (
    <>
      {/* Footer start */}
      <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <h5 className="fw-bold text-white">
                <span className="text-primary">Estate</span>Nest Admin Panel
              </h5>
              <p className="text-muted mb-0">
                Property management and administration portal.
              </p>
            </div>
            <div className="col-md-6 mb-3 text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-3">
                  <Link to="/admin" className="text-white text-decoration-none">
                    Dashboard
                  </Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/admin/add-category" className="text-white text-decoration-none">
                    Add Category
                  </Link>
                </li>
                <li className="list-inline-item me-3">
                  <Link to="/admin/manage-category" className="text-white text-decoration-none">
                    Manage Category
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/" className="text-muted text-decoration-none">
                    Back to Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-secondary my-3" />
          <div className="row align-items-center">
            <div className="col-md-12 text-center text-muted small">
              © {new Date().getFullYear()} Estate Nest. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Admin_Footer
