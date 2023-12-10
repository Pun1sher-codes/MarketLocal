import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="left"></div>
      <div className="mid">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
