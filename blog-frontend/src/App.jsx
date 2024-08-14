import Header from "./components/header/Header.jsx";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from  './pages/home/Home.jsx';
import AddArticle from "./pages/addArticle/AddArticle.jsx";
import FullArticle from "./pages/fullArticle/FullArticle.jsx";
import Login from "./pages/login/Login.jsx";
import Registration from "./pages/registration/Registration.jsx";
function App() {
  return (
    <>
      <Header/>
      <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/articles/create" element={<AddArticle/>}/>
            <Route path="/article/:id" element={<FullArticle/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Registration/>}/>
          </Routes>
      </div>
    </>
  );
}

export default App;
