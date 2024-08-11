import Header from "./components/header/Header.jsx";
import "./index.css";
import Home from  './pages/home/Home.jsx';
import AddArticle from "./pages/addArticle/AddArticle.jsx";
import FullArticle from "./pages/fullArticle/FullArticle.jsx";
import Login from "./pages/login/Login.jsx";
function App() {
  return (
    <>
      <Header/>
      <div className="container">
          {/* <Home/> */}
          {/* <AddArticle/> */}
          {/* <FullArticle/> */}
          <Login/>
      </div>
    </>
  );
}

export default App;
