import "./skill.css"
import javaskillpic from "../../img/javaskillpic.png";
const Skill = ({img}) => {
    return (
        <div className="s">
            <img
              src={img}
              alt=""
              className="a-img"
            />
        </div>
    )
}

export default Skill