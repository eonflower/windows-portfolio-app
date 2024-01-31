import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import NavWindow from './components/NavWindow'
import Splash from './components/SplashScreen';


function App() {
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
