import ProjectCard from "../../Pages/Projects/ProjectCard";
import "./ProjectSlider.css"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const ProjectSlider = ({ projects }) => {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
        console.log("hello")
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (<>
        <div className="image-container">
        <MdChevronLeft className='left' onClick={slideLeft} size={40} />
            <div className="slider" id="slider">
                {projects.map((item,index) => (
                    <ProjectCard key = {index} project = {item} className="projectCard"></ProjectCard>
                    
                ))
                }
            </div>
            <MdChevronRight className='right' onClick={slideRight} size={40} />
        </div>
    </>);
}

export default ProjectSlider;
