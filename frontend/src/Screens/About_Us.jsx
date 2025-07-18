import React from "react";
import About from "../assets/about.svg"
import Footer from "../Components/footer";
import CafeRoom from "../assets/burleigh/Cafe-Room.jpg"
import FrogRoom from "../assets/burleigh/Frog-Room.jpg"
import GiraffeRoom from "../assets/burleigh/Giraffe-Room.jpg"
import Gym from "../assets/burleigh/Gym.jpg"
import KittenRoom from "../assets/burleigh/Kitten-Room.jpg"
import MainReception from "../assets/burleigh/Main-Reception.jpg"
import MonkeyRoom from "../assets/burleigh/Monkey-Room.jpg"
import OwlRoom from "../assets/burleigh/Owl-Room.jpg"
import PuppyRoom from "../assets/burleigh/Puppy-Room.jpg"
import RedRoom from "../assets/burleigh/Red-Room.jpg"
import TreeRoom from "../assets/burleigh/Tree-Room.jpg"
import WaitingRoom from "../assets/burleigh/Waiting-Room.jpg"
import Entrance from "../assets/Hope Island/Entrance.jpg"
import Reception from "../assets/Hope Island/Reception.jpg"
import Room1 from "../assets/Hope Island/Room1.jpg"
import Room2 from "../assets/Hope Island/Room2.jpg"
import Room3 from "../assets/Hope Island/Room3.jpg"
const AboutUs = () => {
    
    const BurleighSpace = [
        {room:"Studio Waiting Room", picture: WaitingRoom},
        {room:"Main Reception Area", picture: MainReception},
        {room:"Kitten Room", picture: KittenRoom},
        {room:"Frog Room", picture: FrogRoom},
        {room:"Owl Room", picture: OwlRoom},
        {room:"Monkey Room", picture: MonkeyRoom},
        {room:"Giraffe Room", picture: GiraffeRoom},
        {room:"Gym", picture: Gym},
        {room:"Tree Room", picture: TreeRoom},
        {room:"Cafe Room", picture: CafeRoom},
        {room:"Puppy Room", picture: PuppyRoom},
        {room:"Red Room", picture: RedRoom}
    ]

    const HopeIsland = [
        {room:"Hope Island Entrance", picture: Entrance},
        {room:"Hope Island Reception", picture: Reception},
        {room:"Hope Island Room 1", picture: Room1},
        {room:"Hope Island Room 2", picture: Room2},
        {room:"Hope Island Room 3", picture: Room3}
    ]

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
                    <div className="w-[80%] box-border flex flex-wrap gap-8">
                        {BurleighSpace.map(space => (
                            <div className="w-fit flex flex-col items-start w-[30%] gap-2">
                                <img src={space.picture} alt="Burleigh Space Picture" />
                                <span className="text-[#557271] text-lg font-serif capitalize">{space.room}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sections flex-col gap-10">
                    <h2 className="another-sections-tittle font-black">Our Clinic Space Hope Island</h2>
                    <div className="w-[80%] box-border flex flex-wrap gap-8">
                        {HopeIsland.map(space => (
                            <div className="w-fit flex flex-col items-start w-[30%] gap-2">
                                <img src={space.picture} alt="Burleigh Space Picture" />
                                <span className="text-[#557271] text-lg font-serif capitalize">{space.room}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default AboutUs