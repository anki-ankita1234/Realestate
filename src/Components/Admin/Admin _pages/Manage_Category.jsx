import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import CategoryServices from '../../../services/CategoryServices'

const Manage_Category = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCategories = async () => {
    try {
      const data = await CategoryServices.All()
      if (data) {
        setCategories(data)
      }
    } catch (err) {
      console.error(err)
      toast.error('Failed to load categories')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const res = await CategoryServices.Delete(id)
        if (res === 1) {
          toast.success('Category Deleted Successfully!')
          fetchCategories()
        } else {
          toast.error('Failed to delete category!')
        }
      } catch (error) {
        console.error(error)
        toast.error('Error deleting category!')
      }
    }
  }

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Manage Categories</h2>
        <Link to="/admin/add-category" className="btn btn-primary rounded-pill px-4">
          + Add New Category
        </Link>
      </div>

      {loading ? (
        <div style={{ height: '40vh' }} className="d-flex justify-content-center align-items-center">
          <DotLoader color="#0d6efd" />
        </div>
      ) : (
        <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th scope="col" className="ps-4" style={{ width: '60px' }}>#</th>
                    <th scope="col" style={{ width: '120px' }}>Image</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Description</th>
                    <th scope="col" className="text-center" style={{ width: '180px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories && categories.length > 0 ? (
                    categories.map((cat, index) => (
                      <tr key={cat.id || index}>
                        <td className="ps-4 fw-bold">{index + 1}</td>
                        <td>
                          {cat.Image ? (
                            <img
                              src={cat.Image}
                              alt={cat.CategoryName}
                              className="rounded-3"
                              style={{ width: '70px', height: '50px', objectFit: 'cover' }}
                            />
                          ) : (
                            <span className="text-muted small">No Image</span>
                          )}
                        </td>
                        <td className="fw-semibold">{cat.CategoryName}</td>
                        <td className="text-muted" style={{ maxWidth: '300px' }}>
                          {cat.Description}
                        </td>
                        <td className="text-center">
                          <Link
                            to={`/admin/update-category/${cat.id}`}
                            className="btn btn-sm btn-outline-primary me-2 rounded-pill px-3"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => handleDelete(cat.id)}
                            className="btn btn-sm btn-outline-danger rounded-pill px-3"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-5 text-muted fs-5">
                        No categories found. Click "+ Add New Category" to create one.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Manage_Category
