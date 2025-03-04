import { Routes, Route} from "react-router-dom";
import Home from "../src/pages/Home";
import Trainings from "./pages/Trainings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainings" element={<Trainings />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
