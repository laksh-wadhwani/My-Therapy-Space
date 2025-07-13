import React from "react";
import RButton from "../Components/Reusable_Button";
import Footer from "../Components/footer";

const LandingPage = () => {
    return(
        <React.Fragment>
            <div className="w-full overflow-x-hidden bg-[#E0F4F5]">

                <div className="w-full h-[950px] bg-[url(./assets/Section1.svg)] bg-center bg-no-repeat bg-cover flex items-center">

                    <div className="flex flex-col gap-20 w-[50%] px-14 items-start">
                        
                        <div className="flex flex-col gap-6">
                            <h1 className="text-7xl font-serif">Specialized therapy for <span className="text-[#01B2A9]">every child</span></h1>
                            <div className="bg-[#92278F] w-20 h-1 rounded-xl"></div>
                            <p className="font-serif text-[#666666] text-lg text-justify">A team of specialized therapists working together to help your child to thrive in Burleigh Waters and Hope Island.</p>
                        </div>
                        <RButton className="px-7 py03">Book a call</RButton>
                
                    </div>

                    <div className="w-[50%] h-full bg-[url(./assets/rightside.svg)] bg-no-repeat bg-contain bg-center"></div>


                </div>

                <div className="w-full bg-white border-box p-14 flex flex-col gap-2">
                    <span className="text-[#FF7F50] font-serif">About Us</span>

                    <div className="w-full flex">
                        
                        <div className="w-[50%] flex flex-col items-start justify-between">
                            <h2 className="text-7xl font-serif">Our approach is family centered therapy</h2>
                            <RButton className="px-7 py03">About Us</RButton>
                        </div>

                        <div className="w-[50%] flex flex-col gap-20 border-box mt-6">
                            <p className="text-[#666666] font-serif text-base text-justify">My Therapy Space is a multidisciplinary allied health clinic based in the Gold Coast, Australia, offering a family-centered approach to therapy. Established in 2020 as a multi-speciality pediatric practice, our vision is to provide care with a nurturing environment. Our teams works collaboratively with families to ensure the best outcomes.</p>

                            <div className=" w-[90%] h-[250px] box-border bg-[#F8FBFD] border border-[#EBF0F1] rounded-[2.5rem] grid grid-cols-2 shadow-md">
                            
                                <article className="size-full border-b border-r border-[#EBF0F1] flex flex-col justify-center box-border px-12">
                                    <h3 className="text-[#333333] font-serif text-5xl font-black">5+</h3>
                                    <span className="text-[#666666] font-serif capitalize">years experince</span>
                                </article>

                                <article className="size-full border-b border-[#EBF0F1] flex flex-col justify-center box-border px-12">
                                    <h3 className="text-[#333333] font-serif text-5xl font-black">100%</h3>
                                    <span className="text-[#666666] font-serif capitalize">family-centered</span>
                                </article>

                                <article className="size-full border-r border-[#EBF0F1] flex flex-col justify-center box-border px-12">
                                    <h3 className="text-[#333333] font-serif text-5xl font-black">15</h3>
                                    <span className="text-[#666666] font-serif capitalize">specialized programs</span>
                                </article>

                                <article className="size-full flex flex-col justify-center box-border px-12">
                                    <h3 className="text-[#333333] font-serif text-5xl font-black">500+</h3>
                                    <span className="text-[#666666] font-serif capitalize">happy families</span>
                                </article>

                             </div>

                        </div>

                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-10 p-14">

                    <div className="flex flex-col gap-4 items-center">
                        <span className="text-[#FF7F50] font-serif">Our Services</span>
                        <h2 className="text-6xl font-serif text-center">Comprehensive child <br/> development therapy solutions</h2>
                    </div>

                    <div className="w-full flex justify-evenly">

                        <div className="w-[20%] h-[350px] bg-white shadow-md rounded-[1.5rem] flex flex-col items-center gap-4 border-box p-12">

                            <div className="size-[80px] rounded-full bg-[#00B2A9]/10 flex justify-center items-center">
                                <div className="w-[35%] h-[35%] bg-[#00B2A9]"/>
                            </div>
                            <h3 className="font-serif text-lg capitalize font-bold">speech therapy</h3>
                            <p className="font-serif text-[#666666] text-center text-sm">Helping children communicate effectively and build language skills for life</p>

                        </div>
                       
                       <div className="w-[20%] h-[350px] bg-white shadow-md rounded-[1.5rem] flex flex-col items-center gap-4 border-box p-12">

                            <div className="size-[80px] rounded-full bg-[#92278F]/10 flex justify-center items-center">
                                <div className="w-[35%] h-[35%] bg-[#92278F]"/>
                            </div>
                            <h3 className="font-serif text-lg capitalize font-bold text-center">occupational therapy</h3>
                            <p className="font-serif text-[#666666] text-center text-sm">Supporting children in daily activities, sensory processing and motor skills development.</p>
                            
                        </div>

                        <div className="w-[20%] h-[350px] bg-white shadow-md rounded-[1.5rem] flex flex-col items-center gap-4 border-box p-12">

                            <div className="size-[80px] rounded-full bg-[#F8971D]/10 flex justify-center items-center">
                                <div className="w-[35%] h-[35%] bg-[#F8971D]"/>
                            </div>
                            <h3 className="font-serif text-lg capitalize font-bold">dietician services</h3>
                            <p className="font-serif text-[#666666] text-center text-sm">Expert nutrition guidance for children with feeding difficulties and special dietary needs.</p>
                            
                        </div>

                        <div className="w-[20%] h-[350px] bg-white shadow-md rounded-[1.5rem] flex flex-col items-center gap-4 border-box p-12">

                            <div className="size-[80px] rounded-full bg-[#1B75BC]/10 flex justify-center items-center">
                                <div className="w-[35%] h-[35%] bg-[#1B75BC]"/>
                            </div>
                            <h3 className="font-serif text-lg capitalize font-bold">audiology</h3>
                            <p className="font-serif text-[#666666] text-center text-sm">Comprehensive hearing assessments and interventions for children of all ages.</p>
                            
                        </div>

                    </div>

                </div>

                <div className="w-full bg-white flex flex-col items-center gap-14 p-14">

                    <h2 className="font-serif text-5xl text-center font-semibold capitalize">why choose us</h2>

                    <div className="w-full flex justify-center items-center border-box px-40">

                        <div className="flex flex-col gap-6 w-[50%]">

                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]"/>
                                    <h3 className="font-serif text-base capitalize text-xl font-semibold">collaborative approach</h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify w-[50%]">Our specialists work together to provide comprehensive care across disciplines.</p>
                            </article>
                            
                             <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]"/>
                                    <h3 className="font-serif text-base capitalize text-xl font-semibold">expert specialists</h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify w-[50%]">Highly qualified professionals with years of experience in pediatric therapy</p>
                            </article>

                             <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]"/>
                                    <h3 className="font-serif text-base capitalize text-xl font-semibold">Child-Centered Focus</h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify w-[50%]">Personalized therapy plans tailored to each child's unique needs and goals.</p>
                            </article>

                        </div>

                        <div className="bg-[url(./assets/section4.svg)] w-[50%] h-[355px] bg-no-repeat bg-center bg-contain"/>

                    </div>

                </div>

                <div className="w-full border-box px-16 py-20 bg-white">

                    <div className="w-full bg-[#E0F4F5] p-10 border-box flex flex-col items-center rounded-xl gap-12">

                        <h2 className="font-serif text-4xl font-semibold capitalize">parent testimonials</h2>
                        
                        <div className="w-[60%] bg-white p-16 flex flex-col gap-4 border-box rounded-xl">
                            <p className="font-serif text-lg text-[#666666] text-justify">The team at My Therapy Space has been incredible for our daughter. Their collaborative approach meant that all her needs were addressed historically, and we've seen remarkable progress in just a few months!</p>

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