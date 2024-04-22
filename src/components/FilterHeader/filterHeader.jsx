
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import './filterHeader.scss'

const FilterHeader =(()=>{
    return(
        <>
        <div className="filter-header">
            <div className="light-tittle">
                <p className="title">Posted Jobs</p>
                <p style={{fontSize:'16px',color:'#0A66C2',textDecoration:'underline'}}>View All</p>
            </div>
           <div className="left-filter">
                <div className="input-div">
                    <input placeholder="Search" type="text" ></input><IoSearchOutline className="search-icon"></IoSearchOutline>    
                </div>
                <div className="filter">
                        <IoFilterSharp className="filter_icon"></IoFilterSharp>
                        <span>Filters</span>
                </div>
           </div>

        </div>
        </>
    )
})

export default FilterHeader