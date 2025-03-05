import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Trainings from "./pages/Trainings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import "./css/app.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainings" element={<Trainings />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
