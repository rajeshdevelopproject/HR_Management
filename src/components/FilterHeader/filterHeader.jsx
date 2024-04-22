
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
                <a href="" style={{fontWeight:'bold'}}>View All</a>
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