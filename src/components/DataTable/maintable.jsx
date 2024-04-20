import React from "react";
import FilterHeader from "../FilterHeader/filterHeader";
import DataTable from "./dataTable";

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