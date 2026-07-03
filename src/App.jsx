import { useState, useEffect } from 'react'
import './App.css'
import IntroAnimation from './components/ui/IntroAnimation'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageLoading } from './components/ui/message-loading'
import { DesignAgency } from './components/ui/landing-page'

function App() {
  const [preloader, setPreloader] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  // Preloader timer: run for 2.0 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Lock scroll on main body during preloader and intro animation
  useEffect(() => {
    if (preloader || showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [preloader, showIntro]);

  return (
    <>
      <AnimatePresence>
        {preloader && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 10000,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="text-black scale-150">
              <MessageLoading />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!preloader && showIntro && (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        </div>
      )}

      {!preloader && !showIntro && (
        <DesignAgency />
      )}
    </>
  );
}

export default App;
