import React, { useEffect } from "react";
import './statusdetails.scss'

const StatusDetails =((prop)=>{
    useEffect(()=>{
        console.log('darta',prop)
    },[])
    return(
        <>
        <div className="statusobj">
            <div className="statusheader">
                <h3>{prop.data.title}</h3>
                <p style={{fontSize:'16px',color:'#0A66C2',textDecoration:'underline'}}>View All</p>
            </div>
            {
                prop.data.data.map((obj,index)=>{
                    return  <StatusComponent obj={obj} key={index} isImage={prop.data.isImage} isButton={prop.data.isButton}/>
                })
            }
           
        
        </div>
        </>
    )

})

const StatusComponent =((prop)=>{

    return(
        <>
        <div className="statusdetails">
            {prop.isImage?<img src={prop.obj.img} style={{width:'40px',height:'40px'}}></img>: <div className="dateBox">
                <p>{prop.obj.date}</p>
                <p>{prop.obj.month}</p>
            </div>}
           
            <div className="employee-details">
                <p className="emp-title">{prop.obj.title}{prop.obj.isFirst?<span  className="spl-class">{prop.obj.spl}</span>:''}</p>
                <p style={{fontSize:'12px',fontWeight:'400'}}>{prop.obj.second}{prop.obj.isFirst==false?<span className="spl-class">{prop.obj.spl}</span>:''}</p>
                <p style={{fontSize:'10px'}}>{prop.obj.thired}</p>
            </div>
            {prop.isButton?<div style={{display:'flex',justifyContent:'end'}}><button className={prop.obj.buttontype=='fill'?'but fill':'but unfill'}>Details</button></div>:<div></div>}
        </div>
        </>
    )
})

export default StatusDetails