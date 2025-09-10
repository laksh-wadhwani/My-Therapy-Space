import React from "react";
import "../styles/landing.css";
import ChooseUs from "../assets/section4.svg";
import Footer from "../Components/footer";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router";
import { Helmet } from 'react-helmet-async'; // <-- Import Helmet

const LandingPage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Pediatric Therapy Clinic - Speech & Occupational Therapy | My Therapy Space</title>
                <meta name="description" content="My Therapy Space: NDIS-approved pediatric speech therapy, occupational therapy & dietetics on the Gold Coast. Specialising in AAC, autism, early intervention & family-centred care." />
                <meta name="keywords" content="pediatric therapy clinic, speech pathology gold coast, occupational therapy children, paediatric dietitian, key worker model, therapy assistants, AAC, autism therapy, early intervention, NDIS therapy gold coast" />
                {/* Canonical Tag to avoid duplicate content */}
                <link rel="canonical" href="https://mytherapyspace.com.au/" />
            </Helmet>
            <main className="main-box bg-[#E0F4F5]">
                {/* ================= HERO SECTION ================= */}
                <section className="sections max-sm:flex-col-reverse section-1">
                    <div className="sections-box md:h-[50%] max-sm:h-[50%] gap-20 max-sm:gap-4">
                        <header className="flex flex-col gap-6 max-sm:gap-3">
                            {/* h1 is main keyword target */}
                            <h1 className="text-7xl font-serif text-[#333333] max-sm:text-4xl">
                                Empowering families so <span className="text-[#0BAFA6]">children</span> can thrive
                            </h1>
                            <div className="bg-[#92278F] w-20 h-1 rounded-xl" />
                            <p className="sections-description text-lg max-sm:text-base">
                                <b>My Therapy Space</b> provides expert
                                <strong> Speech Therapy, Occupational Therapy, Pediatric Therapy</strong>,
                                Dietetics, and Family Support Programs. Our team of
                                <strong> Gold Coast specialists</strong> helps every child grow with confidence.
                            </p>
                        </header>

                        <Link to="/booking">
                            <CustomButton>Book a Therapy Call</CustomButton>
                        </Link>
                    </div>

                    {/* Background image with alt text */}
                    <div
                        className="w-[50%] max-sm:w-full h-full max-sm:h-[50%] bg-[url(./assets/rightside.svg)] bg-no-repeat bg-contain bg-center"
                        role="img"
                        aria-label="Child Therapy Illustration"
                    />
                </section>

                {/* ================= ABOUT US ================= */}
                <section className="sections flex-col gap-2 max-sm:gap-6 bg-white">
                    <span className="sections-tittle self-start">About Us</span>

                    <div className="w-full flex gap-12 max-sm:flex-col max-sm:gap-6">
                        <div className="sections-box justify-between">
                            <h2 className="text-4xl text-justify font-serif text-[#333333] max-sm:text-3xl">
                                We offer a Family
                                Centred, Play based, Neurodiversity Affirming approach where connecting
                                with children and families is paramount.
                            </h2>
                            <Link to="/AboutUs">
                                <CustomButton className="max-sm:hidden">About Us</CustomButton>
                            </Link>
                        </div>

                        <div className="sections-box gap-20 max-sm:gap-10 mt-6 max-sm:mt-0">
                            <p className="sections-description text-base max-sm:text-sm text-justify">
                                <b>My Therapy Space</b> is a multidisciplinary allied health clinic
                                providing <strong>Speech Pathology</strong>,
                                <strong> Occupational Therapy</strong>, Psychology, Dietetics, and Audiology.
                                Since 2001, our <em>experienced therapists</em> have supported children with a
                                warm, inclusive, and family-focused approach.
                            </p>

                            {/* Stats with keywords */}
                            <div className="section-2-description-box">
                                <article className="border-b border-r">
                                    <h3 className="another-sections-tittle font-black">25+</h3>
                                    <span className="sections-description capitalize">
                                        Years of Pediatric Therapy Experience
                                    </span>
                                </article>

                                <article className="border-b">
                                    <h3 className="another-sections-tittle font-black">100%</h3>
                                    <span className="sections-description capitalize">
                                        Family-Centered Care
                                    </span>
                                </article>

                                <article className="border-r">
                                    <h3 className="another-sections-tittle font-black">2</h3>
                                    <span className="sections-description capitalize">
                                        Great Locations
                                    </span>
                                </article>

                                <article>
                                    <h3 className="another-sections-tittle font-black">500+</h3>
                                    <span className="sections-description capitalize">
                                        Happy Families Served
                                    </span>
                                </article>
                            </div>
                        </div>
                    </div>

                    <Link to="/AboutUs">
                        <CustomButton className="lg:hidden md:hidden sm:hidden max-sm:px-12 max-sm:py-4">
                            About Us
                        </CustomButton>
                    </Link>
                </section>

                {/* ================= WORKSHOP FUN ================= */}
                <section className="sections flex-col gap-10 bg-[#F9FAFB]">
                    <div className="flex flex-col gap-4 items-center">
                        <span className="sections-tittle">Therapy Fun</span>
                        {/* <h2 className="text-5xl max-sm:text-3xl font-serif text-[#333333] text-center">
                            Moments from Our Child Workshops
                        </h2> */}
                    </div>

                    <div className="w-full overflow-x-auto">
                        <div className="flex md:grid md:grid-cols-5 gap-6 px-4">
                            {[work1, work2, work3, work4, work5].map((img, i) => (
                                <div
                                    key={i}
                                    className="w-64 h-64 max-sm:w-full flex-shrink-0 rounded-lg bg-white shadow-md overflow-hidden border border-gray-200"
                                >
                                    <img
                                        src={`${img}`}
                                        alt={`Children's therapy workshop activity ${i + 1}`}
                                        className="size-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= OUR SERVICES ================= */}
                <section className="sections flex-col gap-10">
                    <div className="flex flex-col gap-4 item-center">
                        <span className="sections-tittle">Our Therapy Services</span>
                        {/* <h2 className="text-5xl max-sm:text-3xl font-serif text-[#333333] text-center">
                            Comprehensive Child Development Therapy Solutions
                        </h2> */}
                    </div>

                    <div className="w-full flex max-sm:flex-col max-sm:gap-8 justify-evenly">
                        {/* Each service card has keyword-rich headings */}
                        <article className="services-cards rotate-[-3deg] max-sm:rotate-0">
                            <div className="bg-[#00B2A9]/10">
                                <div className="bg-[#00B2A9]" />
                            </div>
                            <h3>Speech Pathology</h3>
                            <p className="sections-description text-center text-sm max-sm:text-lg">
                                Helping children communicate effectively and build lifelong language skills.
                            </p>
                        </article>

                        <article className="services-cards rotate-[3deg] max-sm:rotate-0">
                            <div className="bg-[#92278F]/10">
                                <div className="bg-[#92278F]" />
                            </div>
                            <h3>Occupational Therapy for Children</h3>
                            <p className="sections-description text-center text-sm max-sm:text-lg">
                                Supporting daily activities, sensory processing, and motor skills development.
                            </p>
                        </article>

                        <article className="services-cards rotate-[-3deg] max-sm:rotate-0">
                            <div className="bg-[#F8971D]/10">
                                <div className="bg-[#F8971D]" />
                            </div>
                            <h3>Dietitian & Feeding Therapy</h3>
                            <p className="sections-description text-center text-sm max-sm:text-lg">
                                Nutrition guidance for children with feeding difficulties and special diets.
                            </p>
                        </article>

                        <article className="services-cards rotate-[3deg] max-sm:rotate-0">
                            <div className="bg-[#1B75BC]/10">
                                <div className="bg-[#1B75BC]" />
                            </div>
                            <h3>Therapy Assistants</h3>
                            <p className="sections-description text-center text-sm max-sm:text-lg">
                                Helping families achieve therapy goals at home, childcare, and in the community.
                            </p>
                        </article>
                    </div>
                </section>

                {/* ================= WHY CHOOSE US ================= */}
                <section className="sections flex-col gap-14 bg-white">
                    <h2 className="another-sections-tittle font-semibold">
                        Why Choose My Therapy Space?
                    </h2>

                    <div className="section-4">
                        <div>
                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]" />
                                    <h3 className="font-serif capitalize text-xl font-semibold text-black">
                                        Collaborative Therapy Approach
                                    </h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify max-sm:text-left w-[50%] max-sm:w-full">
                                    Our <strong>multidisciplinary specialists</strong> work together
                                    to provide complete child care solutions.
                                </p>
                            </article>

                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]" />
                                    <h3 className="font-serif text-base capitalize text-xl font-semibold text-black">
                                        Expert Pediatric Specialists
                                    </h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify max-sm:text-left w-[50%] max-sm:w-full">
                                    Our <strong>speech pathologists</strong> and
                                    <strong> occupational therapists</strong> bring years of experience in child therapy.
                                </p>
                            </article>

                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-[22px] bg-[#333333]" />
                                    <h3 className="font-serif text-base capitalize text-xl font-semibold text-black">
                                        Child-Centered Focus
                                    </h3>
                                </div>
                                <p className="font-serif text-base text-[#666666] text-justify max-sm:text-left w-[50%] max-sm:w-full">
                                    Personalized therapy plans tailored to each child’s unique
                                    <em>developmental needs and goals</em>.
                                </p>
                            </article>
                        </div>

                        {/* Optimized image with alt */}
                        <img
                            src={ChooseUs}
                            alt="Why families choose My Therapy Space for child development therapy"
                            className="max-sm:hidden"
                        />
                    </div>
                </section>

                {/* ================= FOOTER ================= */}
                <Footer />
            </main>
        </React.Fragment>
    );
};

export default LandingPage;
