import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { GrMail } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Projects from "./Projects";
import Router from "next/router";
import Navigation from "../Navigation";
import { useNav } from "../../context/NavContext";
import { motion } from "framer-motion";


const AnimationProfilePhoto = keyframes`
  0%   {
    position:absolute;
    left:40%; 
    top:20%;
    width:400px ;
    height:0px;
    border-radius:0px ;
  }
  30%  {
    position:absolute;
     left:40%;
     top:20%;
     width:400px ;
     border-radius:0px ;
     
  }

  50%{
    position:absolute;
    left:40%;
    top:20%;
    width:400px ;
    height:600px ;
    border-radius:0px ;
  }

  80%{
    position:absolute;
    
  }
  100% {
    position:absolute; 
    top:25px;
    left:95%;
  }
  

  
`;

const TextAnimation = keyframes`
  0% {
    
    opacity:0;
  }

50%{
  
    opacity:1;
  }

100% {
    
    opacity:0;
    
  }
`;

const PhotoProfileWelcome = styled.div`
  position: fixed;
  background-image: url("/profileImage.jpeg");
  width: 70px;
  border-radius: 100%;
  left: 95%;
  top: 25px;
  background-position: center;
  background-size: cover;
  height: 70px;
  animation: ${AnimationProfilePhoto} 3s;
`;

const WelcomeText = styled.h1`
  font-size: 40px;
  text-align: center;
  color: white;
  display: block;
  position: absolute;
  opacity: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  animation: ${TextAnimation} 2s;
`;

const SpanColor = styled.span`
  color: #4517c4;
  font-weight: 600;
`;

const ProfileBack = styled.div`
  background-image: url("/avatar.jpg");
  background-size: cover;
  width: 400px;
  height: 400px;
  border-radius: 100%;
  margin-bottom: 20px;
  transition: 0.6s all;
  
`;

const Paragraph = styled.div`
  width: 780px;
  max-width: 95%;
  margin-top: 10px;
`;




const Welcome = () => {
  const [presentation, setPresentation] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(false);
  const [text, setText] = useState(false);
  const [finishPresentation, setFinishPresentation] = useState(false);


  const { nav, setNav, animation, activateProfile } = useNav();

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
      setProgress(true);
    }, 1000);
  }, []);

 

  useEffect(() => {
    setTimeout(() => {
      setText(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (text) {
      setTimeout(() => {
        setFinishPresentation(true);
        setPresentation(false);

      }, 2000);
    }
  }, [text]);

  useEffect(() => {
    //@ts-ignore
    import("@cumul.io/cumulio-dashboard");
  }, []);

  return (
   
    <ReactScrollWheelHandler
      upHandler={() => {
        setNav(nav - 1);
      }}
      downHandler={() => {
        setNav(nav + 1);
      }}
    >
      <div className={`Content  ${animation}`}>
        
        {
        isVisible && <PhotoProfileWelcome></PhotoProfileWelcome>}

        {
        text && (
          <WelcomeText>Hello! Welcome to my portfolio website.</WelcomeText>
        )}

        {finishPresentation && (
          <>
            {activateProfile && (
              <div className={`container-profile ${animation}`}>
                <div>
                  <ProfileBack></ProfileBack>
                  <p>
                    I am Cristian! Junior Frontend Developer , Passionate about
                    new technologies and web development and interactive design,{" "}
                    <SpanColor>React</SpanColor> is my best ally to create new
                    projects.
                  </p>
                </div>

                <Paragraph>
                  <p>
                    Lately I usually use technologies like{" "}
                    <SpanColor>
                      React, Redux, Nodejs, Nextjs, storybook, firebase...
                    </SpanColor>{" "}
                  </p>
                  <p>
                    Currently knowing the whole world of{" "}
                    <SpanColor>design tokens</SpanColor>, and frontend
                    architectures.
                  </p>
                </Paragraph>
                <p>Scroll down to see my works</p>
              </div>
            )}
          </>
        )}
      </div>
    </ReactScrollWheelHandler>
    
  );
};

export default Welcome;

/*<ContainerContact>
<h1>Would you like to start a project with me?</h1>
<i className="devicon-github-original"></i>
<i className="devicon-linkedin-plain"></i>
<GrMail/>

</ContainerContact>*/

/* <div>
             {/* <ProjectsContainer data-aos="fade-up" id="Projects">
                <Paragraph>
                  <h1>Works</h1>
                  <h3>ResumeProject</h3>
                  <p>
                    Actualmente estoy trabajando en un proyecto personal , el
                    cual consiste en la creacion de curriculums a partir de
                    algunas plantillas ya prediseñadas.
                  </p>
                  <p>
                    Las tecnologias mas utilizadas en el proyecto son las
                    siguientes:
                  </p>
                  <ListTools>
                    <li>React</li>
                    <li>Nexjts</li>
                    <li>Firebase</li>
                    <li>Styled-Components</li>
                  </ListTools>
                </Paragraph>

                <WorksItems></WorksItems>

                <Paragraph>
                  <p>
                    Puedes visitar el sitio aun en desarrollo, accediendo al
                    siguiente link{" "}
                    <SpanColor>
                      <a href="https://resume-project-zeta.vercel.app/">
                        Resume
                      </a>
                    </SpanColor>
                  </p>
                </Paragraph>
                 <div data-aos="fade-up">
                <h3>Hackathon</h3>
               
                  <p>
                    Tambien he podido disfrutar de algunos hackathones , como lo
                    fue el reto para la clasificación a una fase final, de la
                    cual quede <SpanColor>primero</SpanColor> de 80 participantes. La fase final se
                    celebro en el <SpanColor>mwc</SpanColor>, donde el reto se trataba de una
                    prueba multidisciplinaria , donde mi grupo obtuvo el segundo
                    lugar en esta ocasión.
                  </p>
                  <p>
                    El reto grupal consitia en realizar una plataforma que
                    permitiera analizar parámetros de rutas aéreas y predecir la
                    demanda que habria por vuelo.
                  </p>
                  
               
                <Paragraph>
                  <p>
                    Puedes visitar el repositorio del proyecto, accediendo al
                    siguiente link{" "}
                    <SpanColor>
                      <a href="https://github.com/Fardenz/nuwe-mwc22-hackathon/">
                        mwc-Hackathon
                      </a>
                    </SpanColor>
                  </p>
                  <h4>Graficas resultantes del proyecto:</h4>
                </Paragraph>
                <ContainerGraphics>
                <cumulio-dashboard
                  dashboardId="79790e98-9e43-422a-adba-3805fff3e147"
                  authKey="4e848870-e851-4b37-b0b1-7bb97f37a43d"
                  authToken="UDG3seBtoOsMPNIZxvXYO41pixo8YKdxmAVxwvYQsAQ4uim1oILUqGu6a0QaDImPk156Zl5FRl2Rgee42TH36PQXASp9GOqCbWWERCb7QvrAqP1WR3pKzvIXRI3OoOtvwifBPLO1J3Kr8Rjf2uCi9O"
                  appServer="https://app.cumul.io/"
                ></cumulio-dashboard>
                </ContainerGraphics>
                </div>
                <Paragraph>
                <p>Puedes ver mas proyectos en mi Github:</p>
                <i className="devicon-github-original"></i>
                </Paragraph>
                
      </ProjectsContainer>
      </div>
      <ContainerIlustrations data-aos="fade-up" id="Ilustrations">
        
        <ParagraphIlustrations>
               <h1>Ilustraciones</h1>
               Esta es otra faceta de mi vida, donde me ha acompañado muchos años de mi vida , desde que tengo memoria , me ha encantado dibujar y crear ilustraciones.
               Esto es un ejemplo de las piezas que tengo en mi biblioteca. 
             </ParagraphIlustrations>
             
             <ContainerImages>
             
             
             <BackgroundImageIlustration></BackgroundImageIlustration>
             <BackgroundImageIlustration2></BackgroundImageIlustration2>
             <BackgroundImageIlustration3></BackgroundImageIlustration3>
             <BackgroundImageIlustration4></BackgroundImageIlustration4>
             
             </ContainerImages>
             
</ContainerIlustrations>
          <ContainerContact>
          <h1>Contact</h1>
          <ContainerSectionContact>
            
            <BackgroundImageContact></BackgroundImageContact>
            <ContainerContactRight>
              <ParagraphContac>
              <ContactTextElement>cristian.h.perez.o@gmail.com</ContactTextElement>
              <ContactTextElement>+34 640 350 413</ContactTextElement>
              <ContactTextElement>You can also contact via :</ContactTextElement>
              <i className="devicon-github-original"></i>
              <i className="devicon-linkedin-plain"></i>
              </ParagraphContac>

            </ContainerContactRight>
          </ContainerSectionContact>
</ContainerContact>*/
