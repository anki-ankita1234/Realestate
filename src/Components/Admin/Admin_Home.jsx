import React from 'react'
import { Link } from 'react-router-dom'

const Admin_Home = () => {
  return (
    <>
      {/* Banner */}
      <section
        className="d-flex align-items-center justify-content-center text-white py-5"
        style={{
          minHeight: "220px",
          background:
            "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600') center/cover",
        }}
      >
        <div className="text-center">
          <h1 className="fw-bold display-5">Admin Dashboard</h1>
          <p className="mb-0">Welcome to Estate Nest Admin Panel</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 rounded-4 p-4 text-center h-100">
                <div className="card-body">
                  <h3 className="fw-bold text-primary mb-3">Add Category</h3>
                  <p className="text-muted mb-4">Create new property categories for listings.</p>
                  <Link to="/admin/add-category" className="btn btn-primary rounded-pill px-4">
                    Go to Add Category
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 rounded-4 p-4 text-center h-100">
                <div className="card-body">
                  <h3 className="fw-bold text-success mb-3">Manage Category</h3>
                  <p className="text-muted mb-4">View, edit, or delete existing categories.</p>
                  <Link to="/admin/manage-category" className="btn btn-success rounded-pill px-4">
                    Go to Manage Category
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 rounded-4 p-4 text-center h-100">
                <div className="card-body">
                  <h3 className="fw-bold text-dark mb-3">User View</h3>
                  <p className="text-muted mb-4">Switch back to the main public website.</p>
                  <Link to="/" className="btn btn-outline-dark rounded-pill px-4">
                    Visit User Site
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Admin_Home
