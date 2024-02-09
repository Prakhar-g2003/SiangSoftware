import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './courses.css'
import Card from '../../Components/AskHelper/components/DoubtCard'
export default function CourseCard({course}){

    return(
        <div class="doubtCardMain" style={{width:"46%",borderRadius:"10px"}}>
      {console.log(course)}
      <div class="doubtCardUser">
        <img
          class="doubtCardUserPhoto"
          src="https://images.unsplash.com/photo-1706887577952-2c3237ba079e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
        />
        <div class="doubtCardUserInfo">
          <div class="doubtCardUserName" style={{fontSize:"1.8rem"}}>Sachin</div>
          <div style={{textAlign:"end",width:"70vh",fontSize:"20px"}}>By Udemy</div>
          <div style={{marginTop:"-20px"}}>C++ full Course</div>
        </div>
      </div>
      <hr></hr>
      <div style={{marginBottom:"20px"}}>
        <div style={{fontSize:"1.4rem"}}>{course.courseName}</div>
        <div>I loved this course very much</div>
      </div>
   

      
    </div>

    )
}




