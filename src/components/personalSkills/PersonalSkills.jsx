import React, { useEffect } from "react";
import "./personalSkills.scss";
import {skillsDetails} from "../../data/personalData"


const PersonalSkills =()=>{
    useEffect(()=>{
        console.log(skillsDetails[0].title);
    },[])

    return (<div className="personalSkills"> 
    
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
export default PersonalSkills ; 
