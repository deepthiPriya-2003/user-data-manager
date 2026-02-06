import { Component } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdDelete, MdEdit } from "react-icons/md";

import "./index.css";

class UserList extends Component {
  state = {
    usersDataList: [],isEditing: false,
    editUserId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone:"",
  };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
    const data = await response.json();
    this.setState({ usersDataList: data });
  };  
  


  onClickDelete = async(id) => { 
    await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
    method: "DELETE",
    });
    const { usersDataList } = this.state; 
    const updatedList = usersDataList.filter((user) => user.id !== id);
    this.setState({ usersDataList: updatedList });
  };

  render() {
    const { usersDataList } = this.state;

    return (
      <div className="dashboard-bg py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="dashboard-title">User Dashboard</h1>

            <Link to="/addUser" className="btn btn-gradient">
              + Add User
            </Link>
          </div>

          <div className="row g-4">
            {usersDataList.map((user) => (
              <div key={user.id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="user-card glass-card">
                  <div className="card-header-custom">
                    <CgProfile className="profile-icon" />
                    <h5 className="username">{user.username}</h5>
                  </div>

                  <div className="card-body-custom">
                    <p><strong>First Name:</strong> {user.firstName}</p>
                    <p><strong>Last Name:</strong> {user.lastName}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    
                  </div>

                  <div className="card-actions">
                    <Link to="/edit-user" state={{user}} >
                     <button className="btn btn-outline-primary btn-sm">
                      <MdEdit /> Edit
                    </button>
                       </Link>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => this.onClickDelete(user.id)}
                    >
                      <MdDelete /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }
}

export default UserList;
