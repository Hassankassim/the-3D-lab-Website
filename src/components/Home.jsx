import { motion } from "framer-motion";
import image1 from "../assets/icons/hero mobile.png";
import image2 from "../assets/icons/sitting man.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhyUs from "./whyus";    
import Count from "./count";
import JoinUs from "./joinus";
import Testimonial from '../pages/testimonies/testimonialitems';
import Button from "./buttons";     
import { ValidationError, useForm } from "@formspree/react";
import { useAtom } from "jotai";
import { Projects, currentProjectAtom, projects } from "./Projects";


export const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
        h-screen w-screen  mx-auto
        flex flex-col items-start justify-center 
      `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.06,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.01,
        }}
      >
        <div className="center margint">
        <div className="container">
          <Row>
            <Col sm={8}>
              <h4 className="headh1">
                Build Your Future
              </h4>
              <h2 className="headl">"Craft Innovative Software Solutions with Us."</h2>
              <br />
              
              <br />
              <motion.button
                // className={`bg-indigo-600 text-white py-2.5 px-8 
                //   rounded-lg font-bold text-lg mt-16`}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.02,
                }}
              >
              <div className=""> <Button /></div>
              </motion.button>
            </Col>
            <Col sm={4}>
              <h4 className="text-4xl font-extrabold leading-snug ">
                <br />
                <p className="">
                  <img src={image1} alt="" />
                </p>
              </h4>
            </Col>
          </Row>
        </div>
        </div>
      </motion.p>
    </Section>
  );
};

const SkillsSection = () => {
  return (
    <>
    <div className="container ">
      <WhyUs />
      
    </div>
{/* <Project /> */}
  
    </> );
};





const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold san logonav">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};






export const Interface = () => {
  return (
    <div >
      <AboutSection />
      <SkillsSection />
        <ProjectsSection />
    </div>

  );
};

export default Interface;
