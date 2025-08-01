import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomeTemplate from "./pages/HomeTemplate"
import AdminTemplate from "./pages/AdminTemplate"
import HomePage from "./pages/HomeTemplate/HomePage";
import AboutPage from "./pages/HomeTemplate/AboutPage";
import ListMoviePage from "./pages/HomeTemplate/ListMoviePage";
import Dashboard from "./pages/AdminTemplate/Dashboard";
import AddUserPage from "./pages/AdminTemplate/AddUserPage";
import { genarateRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Cách 1 */}
        {/* Home Template */}
        {/* <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />}/>
          <Route path="about" element={<AboutPage />}/>
          <Route path="list-movie" element={<ListMoviePage />} />
        </Route>  */}

        {/* Admin Template */}
        {/* <Route path="admin" element={<AdminTemplate />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-user" element={<AddUserPage />} />
        </Route> */}

        {/* Cách 2: tạo folder router -> customer lại route từ cách 1 */}
        {genarateRoutes()}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
