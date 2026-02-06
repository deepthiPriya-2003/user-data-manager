import { Component } from "react";
import { v4 as uuid } from "uuid";
import { Navigate } from "react-router-dom";
import "./index.css";

class AddUser extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    phone: "",
    error: false,
    isSubmitted: false,
  };

  creatingNewUser = async () => {
    const { firstName, lastName, email, phone,} = this.state;

    await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        id: uuid(),
        firstName,
        lastName,
        email,
        phone,
        
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    const {firstName, lastName, email, phone} = this.state;

    const isValid =
      firstName && lastName && email && phone ;

    if (!isValid) {
      this.setState({ error: true });
      return;
    }

    await this.creatingNewUser();
    this.setState({ isSubmitted: true });
  };

  render() {
    const { error, isSubmitted } = this.state;

    if (isSubmitted) {
      return <Navigate to="/" />;
    }

    return (
      <div className="form-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="glass-form-card">
                <h2 className="text-center text-white mb-4">
                  Add New User
                </h2>

                <form onSubmit={this.onSubmitForm}>
                  <div className="mb-3">
                    <label className="form-label text-white">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-white">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) =>
                        this.setState({ lastName: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) =>
                        this.setState({ email: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-white">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) =>
                        this.setState({ phone: e.target.value })
                      }
                    />
                  </div>

                  {error && (
                    <p className="text-danger text-center">
                       Please fill all fields
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-gradient w-100"
                  >
                    Create User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
