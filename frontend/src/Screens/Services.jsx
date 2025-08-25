import React from "react";
import SpeechPathology from "../assets/speech service.png"
import Dietician from "../assets/dietician service.png"
import TherapyAssistance from "../assets/Therapy Assistance.jpg"
import OccupationTherapy from "../assets/occupational service.png"
import Footer from "../Components/footer";

const Services = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-white gap-10">
                <h1 className="font-serif font-normal text-4xl text-[#0BAFA6] px-14 mt-32">Services</h1>
            <div id="speech-pathology" className="w-full flex flex-col gap-4 px-14">
  <h2 className="font-serif text-2xl font-normal capitalize">Speech Pathology</h2>

  <div className="w-full flex gap-12 items-stretch">
    {/* Left Image */}
    <img
      src={SpeechPathology}
      alt="Speech Pathology Picture"
      className="w-[40%] h-auto max-h-[700px] object-cover rounded-lg"
    />

    {/* Right Cards */}
    <div className="flex flex-col gap-6 w-[60%]">
      <p className="font-serif text-xl uppercase text-justify">
        Our experienced team of Speech Pathologists work together to support you in the areas of:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Speech</h3>
          <p>Some children have difficulty producing sounds expected for their age, whilst others may have difficulty with planning the movements needed to produce speech.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Receptive Language</h3>
          <p>Some children have difficulty following directions or understanding concepts or questions that are expected for their age.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Expressive Language</h3>
          <p>Your child may have difficulty expressing all of their ideas in a clear and concise way. This could include answering questions, use of grammar, and putting sentences together.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Functional Communication and AAC</h3>
          <p> We can introduce tools like gestures, signs, symbols, or devices to help children get their message across.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Feeding</h3>
          <p>We support children who have difficulty chewing, swallowing, or trying new food textures and tastes.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Workshops</h3>
          <p>We love to run workshops on Communicating with Sign, and Hanen Strategies. Please contact us for more information.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="dietician" className="w-full flex flex-col gap-4 px-14">
  <h2 className="font-serif text-2xl font-normal capitalize">Dietician</h2>
 
  <div className="w-full flex gap-12 items-start">
    {/* Left Image */}
    <img
      src={Dietician}
      alt="Dietician Picture"
      className="w-[40%] h-auto max-h-[830px] object-cover rounded-lg"
    />

    {/* Right Cards */}
    <div className="flex flex-col gap-6 w-[60%]">
         <p className="font-serif text-xl uppercase text-justify">
    Our Dieticians have many years of experience providing nutrition advice that is easy to incorporate into busy lives. 
  </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Infant Feeding</h3>
          <p>Support with breastfeeding, bottle feeding, starting solids, baby-led weaning, and vegetarian/vegan feeding.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Growth</h3>
          <p>Monitor and support your child’s growth and health beyond just the numbers on the scale.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Nutrient Intake</h3>
          <p>Assess your child’s diet, identify nutrient gaps, and work together to meet their nutritional needs.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Behaviour & Mealtime Strategies</h3>
          <p>We have a range of strategies to help your child develop a healthy relationship with food and take the stress out of mealtimes.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Feeding Plans</h3>
          <p>Create practical, easy-to-implement plans tailored to your child’s needs and family lifestyle.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Recipe Ideas</h3>
          <p>Provide recipes suited to your child’s goals and collaborate with schools or daycare.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Specialised Products</h3>
          <p>Support with high-calorie, texture-modified diets and accessing products via NDIS where applicable.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Tube Feeding</h3>
          <p>Guidance and ongoing support for nasogastric or gastrostomy feeding.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Blended Tube Feeds</h3>
          <p>Assessment, recipes, and plans for families considering or using blended tube feeding.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="occupational-therapy" className="w-full flex flex-col gap-4 px-14">
  <h2 className="font-serif text-2xl font-normal capitalize">Occupational Therapy</h2>

  <div className="w-full flex gap-12 items-start">
    {/* Left Image */}
    <img
      src={OccupationTherapy}
      alt="Occupational Therapy Picture"
      className="w-[40%] h-auto max-h-[750px] object-cover rounded-lg"
    />

    {/* Right Cards */}
    <div className="flex flex-col gap-6 w-[60%]">
    <p className="font-serif text-xl uppercase text-justify">
        Our experienced team of Speech Pathologists work together to support you in the areas of:
      </p>    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Emotional Regulation</h3>
          <p>Supporting children with strategies to manage their emotions & energy levels.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Fine Motor Skills</h3>
          <p>Hand and finger strength, coordination, and control for tasks like writing, cutting, and dressing.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Sensory Processing</h3>
          <p>Helping children manage and respond to different sights, sounds, textures, tastes, and movements.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Self-Care Skills</h3>
          <p>Daily activities like dressing, eating, toileting, and hygiene.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Handwriting and Pre-Writing Skills</h3>
          <p>Pencil grip, letter formation, spacing, and endurance for writing.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Play Skills</h3>
          <p>Developing imagination, social interaction, and problem-solving through play.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Attention and Concentration</h3>
          <p>Strategies to help focus and persist with tasks.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">School Readiness Skills</h3>
          <p>Building the skills needed to succeed in the classroom environment.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Assistive Technology and Equipment</h3>
          <p>Tools to support independence in daily activities.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="therapy-assistance" className="w-full flex flex-col gap-4 px-14">
  <h2 className="font-serif text-2xl font-normal capitalize">Therapy Assistance</h2>
  <div className="w-full flex gap-12 items-start">
  <div className="w-[40%] h-[650px] rounded-lg overflow-hidden">
  <img
    src={TherapyAssistance}
    alt="Therapy Assistance"
    className="w-full h-full object-cover"
  />
</div>

    {/* Right Cards */}
    <div className="flex flex-col gap-6 w-[60%]">
     <p className="font-serif text-xl uppercase text-justify">
    Our Therapy Assistants provide extra support for children and families, helping to carry therapy goals into everyday life in a practical and affordable way.
  </p>   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Work in Familiar Settings</h3>
          <p>Work with your child in familiar settings like home or community.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Affordable Support</h3>
          <p>More affordable than therapy sessions with a therapist.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Flexible Hours</h3>
          <p>Can often provide more hours of support.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Continue Therapy Goals</h3>
          <p>Continue therapy goals even during breaks from direct therapist sessions.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Practical Strategies</h3>
          <p>Help families use therapy strategies in everyday life.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Community Participation</h3>
          <p>Assist with community participation and integration.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
          <h3 className="font-bold text-lg mb-2">Feedback and Reporting</h3>
          <p>Provide notes and feedback to therapists and contribute to goal planning.</p>
        </div>
      </div>
    </div>
  </div>
</div>


                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default Services