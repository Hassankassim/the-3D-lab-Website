import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MotionConfig, animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { framerMotionConfig } from "../config";
import Navbar from '../components/Navbar'
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { section, menuOpened } = props;
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 :  0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
   
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
    <MotionConfig 
    transition={{
      ...framerMotionConfig}}
       >
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 7, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
       
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -33, -60]} scale={[1, 1, 1]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.5}
              transparent
              distort={0.4}
              speed={2}
              color={"blue"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh position={[8, -23, -50]} scale={[1, 1, 1]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.5}
              transparent
              distort={0.4}
              speed={2}
              color={"#ae08fb"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh position={[-5, 3, -15]} scale={[1, 1, 0.1]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.5}
              transparent
              distort={0.4}
              speed={2}
              color={"#3a95ea"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[333, -20, 3]} position={[2, -5, -68]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.09}
              transparent
              distort={1}
              speed={1}
              color="blue"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.0, 1.0, 1.0]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={2}
              transparent
              factor={1}
              speed={5}
              color={"#669df6"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[0.3, 0.3, 0.3]} position={[-7, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={5}
              transparent
              factor={1}
              speed={5}
              color={"#a839f3"}
            />
          </mesh>
        </Float>
       
     
      </motion.group>
   
      
      
      </MotionConfig>
    
    </>
 
  );
};
