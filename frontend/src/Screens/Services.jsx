import React from "react";
import { Helmet } from "react-helmet-async"; // 👈 SEO helmet
import SpeechPathology from "../assets/speech service.png"
import Dietician from "../assets/dietician service.png"
import TherapyAssistance from "../assets/Therapy Assistance.jpg"
import OccupationTherapy from "../assets/occupational service.png"
import Footer from "../Components/footer";

const Services = () => {
  return (
    <React.Fragment>
      {/* 👇 SEO meta tags for this page */}
      <Helmet>
        <title>Our Services | My Therapy Space - Pediatric Therapy Gold Coast</title>
        <meta
          name="description"
          content="Discover pediatric therapy services in Gold Coast including speech pathology, occupational therapy, pediatric dietitian services, and therapy assistance for children and families."
        />
        <meta
          name="keywords"
          content="speech therapy Gold Coast, occupational therapy for children, pediatric dietitian Gold Coast, therapy assistance Gold Coast, pediatric therapy services"
        />
        <meta property="og:title" content="Our Services | My Therapy Space - Pediatric Therapy Gold Coast" />
        <meta property="og:description" content="Explore speech therapy, occupational therapy, dietitian services, and therapy assistance for children in Gold Coast." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="main-box bg-white gap-10">
        {/* Main Page Heading */}
        <h1 className="font-serif font-normal text-4xl text-[#0BAFA6] px-14 max-sm:px-8 mt-32 max-sm:mt-24">
          Our Pediatric Therapy Services
        </h1>

        {/* ---------------- Speech Pathology ---------------- */}
        <div id="speech-pathology" className="w-full flex flex-col gap-4 px-14 max-sm:px-8">
          <h2 className="font-serif text-2xl font-normal capitalize text-black">
            Speech Pathology Gold Coast
          </h2>

          <div className="w-full flex max-sm:flex-col gap-12 max-sm:gap-4 items-stretch">
            <img
              src={SpeechPathology}
              alt="Speech Therapy for Children in Gold Coast"
              className="w-[40%] max-sm:w-full h-auto max-h-[700px] object-cover rounded-lg"
            />

            <div className="flex flex-col gap-6 w-[60%] max-sm:w-full">
              <p className="font-serif text-xl max-sm:text-lg uppercase text-left text-black">
                Our experienced team of Speech Pathologists support children in:
              </p>

              {/* Services grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full font-serif text-black">
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Speech</h3>
                  <p>Helping children produce sounds and improve clarity of speech.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Receptive Language</h3>
                  <p>Support for understanding instructions, concepts, and questions.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Expressive Language</h3>
                  <p>Helping children express ideas, answer questions, and use grammar effectively.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Functional Communication & AAC</h3>
                  <p>Use of gestures, signs, or devices to support communication.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Feeding Therapy</h3>
                  <p>Helping children with chewing, swallowing, and trying new textures.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Workshops</h3>
                  <p>Workshops on Sign Communication and Hanen Strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Dietitian ---------------- */}
        <div id="dietician" className="w-full flex flex-col gap-4 px-14 max-sm:px-8 text-black">
          <h2 className="font-serif text-2xl font-normal capitalize text-black">
            Pediatric Dietitian Gold Coast
          </h2>

          <div className="w-full flex max-sm:flex-col gap-12 max-sm:gap-6 items-start">
            <img
              src={Dietician}
              alt="Pediatric Dietitian Services in Gold Coast"
              className="w-[40%] max-sm:w-full h-auto max-h-[830px] object-cover rounded-lg"
            />

            <div className="flex flex-col gap-6 w-[60%] max-sm:w-full">
              <p className="font-serif text-xl max-sm:text-lg uppercase text-justify">
                Our experienced pediatric dietitians provide nutrition advice that fits family life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Shortened content - keywords injected naturally */}
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Infant Feeding</h3>
                  <p>Breastfeeding, bottle feeding, starting solids, and baby-led weaning support.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Growth Monitoring</h3>
                  <p>Helping children grow healthy beyond numbers on a scale.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Nutrition Plans</h3>
                  <p>Tailored plans to meet children’s nutritional needs.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Mealtime Strategies</h3>
                  <p>Reducing stress around meals and encouraging healthy habits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Occupational Therapy ---------------- */}
        <div id="occupational-therapy" className="w-full flex flex-col gap-4 px-14 max-sm:px-8 text-black">
          <h2 className="font-serif text-2xl font-normal capitalize">
            Occupational Therapy for Children
          </h2>

          <div className="w-full flex max-sm:flex-col gap-12 max-sm:gap-6 items-start">
            <img
              src={OccupationTherapy}
              alt="Occupational Therapy for Children Gold Coast"
              className="w-[40%] max-sm:w-full h-auto max-h-[750px] object-cover rounded-lg"
            />

            <div className="flex flex-col gap-6 w-[60%] max-sm:w-full">
              <p className="font-serif text-xl max-sm:text-lg uppercase text-left">
                Our occupational therapists support children with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Emotional Regulation</h3>
                  <p>Helping children manage emotions and energy levels.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Fine Motor Skills</h3>
                  <p>Improving hand strength and coordination for writing, cutting, and dressing.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Sensory Processing</h3>
                  <p>Helping children respond better to different sights, sounds, and textures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Therapy Assistance ---------------- */}
        <div id="therapy-assistance" className="w-full flex flex-col gap-4 px-14 max-sm:px-8 text-black">
          <h2 className="font-serif text-2xl font-normal capitalize">
            Therapy Assistance Gold Coast
          </h2>

          <div className="w-full flex max-sm:flex-col gap-12 max-sm:gap-6 items-start">
            <div className="w-[40%] h-[650px] rounded-lg overflow-hidden">
              <img
                src={TherapyAssistance}
                alt="Therapy Assistance Services Gold Coast"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-6 w-[60%] max-sm:w-full">
              <p className="font-serif text-xl max-sm:text-lg uppercase text-left">
                Our Therapy Assistants support families by carrying therapy goals into everyday life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Home & Community Support</h3>
                  <p>Working with children in familiar settings like home or school.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col">
                  <h3 className="font-bold text-lg mb-2">Affordable Support</h3>
                  <p>More cost-effective than direct therapy sessions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Services;
