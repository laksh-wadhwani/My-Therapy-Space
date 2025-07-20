import React from "react";
import SpeechPathology from "../assets/speech service.png"
import Dietician from "../assets/dietician service.png"
import OccupationTherapy from "../assets/occupational service.png"
import Footer from "../Components/footer";

const Services = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-white gap-16">
                <h1 className="font-serif font-normal text-4xl text-[#0BAFA6] px-14 mt-28">Services</h1>

                <div className="w-full flex flex-col gap-4 px-14">
                    <h2 className="font-serif text-2xl font-normal capitalize">speech pathology</h2>
                    <div className="w-full flex gap-12">
                        <img src={SpeechPathology} alt="Speech Pathology Picture" />
                        <div className="flex flex-col gap-4">
                            <p className="font-serif text-xl uppercase text-justify">Our experienced team of Speech Pathologists work together to support you in the areas of:</p>
                            <ol className="text-justify font-serif text-lg text-black flex flex-col gap-6">
                                <li><span className="font-bold">Speech:</span> Some children have difficulty producing sounds expected for their age, whilst others may have difficulty with planning the movements needed to produce speech.</li>
                                <li><span className="font-bold">Receptive Language:</span> Some children have difficulty following directions or understanding concepts or questions that are expected for their age.</li>
                                <li><span className="font-bold">Expressive Language:</span> Your child may have difficulty expressing all of their ideas in a clear and concise way. This could include answering questions, use of grammar, and putting sentences together.</li>
                                <li><span className="font-bold">Functional Communication and AAC:</span> If your child has difficulty in getting their message across, we specialise in introducing Augmentative and Alternative Communication. We can help to support your child to develop a core vocabulary that is important to them, using gestures, body language, key words signs, symbols, or a speech generating device.</li>
                                <li><span className="font-bold">Feeding:</span> If your child has difficulty feeding, swallowing chewing or drinking then we can help you. Your child may need support and guidance to transition to a new texture, or to learn to bite, chew, or experience different tastes.</li>
                                <li><span className="font-bold">Workshops:</span> We love to run workshops on Communicating with Sign, and Hanen Strategies. Please contact us for more information</li>
                            </ol>
                        </div>
                    </div>
                </div>

                 <div className="w-full flex flex-col gap-4 px-14">
                    <h2 className="font-serif text-2xl font-normal capitalize">Dietician</h2>
                    <div className="w-full flex gap-12">
                        <img src={Dietician} alt="Speech Pathology Picture" />
                        <div className="flex flex-col gap-4">
                            <p className="font-serif text-xl uppercase text-justify">OUR DIETICIAN CAN OFFER SUPPORT AND GUIDANCE IN THE FOLLOWING AREAS:</p>
                            <ol className="text-justify font-serif text-lg text-black flex flex-col gap-6">
                                <li><span className="font-bold">Infant Feeding:</span> Feeding your baby isn’t always easy. There is so much information and advice available, but which is the right approach for you and your bub? Breastfeeding, bottle feeding, starting solids is a new world to navigate. Baby led weaning, vegetarian and vegan feeding; Let us help to support you in the early days to set your bub up for life long love of feeding and eating!</li>
                                <li><span className="font-bold">Behaviour change support & personalised strategies:</span> Eating is a behaviour that is complicated by many aspects of your child’s life such as their hunger and fullness cycle, developmental stage, sensory preferences and associated picky eating. We have a range of strategies to help your child develop a healthy relationship with food and take the stress out of mealtimes.</li>
                                <li><span className="font-bold">Sometimes littlies need more:</span> Their medical background may mean they burn calories quicker, or require texture modified diets. The use of specialised nutrition products for a targeted goal can be useful. We can support you accessing these products at the most affordable pricing and help you navigate the inclusion of these within your NDIS funding. Behaviour change support & personalised strategies.</li>
                                <li><span className="font-bold">Blended Tube Feeds for gastrostomies:</span> Thinking about trying blended tube feeds? We can provide a thorough assessment of your child’s needs and discuss options, develop recipes and meal plans and assist you in your journey.</li>
                            </ol>
                        </div>
                    </div>
                </div>

                 <div className="w-full flex flex-col gap-4 px-14">
                    <h2 className="font-serif text-2xl font-normal capitalize">Occupational Therapy</h2>
                    <div className="w-full flex gap-12">
                        <img src={OccupationTherapy} alt="Speech Pathology Picture" />
                        <div className="flex flex-col gap-4">
                            <p className="font-serif text-xl uppercase text-justify">Our experienced team of Speech Pathologists work together to support you in the areas of:</p>
                            <ol className="text-justify font-serif text-lg text-black flex flex-col gap-6">
                                <li><span className="font-bold">Speech:</span> Some children have difficulty producing sounds expected for their age, whilst others may have difficulty with planning the movements needed to produce speech.</li>
                                <li><span className="font-bold">Receptive Language:</span> Some children have difficulty following directions or understanding concepts or questions that are expected for their age.</li>
                                <li><span className="font-bold">Expressive Language:</span> Your child may have difficulty expressing all of their ideas in a clear and concise way. This could include answering questions, use of grammar, and putting sentences together.</li>
                                <li><span className="font-bold">Functional Communication and AAC:</span> If your child has difficulty in getting their message across, we specialise in introducing Augmentative and Alternative Communication. We can help to support your child to develop a core vocabulary that is important to them, using gestures, body language, key words signs, symbols, or a speech generating device.</li>
                                <li><span className="font-bold">Feeding:</span> If your child has difficulty feeding, swallowing chewing or drinking then we can help you. Your child may need support and guidance to transition to a new texture, or to learn to bite, chew, or experience different tastes.</li>
                                <li><span className="font-bold">Workshops:</span> We love to run workshops on Communicating with Sign, and Hanen Strategies. Please contact us for more information</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default Services