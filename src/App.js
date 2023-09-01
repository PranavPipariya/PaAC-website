import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Events from './components/Events/Events';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

function App() {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower({
      container: ".home-container",
      speed: 0.8
    });
  }, []);

  const router = createBrowserRouter([
    { path: '/', 
    element : <Home/>,
    },
    {path : '/events',
    element : <Events />
    },
    {path : '/about-us',
    element : <About />
    },
    {path : '/gallery',
    element : <Gallery />
    },
    {path : '/contact-us',
    element : <Contact />
    }
  ])
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
