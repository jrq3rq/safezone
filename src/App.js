import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from "./components/Header";
import Home from "./pages/Home";
import Vulnerability from "./pages/Vulnerability";
import Evacuation from "./pages/Evacuation";
import { useEffect } from 'react';
import Alerts from "./pages/Alerts";

function App() {
  const location = useLocation();
  const direction = location.state?.direction || 'right';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const variants = {
    initial: (direction) => ({
      x: direction === 'right' ? "100%" : "-100%",
      rotateY: direction === 'right' ? 3 : -3,
      transformPerspective: 1000,
      scale: 0.98,
      boxShadow: direction === 'right' ? "-5px 0 10px rgba(0, 0, 0, 0.05)" : "5px 0 10px rgba(0, 0, 0, 0.05)",
    }),
    animate: {
      x: 0,
      rotateY: 0,
      transformPerspective: 1000,
      scale: 1,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: (direction) => ({
      x: direction === 'right' ? "-100%" : "100%",
      rotateY: direction === 'right' ? -3 : 3,
      transformPerspective: 1000,
      scale: 0.98,
      boxShadow: direction === 'right' ? "5px 0 10px rgba(0, 0, 0, 0.05)" : "-5px 0 10px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.1,
      },
    }),
  };

  return (
    <div className="App">
      <Header />
      <AnimatePresence initial={false}>
        <motion.div
          key={location.key}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/vulnerability" element={<Vulnerability />} />
            <Route path="/evacuation" element={<Evacuation />} />
            <Route path="/alerts" element={<Alerts />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
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