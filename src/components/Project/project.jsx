
import "./project.css";
import { useNavigate } from "react-router-dom"

const Project = ({img, id}) => {
  const navigate = useNavigate()
    return (
      <div className="projects" 
      onClick={() => { 
        navigate("/displayProjects/" + id);
        }}
        >
        <img
            src={img}
            alt=""
            className="a-img"
            />
      </div>
    );
  };

  export default Project;