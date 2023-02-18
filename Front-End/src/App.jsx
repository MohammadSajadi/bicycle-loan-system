import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { AdminPage } from "./pages/Admin/AdminPage";
import { UserPage } from "./pages/User/UserPage";



export function App() {
  
  return (
   
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/login" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}