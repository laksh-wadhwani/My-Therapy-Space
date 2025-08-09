import React, { useState } from "react";
import CustomButton from "../Components/CustomButton";
import { Modal } from 'react-responsive-modal';
import CustomInput from "../Components/CustomInput";
import Video1 from "../assets/video1.png"
import Video2 from "../assets/video2.png"
import Video3 from "../assets/video3.png"
import Video4 from "../assets/video4.png"
import Video5 from "../assets/video5.png"
import Video6 from "../assets/video6.png"
import { Search} from "lucide-react";
import CustomSearchBar from "../Components/CustomSearchBar";


const Courses = ({isSidebarHovered}) => {

    const [open, setOpen] = useState(false)

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const coursesData = [
            {id: 1, title: "Speech Therapy Short Course Video", price: "$78.99", picture: Video1},
            {id: 2, title: "Occupational Therapy Course Video", price: "$50.00", picture: Video2},
            {id: 3, title: "Disable Children Tutorial Course Video", price: "$45.00", picture: Video3},
            {id: 4, title: "Demand Avoidance Course Video", price: "$18.99", picture: Video4},
            {id: 5, title: "Fine Motor Skill Course Video ", price: "$35.00", picture: Video5},
            {id: 6, title: "Pediatric Therapy Course Video", price: "$49.99", picture: Video6}
    ]

    return(
        <React.Fragment>

            <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 pb-12`}>

                <div className="w-full p-4 mt-6 border-b border-gray-200 flex flex-col gap-2">
                    <h1 className="font-serf text-4xl font-bold text-black capitalize italic">Manage Courses</h1>
                    <p className="font-serif text-gray-500 text-base italic">Create, edit and manage course listings for your website</p>
                </div>

                <div className="w-full px-4 pr-16 flex justify-between">
                    <CustomButton onClick={onOpenModal}>add new course</CustomButton>
                     <CustomSearchBar placeholder="Search"/>
                </div>

                <div className="w-full px-4 flex flex-wrap gap-16">
                   {coursesData.map(product => (
                       <div className="w-[280px] h-[330px] shadow-md rounded-xl flex flex-col items-center justify-between pb-4 cursor-pointer hover:scale-105">
                            <img src={product.picture} alt="Course Picture" className="w-full h-[70%] object-cover rounded-t-xl" />
                            <div className="flex flex-col items center">
                                <h5 className="font-serif text-black text-lg text-center">{product.title}</h5>
                                <p className="font-serif text-gray-400 text-center">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div> 

        <Modal open={open} onClose={onCloseModal} center 
        styles={{closeButton:{display:'none'}, modal:{padding:'0', borderRadius: ".8rem"}}}>

            <div className="w-full flex flex-col gap-6 w-sm box-border pb-10">

            <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">add new course</h5>

            <div className="w-full flex flex-col gap-4 px-6">
                <CustomInput label="course name" placeholder="Name" type="text"/>
                <CustomInput label="price" type="number" placeholder="Price"/>
                <CustomInput label="course thumbnail" type="file"/>
                <CustomInput label="course video" type="file"/>
            </div>

            <div className="w-full px-6 flex justify-center gap-2">
                <CustomButton>Add course</CustomButton>
            </div>

            </div>

        </Modal>

        </React.Fragment>
    )
}

export default Courses