import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import RButton from "../Components/Reusable_Button";
import { Link } from "react-router";
import { BackendURL } from "../BackendContext";
import axios from "axios";
import Footer from "../Components/footer";

const PaidVideos = () => {

    const URL = BackendURL()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get(`${URL}/api/courses/get-courses`)
        .then(response => setCourses(response.data))
        .catch(error => console.error("Getting error in fetching courses: ",error))
    })

    return(
        <React.Fragment>
            <div className="main-box bg-white gap-10 items-center">
                
                <div className="w-full flex justify-between px-16 mt-32 items-center">
                    <h2 className="font-serif text-[#0BAFA6] text-4xl capitalize">Course Videos</h2>
                    <div className="w-[25%] flex">
                        <input
                            type="text"
                            placeholder="search for courses"
                            className="w-full border border-gray-300 rounded-md font-serif text-base capitalize p-3 focus:outline-none "
                        />
                        <button className="relative right-16 bg-[#0BAFA6] rounded-r-md rounded-none hover:border-[#0BAFA6] focus:outline-none hover:bg-transparent">
                            <MagnifyingGlassIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {(courses.length===0)? <p className="text-3xl font-serif font-semibold italic">No Courses have been uploaded</p>:
                <div className="w-full flex flex-wrap px-16 gap-16 justify-center">
                    {courses.map(course => (
                        <Link to={`/specificVideo/${course._id}`} style={{color:"unset"}}><div className="w-[280px] h-[330px] shadow-md rounded-xl flex flex-col items-center justify-between pb-4 cursor-pointer hover:scale-105">
                            <img src={course.thumbnail} alt="Product Picture" className="w-full max-h-[70%] object-cover rounded-t-xl" />
                            <div className="flex flex-col items center px-6">
                                <h5 className="font-serif text-black text-lg text-center">{course.name}</h5>
                                <p className="font-serif text-gray-400 text-center">{course.price}</p>
                            </div>
                            <RButton className="px-10">Add to Cart</RButton>
                        </div></Link>
                    ))}
                </div>
                }

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default PaidVideos