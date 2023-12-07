import React from "react";
import "./App.css";
import Home from "./components/Home/home";
import Events from "./components/Events/Events";
import Member from "./components/People/People";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "./components/assets/mouseFollower.css";
import Library from "./components/Library/Library";
import OpenProjects from "./components/OpenProjects/OpenProjects";

function App() {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);
    if (window.matchMedia('(pointer:fine)').matches) {
      const cursor = new MouseFollower({
        container: document.body,
        speed: 0.3,
      });
      return () => {
        cursor.destroy();
      };
  }
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/events", element: <Events /> },
    { path: "/people", element: <Member /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/contact-us", element: <Contact /> },
    { path: "/library", element: <Library /> },
    { path: "/open-projects", element: <OpenProjects /> },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
