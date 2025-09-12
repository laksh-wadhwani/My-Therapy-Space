import React from "react";
import { Helmet } from 'react-helmet-async'; // <-- Import Helmet
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
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router";
import { BackendURL } from "../BackendContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Modal from "react-responsive-modal";

const Team = () => {

  const URL = BackendURL();
  const [open, setOpen] = useState(false)
  const [members, setMembers] = useState([])
  const [member, setMember] = useState()

  useEffect(() => {
    axios.get(`${URL}/api/team/get-team-members`)
      .then(response => setMembers(response.data))
      .catch(error => console.error("Getting error in fetching team member details: ", error))
  })

  const SeeMemberDetails = member => {
    setOpen(true)
    setMember(member)
  }

  return (
    <React.Fragment>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>Our Expert Team | Pediatric Therapists & Specialists | My Therapy Space</title>
        <meta name="description" content="Meet our multidisciplinary team of expert pediatric speech pathologists, occupational therapists, and dietitians on the Gold Coast. Learn about our neurodiversity-affirming, family-centred approach." />
        <meta name="keywords" content="pediatric speech pathologist, occupational therapist gold coast, multidisciplinary team, NDIS therapists, therapy assistants, key worker model, neurodiversity affirming, family centred practice" />
        <link rel="canonical" href="https://mytherapyspace.com.au/Team" />
      </Helmet>

      <div className="main-box gap-10 xl:gap-20 bg-white">

        {/* ================= MAIN HEADING ================= */}
        <div className="w-full flex flex-col gap-8 px-8 mt-24 box-border">
          <div className="max-sm:text-center">
            <h1 className="font-serif text-3xl md:text-4xl text-[#0BAFA6] capitalize">Our Expert Therapy Team</h1>
            <p className="font-serif text-base text-black">Meet our dedicated <strong>multidisciplinary team</strong> of allied health professionals who listen, care, and walk with you every step of the way.</p> {/* Added strong tag */}
          </div>

          {/* ================= TEAM MEMBER GRID ================= */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-y-8 gap-x-4">
            {members.map(member => (
              <div className="w-62 h-70 flex flex-col items-center cursor-pointer hover:scale-105" onClick={() => SeeMemberDetails(member)}>
                <div className="w-full h-[80%] bg-[#ECF1ED] rounded-3xl">
                  <img src={member.profile} alt={`${member.name}, ${member.designation} at My Therapy Space`} className="size-full object-contain" /> {/* Improved alt text */}
                </div>
                <h4 className="font-serif capitalize text-lg text-black">{member.name}</h4>
                <span className="font-serif text-base capitalize text-gray-500">{member.designation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TEAM PHOTOS SECTION ================= */}
        <div className="w-full px-8 flex flex-col gap-6">
          <p className="font-serif text-3xl md:text-4xl text-[#0BAFA6] capitalize max-sm:text-center">Our Team in Action</p> {/* Slightly more descriptive title */}
          <div className="flex gap-4 overflow-x-auto scroll-smooth pb-4">
            <img src={Team4} alt="Speech pathologist using AAC with a child" className="w-80 max-sm:w-full h-45 rounded-xl object-cover flex-shrink-0" /> {/* Improved alt text */}
            <img src={Team5} alt="Occupational therapy session for sensory processing" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" /> {/* Improved alt text */}
            <img src={Team6} alt="Group therapy session at our Gold Coast clinic" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" /> {/* Improved alt text */}
            <img src={Team7} alt="Child dietitian consultation for feeding difficulties" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" /> {/* Improved alt text */}
            <img src={Team8} alt="Therapist and child engaged in play-based learning" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" /> {/* Improved alt text */}
            <img src={Team9} alt="Early intervention therapy in a supportive environment" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" /> {/* Improved alt text */}
            <img src={Team10} alt="Multi-disciplinary team collaboration meeting" className="w-80 h-45 rounded-xl object-cover flex-shrink-0" /> {/* Improved alt text */}
          </div>
        </div>

        {/* ================= JOIN OUR TEAM SECTION ================= */}
        <div className="w-full flex flex-col gap-8 md:gap-16 lg:gap-12 px-8">

          <h2 className="font-serif text-3xl md:text-4xl text-[#0BAFA6] capitalize max-sm:text-center">Join Our Team</h2>

          <div className="w-full flex flex-col-reverse md:flex-row gap-4 lg:gap-12 h-auto">

            <div className="flex flex-col items-start justify-between gap-8">
              <p className="font-serif text-lg lg:text-xl text-left lg:text-justify text-black font-light leading-7 md:leading-[2rem] lg:leading-[2.25rem] xl:leading-[3.25rem]">If you are an allied health professional who is passionate about working with children and teenagers then My Therapy Space is for you.  We provide a flexible, supportive, <strong>multi disciplinary team</strong> experience.  We are driven to provide the best possible service for families that is <strong>family centred</strong>, and driven by families.  Staff are offered a flexible working environment, with regular supervision/mentoring and professional development. If this resonates with you, then please contact us to discuss further.</p> {/* Added strong tags */}
              <Link to="/contact"><CustomButton>Apply Now</CustomButton></Link>
            </div>

            <div className="flex-shrink-0 w-full md:w-[50%] h-[500px] overflow-hidden rounded-xl shadow-lg">
              <img
                src={Team1}
                alt="Collaborative multi-disciplinary team meeting at My Therapy Space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-12 h-auto">

            <img src={Team2} alt="Directors Trish and Lisa of My Therapy Space" className="object-cover rounded-xl md:w-[50%] md:h-[600px] lg:h-[630px]" />

            <div className="flex flex-col items-start gap-2">
              <strong className="font-serif text-lg lg:text-xl xl:text-2xl text-black">What Makes Our Pediatric Therapy Team Different?</strong> {/* Slightly more descriptive */}
              <p className="font-serif text-base lg:text-lg xl:text-xl text-left lg:text-justify text-black font-light xl:leading-[2.75rem]">Since opening a <strong>Speech Pathology</strong> private practice in 2001, directors Trish and Lisa have dreamt about forming the perfect <strong>multi disciplinary team</strong>. In 2018 that dream came true and My Therapy Space was born! Seven of our staff members had worked for between 5 & 20 years at a government organisation together. Our team is a wonderful combination of fabulous people working closely as a <strong>multi disciplinary team</strong> that supports children with all types of presenting difficulties, as well as teenagers and young adults with disabilities. We provide <strong>Speech Pathology, Occupational Therapy, and Dietician</strong> services.<br />The directors live and breathe our company and work alongside all the therapists daily on the ground. There is no corporate structure here! Only people who truly care for their staff and the families we support. They work hard to recruit exactly the right people that will fit with our company culture of being fun, innovative and caring.</p> {/* Added strong tags */}
            </div>

          </div>

          <div className="w-full flex flex-col-reverse md:flex-row gap-4 lg:gap-12 h-auto">

            <div className="flex flex-col items-start gap-2">
              <strong className="font-serif text-lg lg:text-xl xl:text-2xl text-left text-black">New Graduate or Early Career Pediatric Therapist?</strong> 
              <p className="font-serif text-lg md:text-base lg:text-lg xl:text-xl text-left text-black font-light leading-8 xl:leading-[3.75rem]">If you’re a new graduate or early career clinician in your first two years of working in paediatrics, we have a specialised program for you. We know it’s daunting entering the workforce as an allied health new graduate, especially going into a private practice. Our company is passionate about nurturing our early career clinicians, by having a well developed <strong>new graduate program</strong> that helps you ease into the working world. We do this by a slow build up of your caseload, weekly supervision, a second weekly support session and training program, on tap access to directors to support you, a generous professional development budget, reasonable client numbers of 20 hours per week so adequate time for research, planning and thinking. The majority of our sessions are within the clinic so you’re not spending a lot of time travelling and you will have access to a wonderful experienced team. New graduates will also have the other new grad members on the team for moral support!</p> {/* Added strong tag */}
            </div>

            <img src={Team3} alt="Mentoring and support for new graduate therapists" className="object-cover rounded-xl md:w-[50%]" /> 
          </div>
        </div>

        {/* ================= BENEFITS SECTION ================= */}
        <div className="w-full flex flex-col gap-4 px-8 items-center bg-[#f9fdfd] text-black">
          
          <p className="font-serif text-3xl text-black self-start max-sm:text-center">Benefits and Perks for All Staff</p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
           
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

          <Link to="/contact"><CustomButton className="px-6 py-3 mt-4">Join Now</CustomButton></Link>
        </div>

        <Footer />
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center
        styles={{ closeButton: { display: 'none' }, modal: { borderRadius: ".8rem" } }}>
        {member && (<div className="w-auto flex flex-col items-center px-16 max-sm:px-0">
          <div className="w-64 max-sm:w-38 h-72 max-sm:h-48 flex flex-col items-center">
            <div className="w-full h-[75%] max-sm:h-[60%] bg-[#ECF1ED] rounded-3xl max-sm:rounded-xl">
              <img src={member.profile} alt={`Profile of ${member.name}, ${member.designation}`} className="size-full object-contain" /> {/* Improved alt text */}
            </div>
            <h4 className="font-serif capitalize text-lg max-sm:text-sm text-black">{member.name}</h4>
            <span className="font-serif text-base max-sm:text-sm capitalize text-gray-500">{member.designation}</span>
          </div>
          <p className="font-serif text-base max-sm:text-xs text-center">{member.description}</p>
        </div>)}
      </Modal>
    </React.Fragment>
  )
}

export default Team