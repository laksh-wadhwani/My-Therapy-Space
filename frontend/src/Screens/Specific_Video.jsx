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
                <p className="font-serif text-xl italic text-gray-400">Loading Product.....</p>
            </div>
        )
    }

    const AddToCart = () => {

        if(!isSignedIn)
            return toast.error("Please Login First")

        axios.post(`${URL}/api/cart/add-to-cart/${user.id}/${course._id}`)
        .then(response => {
            toast.success(response.data.message)
            setTimeout(() => {navigate(`/cart/${user.id}`)}, 2500)
        })
        .catch(error => {
            console.error("Getting error in adding to the cart: ",error)
            return toast.error(error.response?.data?.error)
        })
    }

    return (
        <React.Fragment>
            <div className="main-box gap-8 items-center bg-white">

                <h2 className="font-serif text-4xl max-sm:text-3xl text-[#0BAFA6] capitalize px-16 max-sm:px-8 mt-32 max-sm:mt-24 self-start">course videos</h2>

                <div className="w-full flex max-sm:flex-col max-sm:gap-6 justify-around px-16 max-sm:px-8">
                    <video src={course.trailer} poster={course.thumbnail} controls alt="Course Video Trailer" className="w-[47.5%] max-sm:w-full max-h-[400px] max-sm:h-auto rounded-xl shadow-md" />
                    <div className="w-[50%] max-sm:w-full flex flex-col max-sm:gap-4 justify-between p-6 border border-gray-300 rounded-xl shadow-xl">
                        <div className="w-full flex flex-col font-serif text-black capitalize">
                            <h3 className="text-4xl max-sm:text-2xl font-semibold">{course.name}</h3>
                            <span className="text-xl max-sm:text-base">Price: ${course.price}</span>
                            <span className="text-xl max-sm:text-base">Instructor: Cathy Trace</span>
                        </div>
                        <p className="font-serif text-xl max-sm:text-sm text-black">{course.description}</p>
                        <CustomButton onClick={AddToCart}>Add to Cart</CustomButton>
                    </div>
                </div>

                <div className="w-[90%] border border-gray-300 rounded-xl shadow-md flex flex-col gap-2">
                    <h2 className="w-full font-serif text-center text-white text-3xl max-sm:text-xl rounded-t-md bg-[#0BAFA6] capitalize p-6">this course includes</h2>
                    <div className="list-disc font-serif text-2xl max-sm:text-base text-black flex flex-col gap-2 max-sm:gap-6 px-10 max-sm:px-6 py-6">
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-[#0BAFA6]" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold text-[#15b7ac]" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-xl font-medium text-[#01b7ac]" {...props} />,
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