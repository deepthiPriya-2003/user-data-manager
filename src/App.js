import {Routes, Route} from "react-router-dom"

import './App.css';
import UserList from "./Components/UsersList" 
import AddUser from "./Components/AddUsers"
import EditUser from "./Components/EditUser"


function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<UserList/>}></Route>
       <Route path="/addUser" element={<AddUser/>} ></Route>
       <Route path="/edit-user" element={<EditUser />} />
        
        </Routes>
     </>
  )
}


export default App;
