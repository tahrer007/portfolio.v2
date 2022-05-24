import React, { useEffect } from "react";
import "./skillCards.css";
import {skillsDetails} from "../../data/AboutPageData"


const SkillCards =()=>{
    useEffect(()=>{
        console.log(skillsDetails[0].title);
    },[])

    return (<div className="skillsIconsContainer"> 
    
    {
        skillsDetails.map((skill,index)=>{
            return (
                <div className="skillCard"
                key={index}
                >  
                <div className="iconBox"> <img src={skill.icon} alt={skill.title}/></div>
                <div className="cardTitle">{skill.title}</div>
                <div className="skillDetails">{skill.details}</div>
                
                </div> 
            )
        })
    }
    
    
    </div>)
}
export default SkillCards ; 
