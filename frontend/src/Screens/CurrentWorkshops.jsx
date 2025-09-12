import React, { useEffect, useState } from "react";
import RButton from "../Components/Reusable_Button";
import Footer from "../Components/footer";
import { BackendURL } from "../BackendContext";
import axios from "axios";
import { Link } from "react-router";

const CurrentWorkshops = () => {

    const URL = BackendURL();
    const [currentWorkshops, setCurrentWorkshops] = useState([])

    useEffect(() => {
        axios.get(`${URL}/api/workshops/get-all-workshop`)
        .then(response => {
            const activeWorkshops = response.data.filter(workshop => workshop.status === "Active")
            setCurrentWorkshops(activeWorkshops)
        })
        .catch(error => console.error("Getting error in fetching current workshops: ",error))
    }) 

    return(
        <React.Fragment>
            <div className="main-box bg-[#E0F4F5] gap-12 min-h-screen">

                <div className="flex-1 w-full px-8 lg:px-14 mt-24 lg:mt-32 max-sm:text-center">
                    <h2 className="font-serif text-4xl capitalize text-[#0BAFA6]">Current Workshops</h2>
                    <p className="font-serif text-black text-lg">Following are the details for our current workshop groups:</p>
                </div>

                {(currentWorkshops.length === 0)? <p className="text-2xl lg:text-3xl text-center font-serif font-semibold italic">No Workshops have been uploaded</p>
                :
                <>
                <div className="w-full px-8 lg:px-14 flex justify-center flex-wrap gap-12">
                    {currentWorkshops.map(group => (
                        <img src={group.workshopImage} alt="Group Campaign Image" className="shadow-md" />
                    ))}
                </div>
                <div className="w-full flex flex-col items-center gap-4 px-8 lg:px-14">
                    <p className="font-serif text-base text-black text-center">Please contact reception if you would like us to attend one of these programs</p>
                    <Link to="/contact"><RButton className="px-7 py-3">Click Here</RButton></Link>
                </div>
                </>
                }

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default CurrentWorkshops
