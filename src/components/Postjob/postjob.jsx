import React from "react"
import './postjob.scss'
import { IoFilterSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowRoundUp } from "react-icons/io";
import FilterHeader from "../FilterHeader/filterHeader";

const PostJob = (() => {
    return (
        <>


            <div className="postJob">
                <div className="postHeader">
                    <FilterHeader ></FilterHeader>
                    {/* <div className="post-title-div">
                    <div className="post-title">
                        <span>Posted Jobs</span>
                    </div>
                    <a href="">View All</a>
                </div>
                <div className="searchFilter">
                    <div className="inputDiv">
                        <input></input>
                    </div>
                    
                    <div className="filter">
                        <IoFilterSharp className="filter_icon"></IoFilterSharp>
                        <span>Filter</span>
                    </div>
                </div>  */}

                </div>
                <div className="tap">
                    <div className="firstChild">Active Jobs</div>
                    <div className="secoundChild">Pending Jobs</div>
                </div>

                <div className="overAllCard">
                    <JobCard></JobCard>
                </div>
            </div>
        </>
    )
})

const JobCard = (() => {

    let jobs = [
        {
            jobTitle: 'Python Developers',
            role: 'Senior Developers',
            count: '258',
            img: './python_logo.png',
            title: "Python"
        },
        {
            jobTitle: 'Angular Developers',
            role: 'Senior Developers',
            count: '258',
            img: './anguler.png',
            title: "Angular"
        },
        {
            jobTitle: 'Java Developers',
            role: 'Senior Developers',
            count: '258',
            img: './java.png',
            title: "Java"
        }
    ]
    return (
        <>
            {
                jobs && jobs.length > 0 && jobs.map(res => {

                    return <div className='jobcard'>
                        <div className="jobhead">
                            <img src={res.img} style={{ width: '20px', height: '20px', marginTop: '5px' }} />
                            <p style={{ textAlign: 'start' }}>{res.jobTitle}</p>
                            <CiMenuKebab></CiMenuKebab>
                        </div>
                        <div className="jobmiddle">
                            <p style={{ paddingTop: '10px' }}>Senior Developer</p>
                            <div className="count" style={res.title == "Python" ? { backgroundColor: '#D9E4EF',color:'#0A66C2' } : res.title == "Angular" ? { backgroundColor: '#73A1FB' } : { backgroundColor: '#2F73A0' }}>258</div>
                            <p>
                                Total Applications
                            </p>
                        </div>
                        <div className="jobbottom">
                            <div>
                                <IoIosArrowRoundUp style={{ width: '30px', height: '30px', color: '#0A66C2' }} />
                                <span style={{ color: '#0A66C2' }}>28% </span>
                                <span>vs Last month</span>
                            </div>
                            <div>6 min ago</div>
                        </div>
                    </div>
                })
            }
        </>
    )
})

export default PostJob