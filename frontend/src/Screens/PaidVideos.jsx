import React, { useEffect, useState } from "react";
import RButton from "../Components/Reusable_Button";
import { Link } from "react-router";
import { BackendURL } from "../BackendContext";
import axios from "axios";
import Footer from "../Components/footer";
import CustomButton from "../Components/CustomButton";

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
            <div className="main-box bg-[#E0F4F5] gap-6 md:gap-10 items-center min-h-screen">
                
                <h2 className="flex-1 md:self-start font-serif text-[#0BAFA6] text-3xl md:text-4xl capitalize mt-24 lg:mt-32 px-8 md:px-14">Course Videos</h2>

                {(courses.length===0)? <p className="text-3xl text-center font-serif font-semibold italic">No Courses have been uploaded</p>:
                <div className="w-full flex flex-wrap px-8 md:px-14 gap-16 justify-center">
                    {courses.map(course => (
                        <Link to={`/specificVideo/${course._id}`} style={{color:"unset"}}><div className="w-[280px] h-[330px] shadow-md rounded-xl flex flex-col items-center justify-between pb-4 cursor-pointer hover:scale-105">
                            <img src={course.thumbnail} alt="Product Picture" className="w-full max-h-[70%] object-cover rounded-t-xl" />
                            <div className="flex flex-col items center px-6">
                                <h5 className="font-serif text-black text-lg font-semibold text-center">{course.name}</h5>
                                <p className="font-serif text-gray-400 text-center">{course.price}</p>
                            </div>
                            {/* <CustomButton>Add to Cart</CustomButton> */}
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