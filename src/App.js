import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar/>        
        <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>} />          
          <Route path="/userlist" element={<UserList/>} />
          {/* <Route path="/edit/:id" element={<EditUser />} /> */}
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>                    
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
