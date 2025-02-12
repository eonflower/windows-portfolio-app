import { useState, useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavWindow from './components/NavWindow'
import Splash from './components/SplashScreen';


function App() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // Ensure that the scroll resets for the .window-content class
    const windowContent = document.querySelector('.window-content');
    if (windowContent) {
      windowContent.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0); // fallback for other elements
    }
  }, [pathname]);

  return (
    <div className="app">
      <>
      <NavWindow />
      <Footer />
      </>
    </div>
  )
}

export default App
