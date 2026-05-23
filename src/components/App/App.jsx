import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <About />
            </>
          }
        />

        <Route path="/search" element={<Main />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;