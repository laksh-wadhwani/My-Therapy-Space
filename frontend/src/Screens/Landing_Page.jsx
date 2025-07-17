import React from "react";
import "../styles/landing.css";
import RButton from "../Components/Reusable_Button"
import ChooseUs from "../assets/section4.svg"
import Footer from "../Components/footer"

const LandingPage = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-[#E0F4F5]">
                <div className="sections section-1">
                    <div className="sections-box gap-20">
                         <div className="flex flex-col gap-6">
                            <h1 className="hero-heading">Specialized therapy for <span className="text-[#01B2A9]">every child</span></h1>
                            <div className="bg-[#92278F] w-20 h-1 rounded-xl" />
                            <p className="sections-description text-lg">A team of specialized therapists working together to help your child to thrive in Burleigh Waters and Hope Island.</p>
                        </div>
                        <RButton className="px-7 py-3">Book a Call</RButton>
                    </div>
                    <div className="w-[50%] h-full bg-[url(./assets/rightside.svg)] bg-no-repeat bg-contain bg-center"/>
                </div>

                <div className="sections flex-col gap-2 bg-white">

                    <span className="sections-tittle self-start">About Us</span>

                    <div className="w-full flex">

                        <div className="sections-box justify-between">
                            <h2 className="hero-heading">Our approach is family centered therapy</h2>
                            <RButton className="px-7 py-3">About Us</RButton>
                        </div>

                        <div className="sections-box gap-20 mt-6">

                            <p className="sections-description text-base text-justify">My Therapy Space is a multidisciplinary allied health clinic based in the Gold Coast, Australia, offering a family-centered approach to therapy. Established in 2020 as a multi-speciality pediatric practice, our vision is to provide care with a nurturing environment. Our teams works collaboratively with families to ensure the best outcomes.</p>

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

                </div>

                <div className="sections flex-col gap-10">

                    <div className="flex flex-col gap-4 item-center">
                        <span className="sections-tittle">Our Services</span>
                        <h2 className="hero-heading text-center">Comprehensive child <br/> development therapy solutions</h2>
                    </div>

                    <div className="w-full flex justify-evenly">
                        <div className="services-cards rotate-[-3deg]">
                            <div className="bg-[#00B2A9]/10"><div className="bg-[#00B2A9]"/></div>
                            <h3>speech therapy</h3>
                            <p className="sections-description text-center text-sm">Helping children communicate effectively and build language skills for life</p>
                        </div>
                        <div className="services-cards rotate-[3deg]">
                            <div className="bg-[#92278F]/10"><div className="bg-[#92278F]"/></div>
                            <h3>occupational therapy</h3>
                            <p className="sections-description text-center text-sm">Supporting children in daily activities, sensory processing and motor skills development.</p>
                        </div>
                        <div className="services-cards rotate-[-3deg]">
                            <div className="bg-[#F8971D]/10"><div className="bg-[#F8971D]"/></div>
                            <h3>dietician services</h3>
                            <p className="sections-description text-center text-sm">Expert nutrition guidance for children with feeding difficulties and special dietary needs.</p>
                        </div>
                        <div className="services-cards rotate-[3deg]">
                            <div className="bg-[#1B75BC]/10"><div className="bg-[#1B75BC]"/></div>
                            <h3>audiology</h3>
                            <p className="sections-description text-center text-sm">Comprehensive hearing assessments and interventions for children of all ages.</p>
                        </div>
                    </div>

                </div>

                <div className="sections flex-col gap-14 bg-white">
                    <h2 className="another-sections-tittle font-semibold">why choose us</h2>

                    <div className="section-4">

                        <div>

                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]"/>
                                    <h3 className="font-serif capitalize text-xl font-semibold text-black">collaborative approach</h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify w-[50%]">Our specialists work together to provide comprehensive care across disciplines.</p>
                            </article>
                            
                             <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]"/>
                                    <h3 className="font-serif text-base capitalize text-xl font-semibold text-black">expert specialists</h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify w-[50%]">Highly qualified professionals with years of experience in pediatric therapy</p>
                            </article>

                             <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]"/>
                                    <h3 className="font-serif text-base capitalize text-xl font-semibold text-black">Child-Centered Focus</h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify w-[50%]">Personalized therapy plans tailored to each child's unique needs and goals.</p>
                            </article>

                        </div>

                        <img src={ChooseUs} alt="" />
                    </div>

                </div>
 
                <div className="sections bg-white">
                    <div className="section-5">
                        <h2 className="font-semibold another-sections-tittle">parent testimonials</h2>
                        <div>

                            <p className="text-lg text-justify sections-description">The team at My Therapy Space has been incredible for our daughter. Their collaborative approach meant that all her needs were addressed historically, and we've seen remarkable progress in just a few months!</p>

                            <div className="flex items-center gap-2">
                                <div className="size-[20px] rounded-full bg-black"/>
                                <label className="font-serif text-base font-medium capitalize">Sahil Wadhwani</label>
                                <span className="font-serif text-sm text-[#666666]">(Parent of Olivia)</span>
                            </div>

                        </div>

                    </div>
                </div>

                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default LandingPage