import React from "react";
import "../styles/landing.css";
import RButton from "../Components/Reusable_Button"
import ChooseUs from "../assets/section4.svg"
import Footer from "../Components/footer"
import work2 from "../assets/work2.jpg"
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router";

const LandingPage = () => {
    return (
        <React.Fragment>
            <div className="main-box bg-[#E0F4F5]">

                {/* Section 1 */}
                <div className="sections max-sm:flex-col-reverse section-1">

                    <div className="sections-box max-sm:h-[50%] gap-20 max-sm:gap-4">

                        <div className="flex flex-col gap-6 max-sm:gap-3">
                            <h1 className="text-7xl font-serif text-[#333333] max-sm:text-4xl">Specialized therapy for <span className="text-[#01B2A9]">every child</span></h1>
                            <div className="bg-[#92278F] w-20 h-1 rounded-xl" />
                            <p className="sections-description text-lg max-sm:text-base">My Therapy Space is a team of experienced, enthusiastic, Speech Language Pathologists, Occupational Therapists, Dietitians and Therapy Assistants all working together to support your child and family.</p>
                        </div>

                        <Link to="/booking"><CustomButton>Book a Call</CustomButton></Link>
                    </div>
                    <div className="w-[50%] max-sm:w-full h-full max-sm:h-[50%] bg-[url(./assets/rightside.svg)] bg-no-repeat bg-contain bg-center" />
                </div>

                {/* Section 2 */}
                <div className="sections flex-col gap-2 max-sm:gap-6 bg-white">

                    <span className="sections-tittle self-start">About Us</span>

                    <div className="w-full flex max-sm:flex-col max-sm:gap-6">

                        <div className="sections-box justify-between">
                            <h2 className="text-7xl font-serif text-[#333333] max-sm:text-3xl">Our approach is family centered therapy</h2>
                            <Link to="/AboutUs"><CustomButton className="max-sm:hidden">About Us</CustomButton></Link>
                        </div>

                        <div className="sections-box gap-20 max-sm:gap-10 mt-6 max-sm:mt-0">

                            <p className="sections-description text-base max-sm:text-sm text-justify"><b>My Therapy Space</b> is a multidisciplinary allied health clinic on the Gold Coast, offering Speech Pathology, Occupational Therapy, Psychology, Dietetics, and Audiology services.
                                Since 2001, we've grown from a single Speech Pathologist into a collaborative team known for our warm, inclusive, and family-centred approach.
                            </p>

                            <div className="section-2-description-box">

                                <article className="border-b border-r">
                                    <h3 className="another-sections-tittle font-black">5+</h3>
                                    <span className="sections-description capitalize">years experince</span>
                                </article>

                                <article className="border-b">
                                    <h3 className="another-sections-tittle font-black">100%</h3>
                                    <span className="sections-description capitalize">family-centered</span>
                                </article>

                                <article className="border-r">
                                    <h3 className="another-sections-tittle font-black">15</h3>
                                    <span className="sections-description capitalize">specialized programs</span>
                                </article>

                                <article>
                                    <h3 className="another-sections-tittle font-black">500+</h3>
                                    <span className="sections-description capitalize">happy families</span>
                                </article>

                            </div>

                        </div>

                    </div>

                    <Link to="/AboutUs"><CustomButton className="lg:hidden md:hidden sm:hidden max-sm:px-12 max-sm:py-4">About Us</CustomButton></Link>

                </div>

                {/* Workshop Fun Section */}
                <div className="sections flex-col gap-10 bg-[#F9FAFB]">
                    <div className="flex flex-col gap-4 items-center">
                        <span className="sections-tittle">Therapy Fun</span>
                        <h2 className="text-7xl max-sm:text-3xl font-serif text-[#333333] text-center">
                            Moments from Our Workshops
                        </h2>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <div className="flex md:grid md:grid-cols-5 gap-6 px-4">
                            {["work1.jpg", "work2.jpg", "work3.jpg", "work4.jpg", "work5.jpg"].map((img, i) => (
                                <div
                                    key={i}
                                    className="w-64 h-64 max-sm:w-full flex-shrink-0 rounded-lg bg-white shadow-md overflow-hidden border border-gray-200"
                                >
                                    <img
                                        src={`/src/assets/${img}`}
                                        alt={`Workshop ${i + 1}`}
                                        className="size-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Services Section */}
                <div className="sections flex-col gap-10">

                    <div className="flex flex-col gap-4 item-center">
                        <span className="sections-tittle">Our Services</span>
                        <h2 className="text-7xl max-sm:text-3xl font-serif text-[#333333] text-center">Comprehensive child <br /> development therapy solutions</h2>
                    </div>

                    <div className="w-full flex max-sm:flex-col max-sm:gap-8 justify-evenly">

                        <div className="services-cards rotate-[-3deg] max-sm:rotate-0">
                            <div className="bg-[#00B2A9]/10"><div className="bg-[#00B2A9]" /></div>
                            <h3>speech therapy</h3>
                            <p className="sections-description text-center text-sm max-sm:text-lg">Helping children communicate effectively and build language skills for life</p>
                        </div>
                        <div className="services-cards rotate-[3deg] max-sm:rotate-0">
                            <div className="bg-[#92278F]/10"><div className="bg-[#92278F]" /></div>
                            <h3>occupational therapy</h3>
                            <p className="sections-description text-center text-sm max-sm:text-lg">Supporting children in daily activities, sensory processing and motor skills development.</p>
                        </div>
                        <div className="services-cards rotate-[-3deg] max-sm:rotate-0">
                            <div className="bg-[#F8971D]/10"><div className="bg-[#F8971D]" /></div>
                            <h3>dietician services</h3>
                            <p className="sections-description text-center text-sm max-sm:text-lg">Expert nutrition guidance for children with feeding difficulties and special dietary needs.</p>
                        </div>
                        <div className="services-cards rotate-[3deg] max-sm:rotate-0">
                            <div className="bg-[#1B75BC]/10"><div className="bg-[#1B75BC]" /></div>
                            <h3>Therapy Assistance</h3>
                            <p className="sections-description text-center text-sm max-sm:text-lg">Support families to meet their therapy goals by working with their child in their natural environments of home, childcare or out in the community. .</p>
                        </div>
                    </div>

                </div>

                {/* Our Space Section */}
                <div className="bg-[#F9FAFB] py-12 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 items-center">
                        <span className="sections-tittle">Our Space</span>
                        <h2 className="text-7xl max-sm:text-3xl font-serif text-[#333333] text-center">
                            Glimpse from Our Clinics
                        </h2>
                    </div>

                    <div className="max-w-6xl mx-auto px-4">
                        <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/src/assets/video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                                    Welcome to Our Space
                                </h1>
                                <p className="max-w-2xl">
                                    Experience therapy, workshops, and courses like never before.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="sections flex-col gap-14 bg-white">
                    <h2 className="another-sections-tittle font-semibold">why choose us</h2>

                    <div className="section-4">

                        <div>

                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]" />
                                    <h3 className="font-serif capitalize text-xl font-semibold text-black">collaborative approach</h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify max-sm:text-left w-[50%] max-sm:w-full">Our specialists work together to provide comprehensive care across disciplines.</p>
                            </article>

                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]" />
                                    <h3 className="font-serif text-base capitalize text-xl font-semibold text-black">expert specialists</h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify max-sm:text-left w-[50%] max-sm:w-full">Highly qualified professionals with years of experience in pediatric therapy</p>
                            </article>

                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]" />
                                    <h3 className="font-serif text-base capitalize text-xl font-semibold text-black">Child-Centered Focus</h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify max-sm:text-left w-[50%] max-sm:w-full">Personalized therapy plans tailored to each child's unique needs and goals.</p>
                            </article>

                        </div>

                        <img src={ChooseUs} alt="" className="max-sm:hidden" />
                    </div>

                </div>

                <Footer />
            </div>
        </React.Fragment>
    )
}

export default LandingPage