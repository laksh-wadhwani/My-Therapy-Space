import React, { useEffect, useState } from "react";
import RButton from "../Components/Reusable_Button";
import Footer from "../Components/footer";
import { BackendURL } from "../BackendContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CustomButton from "../Components/CustomButton";
import { toast } from "react-toastify";

const SpecificVideo = ({user}) => {

    const { id } = useParams()
    const URL = BackendURL()
    const navigate = useNavigate();
    const isSignedIn = (user&&user.id)? true:false
    const [loading, setLoading] = useState(true)
    const [carting, setCarting] = useState(false)
    const [course, setCourse] = useState({})

    useEffect(() => {
        axios.get(`${URL}/api/courses/get-specific-course/${id}`)
            .then(response => setCourse(response.data))
            .catch(error => console.error("Getting error in fetching specific course details: ", error))
            .finally(() => setLoading(false))
    })

    if (loading) {
        return (
            <div className="w-full h-dvh flex justify-center items-center">
                <p className="font-serif text-xl italic text-gray-400">Loading Course.....</p>
            </div>
        )
    }

    const AddToCart = () => {

        if(!isSignedIn)
            return toast.error("Please Login First")

        setCarting(true)
        axios.post(`${URL}/api/cart/add-to-cart/${user.id}/${course._id}`)
        .then(response => {
            toast.success(response.data.message)
            setTimeout(() => {navigate(`/cart/${user.id}`)}, 2500)
        })
        .catch(error => {
            console.error("Getting error in adding to the cart: ",error)
            toast.error(error.response?.data?.error)
        })
        .finally(() => setCarting(false))
    }

    return (
        <React.Fragment>
            <div className="main-box gap-8 items-center bg-[#E0F4F5]">

                <h2 className="font-serif text-3xl text-[#0BAFA6] capitalize px-8 md:px-14 mt-24 lg:mt-32 md:self-start">course videos</h2>

                <div className="w-full flex flex-col md:flex-row max-sm:gap-6 justify-around px-8">
                    <video src={course.trailer} poster={course.thumbnail} controls alt="Course Video Trailer" className="w-full md:w-[47.5%] max-h-[400px] h-auto rounded-xl shadow-md" />
                    <div className="w-full md:w-[50%] flex flex-col gap-4 justify-between p-6 border border-gray-300 rounded-xl shadow-xl bg-white">
                        <div className="w-full flex flex-col font-serif text-black capitalize">
                            <h3 className="text-2xl xl:text-3xl font-semibold">{course.name}</h3>
                            <span className="text-base xl:text-xl">Price: ${course.price}</span>
                        </div>
                        <p className="font-serif text-sm xl:text-xl text-black">{course.description}</p>
                        <CustomButton onClick={AddToCart} disabled={carting}>
                            {carting ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "add to cart"}
                        </CustomButton>
                    </div>
                </div>

                <div className="w-[90%] border border-gray-300 rounded-xl shadow-md flex flex-col gap-2">
                    <h2 className="w-full font-serif text-center text-white text-xl rounded-t-md bg-[#0BAFA6] capitalize p-6">this course includes</h2>
                    <div className="list-disc font-serif text-base md:text-lg xl:text-2xl text-black flex flex-col gap-6 px-6 py-6 bg-white">
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-xl font-medium" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc ml-6" {...props} />,
                                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                                span: ({ node, style, ...props }) => <span style={style} {...props} />
                            }}
                        >
                            {course.courseIncludes}
                        </ReactMarkdown>
                    </div>
                </div>

                <Footer />

            </div>
        </React.Fragment>
    )
}

export default SpecificVideo
