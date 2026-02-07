import { Component } from "react";
import { Navigate } from "react-router-dom";
import "./index.css";

class EditUser extends Component {
  constructor(props) {
    super(props);

    const user = window.history.state?.usr?.user;

    this.state = {
      id: user?.id || "",
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      isUpdated: false,
    };
  }

  // Update existing user details in the API
  onSubmitForm = async (e) => {
    e.preventDefault();

    const { id, firstName, lastName, email, phone } = this.state;
    //console.log(id)
    await fetch(`https://6985c42d6964f10bf25465bc.mockapi.io/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, phone }),
    });

    this.setState({ isUpdated: true });
  };

  render() {
    if (this.state.isUpdated) {
      return <Navigate to="/" />;
    }

    return (
      <div className="form-bg-container">
        <h1 className="form-title">Edit User</h1>

        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="input-container">
            <label>First Name</label>
            <input
              type="text"
              pattern="[A-Za-z]+"                      
              value={this.state.firstName}
              onChange={(e) =>
                this.setState({ firstName: e.target.value })
              }
            />
          </div>

          <div className="input-container">
            <label>Last Name</label>
            <input
              type="text"
              pattern="[A-Za-z]+"                      
              value={this.state.lastName}
              onChange={(e) =>
                this.setState({ lastName: e.target.value })
              }
            />
          </div>

          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              required
              value={this.state.email}
              onChange={(e) =>
                this.setState({ email: e.target.value })
              }
            />
          </div>

          <div className="input-container">
            <label>Phone</label>
            <input
              type="tel"
              pattern="^[1-9]\d{9}$"
              required
              value={this.state.phone}
              onChange={(e) =>
                this.setState({ phone: e.target.value })
              }
            />
          </div>

          <button type="submit" className="submit-btn">
            Update User
          </button>
        </form>
      </div>
    );
  }
}

export default EditUser;
