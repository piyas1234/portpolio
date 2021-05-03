import React from "react";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill";
import { colors } from "../../style";
import './style.css'

/**
 * @author
 * @function Specializing
 **/

const Specializing = (props) => {
  const skills = [
    {
      skillName: "HTML/CSS",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#f2a154",
    },
    {
      skillName: "JavaScript",
      desc: "Hands on experience in JavaScript",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#f9f871",
    },
    {
      skillName: "ReactJS",
      desc: "Hands on experience in ReactJS",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#00af91",
    },
    {
      skillName: "jQuery",
      desc: "Hands on experience in Html/Css",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "Bootstrap",
      desc: "Hands on experience in Html/Css",
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },{
      skillName: "Metarial ui",
      desc: "Hands on experience in Html/Css",
      value: 50,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "NodeJS",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "black",
    },
{
      skillName: "Python",
      desc: "Hands on experience in Html/Css",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "tomato",
    },
{
      skillName: "Django",
      desc: "Hands on experience in Html/Css",
      value: 72,
      textColor: colors.primaryColor,
      pathColor: "#54e346",
    },
{
      skillName: "Mongo DB",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "gold",
    },



    {
      skillName: "PHP",
      desc: "Hands on experience in Html/Css",
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#111d5e",
    },
    {
      skillName: "Mysql",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },
  ];

  return (
    <div className="b-container col-md-10 offset-md-1 bg-shadow-all">
      <div style={{ padding: "50px" }}>
         <div>
         <SmallHeading text="What I do" />
        <MediumHeading text="Specializing in" />
         </div>
        <div
          data-aos="fade-up"
          className="row"
        >
          {skills.map((skill, index) => (
           <div className="gx-3 col-md-6 ">
           <div className=" skill-card">
           <Skill
          key={index}
          skillName={skill.skillName}
          desc={skill.desc}
          value={skill.value}
          textColor={colors.primaryColor}
          pathColor={skill.pathColor}
        />
           </div>
         </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specializing;
