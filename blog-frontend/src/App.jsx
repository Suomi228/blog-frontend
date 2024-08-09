import Article from "./components/article/Article.jsx";
import Header from "./components/header/Header.jsx";
import "./index.css";
import Home from  './pages/home/Home.jsx';
function App() {
  return (
    <>
      <Header/>
      <div className="container">
          <Home/>
      </div>
    </>
  );
}

export default App;
