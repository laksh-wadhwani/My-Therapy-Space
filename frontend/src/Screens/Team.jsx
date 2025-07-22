import React from "react";
import Team1 from "../assets/team1.png"
import Team2 from "../assets/team2.png"
import Team3 from "../assets/team3.png"
import TeamMember from "../assets/Team Member.png";
import RButton from "../Components/Reusable_Button";

const Team = () => {

    const TeamMembersData = [
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},        
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`}, 
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`}, 
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`}, 
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
        {name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}`},
    ]

    const JoinTeam = [
        
    ]

    return(
        <React.Fragment>
            <div className="main-box">

                <div className="w-full flex flex-col gap-8 px-14 mt-32 box-border">
                    <div>
                        <h2 className="font-serif text-3xl text-[#0BAFA6] capitalize">our team</h2>
                        <p className="font-serif text-base text-black">Meet the people who listen, care, and walk with you every step of the way</p>
                    </div>

                    <div className="w-full flex flex-wrap justify-center gap-20 px-16">
                        {TeamMembersData.map(memebers => (
                            <div className="w-[249px] h-[277px] flex flex-col items-center">
                            <div className="w-full h-[80%] bg-[#ECF1ED] rounded-3xl">
                                <img src={memebers.picture} alt="Team Member" className="size-full object-contain"/>
                            </div>
                            <h4 className="font-serif capitalize text-lg text-black">{memebers.name}</h4>
                            <span className="font-serif text-base capitalize text-gray-500">{memebers.designation}</span>

                        </div>
                        ))}
                        
                    </div>

                </div>

                {/* <div className="w-full flex flex-col gap-20 px-14">
                    <h2 className="font-serif text-3xl text-[#0BAFA6] capitalize">join our team</h2>
                    <div className="w-full flex gap-16">
                        <div className="flex flex-col items-start justify-between">
                            <p className="font-serif text-2xl text-justify text-black">If you are an allied health professional who is passionate about working with children and teenagers then My Therapy Space is for you.  We provide a flexible, supportive, multi disciplinary team experience.  We are driven to provide the best possible service for families that is family centred, and driven by families.  Staff are offered a flexible working environment, with regular supervision/mentoring and professional development. If this resonates with you, then please contact us to discuss further.</p>
                            <RButton className="px-7 py-3">Apply Now</RButton>
                        </div>
                        <img src={Team1} alt="" />
                    </div>
                </div> */}

            </div>
        </React.Fragment>
    )
}

export default Team