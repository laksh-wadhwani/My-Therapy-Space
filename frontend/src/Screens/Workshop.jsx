import React from "react";
import Workshop1 from "../assets/workshop1.png"
import Workshop2 from "../assets/workshop2.png"
import Workshop3 from "../assets/workshop3.png"
import Workshop4 from "../assets/workshop4.png"
import Group1 from "../assets/group1.png"
import Group2 from "../assets/group2.png"
import Group3 from "../assets/group3.png"
import Group4 from "../assets/group4.png"
import Footer from "../Components/footer";
import { Link, useNavigate } from "react-router";
import RButton from "../Components/Reusable_Button";

const Workshop = () => {

  const navigate = useNavigate();

  const workshopTypes = [
    { image: Workshop1, description: "Accredited Key Word Sign Workshop - Basic & Intermediate " },
    { image: Workshop2, description: "An Introduction to Neurodiversity Affirming Practice" },
    { image: Workshop3, description: "Understanding Sensory" },
    { image: Workshop4, description: "Emotional Regulation" }
  ]

  return (
    <React.Fragment>
      <div className="main-box bg-white items-center gap-10">

        <div className="w-full px-16 max-sm:px-8 mt-32 max-sm:mt-24">
          <h2 className="font-serif text-4xl max-sm:text-3xl text-[#0BAFA6]">Group Therapy and Workshops</h2>
          <p className="font-serif text-xl max-sm:text-base text-gray-400">My Therapy is passionate about sharing information through workshops. Some of the workshops we have provided include:   </p>
        </div>

        <div className="w-[90%] grid grid-cols-4 max-sm:grid-cols-1 gap-8">
          {workshopTypes.map(data => (
            <div className="flex flex-col items-center size-full gap-4">
              <img src={data.image} className="w-full h-40 object-contain" />
              <span className="font-serif text-gray-400 text-base text-center capitalize">{data.description}</span>
            </div>
          ))}
        </div>

        <p className="w-full font-serif text-lg text-gray-400 text-center px-16 max-sm:px-8"><Link to="/currentworkshops" className="text-black underline">Click here</Link> to see what groups are currently on offer. We love suggestions and a chance to get creative so if you have any ideas for groups or workshops that you feel would benefit you and your child, please let us know and we can try and make it happen</p>

        <div className="w-[90%] px-16 grid grid-cols-4 max-sm:grid-cols-1 gap-4">
          <img src={Group1} className="border-8 border-gray-300" />
          <img src={Group2} className="border-8 border-gray-300" />
          <img src={Group3} className="border-8 border-gray-300" />
          <img src={Group4} className="border-8 border-gray-300" />
        </div>

        {/* Current Groups */}
        <div className="w-[90%] px-16 max-sm:px-8 mt-16" id="current-groups">
          <h2 className="font-serif text-3xl text-[#0BAFA6] mb-3">Current Groups</h2>

          {/* Term-Time Therapy Groups */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#0BAFA6]">Term-Time Therapy Groups</h3>
            <p className="font-serif text-lg text-gray-600">
              Our therapy groups provide children with fun, structured opportunities to work on their goals while
              building social skills with peers. Groups support development in communication, motor skills,
              emotional regulation, and school readiness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Seabridges</h4>
                <p className="text-gray-700">
                  A neurodiversity affirming group for children with Autism to learn about themselves and social interaction.
                </p>
              </div>

              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Fine Motor Group</h4>
                <p className="text-gray-700">Focuses on skills like cutting and handwriting.</p>
              </div>

              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Let’s Communicate Together</h4>
                <p className="text-gray-700">
                  Supports toddlers (18 months to 2.5 years) showing signs of delayed language development.
                </p>
              </div>

              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Chatterbox Group</h4>
                <p className="text-gray-700">Helps 4–5-year-olds improve language skills.</p>
              </div>

              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Prep Readiness</h4>
                <p className="text-gray-700">
                  Prepares children for a smooth transition to school with combined Speech Pathology and Occupational Therapy support.
                </p>
              </div>
            </div>
          </div>


          <div className="space-y-4 mt-10">
            <h3 className="font-serif text-2xl text-[#0BAFA6]">School Holiday Groups</h3>
            <p className="font-serif text-lg text-gray-600">
              Our holiday groups combine therapy goals with engaging, fun activities to keep children connected and learning
              outside school terms. These groups also encourage new friendships and reduce screen time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Cooking Classes</h4>
              </div>

              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Scavenger hunts</h4>
              </div>

              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Movement, dance, boxing or yoga sessions</h4>
              </div>

              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Lego Masters</h4>
              </div>

              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Teen outings</h4>
              </div>

              <div className="bg-[#E0F4F5] p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">Paint and sip sessions</h4>
              </div>
            </div>

            <div className="mt-6 bg-[#F5FBFB] border border-[#E0F4F5] rounded-xl p-4">
              <p className="font-serif text-gray-700">
                We love hearing your ideas for new workshops or groups! If there’s something you think would benefit your child and family,
                please get in touch — we’re here to create meaningful, enjoyable learning experiences together.
              </p>
            </div>
          </div>
        </div>

        <RButton className="px-8 py-4" onClick={() => navigate("/currentworkshops")}>View Current Groups</RButton>

        <Footer />

      </div>
    </React.Fragment>
  )
}

export default Workshop;