import React, { useState } from "react";
import CustomButton from "../Components/CustomButton";
import blog_picture from "../assets/blog.png"
import { Modal } from 'react-responsive-modal';
import CustomInput from "../Components/CustomInput";
import MDEditor from '@uiw/react-md-editor'
import CustomSearchBar from "../Components/CustomSearchBar";

const Blogs = ({isSidebarHovered}) => {

    const [open, setOpen] = useState(false)

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const blogsData = [
            {id: 1, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Published"},
            {id: 2, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Draft"},
            {id: 3, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Published"},
            {id: 4, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Draft"},
            {id: 5, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Published"},
            {id: 6, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Draft"},
            {id: 7, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Published"},
            {id: 8, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Draft"},
            {id: 9, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Published"},
            {id: 10, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Draft"},
            {id: 11, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture,status: "Published"},
            {id: 12, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Draft"},
            {id: 13, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Published"},
            {id: 14, title: "What is neurodiversity affirming practice?", description: "Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.", uploadDate: "June 19, 2024", image: blog_picture, status: "Draft"}
    ]

    return(
        <React.Fragment>

            <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 pb-12`}>

                <div className="w-full p-4 mt-6 border-b border-gray-200 flex flex-col gap-2">
                    <h1 className="font-serf text-4xl font-bold text-black capitalize italic">manage blogs</h1>
                    <p className="font-serif text-gray-500 text-base italic">Create, edit and manage blog posts for your website</p>
                </div>

                <div className="w-full px-10 flex justify-between">
                    <CustomButton onClick={onOpenModal}>add new blog</CustomButton>
                    <CustomSearchBar placeholder="Search"/>
                </div>

                <div className="w-full px-4 flex flex-wrap gap-8">
                    {blogsData.map(data => (
                        <div className="max-w-80 max-h-100 shadow-md rounded-xl bg-white p-6 flex flex-col gap-6 border border-gray-200 box-border">
                            <img src={data.image} alt="" className="w-full h-[75%] object-cover rounded-xl" />
                            <div className="flex flex-col gap-2">
                                <h5 className="font-serif text-lg text-black font-semibold line-clamp-2">{data.title}</h5>
                                <p className="font-serif font-light text-black text-base">{data.uploadDate}</p>
                                <p className="font-serif font-light text-base text-gray-400 line-clamp-3">{data.description}</p>
                                <span className={`p-2 rounded-lg text-sm w-fit font-medium ${data.status === "Published"? "bg-blue-50 text-blue-600": "bg-yellow-100 text-yellow-600"}`}>{data.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div> 

        <Modal open={open} onClose={onCloseModal} center 
        styles={{closeButton:{display:'none'}, modal:{padding:'0', borderRadius: ".8rem"}}}>

            <div className="w-full flex flex-col gap-6 w-sm box-border pb-10">

            <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">add new blogs</h5>

            <div className="w-full flex flex-col gap-4 px-6">
                <CustomInput label="blog title" placeholder="Title" type="text"/>
                <CustomInput label="Blog Image" type="file"/>
                <MDEditor/>
            </div>

            <div className="w-full px-6 flex justify-center gap-2">
                <CustomButton>save as draft</CustomButton>
                <CustomButton>Upload Blog</CustomButton>
            </div>

            </div>

        </Modal>

        </React.Fragment>
    )
}

export default Blogs