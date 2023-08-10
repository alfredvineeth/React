import './Project.css'
import project1 from './project 1.png'
import project2 from './project 2.png'

function Project() {
    return (
      <div className="project">
        <h1>Projects</h1>
        <p>A car Choosing Website with filters</p>
        <img src= {project1}></img> 
        <p>An aggregate model of SharkTank</p>
        <img src= {project2}></img>
      </div>
    );
  }

export default Project;