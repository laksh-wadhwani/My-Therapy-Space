import React, { useEffect, useState } from "react";
import { BackendURL } from "../BackendContext"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CustomButton from "../Components/CustomButton";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { toast } from "react-toastify";
import CustomInput from "../Components/CustomInput";
import CustomFileUpload from "../Components/CustomFileUpload";
import CustomEditor from "../Components/CustomEditor";
import CustomTextArea from "../Components/CustomTextArea";

const SpecificCourse = ({ isSidebarHovered }) => {
    const { id } = useParams();
    const URL = BackendURL();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [updating, setUpdating] = useState(false)
    const [update, setIsUpdate] = useState(false) 
    const [course, setCourse] = useState(null)
    const [thumbnailVideo, setThumbnailVideo] = useState(null)
    const [courseIncludes, setCourseIncludes] = useState("")
    const [courseDetails, setCourseDetails] = useState({
        name: "",
        price: 0,
        description: "",
        thumbnail: null,
        video: null
    })

    useEffect(() => {
        axios.get(`${URL}/api/courses/get-specific-course/${id}`)
            .then(response => {
                setCourse(response.data)
                setThumbnailVideo(response.data.video) 
                setCourseIncludes(response.data.courseIncludes)
            })
            .catch(error => console.error("Getting error in fetching specific course details: ", error))
            .finally(() => setLoading(false))
    }, [id, URL])

    const handleChange = (name, value) => {
        setCourseDetails(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const UpdateCourse = courseId => {
        const CourseData = new FormData();
        Object.entries(courseDetails).forEach(([key, value]) => {
            CourseData.append(key, value)
        })
        CourseData.append("courseIncludes", courseIncludes) 
        
        setUpdating(true)
        axios.put(`${URL}/api/courses/update-course/${courseId}`, CourseData)
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { navigate(0) }, 2500)
            })
            .catch(error => {
                console.error("Getting error in updating course details: ", error)
                return toast.error(error.response?.data?.error)
            })
            .finally(() => { setUpdating(false) })
    }

    const DeleteCourse = courseId => {
        axios.delete(`${URL}/api/courses/delete-course/${courseId}`)
        .then(response => {
            toast.success(response.data.message)
            setTimeout(() => {navigate(`/manage-courses`)},2500)
        })
        .catch(error => {
            console.log("Getting error in deleting course: ",error)
            return toast.error(error.response?.data?.error)
        })
    }

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center h-screen">
                <p className="text-lg font-serif text-gray-500 italic text-center">
                    Loading Course...
                </p>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 items-center px-8 pb-12`}>

                {update? (
                    <div className="w-full flex flex-col gap-4 px-32 mt-16">
                        <CustomInput label="Title" placeholder={course.name} value={courseDetails.name} onChange={e => handleChange("name", e.target.value)}/>
                        <CustomInput label="Price" placeholder={course.price} value={courseDetails.price} onChange={e => handleChange("price", e.target.value)}/>
                        <CustomFileUpload label="Thumbnail" value={courseDetails.thumbnail} onChange={file => handleChange("thumbnail", file)}/>
                        <CustomFileUpload label="Video" value={courseDetails.video} onChange={file => handleChange("video", file)}/>
                        <CustomTextArea label="description" placeholder={course.description} maxWords={100} value={courseDetails.description} onChange={e => handleChange("description", e.target.value)}/>
                        <CustomEditor value={courseIncludes} onChange={value => setCourseIncludes(value)}/>

                        <div className="w-full flex justify-around" disabled={updating}>
                            <CustomButton className="w-[30%] bg-blue-500" onClick={() => UpdateCourse(course._id)}>
                                {updating ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "save"}
                            </CustomButton>
                            <CustomButton className="w-[30%] bg-red-500" onClick={() => setIsUpdate(false)}>Cancel</CustomButton>
                        </div>
                    </div>
                )
                :
                (
                    <>
                    <div className="w-full flex justify-around mt-16">
                        <video src={course.video} poster={course.thumbnail} alt="Main Course" controls className="w-[47.5%] max-h-[400px] rounded-xl shadow-md object-cover" />

                        <div className="w-[50%] flex flex-col justify-between p-6 border border-gray-300 rounded-xl shadow-xl">
                            <div className="w-full flex flex-col font-serif text-black capitalize">
                                <h3 className="text-3xl font-semibold">{course.name}</h3>
                                <span className="text-xl"> Price: ${course.price}</span>
                            </div>
                            <p className="font-serif text-lg text-black">{course.description}</p>
                            <div className="w-full flex justify-between">
                                <CustomButton className="w-[45%]" onClick={() => setIsUpdate(true)}>Update</CustomButton>
                                <CustomButton className="w-[45%]" onClick={() => DeleteCourse(course._id)}>Delete</CustomButton>
                            </div>
                        </div>
                    </div>

                     <div className="w-full border border-gray-300 rounded-xl shadow-md flex flex-col gap-2">
                        <h2 className="w-full font-serif text-center text-black text-3xl rounded-t-md bg-[#0BAFA6] capitalize p-6">This Course Includes</h2>
                        <div className="list-disc font-serif text-2xl text-black flex flex-col gap-2 px-10 py-6">
                            <ReactMarkdown
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-[#0BAFA6]" {...props} />,
                                    h2: ({node, ...props}) => <h2 className="text-2xl font-semibold text-[#15b7ac]" {...props} />,
                                    h3: ({node, ...props}) => <h3 className="text-xl font-medium text-[#01b7ac]" {...props} />,
                                    ul: ({node, ...props}) => <ul className="list-disc ml-6" {...props} />,
                                    li: ({node, ...props}) => <li className="mb-1" {...props} />,
                                    span: ({node, style, ...props}) => <span style={style} {...props} />
                                }}
                            >
                                {courseIncludes}
                            </ReactMarkdown>
                        </div>
                    </div>
                    </>
                )
                }
                
            </div>
        </React.Fragment>
    )
}

export default SpecificCourse;
