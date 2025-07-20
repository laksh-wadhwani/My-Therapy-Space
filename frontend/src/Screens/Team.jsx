import React from "react";
import Team1 from "../assets/team1.png"
import Team2 from "../assets/team2.png"
import Team3 from "../assets/team3.png"
import RButton from "../Components/Reusable_Button";

const Team = () => {
    return(
        <React.Fragment>
            <div className="main-box">

                <div className="w-full flex flex-col gap-20 px-14 mt-32">
                    <h2 className="font-serif text-3xl text-[#0BAFA6] capitalize">join our team</h2>
                    <div className="w-full flex gap-16">
                        <div className="flex flex-col items-start justify-between">
                            <p className="font-serif text-2xl text-justify text-black">If you are an allied health professional who is passionate about working with children and teenagers then My Therapy Space is for you.  We provide a flexible, supportive, multi disciplinary team experience.  We are driven to provide the best possible service for families that is family centred, and driven by families.  Staff are offered a flexible working environment, with regular supervision/mentoring and professional development. If this resonates with you, then please contact us to discuss further.</p>
                            <RButton className="px-7 py-3">Apply Now</RButton>
                        </div>
                        <img src={Team1} alt="" />
                    </div>
                    <div></div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Team