 import React from 'react';
import ProjectList from './ProjectList';
import ProjectPartical from './ProjectPartical';
 import './style.css'
 const Projects = () => {
     return (
         <div   className="project-main">
             <ProjectPartical></ProjectPartical>
             <ProjectList></ProjectList>
         </div>
     );
 };
 
 export default Projects;