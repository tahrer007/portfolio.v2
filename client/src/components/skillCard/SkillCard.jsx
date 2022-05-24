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
                <div className="skillIcon">icon</div>
                <div className="cardTitle">{skill.title}</div>
                <div className="skillDetails">{skill.subTitle}</div>
                
                </div> 
            )
        })
    }
    
    
    </div>)
}
export default SkillCards ; 
