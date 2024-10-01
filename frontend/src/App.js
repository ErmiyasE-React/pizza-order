import Home from "./Home/Home";
import LoginCard from "./Home/Login-card";
import Admin from "./Pages/Admin/Admin";
import Order from "./Pages/Admin/Adminmenu/Order";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
  
        <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<LoginCard />} />
            </Route>

            <Route path="/admin" element={<Admin />}>
              <Route path="" element={<Order />} />
            </Route>
            
      </Routes>
  </>
  );
}

export default App;



