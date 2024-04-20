import React from "react";
import './searchbar.scss'
import { IoSearchOutline } from "react-icons/io5";

const Searchbar =(()=>{
    return(
        <>
        <input placeholder="Search" type="text" ></input><IoSearchOutline className="search-icon"></IoSearchOutline>        
        </>
    )
})

export default Searchbar