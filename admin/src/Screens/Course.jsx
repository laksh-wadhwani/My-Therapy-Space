import React, { useEffect, useState } from "react";
import CustomButton from "../Components/CustomButton";
import { Modal } from 'react-responsive-modal';
import CustomInput from "../Components/CustomInput";
import CustomTextArea from "../Components/CustomTextArea"
import CustomSearchBar from "../Components/CustomSearchBar";
import CustomFileUpload from "../Components/CustomFileUpload";
import CustomEditor from "../Components/CustomEditor";
import { BackendURL } from "../BackendContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const Courses = ({ isSidebarHovered }) => {

    const URL = BackendURL();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0);
    const [courses, setCourses] = useState([])
    const [courseDetail, setCourseDetail] = useState({
        name: "",
        price: 0,
        description: "",
        thumbnail: null,
        trailer: null,
        video: null,
        courseIncludes: ""
    })

    useEffect(() => {
        axios.get(`${URL}/api/courses/get-courses`)
            .then(response => setCourses(response.data))
            .catch(error => {
                console.error("Getting error in fetching courses: ", error)
                return toast.error(error.response?.data?.error)
            })
    })

    const handleChange = (name, value) => {
        setCourseDetail(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const UploadCourse = () => {
        const CourseData = new FormData();
        Object.entries(courseDetail).forEach(([key, value]) => {
            CourseData.append(key, value)
        })

        setLoading(true)
        axios.post(`${URL}/api/courses/add-course`, CourseData, {
            onUploadProgress: progressEvent => {
                const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setUploadProgress(percent)
            }
        })
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { navigate(0) }, 2500)
            })
            .catch(error => {
                console.error("Getting Error in uploading video: ", error)
                return toast.error(error.response?.data?.error)
            })
            .finally(() => setLoading(false))
    }

    return (
        <React.Fragment>

            <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 pb-12`}>

                <div className="w-full p-4 mt-6 border-b border-gray-200 flex flex-col gap-2">
                    <h1 className="font-serf text-4xl font-bold text-black capitalize italic">Manage Courses</h1>
                    <p className="font-serif text-gray-500 text-base italic">Create, edit and manage course listings for your website</p>
                </div>

                <div className="w-full px-4 pr-16 flex justify-between">
                    <CustomButton onClick={() => setOpen(true)}>add new course</CustomButton>
                    <CustomSearchBar placeholder="Search" />
                </div>


                <div className="w-full px-4 flex flex-wrap gap-16">
                    {courses.map(course => (
                        <Link to={`/course/${course._id}`}><div className="w-[280px] h-[330px] shadow-md rounded-xl flex flex-col items-center justify-between pb-4 cursor-pointer hover:scale-105">
                            <img src={course.thumbnail} alt="Course Picture" className="w-full h-[70%] object-cover rounded-t-xl" />
                            <div className="flex flex-col items center px-2">
                                <h5 className="font-serif text-black text-xl font-semibold text-center">{course.name}</h5>
                                <p className="font-serif text-gray-500 text-center text-base">${course.price}</p>
                            </div>
                        </div></Link>
                    ))}
                </div>

            </div>

            <Modal open={open} onClose={() => setOpen(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { padding: '0', borderRadius: ".8rem" } }}>

                <div className="w-full flex flex-col gap-6 w-3xl box-border pb-10">

                    <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">add new course</h5>

                    <div className="w-full flex flex-col gap-4 px-6">
                        <CustomInput label="course name" placeholder="Name" type="text" value={courseDetail.name} onChange={e => handleChange("name", e.target.value)} />
                        <CustomInput label="price" type="number" placeholder="Price" value={courseDetail.price} onChange={e => handleChange("price", e.target.value)} />
                        <CustomTextArea label="course description" placeholder="Description" maxWords={100} value={courseDetail.description} onChange={e => handleChange("description", e.target.value)} />
                        <div className="w-full flex justify-between">
                            <CustomFileUpload label="Thumbnail" value={courseDetail.thumbnail} onChange={file => handleChange("thumbnail", file)} />
                            <CustomFileUpload label="Trailer" value={courseDetail.trailer} onChange={file => handleChange("trailer", file)} />
                            <CustomFileUpload label="Video" value={courseDetail.video} onChange={file => handleChange("video", file)} />
                        </div>
                        <CustomEditor value={courseDetail.courseIncludes} onChange={value => handleChange("courseIncludes", value)} />
                    </div>

                    <div className="w-full px-6 flex justify-center gap-2">
                        <CustomButton onClick={UploadCourse} disabled={loading}>
                            {loading ? (
                                <div className="w-full px-6">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className={`h-2.5 rounded-full transition-all duration-300 ${uploadProgress < 100 ? "bg-green-500" : "bg-blue-500 animate-pulse"}`}
                                            style={{ width: `${uploadProgress}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {uploadProgress < 100 ? `${uploadProgress}% uploaded` : "Finalizing upload..."}
                                    </p>
                                </div>
                            ) : `add course`}
                        </CustomButton>
                    </div>

                </div>

            </Modal>

        </React.Fragment>
    )
}

export default Courses