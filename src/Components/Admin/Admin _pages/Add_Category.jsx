import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import CloudinaryServices from '../../../services/CloudinaryServices'
import CategoryServices from '../../../services/CategoryServices'

const Add_Category = () => {
  const [categoryName, setCategoryName] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [loading, setLoading] = useState(false)

  const nav = useNavigate()

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  const handleForm = async (e) => {
    e.preventDefault()

    if (!file) {
      toast.error('Please select an image')
      return
    }

    setLoading(true)

    try {
      // 1. Upload image to Cloudinary using CloudinaryServices
      const imageUrl = await CloudinaryServices.uploadImage(file)

      if (!imageUrl) {
        toast.error('Image upload failed!')
        setLoading(false)
        return
      }

      // 2. Add Category to Firestore using CategoryServices
      const result = await CategoryServices.Add({
        CategoryName: categoryName,
        Description: description,
        Image: imageUrl,
      })

      if (result === 1) {
        toast.success('Category Added Successfully!')
        setCategoryName('')
        setDescription('')
        setFile(null)
        setPreview('')
        nav('/admin/manage-category')
      } else {
        toast.error('Failed to add category!')
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
                  <h2 className="fw-bold mb-4 text-center">Add New Category</h2>

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
                        required
                        onChange={handleImageChange}
                      />
                      {preview && (
                        <div className="mt-3 text-center">
                          <img
                            src={preview}
                            alt="Category Preview"
                            className="img-thumbnail rounded-3"
                            style={{ maxHeight: '180px', objectFit: 'cover' }}
                          />
                        </div>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill">
                      Submit Category
                    </button>
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

export default Add_Category
