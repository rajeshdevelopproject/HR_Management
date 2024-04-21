import React from "react";
import FilterHeader from "../FilterHeader/filterHeader";
import DataTable from "./dataTable";
import './maintable.scss'

const MainTable =(()=>{
    return(
        <>
        <div className="maintable">
            <FilterHeader />
            <DataTable />
        </div>
        </>
    )
})

export default MainTable