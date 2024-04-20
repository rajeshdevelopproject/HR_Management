import React, { useEffect, useState } from "react";
import {CandidateStatus} from '../../data/data'
import { FaRegEye } from "react-icons/fa6";
import './dataTable.scss'

const DataTable =(()=>{

    let [data,setData] = useState({})
    let [loading,setLoading] = useState(true)
    useEffect(()=>{
        let value = CandidateStatus()
        console.log('value',value)
        setData(value)
        setLoading(false)
    },[])

    return(
        <>
        {loading?<>Data is Loading</>:
        <table>
            <thead>
                <tr>
                    {data['header'].map((obj)=>{
                        return <th key={`${obj.key}k`} style={{width:obj.width}}>
                        {obj['Displayname']}
                        </th>
                    })}
                </tr>
            </thead>
            <tbody>
                
                    {
                        data['data'].map((val,index)=>{
                            return<>
                            <tr key={index}>
                            <td  style={{width:data['header'][0].width}}>#{val.jobid}</td>
                            <td  style={{width:data['header'][1].width}}>{val.name}</td>
                            <td  style={{width:data['header'][2].width}}>{val.position}</td>
                            <td  style={{width:data['header'][3].width}}>{val['1stlevel'] !=0?val['1stlevel']:<div className="reject-div"><p className="reject-box"><span className="reject-text">X</span></p></div>}</td>
                            <td  style={{width:data['header'][4].width}}>{val['2ndlevel']!=0?val['2ndlevel']:<div className="reject-div"><p className="reject-box"><span className="reject-text">X</span></p></div>}</td>
                            <td style={{width:data['header'][5].width}}>{val['3rdlevel']!=0?val['3rdlevel']:<div className="reject-div"><p className="reject-box"><span className="reject-text">X</span></p></div>}</td>
                            <td  style={{width:data['header'][6].width}}>{val['4thlevel']!=0?val['4thlevel']:<div className="reject-div"><p className="reject-box"><span className="reject-text">X</span></p></div>}</td>
                            <td  style={{width:data['header'][7].width}}>{val['totalmarks']}</td>
                            <td  style={{width:data['header'][8].width}} ><div className="status-div"><p className={val['status']}><span>{val['status']}</span></p></div></td>
                            <td  style={{width:data['header'][9].width}}><FaRegEye/></td>
                    </tr>
                    </>

                })
                    }
            
            </tbody>
        </table>
        }
        </>
    )


})

export default DataTable