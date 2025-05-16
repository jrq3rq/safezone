import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from "./components/Header";
import Home from "./pages/Home";
import Mantras from "./pages/Mantras";
import About from "./pages/About";
import Frequencies from "./pages/Frequencies";
import SolfeggioStudio from "./pages/SolfeggioStudio";
import Footer from "./components/Footer";
import ChakraChants from "./pages/ChakraChants";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.key}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/mantras" element={<Mantras />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/solfeggio-studio" element={<SolfeggioStudio />} />
            <Route path="/frequencies" element={<Frequencies />} />
            <Route path="/chakra-chants" element={<ChakraChants />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      {/* <Footer /> */}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;