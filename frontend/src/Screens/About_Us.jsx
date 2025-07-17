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
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default AboutUs