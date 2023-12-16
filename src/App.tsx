import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen overflow-hidden w-full">
                <Navbar />
                <div className="flex-grow overflow-hidden">
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
