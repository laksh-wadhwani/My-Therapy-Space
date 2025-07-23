import React from "react";
import Footer from "../Components/footer"
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
            <div className="main-box gap-20">

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

                <div className="w-full flex flex-col gap-8 px-14">
                    <h2 className="font-serif text-3xl text-[#0BAFA6] capitalize">join our team</h2>

                    <div className="w-full flex gap-16 max-h-[520px]">
                        <div className="flex flex-col items-start justify-between">
                            <p className="font-serif text-xl text-justify text-black font-light leading-[3.25rem]">If you are an allied health professional who is passionate about working with children and teenagers then My Therapy Space is for you.  We provide a flexible, supportive, multi disciplinary team experience.  We are driven to provide the best possible service for families that is family centred, and driven by families.  Staff are offered a flexible working environment, with regular supervision/mentoring and professional development. If this resonates with you, then please contact us to discuss further.</p>
                            <RButton className="px-7 py-3">Apply Now</RButton>
                        </div>
                        <img src={Team1} alt="" className="object-cover rounded-xl" />
                    </div>

                    <div className="w-full flex gap-16 mt-8 max-h-[643px]">
                        <img src={Team2} alt="" className="object-cover rounded-xl" />
                        <div className="flex flex-col items-start gap-4">
                            <strong className="font-serif text-2xl text-justify text-black">What Makes My Therapy Space Different?</strong>
                            <p className="font-serif text-xl text-justify text-black font-light leading-[2.5rem]">Since opening a Speech Pathology private practice in 2001, directors Trish and Lisa have dreamt about forming the perfect multi disciplinary team. In 2018 that dream came true and My Therapy Space was born! Seven of our staff members had worked for between 5 & 20 years at a government organisation together. Our team is a wonderful combination of fabulous people working closely as a multi disciplinary team that supports children with all types of presenting difficulties, as well as teenagers and young adults with disabilities. We provide Speech Pathology, Occupational Therapy, and Dietician services.<br/>The directors live and breathe our company and work alongside all the therapists daily on the ground. There is no corporate structure here! Only people who truly care for their staff and the families we support. They work hard to recruit exactly the right people that will fit with our company culture of being fun, innovative and caring.</p>
                        </div>
                    </div>

                    <div className="w-full flex gap-16 mt-8 max-h-[682px]">
                        <div className="flex flex-col items-start gap-4">
                            <strong className="font-serif text-2xl text-justify text-black">New Graduate? Only Worked a Year in Pediatrics?</strong>
                            <p className="font-serif text-xl text-justify text-black font-light leading-[2.75rem]">If you’re a new graduate or early career clinician in your first two years of working in paediatrics, we have a specialised program for you: .We know it’s daunting entering the workforce as an allied health new graduate, especially going into a private practice. Our company is passionate about nurturing our early career clinicians, by having a well developed new graduate program that helps you ease into the working world. We do this by a slow build up of your caseload, weekly supervision, a second weekly support session and training program, on tap access to directors to support you, a generous professional development budget, reasonable client numbers of 20 hours per week so adequate time for research, planning and thinking. The majority of our sessions are within the clinic so you’re not spending a lot of time travelling and you will have access to a wonderful experienced team. New graduates will also have the other new grad members on the team for moral support!</p>
                        </div>
                        <img src={Team3} alt="" className="object-cover rounded-xl" />
                    </div>

                </div>

                <div className="w-full flex flex-col gap-8 px-14 pb-12 items-center">
                    <p className="font-serif text-3xl text-black self-start">Benefits and Perks for All Staff</p>
                    <ul className="list-disc pl-5 font-serif text-lg text-black flex flex-col gap-4 text-justify">
                        <li>A wonderful, supportive and fun team of 17 therapists who genuinely care for each other.</li>
                        <li>6 senior clinicians with over 20 years experience each.</li>
                        <li>A detailed onboarding program where you will be allowed the time to fully understand the clinic and our process. Depending on experience, each clinician will gradually build up your client caseload while you build confidence in working with our procedures.</li>
                        <li>Realistic expectations for billable hours for all staff (at 20 hours per week for staff in first two years of graduating, building up to a maximum of 25 hours after 10 years experience). This includes direct sessions with clients, report writing and travel.</li>
                        <li>Fortnightly staff meetings and interaction with your team to brainstorm ideas.</li>
                        <li>Shared multi disciplinary sessions and observation sessions to learn from each other.</li>
                        <li>Beautiful brand new offices with extensive resources, equipment and toys.</li>
                        <li>Next door to shops, restaurants and public transport.</li>
                        <li>Flexible working hours, we know you and your family come first. There are options for 8am-4pm days, or 10am-6pm days and all the options in between! Some staff work slightly longer each day and have an RDO once a month.</li>
                        <li>Above award pay rates and bonuses</li>
                        <li>Free access to an “employee assistance program” which provides Psychology counselling for work or life challenges.</li>
                        <li>A generous Professional Development allowance including 3 paid days annually to attend training.</li>
                        <li>Regular social events as a team</li>
                    </ul>
                    <RButton className="px-7 py-3">Join Now</RButton>
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default Team