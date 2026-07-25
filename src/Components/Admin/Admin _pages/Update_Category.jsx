import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import CategoryServices from '../../../services/CategoryServices'
import CloudinaryServices from '../../../services/CloudinaryServices'

const Update_Category = () => {
  const { id } = useParams()
  const nav = useNavigate()

  const [categoryName, setCategoryName] = useState('')
  const [description, setDescription] = useState('')
  const [existingImage, setExistingImage] = useState('')
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await CategoryServices.Single(id)
        if (data) {
          setCategoryName(data.CategoryName || '')
          setDescription(data.Description || '')
          setExistingImage(data.Image || '')
          setPreview(data.Image || '')
        } else {
          toast.error('Category not found!')
          nav('/admin/manage-category')
        }
      } catch (error) {
        console.error(error)
        toast.error('Failed to fetch category details')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchCategory()
    }
  }, [id, nav])

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  const handleForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      let imageUrl = existingImage

      // Upload new image if selected
      if (file) {
        const uploadedUrl = await CloudinaryServices.uploadImage(file)
        if (uploadedUrl) {
          imageUrl = uploadedUrl
        } else {
          toast.error('Failed to upload new image')
          setLoading(false)
          return
        }
      }

      const result = await CategoryServices.Update(id, {
        CategoryName: categoryName,
        Description: description,
        Image: imageUrl,
      })

      if (result === 1) {
        toast.success('Category Updated Successfully!')
        nav('/admin/manage-category')
      } else {
        toast.error('Failed to update category!')
      }
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading ? (
        <div style={{ height: '70vh' }} className="d-flex justify-content-center align-items-center">
          <DotLoader color="#0d6efd" />
        </div>
      ) : (
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-4 p-md-5">
                  <h2 className="fw-bold mb-4 text-center">Update Category</h2>

                  <form onSubmit={handleForm}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Category Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter category name"
                        required
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Description</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Enter category description"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Category Image</label>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      {preview && (
                        <div className="mt-3 text-center">
                          <p className="text-muted small mb-1">Image Preview:</p>
                          <img
                            src={preview}
                            alt="Category Preview"
                            className="img-thumbnail rounded-3"
                            style={{ maxHeight: '180px', objectFit: 'cover' }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="d-flex gap-3">
                      <button type="submit" className="btn btn-primary btn-lg flex-grow-1 rounded-pill">
                        Update Category
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg rounded-pill"
                        onClick={() => nav('/admin/manage-category')}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Update_Category
