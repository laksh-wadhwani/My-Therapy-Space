import React from "react";
import Footer from "../Components/footer"
import Team1 from "../assets/team1.jpg"
import Team2 from "../assets/team2.png"
import Team3 from "../assets/team3.png"
import Team4 from "../assets/team4.jpg"
import Team5 from "../assets/team5.png"
import Team6 from "../assets/team6.jpg"
import Team7 from "../assets/team7.jpg"
import Team8 from "../assets/team8.jpg"
import Team9 from "../assets/team9.jpg"
import Team10 from "../assets/team10.jpg"
import TeamMember from "../assets/Team Member.png";
import RButton from "../Components/Reusable_Button";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router";

const Team = () => {

  const TeamMembersData = [
    { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
    // { name: "Trish Hill - Co Founder", designation: "Speech Pathologist", picture: `${TeamMember}` },
  ]

  return (
    <React.Fragment>
      <div className="main-box gap-20 bg-white">

        <div className="w-full flex flex-col gap-8 px-14 max-sm:px-8 mt-32 max-sm:mt-24 box-border">

          <div>
            <h2 className="font-serif text-3xl text-[#0BAFA6] capitalize">our team</h2>
            <p className="font-serif text-base text-black">Meet the people who listen, care, and walk with you every step of the way</p>
          </div>

          <div className="w-full grid grid-cols-5 max-sm:grid-cols-1 place-items-center gap-y-8 gap-x-4">
            {TeamMembersData.map(memebers => (
              <div className="w-62 h-70 flex flex-col items-center">
                <div className="w-full h-[80%] bg-[#ECF1ED] rounded-3xl">
                  <img src={memebers.picture} alt="Team Member" className="size-full object-contain" />
                </div>
                <h4 className="font-serif capitalize text-lg text-black">{memebers.name}</h4>
                <span className="font-serif text-base capitalize text-gray-500">{memebers.designation}</span>
              </div>
            ))}

          </div>

        </div>

        <div className="w-full px-14 max-sm:px-8 flex flex-col gap-6">
          <p className="font-serif text-2xl text-[#0BAFA6] capitalize">Meet Our Team</p>
          <div className="flex gap-4 overflow-x-auto scroll-smooth">
            <img src={Team4} alt="Team Member 1" className="w-80 max-sm:w-full h-45 rounded-xl object-cover flex-shrink-0" />
            <img src={Team5} alt="Team Member 2" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" />
            <img src={Team6} alt="Team Member 3" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" />
            <img src={Team7} alt="Team Member 4" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" />
            <img src={Team8} alt="Team Member 5" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" />
            <img src={Team9} alt="Team Member 6" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" />
            <img src={Team10} alt="Team Member 7" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" />
          </div>
        </div>

        <div className="w-full flex flex-col gap-8 px-14 max-sm:px-8">
          
          <h2 className="font-serif text-3xl max-sm:text-2xl text-[#0BAFA6] capitalize">join our team</h2>

          <div className="w-full flex max-sm:flex-col-reverse gap-16 max-sm:gap-4 h-[520px] max-sm:h-auto">

            <div className="flex flex-col items-start justify-between max-sm:gap-8">
              <p className="font-serif text-xl max-sm:text-lg text-justify max-sm:text-left text-black font-light leading-[3.25rem] max-sm:leading-7">If you are an allied health professional who is passionate about working with children and teenagers then My Therapy Space is for you.  We provide a flexible, supportive, multi disciplinary team experience.  We are driven to provide the best possible service for families that is family centred, and driven by families.  Staff are offered a flexible working environment, with regular supervision/mentoring and professional development. If this resonates with you, then please contact us to discuss further.</p>
              <Link to="/contact"><CustomButton>Apply Now</CustomButton></Link>
            </div>

            <div className="flex-shrink-0 w-[50%] max-sm:w-full h-[500px] overflow-hidden rounded-xl shadow-lg">
              <img
                src={Team1}
                alt="Team Image 2"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div className="w-full flex max-sm:flex-col gap-16 max-sm:gap-4 h-[643px] max-sm:h-auto">
            <img src={Team2} alt="" className="object-cover rounded-xl" />
            <div className="flex flex-col items-start gap-4 max-sm:gap-2">
              <strong className="font-serif text-2xl max-sm:text-xl text-justify max-sm:text-left text-black">What Makes My Therapy Space Different?</strong>
              <p className="font-serif text-xl max-sm:text-lg text-justify max-sm:text-left text-black font-light leading-[2.5rem]">Since opening a Speech Pathology private practice in 2001, directors Trish and Lisa have dreamt about forming the perfect multi disciplinary team. In 2018 that dream came true and My Therapy Space was born! Seven of our staff members had worked for between 5 & 20 years at a government organisation together. Our team is a wonderful combination of fabulous people working closely as a multi disciplinary team that supports children with all types of presenting difficulties, as well as teenagers and young adults with disabilities. We provide Speech Pathology, Occupational Therapy, and Dietician services.<br />The directors live and breathe our company and work alongside all the therapists daily on the ground. There is no corporate structure here! Only people who truly care for their staff and the families we support. They work hard to recruit exactly the right people that will fit with our company culture of being fun, innovative and caring.</p>
            </div>
          </div>

          <div className="w-full flex max-sm:flex-col-reverse gap-16 max-sm:gap-4 h-[682px] max-sm:h-auto">
            <div className="flex flex-col items-start gap-4 max-sm:gap-2">
              <strong className="font-serif text-2xl max-sm:text-xl text-justify max-sm:text-left text-black">New Graduate? Only Worked a Year in Pediatrics?</strong>
              <p className="font-serif text-xl max-sm:text-lg text-justify max-sm:text-left text-black font-light leading-[2.75rem] max-sm:leading-8">If you’re a new graduate or early career clinician in your first two years of working in paediatrics, we have a specialised program for you: .We know it’s daunting entering the workforce as an allied health new graduate, especially going into a private practice. Our company is passionate about nurturing our early career clinicians, by having a well developed new graduate program that helps you ease into the working world. We do this by a slow build up of your caseload, weekly supervision, a second weekly support session and training program, on tap access to directors to support you, a generous professional development budget, reasonable client numbers of 20 hours per week so adequate time for research, planning and thinking. The majority of our sessions are within the clinic so you’re not spending a lot of time travelling and you will have access to a wonderful experienced team. New graduates will also have the other new grad members on the team for moral support!</p>
            </div>
            <img src={Team3} alt="" className="object-cover rounded-xl" />
          </div>

        </div>

        <div className="w-full flex flex-col gap-12 px-14 pb-12 items-center bg-[#f9fdfd] text-black">
          {/* Section Title */}
          <p className="font-serif text-3xl text-black self-start">Benefits and Perks for All Staff</p>

          {/* Grid of benefits cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Example Card */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Supportive Team</h3>
              <p>A wonderful, supportive and fun team of 17 therapists who genuinely care for each other.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Experienced Clinicians</h3>
              <p>6 senior clinicians with over 20 years experience each.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Detailed Onboarding</h3>
              <p>A structured onboarding program gradually builds your caseload while increasing confidence in clinic procedures.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Realistic Billable Hours</h3>
              <p>Direct sessions, report writing, and travel with clear expectations for each stage of your career.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Staff Meetings & Collaboration</h3>
              <p>Fortnightly meetings, multi-disciplinary sessions, and observation opportunities to learn from each other.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Beautiful Offices & Location</h3>
              <p>Brand new offices with extensive resources, equipment, toys, and next to shops, restaurants, and public transport.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Flexible Working Hours</h3>
              <p>Options like 8am-4pm, 10am-6pm, or RDO arrangements for work-life balance.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Above Award Pay & Bonuses</h3>
              <p>Competitive pay rates and performance bonuses.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Employee Assistance Program</h3>
              <p>Free access to psychology counselling for work or life challenges.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Professional Development</h3>
              <p>Generous allowance including 3 paid days annually for training and development.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
              <h3 className="font-bold text-lg">Regular Social Events</h3>
              <p>Team-building events to foster a fun and collaborative culture.</p>
            </div>
          </div>
            <Link to="/contact"><CustomButton className="px-7 py-3 mt-6">Join Now</CustomButton></Link>
        </div>

        <Footer />

      </div>
    </React.Fragment>
  )
}

export default Team