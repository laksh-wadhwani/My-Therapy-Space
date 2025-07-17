import React from "react";
import About from "../assets/about.svg"
import Footer from "../Components/footer";

const AboutUs = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-white">
                <div className="sections justify-between mt-20">
                    <div className="sections-box gap-20">
                        <h1 className="hero-heading capitalize">Our approach is family centered therapy</h1>
                        <p className="sections-description text-base text-justify">My Therapy Space is a multidisciplinary allied health clinic based in the Gold Coast, Australia, offering a family-centered approach to therapy. Established in 2020 as a multi-speciality pediatric practice, our vision is to provide care with a nurturing environment. Our teams works collaboratively with families to ensure the best outcomes.</p>
                    </div>
                    <img src={About} alt="About Us" />
                </div>

                <div className="w-[80%] grid grid-cols-4 self-center pb-8">
                    <div className="flex flex-col items-center border border-[#EBF0F1] p-4 justify-center">
                        <h3 className="another-sections-tittle font-black">5+</h3>
                        <span className="sections-description capitalize">years experince</span>
                    </div>
                    <div className="flex flex-col items-center border border-[#EBF0F1] p-4 justify-center">
                        <h3 className="another-sections-tittle font-black">100%</h3>
                        <span className="sections-description capitalize">family-centered</span>
                    </div>
                    <div className="flex flex-col items-center border border-[#EBF0F1] p-4 justify-center">
                        <h3 className="another-sections-tittle font-black">15</h3>
                        <span className="sections-description capitalize">specialized programs</span>
                    </div>
                    <div className="flex flex-col items-center border border-[#EBF0F1] p-4 justify-center">
                        <h3 className="another-sections-tittle font-black">500+</h3>
                        <span className="sections-description capitalize">happy families</span>
                    </div>
                </div>

                <div className="sections flex-col gap-10">
                    <h2 className="another-sections-tittle font-black self-start">Our Core Values</h2>
                    <div className="w-full grid grid-cols-4 border border-[#EAEAEA] rounded-xl box-border p-8">
                        <div className="flex flex-col items-center">
                            <div className="size-[50px] bg-[#38B6FF]/20 rounded-full font-serif text-[#38B6FF] text-3xl flex justify-center items-center mb-6">1</div>
                            <h3 className="font-bold text-xl font-serif capitalize text-center italic">family-centered</h3>
                            <p className="text-base font-serif text-[#666666] text-center">Involving families in every step</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="size-[50px] bg-[#FF7F50]/20 rounded-full font-serif text-[#FF7F50] text-3xl flex justify-center items-center mb-6">2</div>
                            <h3 className="font-bold text-xl font-serif capitalize text-center italic">play-based</h3>
                            <p className="text-base font-serif text-[#666666] text-center">Learning through fun</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="size-[50px] bg-[#66CC99]/20 rounded-full font-serif text-[#66CC99] text-3xl flex justify-center items-center mb-6">3</div>
                            <h3 className="font-bold text-xl font-serif capitalize text-center italic">safe approach</h3>
                            <p className="text-base font-serif text-[#666666] text-center">Creating secure environments</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="size-[50px] bg-[#AA88DD]/20 rounded-full font-serif text-[#AA88DD] text-3xl flex justify-center items-center mb-6">4</div>
                            <h3 className="font-bold text-xl font-serif capitalize text-center italic">neurodiversity affirming</h3>
                            <p className="text-base font-serif text-[#666666] text-center">Celeberating differences</p>
                        </div>
                    </div>
                </div>

                <div className="sections flex-col gap-10">
                    <h2 className="another-sections-tittle font-black">Our Clinic Space Burleigh Waters</h2>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default AboutUs