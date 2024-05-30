import { Routes, Route } from "react-router-dom";
import "./Basic.scss";
import "./App.scss";
//pages
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
//components
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new/:param" element={<New />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
