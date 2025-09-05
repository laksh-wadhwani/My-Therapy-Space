import React, { useEffect, useState } from "react";
import CustomButton from "../Components/CustomButton";
import { Modal } from 'react-responsive-modal';
import CustomInput from "../Components/CustomInput";
import CustomSearchBar from "../Components/CustomSearchBar";
import { toast } from "react-toastify";
import CustomEditor from "../Components/CustomEditor";
import axios from "axios"
import { BackendURL } from "../BackendContext";
import { Link, useNavigate, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CustomFileUpload from "../Components/CustomFileUpload";
import CustomTextArea from "../Components/CustomTextArea"; 

const Blogs = ({ isSidebarHovered }) => {

    const URL = BackendURL();
    const naviagte = useNavigate()
    const [open, setOpen] = useState(false)
    const [uploading, setUploading] = useState(false);
    const [drafting, setDrafting] = useState(false)
    const [blogsData, setBlogsData] = useState([])
    const [blogsContent, setBlogsContent] = useState({
        title: "",
        thumbnail: null,
        content: "",
        metaDescription: "", 
        excerpt: "", 
        imageAltText: ""
    })

    useEffect(() => {
        axios.get(`${URL}/api/blogs/get-all-blogs`)
            .then(response => {
                setBlogsData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [blogsData])

    const handleChange = (name, value) => {
        setBlogsContent(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const BlogsData = new FormData();
    Object.entries(blogsContent).forEach(([key, value]) => {
        BlogsData.append(key, value)
    })

    const UploadBlog = () => {
        setUploading(true);
        axios.post(`${URL}/api/blogs/upload`, BlogsData)
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { naviagte(0) }, 2500)
            })
            .catch(error => {
                console.error(error)
                return toast.error(error.response?.data?.message)
            })
            .finally(() => { setUploading(false) })
    }

    const SaveAsDraft = () => {
        setDrafting(true);
        axios.post(`${URL}/api/blogs/save-as-draft`, BlogsData)
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { naviagte(0) }, 2500)
            })
            .catch(error => {
                console.error(error)
                return toast.error(error.response?.data?.message)
            })
            .finally(() => { setDrafting(false) })
    }

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <React.Fragment>

            <div className={`transition-all duration-300 ${isSidebarHovered ? 'w-[82%]' : 'w-[94%]'} flex flex-col max-sm:items-center gap-8 pb-12 max-sm:w-full max-sm:px-6 box-border`}>
                <div className="w-full p-4 mt-6 max-sm:mt-18 border-b border-gray-200 flex flex-col gap-2 max-sm:px-0">
                    <h1 className="font-serf text-4xl max-sm:text-3xl font-bold text-black capitalize italic">manage blogs</h1>
                    <p className="font-serif text-gray-500 text-base italic max-sm:text-sm">Create, edit and manage blog posts for your website</p>
                </div>

                <div className="w-full px-10 max-sm:px-0 flex justify-between items-center">
                    <CustomButton onClick={onOpenModal}>add new blog</CustomButton>
                    <CustomSearchBar placeholder="Search" />
                </div>

                {(blogsData.length === 0) ? (<p className="font-serif text-black text-3xl font-semibold italic text-center">No Blogs has been uploaded</p>)
                    :
                    (
                        <div className="w-full px-4 max-sm:px-0 flex max-sm:justify-center flex-wrap gap-8">
                            {blogsData.map(data => (
                                <Link to={`/specific-blog/${data.slug}/${data._id}`} key={data._id}>
                                    <div className="w-80 h-100 shadow-md rounded-xl bg-white p-6 flex flex-col gap-6 border border-gray-200 box-border cursor-pointer hover:scale-105">
                                        <img src={data.thumbnail} alt={data.imageAltText || data.title} className="w-full h-[35%] object-cover rounded-xl" /> {/* Improved alt text */}
                                        <div className="flex flex-col gap-2">
                                            <h5 className="font-serif text-lg text-black font-semibold line-clamp-2">{data.title}</h5>
                                            <p className="font-serif font-light text-black text-sm text-gray-400">{new Date(data.updatedAt).toLocaleDateString("en-GB")}</p>
                                            {/* Show excerpt if available, otherwise show content */}
                                            <p className="font-serif font-light text-base text-gray-400 line-clamp-3">
                                                {data.excerpt || ( // NEW: Use excerpt
                                                    <div className="prose max-w-none pointer-events-none">
                                                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                                            {data.content}
                                                        </ReactMarkdown>
                                                    </div>
                                                )}
                                            </p>
                                            <span className={`p-2 rounded-lg text-sm w-fit font-medium ${data.status === "Published" ? "bg-blue-50 text-blue-600" : "bg-yellow-100 text-yellow-600"}`}>{data.status}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

            </div>

            <Modal open={open} onClose={onCloseModal} center
                styles={{ closeButton: { display: 'none' }, modal: { padding: '0', borderRadius: ".8rem", width: '90%', scrollbarWidth: "none" } }}>

                <div className="w-full h-[60rem] flex flex-col gap-6 box-border">

                    <h5 className="font-serif text-2xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6 text-center">add new blogs</h5>

                    <div className="w-full flex flex-col gap-2 px-6"> 
                        <CustomInput 
                            label="Blog Title *" 
                            placeholder="E.g., 5 Signs Your Child Might Benefit from Speech Therapy" 
                            type="text" 
                            value={blogsContent.title} 
                            onChange={e => handleChange("title", e.target.value)} 
                        />
                        
                        <CustomInput 
                            label="Image Alt Text" 
                            placeholder="E.g., Speech therapist working with a child using AAC device" 
                            type="text" 
                            value={blogsContent.imageAltText} 
                            onChange={e => handleChange("imageAltText", e.target.value)} 
                        />
                        
                        <CustomTextArea 
                            label="Meta Description" 
                            placeholder="A compelling 150-160 character summary for search engines. E.g., Discover 5 key signs that indicate your child may need speech therapy. Learn how early intervention can support communication development." 
                            value={blogsContent.metaDescription} 
                            onChange={e => handleChange("metaDescription", e.target.value)}
                            rows="3"
                            maxWords={160}
                        />
                        
                        <CustomTextArea
                            label="Excerpt" 
                            placeholder="A short preview text for the blog listing page. (2-3 sentences)" 
                            value={blogsContent.excerpt} 
                            onChange={e => handleChange("excerpt", e.target.value)}
                            rows="2"
                            maxWords={30}
                        />
                        
                        <CustomFileUpload label="Blog Thumbnail Image" value={blogsContent.thumbnail} onChange={file => handleChange("thumbnail", file)} />
                        
                        <div>
                            <label className="font-serif text-base text-black capitalize font-medium">blog content</label>
                            <CustomEditor value={blogsContent.content} onChange={(val) => handleChange("content", val)} />
                        </div>
                    </div>

                    <div className="w-full px-6 flex justify-center gap-2 pb-8">
                        <CustomButton onClick={SaveAsDraft} disabled={drafting}>
                            {drafting ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "save as draft"}
                        </CustomButton>
                        <CustomButton onClick={UploadBlog} disabled={uploading}>
                            {uploading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "upload blog"}
                        </CustomButton>
                    </div>

                </div>

            </Modal>

        </React.Fragment>
    )
}

export default Blogs