import * as React from 'react';
import {useNavigate}  from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Project.css'

export default function ProjectCard({project}) {
  let navigate = useNavigate();
  function handleClick(){
    console.log('clicked ' + project.id);
    navigate('/ProjectDisplay', {state: {project: project}});
  }
  return (
    <Card  className='projectCard' onClick = {handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt="project Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {project.description}
          </Typography>
          <h3 style={{textAlign:"end",color:"purple"}}>{project.reviews} reviews</h3>
          <div variant="body2" className='projectTechused' color="text.secondary">
            {project.techUsed.map((tech)=><p key={Math.random()}>&#x2022;  {tech}</p>)}
          </div>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}








// export default function ProjectCard({project}){
//     return(
//     <>
//     <h1>{project.projectName}</h1>
//     </>
//     )
// }