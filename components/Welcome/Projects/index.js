import { useContext, useState } from "react";
import styled from "@emotion/styled";
import { useNav } from "../../../context/NavContext";
import { MouseContext } from "../../../context/MouseContext";
import Button from '@mui/material/Button';
import { keyframes } from "@emotion/react";






const handleColorType = color => {
  switch (color) {
    case "resume":
      return "#6b62fd";
    case "portfolio":
      return "black";
    default:
      return "#fff";
  }
};



const ContainerUl = styled.div`
display:flex;
width:100% ;
justify-content:center ;
font-size:40px;
gap:50px;
color: ${({ color }) => handleColorType(color)};
position:absolute ;
bottom:10px ;
text-transform:uppercase ;



`;


const LinkProject=styled.li`
 cursor:pointer;
 letter-spacing: 30px;
 font-size:40px;
`



const ContainerWorksPage=styled.div`
 width:100%;
 height:100vh;
 max-height:100vh ;
 display:flex;
 position:relative;

 
`
const SectionResume=styled.div`
 display:flex ;
 align-items:center ;
 justify-content:center ;
 width: 1200px;
 padding:10px;
 gap:30px;
`

const SectionResumeLeft = styled.div`
 display:flex ;
 flex-direction:column ;
 align-items:center ;
 gap:30px;

`


const ChildResumeRight=styled.div`
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;
z-index:5 ;
width:324px ;
height:100%;
background-color:#272727  ;
color:white;
padding:10px;
border-radius:30px;
transition:.2s all ;
&:hover{
   
   transform:translateY(-10px) ;
   box-shadow: 0px 10px 13px -7px #6b62fd, 5px 5px 15px 5px rgba(176,133,255,0);
 }


  

`

const Mobile = styled.div`
 background-image:url('/mobile.png') ;
 background-size:cover ;
 background-position:center ;
 width:90%;
 height:415px;
`

const TextSection=styled.div`
 max-width:350px;
 font-size:13px;
`

const Modal=styled.div`
 background-image:url('/modal.png') ;
 background-size:cover ;
 width:155px ;
 height:120px ;
`
const TitleChilds= styled.p`
  color:#6b62fd ;
  font-size:16px;
  font-weight:600 ;
`

const ContainerButtons=styled.div`
 display:flex ;
 flex-direction:column ;
 align-items:center ;
 gap:20px;
 background-color:#1d1d1d;
 width:150px ;
padding:10px;
 border-radius:30px;
`
const Storybook=styled.div`
 background-image:url('/storybook-original.png') ;
  background-size:cover ;
  width:120px ;
  height:120px ;
`

const Title=styled.p`
position:absolute ;
top:30px;
padding-bottom:5px;
letter-spacing:20px;
font-size:20px;
border-bottom:solid 1px  ;
text-transform:uppercase;
color: ${({ color }) => handleColorType(color)};
`


const AnimationBumbs=keyframes`
  0%{height:0px;
    width:0px ;
    top:10px;
    left:20px ;
  }
  100%{
    left:0px ;
    top:-40px ;
    width:60px ;
    height:60px ;
  }
`
const AnimationBumbs2=keyframes`
  0%{
    height:0px;
    width:0px ;
    top:-25px;
    left:30px ;
  }
  100%{
    left:10px ;
    top:-70px ;
    width:20px ;
    height:20px ;
  }
`

const Bumps= styled.div`
 width:60px ;
 height:60px ;
 border-radius:100% ;
 position:absolute ;
 background-color:#272727  ;
 left:0px;
 top:-40px;
 display:none ;
 transition:.4s ease-in-out ;
`
const Bumps2= styled.div`
 width:20px ;
 height:20px ;
 border-radius:100% ;
 position:absolute ;
 background-color:#272727  ;
 left:10px;
 top:-70px;
 display:none ;
 transition:.4s ease-in-out ;

`
const ChildsSectionLeft=styled.div`
position:relative ;
 display:flex ;
 justify-content:space-evenly ;
 align-items:center ;
 width:600px;
 height:150px ;
 background-color:#272727 ;
 color:white;
 border-radius:30px;
 z-index:5;
 transition:.4s all ;
 &:hover{
   
   transform:scale(1.2);
   z-index:10 ;
   
   box-shadow: 0px 10px 13px -7px #6b62fd, 5px 5px 15px 5px rgba(176,133,255,0);
 }

 &:hover ${Bumps} {
   display:block ;
   animation:${AnimationBumbs} 0.5s ease-in-out  ;
   
 }
 &:hover ${Bumps2} {
   display:block ;
   animation:${AnimationBumbs2} 0.7s ease-in-out  ;
   
 }

`

const Projects = () => {

  const [claseresume, setClaseResume] = useState('active');
  const [claseportfolio, setClasePortfolio] = useState('active');
  const [clasehackathon, setClaseHackathon] = useState('active');
  const [colorlink, setColorLink]= useState('resume');

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

const changeBackgorundColor= () =>{
  setClaseResume('active')
  setClasePortfolio('none')
  setClaseHackathon('none')
  setColorLink('resume')
}
const hoverPortfolio= () =>{
  setClaseResume('none')
  setClasePortfolio('active')
  setClaseHackathon('none')
  setColorLink('portfolio')
}

const hoverHackathon= () =>{
  setClaseResume('none')
  setClasePortfolio('none')
  setClaseHackathon('active')

}



  return (
    <ContainerWorksPage>
      <h1>hola eso es una prueba</h1>
      <div className={`resume-container ${claseresume}`}>
        <SectionResume>
          <Title color={colorlink}>Resume project</Title>
          <SectionResumeLeft>
            <ChildsSectionLeft>
              <Bumps></Bumps>
              <Bumps2></Bumps2>
              <TextSection>
               <TitleChilds>Modals</TitleChilds>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun  t ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </TextSection>
               <Modal></Modal>
            </ChildsSectionLeft>
            <ChildsSectionLeft>
            <TextSection>
               <TitleChilds>Material-Ui</TitleChilds>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun  t ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </TextSection>
              <ContainerButtons>
                <Button variant="contained">Contained</Button>
                <Button variant="contained">Contained</Button>
                
             </ContainerButtons>
            </ChildsSectionLeft>
            <ChildsSectionLeft>
            <TextSection>
               <TitleChilds>Storybook</TitleChilds>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun  t ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </TextSection>
               <Storybook></Storybook>
            </ChildsSectionLeft>
          </SectionResumeLeft>
          <ChildResumeRight>
          <TextSection>
               <TitleChilds>Storybook</TitleChilds>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
               </TextSection>
               <Mobile></Mobile>
          </ChildResumeRight>
        </SectionResume>
      </div>
      <div className={`portfolio-container ${claseportfolio}`}>
        <p>Portfolio Container</p>
      </div>
      <div className={`hackathon-container ${clasehackathon}`}>
        <p>Hackathon Container</p>
      </div>

      <ContainerUl
        color= {colorlink}
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <LinkProject onMouseOver={changeBackgorundColor}>Resume</LinkProject>
        <LinkProject onMouseOver={hoverPortfolio}>Portfolio</LinkProject>
        <LinkProject onMouseOver={hoverHackathon}>Hackathons</LinkProject>
      </ContainerUl>
    </ContainerWorksPage>
  );
};

export default Projects;
