import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
 { 
   title: "React Application", 
   description: 
     "FitClub Gym Website",
  getImageSrc: () => require("../images/photo1.png"), 
 }, 
 { 
   title: "React Application", 
   description: 
     "Movies Recommendation App", 
   getImageSrc: () => require("../images/photo2.png"), 
 }, 
//  { 
//    title: "Photo Gallery", 
//    description: 
//      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
//    getImageSrc: () => require(""), 
//  }, 
//  { 
//    title: "Event planner", 
//    description: 
//      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
//    getImageSrc: () => require(""), 
//  }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
     <Heading as="h1" id="projects-section"> 
       Featured Projects 
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;