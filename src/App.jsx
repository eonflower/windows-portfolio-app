import { useState, useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavWindow from './components/NavWindow'
import Splash from './components/SplashScreen';


function App() {
  const { pathname } = useLocation();
  const [showSplashscreen, setShowSplashscreen] = useState(
    () => !JSON.parse(localStorage.getItem("showedSplashscreen"))
  );
  useEffect(() => {
    const showedSplashscreen = JSON.parse(localStorage.getItem('showedSplashscreen'));

    if (!showedSplashscreen) {
      // If it hasn't been shown, set a timer to hide it after 4000ms
      const timer = setTimeout(() => {
        setShowSplashscreen(false);
        // Update localStorage to indicate that the splash screen has been shown
        localStorage.setItem('showedSplashscreen', JSON.stringify(true));
      }, 4000);

      // Clear the timer if the component unmounts or is re-rendered before the timeout
      return () => clearTimeout(timer);
    } else {
      // If the splash screen has been shown before, hide it immediately
      setShowSplashscreen(false);
    }
  }, []);

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
      {showSplashscreen ? <Splash />
      :
      <>
      <NavWindow />
      <Footer /></>}
    </div>
  )
}

export default App
