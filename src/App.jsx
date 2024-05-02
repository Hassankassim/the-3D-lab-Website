import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Home";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import WebsiteRouter from "./WebsiteRouter";
import { LoadingScreen } from "./components/LoadingScreen";
import { createRoot } from "react-dom/client";
import About from "./pages/About";
import Count from "./components/count";
import JoinUs from "./components/joinus";
import Testimonial from "./pages/testimonies/testimonialitems";
import Cardwork from '../src/pages/cards-layout/cards'
import ProjectView from "./components/ProjectView";


function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
  
  
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#ffffff"]} />
          <ScrollControls pages={18} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />

            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface />
              <ProjectView />
              <div className="container">
                {/* <Cardwork /> */}
              </div>
            <div className="container center">
            {/* <Count /> */}
            </div>
            <div className="container center">
            <JoinUs />
            </div>
          
            </Scroll>
             
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
