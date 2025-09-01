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
            <div className="main-box bg-white gap-12">

                <div className="w-full px-16 max-sm:px-8 mt-32 max-sm:mt-24">
                    <h2 className="font-serif text-4xl max-sm:text-3xl capitalize text-[#0BAFA6]">Current Workshops</h2>
                    <p className="font-serif text-black text-xl max-sm:text-base">Following are the details for our current workshop groups:</p>
                </div>

                {(currentWorkshops.length===0)? <p className="text-3xl font-serif font-semibold italic">No Workshops have been uploaded</p>:
                <div className="w-full px-16 flex justify-center flex-wrap gap-12">
                    {currentWorkshops.map(group => (
                        <img src={group.workshopImage} alt="Group Campaign Image" className="shadow-md" />
                    ))}
                </div>
                }

                <div className="w-full flex flex-col items-center gap-4 max-sm:px-8">
                    <p className="font-serif text-2xl max-sm:text-base text-black text-center">Please contact reception if you would like us to attend one of these programs</p>
                    <Link to="/contact"><RButton className="px-7 py-3">Click Here</RButton></Link>
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default CurrentWorkshops
