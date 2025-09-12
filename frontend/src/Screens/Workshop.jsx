import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ Helmet for SEO
import Workshop1 from "../assets/workshop1.png";
import Workshop2 from "../assets/workshop2.png";
import Workshop3 from "../assets/workshop3.png";
import Workshop4 from "../assets/workshop4.png";
import Group1 from "../assets/group1.png";
import Group2 from "../assets/group2.png";
import Group3 from "../assets/group3.png";
import Group4 from "../assets/group4.png";
import Footer from "../Components/footer";
import { Link, useNavigate } from "react-router";
import RButton from "../Components/Reusable_Button";

const Workshop = () => {
  const navigate = useNavigate();

  // const workshopTypes = [
  //   {
  //     image: Workshop1,
  //     description:
  //       "Accredited Key Word Sign Workshop - Basic & Intermediate ",
  //     alt: "Key Word Sign workshop for speech and communication therapy",
  //   },
  //   {
  //     image: Workshop2,
  //     description: "An Introduction to Neurodiversity Affirming Practice",
  //     alt: "Neurodiversity affirming therapy practice workshop poster",
  //   },
  //   {
  //     image: Workshop3,
  //     description: "Understanding Sensory",
  //     alt: "Understanding sensory needs therapy workshop poster",
  //   },
  //   {
  //     image: Workshop4,
  //     description: "Emotional Regulation",
  //     alt: "Children’s emotional regulation therapy workshop poster",
  //   },
  // ];

  return (
    <React.Fragment>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>
          Therapy Workshops & Group Programs for Children | My Therapy Space
        </title>
        <meta
          name="description"
          content="Join My Therapy Space workshops in Australia — speech therapy, occupational therapy, sensory integration, emotional regulation, and social skill groups for children."
        />
        <meta
          name="keywords"
          content="therapy workshops Australia, pediatric therapy workshops, speech therapy workshops, occupational therapy groups, sensory integration therapy, emotional regulation therapy"
        />
      </Helmet>

      <div className="main-box bg-[#E0F4F5] items-center gap-10">

        <div className="w-full px-8 md:px-14 mt-24 lg:mt-32">
          <h1 className="font-serif text-3xl text-[#0BAFA6]">
            Group Therapy and Workshops for Children
          </h1>
          <p className="font-serif sm:text-base text-gray-400">
            My Therapy Space is passionate about sharing information through workshops. They are a great way to share information to groups of people, to meet with others having similar experiences with their children and openly discuss the topics on offer. They are a useful resource when trying to upskill yourself, family members or educators in your child’s life to better understand and support them. Some of the workshops we have provided include:
          </p>
        </div>

        {/* ✅ Workshop Cards */}
        {/* <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workshopTypes.map((data, index) => (
            <article
              key={index}
              className="flex flex-col items-center size-full gap-4"
            >
              <img
                src={data.image}
                alt={data.alt}
                className="w-full h-40 object-contain"
              />
              <span className="font-serif text-gray-400 text-base text-center capitalize">
                {data.description}
              </span>
            </article>
          ))}
        </div> */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
            {[
              "Accredited Key Word Sign workshops - basic and intermediate",
              "An introduction to Neurodiversity affirming practice",
              "Understanding Sensory processing",
              "Emotional regulation",
            ].map((workshop, idx) => (
              <div
                key={idx}
                className="group relative p-4 border rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer bg-white max-w-md mx-auto"
              >
                <p className="font-serif  text-lg group-hover:text-teal-500 transition-colors">
                  {workshop}
                </p>
                <p className="mt-2 text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  This workshop provides valuable insights and hands-on strategies for families and educators to support children’s development.
                </p>
              </div>
            ))}
          </div>


        {/* ✅ Internal Linking with keyword */}
        <p className="w-full font-serif text-lg text-gray-400 text-center px-8 md:px-14">
          <Link to="/currentworkshops" className="text-black underline">
            Click here
          </Link>{" "}
          to explore current{" "}
          <strong>therapy workshops and group programs</strong>. We welcome your
          suggestions to create workshops that support you and your child’s
          needs.
        </p>

        {/* ✅ Images with alt text */}
        <div className="w-[90%] px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <img
            src={Group1}
            alt="Children participating in group therapy workshop"
            className="border-8 border-gray-300"
          />
          <img
            src={Group2}
            alt="Kids enjoying group occupational therapy activities"
            className="border-8 border-gray-300"
          />
          <img
            src={Group3}
            alt="Therapy group for communication and social interaction"
            className="border-8 border-gray-300"
          />
          <img
            src={Group4}
            alt="School readiness and learning therapy group"
            className="border-8 border-gray-300"
          />
        </div>

        {/* ✅ Current Groups Section */}
        <div
          className="w-[90%] px-8 md:px-14"
          id="current-groups"
        >
          <h2 className="font-serif text-4xl text-[#0BAFA6] max-sm:text-center mb-8">
            Current Therapy Groups
          </h2>

          {/* Term-Time Therapy Groups */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#0BAFA6]">
              Term-Time Therapy Groups
            </h3>
            <p className="font-serif text-lg text-gray-600">
              Our term-time therapy groups provide children with structured,
              engaging opportunities to develop communication, fine motor
              skills, emotional regulation, and school readiness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Seabridges
                </h4>
                <p className="text-gray-700">
                  A neurodiversity affirming group for children with Autism,
                  focusing on social interaction and self-awareness.
                </p>
              </article>

              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Fine Motor Group
                </h4>
                <p className="text-gray-700">
                  Focuses on developing motor skills such as cutting and
                  handwriting through occupational therapy.
                </p>
              </article>

              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Let’s Communicate Together
                </h4>
                <p className="text-gray-700">
                  Supports toddlers (18 months to 2.5 years) with delayed
                  language development through guided activities.
                </p>
              </article>

              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Chatterbox Group
                </h4>
                <p className="text-gray-700">
                  Helps children aged 4–5 improve language and communication
                  skills.
                </p>
              </article>

              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Prep Readiness
                </h4>
                <p className="text-gray-700">
                  Prepares children for school with combined speech and
                  occupational therapy support.
                </p>
              </article>
            </div>
          </div>

          {/* School Holiday Groups */}
          <div className="space-y-4 mt-10">
            <h3 className="font-serif text-2xl text-[#0BAFA6] ">
              School Holiday Therapy Groups
            </h3>
            <p className="font-serif text-lg text-gray-600">
              Our school holiday programs combine therapy with fun activities,
              encouraging learning, reducing screen time, and fostering new
              friendships.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Cooking Classes
                </h4>
              </article>

              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Scavenger Hunts
                </h4>
              </article>

              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Movement, Dance & Yoga
                </h4>
              </article>

              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Lego Masters
                </h4>
              </article>

              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Teen Outings
                </h4>
              </article>

              <article className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="font-serif text-xl text-[#0BAFA6] mb-1">
                  Paint & Sip Sessions
                </h4>
              </article>
            </div>

            <div className="mt-6 bg-white border border-[#E0F4F5] rounded-xl p-4">
              <p className="font-serif text-gray-700">
                Have an idea for a new therapy group or workshop? Share your
                suggestions — we love creating meaningful, fun, and effective
                experiences for children and families.
              </p>
            </div>
          </div>
        </div>

        <RButton
          className="px-8 py-4"
          onClick={() => navigate("/currentworkshops")}
        >
          View Current Groups
        </RButton>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Workshop;
