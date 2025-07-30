import React from "react";
import Footer from "../Components/footer";
import blog_picture from "../assets/blog.png"
import { Link } from "react-router";

const Blogs = () => {

    const blogsData = [
        {id: 1, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 2, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 3, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 4, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 5, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 6, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 7, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 8, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 9, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 10, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 11, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 12, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 13, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture},
        {id: 14, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture}

    ]

    return(
        <React.Fragment>
            <div className="main-box bg-white items-center gap-10">

                <div className="w-full px-16 mt-32 self-start">
                    <h2 className="font-serif text-4xl uppercase text-[#0BAFA6]">our blog articles</h2>
                    <p className="font-serif text-xl text-gray-400">Explore insightful articles and health tips for everyone.</p>
                </div>

                <div className="w-[90%] flex box-border px-16 flex-wrap gap-12 justify-center">
                    {blogsData.map(data => (
                        <div className="max-w-80 max-h-100 shadow-md rounded-xl bg-white p-6 flex flex-col gap-6 border border-black-100 box-border">
                            <img src={data.image} alt="" className="w-full h-[75%] object-cover rounded-xl" />
                            <div className="flex flex-col gap-2">
                                <h5 className="font-serif text-lg text-black font-semibold line-clamp-2">{data.title}</h5>
                                <p className="font-serif font-light text-black text-base">{data.uploadDate}</p>
                                <p className="font-serif font-light text-base text-gray-400 line-clamp-3">{data.description}</p>
                                <Link to={`/blog/${data.id}`} style={{color: 'unset'}}><a className="text-[#0BAFA6] font--light text-base font-serif uppercase cursor-pointer">Read More</a></Link>
                            </div>
                        </div>
                    ))}
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default Blogs