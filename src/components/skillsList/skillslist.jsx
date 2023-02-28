import "./skillsList.css"
import Skill from "../Skill/Skill"
import {skills} from "../../data"

const SkillsList = () => {
    return (
        <div className="sl">
            <div className="sl-texts">
                <h1 className="sl-title">My Skills/TechStack</h1>
                <p className="sl-desc"></p>
            </div>
            <div className="sl-list">
                {skills.map((item) => (
                    <Skill key={item.id} img={item.img} />
                ))}
            </div>
        </div>
    );
};

export default SkillsList;