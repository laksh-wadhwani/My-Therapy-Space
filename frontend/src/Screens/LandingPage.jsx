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
                <section className="sections flex-col-reverse md:flex-row section-1-bg mt-10 lg:mt-0">

                    <div className="sections-box items-start gap-4 md:gap-8 h-[50%] md:h-auto">
                        <header className="flex flex-col gap-4">
                            {/* h1 is main keyword target */}
                            <h1 className="font-serif text-[#333333] font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                                Empowering Families So <span className="text-[#0BAFA6]">Children</span> Can Thrive
                            </h1>
                            <div className="bg-[#92278F] w-20 h-1 rounded-xl" />
                            <p className="sections-description text-sm md:text-base lg:text-lg xl:text-xl">
                                My Therapy Space is a team of experienced, enthusiastic, Speech Language Pathologists, Occupational Therapists, Dietitians and Therapy Assistants all working together to support your child and family.
                            </p>
                        </header>

                        <Link to="/booking">
                            <CustomButton>Book a Call</CustomButton>
                        </Link>
                    </div>

                    {/* Background image with alt text */}
                    <div
                        className="w-full md:w-[50%] h-[50%] md:h-full bg-[url(./assets/threechildren.png)] bg-no-repeat bg-contain bg-[position:center_40%]"
                        role="img"
                        aria-label="Child Therapy Illustration"
                    />
                </section>

                {/* ================= ABOUT US ================= */}
                <section className="sections flex-col gap-2 bg-white">
                    <span className="sections-tittle self-start">About Us</span>

                    <div className="w-full flex flex-col md:flex-row gap-8">

                        <div className="sections-box justify-between items-start">
                            <h2 className="font-serif text-[#333333] text-xl lg:text-2xl xl:text-4xl">
                                We offer a Family
                                Centred, Play based, Neurodiversity Affirming approach where connecting
                                with children and families is paramount.
                            </h2>
                            <Link to="/AboutUs">
                                <CustomButton className="hidden md:block px-6">About Us</CustomButton>
                            </Link>
                        </div>

                        <div className="sections-box gap-4 md:gap-8 items-start lg:items-center">
                            <p className="sections-description text-sm xl:text-lg md:text-justify">
                                <b>My Therapy Space</b> is a multidisciplinary allied health clinic
                                providing <strong>Speech Pathology</strong>,
                                <strong> Occupational Therapy</strong>, Psychology, Dietetics, and Audiology.
                                Since 2001, our <em>experienced therapists</em> have supported children with a
                                warm, inclusive, and family-focused approach.
                            </p>

                            {/* Stats with keywords */}
                            <div className="section-2-description-box text-center">

                                <article className="border-b md:border-r">
                                    <h3 className="another-sections-tittle font-black">25+</h3>
                                    <span className="sections-description capitalize text-xs xl:text-base">Years of Pediatric Therapy Experience</span>
                                </article>

                                <article className="border-b">
                                    <h3 className="another-sections-tittle font-black">100%</h3>
                                    <span className="sections-description capitalize text-xs xl:text-base">Family-Centered Care</span>
                                </article>

                                <article className="max-sm:border-b md:border-r">
                                    <h3 className="another-sections-tittle font-black">2</h3>
                                    <span className="sections-description capitalize text-xs xl:text-base">Great Locations</span>
                                </article>

                                <article>
                                    <h3 className="another-sections-tittle font-black">500+</h3>
                                    <span className="sections-description capitalize text-xs xl:text-base">Happy Families Served</span>
                                </article>
                            </div>

                        </div>

                    </div>

                    <Link to="/AboutUs">
                        <CustomButton className="mt-4 md:hidden">
                            About Us
                        </CustomButton>
                    </Link>
                </section>

                {/* ================= WORKSHOP FUN ================= */}
                <section className="sections flex-col gap-2 md:gap-4 bg-[#F9FAFB]">
                    <div className="flex flex-col gap-4 items-center">
                        <span className="sections-tittle">Therapy Fun</span>
                        {/* <h2 className="text-5xl max-sm:text-3xl font-serif text-[#333333] text-center">
                            Moments from Our Child Workshops
                        </h2> */}
                    </div>

                    <div className="w-full overflow-x-auto">
                        <div className="flex gap-6 px-4">
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

                    <div className="w-full flex flex-col md:flex-row gap-8 md:flex-wrap justify-evenly">
                        {/* Each service card has keyword-rich headings */}
                        <article className="services-cards lg:rotate-[-3deg] rotate-0">
                            <div className="bg-[#00B2A9]/10">
                                <div className="bg-[#00B2A9]" />
                            </div>
                            <h3>Speech Pathology</h3>
                            <p className="sections-description text-center text-base lg:text-sm xl:text-base">
                                Helping children communicate effectively and build lifelong language skills.
                            </p>
                        </article>

                        <article className="services-cards lg:rotate-[3deg] rotate-0">
                            <div className="bg-[#92278F]/10">
                                <div className="bg-[#92278F]" />
                            </div>
                            <h3>Occupational Therapy for Children</h3>
                            <p className="sections-description text-center text-base lg:text-sm xl:text-base">
                                Supporting daily activities, sensory processing, and motor skills development.
                            </p>
                        </article>

                        <article className="services-cards lg:rotate-[-3deg] rotate-0">
                            <div className="bg-[#F8971D]/10">
                                <div className="bg-[#F8971D]" />
                            </div>
                            <h3>Dietitian & Feeding Therapy</h3>
                            <p className="sections-description text-center text-base lg:text-sm xl:text-base">
                                Nutrition guidance for children with feeding difficulties and special diets.
                            </p>
                        </article>

                        <article className="services-cards lg:rotate-[3deg] rotate-0">
                            <div className="bg-[#1B75BC]/10">
                                <div className="bg-[#1B75BC]" />
                            </div>
                            <h3>Therapy Assistants</h3>
                            <p className="sections-description text-center text-base lg:text-sm xl:text-base">
                                Helping families achieve therapy goals at home, childcare, and in the community.
                            </p>
                        </article>
                    </div>
                </section>

                {/* ================= WHY CHOOSE US ================= */}
                <section className="sections flex-col gap-4 md:gap-10 bg-white">
                    <h2 className="font-serif text-[#333333] capitalize font-semibold text-center text-xl md:text-3xl lg:text-5xl">
                        Why Choose My Therapy Space?
                    </h2>

                    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                        <div className="w-full lg:w-[45%] flex flex-col gap-4">
                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-4 bg-[#333333]" />
                                    <h3 className="font-serif capitalize text-lg font-semibold text-black">Experienced Team</h3>
                                </div>
                                <p className="font-serif text-[#666666] text-justify">Our directors have worked together supporting families for over 25 years! </p>
                            </article>

                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-4 bg-[#333333]" />
                                    <h3 className="font-serif capitalize text-lg font-semibold text-black">Collaborative approach</h3>
                                </div>
                                <p className="font-serif text-[#666666] text-justify">Our therapists all work together under the
                                    one roof.  You don't have to repeat your story.  We work with you and
                                    your family on the goals that are important to you!
                                    Play based:  who needs to sit at a table to do therapy?  We follow the
                                    child’s lead and interests resulting in lots more fun, and more positive
                                    outcomes for your child.</p>
                            </article>

                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-4 bg-[#333333]" />
                                    <h3 className="font-serif capitalize text-lg font-semibold text-black">Play based</h3>
                                </div>
                                <p className="font-serif text-[#666666] text-justify">who needs to sit at a table to do therapy?  We follow the
                                    child’s lead and interests resulting in lots more fun, and more positive
                                    outcomes for your child. </p>
                            </article>

                            <article className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="size-4 bg-[#333333]" />
                                    <h3 className="font-serif capitalize text-lg font-semibold text-black">Neurodiversity Affirming</h3>
                                </div>
                                <p className="font-serif text-[#666666] text-justify">We have listened to the voices of autistic
                                    people and continue to learn from them daily. Our aim is NOT to
                                    change the child- we aim to change the environment, to support our
                                    children with any resources and skills they may need and to educate
                                    the people around your child to accept and embrace your child’s
                                    differences.</p>
                            </article>


                        </div>

                        <div className="hidden lg:block w-[45%]">
                            <img src={ChooseUs} alt="Why families choose My Therapy Space for child development therapy" className="size-full" />
                        </div>

                    </div>

                </section>

                {/* ================= FOOTER ================= */}
                <Footer />
            </main>
        </React.Fragment>
    );
};

export default LandingPage;
