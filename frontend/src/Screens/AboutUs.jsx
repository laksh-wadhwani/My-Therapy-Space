import React from "react";
import About from "../assets/about.svg";
import Footer from "../Components/footer";
import { Helmet } from "react-helmet-async";

// Burleigh Images
import CafeRoom from "../assets/burleigh/Cafe-Room.jpg";
import FrogRoom from "../assets/burleigh/Frog-Room.jpg";
import GiraffeRoom from "../assets/burleigh/Giraffe-Room.jpg";
import Gym from "../assets/burleigh/Gym.jpg";
import KittenRoom from "../assets/burleigh/Kitten-Room.jpg";
import MainReception from "../assets/burleigh/Main-Reception.jpg";
import MonkeyRoom from "../assets/burleigh/Monkey-Room.jpg";
import OwlRoom from "../assets/burleigh/Owl-Room.jpg";
import PuppyRoom from "../assets/burleigh/Puppy-Room.jpg";
import RedRoom from "../assets/burleigh/Red-Room.jpg";
import TreeRoom from "../assets/burleigh/Tree-Room.jpg";
import WaitingRoom from "../assets/burleigh/Waiting-Room.jpg";

// Hope Island Images
import Entrance from "../assets/Hope Island/Entrance.jpg";
import Reception from "../assets/Hope Island/Reception.jpg";
import Room1 from "../assets/Hope Island/Room1.jpg";
import Room2 from "../assets/Hope Island/Room2.jpg";
import Room3 from "../assets/Hope Island/Room3.jpg";

const AboutUs = () => {
    const BurleighSpace = [
        { room: "Studio Waiting Room", picture: WaitingRoom },
        { room: "Main Reception Area", picture: MainReception },
        { room: "Kitten Room", picture: KittenRoom },
        { room: "Frog Room", picture: FrogRoom },
        { room: "Owl Room", picture: OwlRoom },
        { room: "Monkey Room", picture: MonkeyRoom },
        { room: "Giraffe Room", picture: GiraffeRoom },
        { room: "Therapy Gym", picture: Gym },
        { room: "Tree Room", picture: TreeRoom },
        { room: "Cafe Room", picture: CafeRoom },
        { room: "Puppy Room", picture: PuppyRoom },
        { room: "Red Room", picture: RedRoom },
    ];

    const HopeIsland = [
        { room: "Hope Island Entrance", picture: Entrance },
        { room: "Hope Island Reception", picture: Reception },
        { room: "Hope Island Therapy Room 1", picture: Room1 },
        { room: "Hope Island Therapy Room 2", picture: Room2 },
        { room: "Hope Island Therapy Room 3", picture: Room3 },
    ];

    return (
        <React.Fragment>
            <Helmet>
                {/* Title for browser tab + search engines */}
                <title>About Us | My Therapy Space - Family-Centered Pediatric Therapy Gold Coast</title>

                {/* Meta description (shows in Google search results) */}
                <meta
                    name="description"
                    content="Learn about My Therapy Space, a multidisciplinary pediatric therapy clinic in Gold Coast. We provide speech therapy, occupational therapy, dietitian services, and neurodiversity affirming care in a family-centered environment."
                />

                {/* Keywords (less important now, but okay to include) */}
                <meta
                    name="keywords"
                    content="pediatric therapy Gold Coast, speech therapy Gold Coast, occupational therapy for children, pediatric dietitian, family centered therapy, neurodiversity affirming practice"
                />

                {/* Open Graph for social media */}
                <meta property="og:title" content="About Us | My Therapy Space - Family-Centered Pediatric Therapy Gold Coast" />
                <meta property="og:description" content="Discover our family-centered pediatric therapy clinic in Gold Coast. We specialize in speech pathology, occupational therapy, and dietitian services." />
                <meta property="og:type" content="website" />
            </Helmet>
            <main className="main-box bg-white">
                {/* ================= HERO / ABOUT SECTION ================= */}
                <section className="sections max-sm:flex-col max-sm:gap-6 justify-between mt-20 max-sm:mt-12">
                    <div className="sections-box gap-20 max-sm:gap-4">
                        {/* Main SEO Heading */}
                        <h1 className="text-7xl max-sm:text-3xl font-serif text-[#333333] capitalize">
                            Empowering families so children can thrive
                        </h1>
                        <p className="sections-description text-base text-justify">
                            My Therapy Space is a
                            multidisciplinary allied health team based on the Gold Coast offering a family
                            centred, play based and neuro-diversity affirming approach to therapy.  With
                            over 25 years experience supporting families, our vision is to provide support
                            to families in a nurturing environment where families feel connected to this
                            community.
                        </p>
                    </div>
                    <img
                        src={About}
                        alt="About My Therapy Space clinic in Gold Coast"
                        className="max-sm:w-full"
                    />
                </section>

                {/* ================= CLINIC STATS ================= */}
                <section className="w-[80%] max-sm:w-[90%] grid grid-cols-4 self-center pb-8">
                    {/* Each stat highlights trust/authority */}
                    <div className="flex flex-col items-center border border-[#EBF0F1] p-4 justify-center">
                        <h3 className="another-sections-tittle font-black">25+</h3>
                        <span className="sections-description max-sm:text-xs text-center capitalize">
                            Years Pediatric Therapy Experience
                        </span>
                    </div>
                    <div className="flex flex-col items-center border border-[#EBF0F1] p-4 justify-center">
                        <h3 className="another-sections-tittle font-black">100%</h3>
                        <span className="sections-description max-sm:text-xs text-center capitalize">
                            Family-Centered Approach
                        </span>
                    </div>
                    <div className="flex flex-col items-center border border-[#EBF0F1] p-4 justify-center">
                        <h3 className="another-sections-tittle font-black">2</h3>
                        <span className="sections-description max-sm:text-xs text-center capitalize">
                            Great Locations
                        </span>
                    </div>
                    <div className="flex flex-col items-center border border-[#EBF0F1] p-4 justify-center">
                        <h3 className="another-sections-tittle font-black">500+</h3>
                        <span className="sections-description max-sm:text-xs text-center capitalize">
                            Families Supported
                        </span>
                    </div>
                </section>

                {/* ================= CORE VALUES ================= */}
                <section className="sections flex-col gap-10">
                    <h2 className="another-sections-tittle font-black self-start">
                        Our Core Values in Therapy
                    </h2>

                    <div className="w-full grid grid-cols-4 max-sm:grid-cols-1 max-sm:gap-8 border border-[#EAEAEA] rounded-xl box-border p-8">
                        <article className="flex flex-col items-center">
                            <div className="size-[50px] bg-[#38B6FF]/20 rounded-full text-[#38B6FF] text-3xl flex justify-center items-center mb-6 max-sm:mb-2">
                                1
                            </div>
                            <h3 className="font-bold text-xl max-sm:text-lg font-serif capitalize text-center italic text-black">
                                Family-Centered
                            </h3>
                            <p className="text-base max-sm:text-sm font-serif text-[#666666] text-center">
                                Involving families in every therapy step.
                            </p>
                        </article>

                        <article className="flex flex-col items-center">
                            <div className="size-[50px] bg-[#FF7F50]/20 rounded-full text-[#FF7F50] text-3xl flex justify-center items-center mb-6 max-sm:mb-2">
                                2
                            </div>
                            <h3 className="font-bold text-xl max-sm:text-lg font-serif capitalize text-center italic text-black">
                                Play-Based Learning
                            </h3>
                            <p className="text-base max-sm:text-sm font-serif text-[#666666] text-center">
                                Children learn best through fun, engaging activities.
                            </p>
                        </article>

                        <article className="flex flex-col items-center">
                            <div className="size-[50px] bg-[#66CC99]/20 rounded-full text-[#66CC99] text-3xl flex justify-center items-center mb-6 max-sm:mb-2">
                                3
                            </div>
                            <h3 className="font-bold text-xl max-sm:text-lg font-serif capitalize text-center italic text-black">
                                Collaborative Approach
                            </h3>
                            <p className="text-base max-sm:text-sm font-serif text-[#666666] text-center">
                                Working together with the multi disciplinary team and family
                            </p>
                        </article>

                        <article className="flex flex-col items-center">
                            <div className="size-[50px] bg-[#AA88DD]/20 rounded-full text-[#AA88DD] text-3xl flex justify-center items-center mb-6 max-sm:mb-2">
                                4
                            </div>
                            <h3 className="font-bold text-xl max-sm:text-lg font-serif capitalize text-center italic text-black">
                                Neurodiversity Affirming
                            </h3>
                            <p className="text-base max-sm:text-sm font-serif text-[#666666] text-center">
                                Celebrating differences and strengths.
                            </p>
                        </article>
                    </div>
                </section>

                {/* ================= BURLEIGH CLINIC ================= */}
                <section className="sections flex-col gap-10 max-sm:gap-6">
                    <h2 className="another-sections-tittle font-black max-sm:text-center">
                        Our Burleigh Waters Pediatric Therapy Clinic
                    </h2>
                    <p className="text-[#557271] text-lg font-serif text-center">
                        Our Burleigh Waters clinic features{" "}
                        <strong>11 therapy rooms</strong>, including a{" "}
                        <b>pediatric therapy gym</b> and group therapy space with a kitchen.
                        Conveniently located opposite Treetops Plaza, Suite 3, Treetops
                        Square, Gold Coast.
                    </p>
                    <div className="w-[80%] box-border flex flex-wrap gap-8 justify-center">
                        {BurleighSpace.map((space, idx) => (
                            <figure
                                key={idx}
                                className="flex flex-col items-start w-[30%] max-sm:w-full gap-2"
                            >
                                <img
                                    src={space.picture}
                                    alt={`${space.room} - Burleigh Waters child therapy space`}
                                    className="rounded-md"
                                />
                                <figcaption className="text-[#557271] text-lg font-serif capitalize">
                                    {space.room}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>

                {/* ================= HOPE ISLAND CLINIC ================= */}
                <section className="sections flex-col gap-10 max-sm:gap-6">
                    <h2 className="another-sections-tittle font-black max-sm:text-center">
                        Our Hope Island Therapy Clinic
                    </h2>
                    <p className="text-[#557271] text-lg font-serif text-center">
                        Located at <strong>12 Halcyon Way</strong>, next to Rackley’s
                        Swimming School, our <b>Hope Island clinic</b> offers{" "}
                        <strong>three therapy rooms</strong> designed for comfort and
                        effective child-centered therapy.
                    </p>
                    <div className="w-[80%] box-border flex flex-wrap gap-8 justify-center">
                        {HopeIsland.map((space, idx) => (
                            <figure
                                key={idx}
                                className="flex flex-col items-start w-[30%] max-sm:w-full gap-2"
                            >
                                <img
                                    src={space.picture}
                                    alt={`${space.room} - Hope Island therapy clinic`}
                                    className="rounded-md"
                                />
                                <figcaption className="text-[#557271] text-lg font-serif capitalize">
                                    {space.room}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>

                {/* ================= FOOTER ================= */}
                <Footer />
            </main>
        </React.Fragment>
    );
};

export default AboutUs;
