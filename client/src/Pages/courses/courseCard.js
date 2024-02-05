import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './courses.css'
export default function CourseCard({course}){
    return(
        <div className='courseCard'>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <Typography >By {course.from}</Typography>
                <div style={{marginRight:"90px"}}>
                <Typography sx={{color:"purple"}}component="legend">&nbsp;Course Rating </Typography>
                <div className='rating'>{course.rating}<Rating defaultValue={course.rating} precision={0.5} readOnly/></div>
            </div>
                
            </div>
            <div >
            
            <div className='cardBtn'>
                < h4 style={{marginLeft:"30%"}} >{course.courseName}</h4>
                <a href='#' style={{textDecorationLine:"none"}}><button style={{color:"blue"}}>Click to view Course</button></a>
            </div>
            </div>

        </div>

    )
}




