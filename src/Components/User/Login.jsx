import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import UserServices from '../../services/UserServices'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const nav = useNavigate()

  const [load, setload] = useState(false)
  const [show, setshow] = useState(false)

  const handleForm = async (e) => {
    e.preventDefault()

    setload(true)
    try {
      let result = await UserServices.Login(email, password)
      console.log(result)
      if (result == 1) {
        toast.success("Admin Login Successfully")
        nav("/admin")
      } else if (result == 2) {
        toast.success("User Login Successfully")
        nav("/")
      } else {
        toast.error("Invalied user")
      }
    } catch (err) {
      console.log(err)
      toast.error("Invalied user")
    } finally {
      setload(false)
    }
  }

  return (
    <>
      <style>{`
        .contact-banner {
          height: 30vh;
          min-height: 220px;
        }

        .contact-banner h1 {
          font-weight: 700;
          letter-spacing: 1px;
        }

        .card {
          margin-top: -70px;
          z-index: 10;
          position: relative;
        }

        .form-control {
          height: 50px;
          border-radius: 10px;
        }

        .form-control:focus {
          box-shadow: none;
          border-color: #000;
        }

        .nav-pills .nav-link {
          border-radius: 50px;
          color: #333;
        }

        .nav-pills .nav-link.active {
          background: #000;
        }

        .btn {
          height: 50px;
        }

        @media (max-width: 768px) {
          .card {
            margin-top: -40px;
          }

          .contact-banner {
            height: 25vh;
          }
        }
      `}</style>

      {load ? (
        <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
          <DotLoader color="#000" />
        </div>
      ) : (
        <>
          {/* Banner */}
          <section
            className="contact-banner d-flex align-items-center justify-content-center text-white"
            style={{
              height: "30vh",
              background:
                "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600') center/cover",
            }}
          >
            <div className="text-center">
              <h1 className="fw-bold display-5">Welcome Back</h1>
              <p className="mb-0">Login or Create a New Account</p>
            </div>
          </section>

          {/* Form */}
          <section className="py-5 bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="card shadow-lg border-0 rounded-4">
                    <div className="card-body p-4">
                      {/* Tabs */}
                      <ul
                        className="nav nav-pills nav-fill mb-4"
                        id="nav-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <button
                            className="nav-link active"
                            data-bs-toggle="pill"
                            data-bs-target="#login"
                          >
                            Login
                          </button>
                        </li>

                        <li className="nav-item">
                          <button
                            className="nav-link"
                            data-bs-toggle="pill"
                            data-bs-target="#register"
                          >
                            Register
                          </button>
                        </li>
                      </ul>

                      <div className="tab-content">
                        {/* Login */}
                        <div className="tab-pane fade show active" id="login">
                          <form onSubmit={handleForm}>
                            <div className="mb-3">
                              <label className="form-label fw-semibold">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>

                            <div className="mb-3">
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <label className="form-label fw-semibold mb-0">
                                  Password
                                </label>
                                <button
                                  type="button"
                                  className="btn btn-link p-0 text-decoration-none text-muted small"
                                  style={{ height: 'auto' }}
                                  onClick={() => setshow(!show)}
                                >
                                  {show ? "Hide" : "Show"}
                                </button>
                              </div>
                              <input
                                type={show ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <div>
                                <input
                                  type="checkbox"
                                  className="form-check-input me-2"
                                />
                                Remember Me
                              </div>

                              <a href="#" className="text-decoration-none">
                                Forgot Password?
                              </a>
                            </div>

                            <button type="submit" className="btn btn-dark w-100 rounded-pill">
                              Login
                            </button>
                          </form>
                        </div>

                        {/* Register */}
                        <div className="tab-pane fade" id="register">
                          <form>
                            <div className="mb-3">
                              <label className="form-label fw-semibold">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                              />
                            </div>

                            <div className="mb-3">
                              <label className="form-label fw-semibold">
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Create password"
                              />
                            </div>

                            <div className="form-check mb-3">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label className="form-check-label">
                                I agree to the Privacy Policy
                              </label>
                            </div>

                            <button className="btn btn-primary w-100 rounded-pill">
                              Create Account
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default Login
