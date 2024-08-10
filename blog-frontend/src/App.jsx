import Header from "./components/header/Header.jsx";
import "./index.css";
import Home from  './pages/home/Home.jsx';
import AddArticle from "./pages/addArticle/AddArticle.jsx";
function App() {
  return (
    <>
      <Header/>
      <div className="container">
          {/* <Home/> */}
          <AddArticle/>
      </div>
    </>
  );
}

export default App;
