import React, { useEffect, useState } from "react";
import CustomButton from "../Components/CustomButton";
import { Modal } from 'react-responsive-modal';
import CustomInput from "../Components/CustomInput";
import CustomSearchBar from "../Components/CustomSearchBar";
import { toast } from "react-toastify";
import CustomEditor from "../Components/CustomEditor";
import axios from "axios"
import { BackendURL } from "../BackendContext";
import {Link, useNavigate, useParams} from "react-router-dom"
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

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
        content: ""
    })

    useEffect(() => {
        axios.get(`${URL}/api/blogs/get-all-blogs`)
        .then(response => {
            setBlogsData(response.data)
        }) 
        .catch(error => {
            console.error(error)
        })
    },[blogsData])

    const handleChange = (input, fieldName) => {
        if (input && input.target) {
            const { name, type, value, files } = input.target;
            if (type === "file") {
                const file = files[0];
                if (file && !file.type.startsWith("image/")) {
                    toast.error("Only image files are allowed!");
                    return;
                }
                setBlogsContent({
                    ...blogsContent,
                    [name]: file
                });
            } else {
                setBlogsContent({
                    ...blogsContent,
                    [name]: value
                });
            }
        } else {
            setBlogsContent({
                ...blogsContent,
                [fieldName]: input || ""
            });
        }
    };

    const BlogsData = new FormData();
    Object.entries(blogsContent).forEach(([key, value]) => {
        BlogsData.append(key, value)
    })

    const UploadBlog = () => {        
        setUploading(true);
        axios.post(`${URL}/api/blogs/upload`, BlogsData)
        .then(response => {
            toast.success(response.data.message)
            setTimeout(() => {naviagte(0)},2500)
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
            setTimeout(() => {naviagte(0)},2500)
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

            <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 pb-12`}>
                <div className="w-full p-4 mt-6 border-b border-gray-200 flex flex-col gap-2">
                    <h1 className="font-serf text-4xl font-bold text-black capitalize italic">manage blogs</h1>
                    <p className="font-serif text-gray-500 text-base italic">Create, edit and manage blog posts for your website</p>
                </div>

                <div className="w-full px-10 flex justify-between">
                    <CustomButton onClick={onOpenModal}>add new blog</CustomButton>
                    <CustomSearchBar placeholder="Search" />
                </div>

                { (blogsData.length===0)? (<p className="font-serif text-black text-2xl font-semibold italic px-12">No Blogs has been uploaded</p>)
                :
                (
                <div className="w-full px-4 flex flex-wrap gap-8">
                    {blogsData.map(data => (
                        <Link to={`/specific-blog/${data._id}`}><div className="max-w-80 max-h-100 shadow-md rounded-xl bg-white p-6 flex flex-col gap-6 border border-gray-200 box-border" key={data._id}>
                            <img src={data.thumbnail} alt="" className="w-full h-[75%] object-cover rounded-xl" />
                            <div className="flex flex-col gap-2">
                                <h5 className="font-serif text-lg text-black font-semibold line-clamp-2">{data.title}</h5>
                                <p className="font-serif font-light text-black text-sm text-gray-400">{new Date(data.updatedAt).toLocaleDateString("en-GB")}</p>
                                <div className="font-serif font-light text-base text-gray-400 line-clamp-3 prose max-w-none">
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {data.content}
                                    </ReactMarkdown>
                                </div>
                                <span className={`p-2 rounded-lg text-sm w-fit font-medium ${data.status === "Published" ? "bg-blue-50 text-blue-600" : "bg-yellow-100 text-yellow-600"}`}>{data.status}</span>
                            </div>
                        </div></Link>
                    ))}
                </div>
                )}

            </div>

            <Modal open={open} onClose={onCloseModal} center
                styles={{ closeButton: { display: 'none' }, modal: { padding: '0', borderRadius: ".8rem" } }}>

                <div className="w-3xl h-[43rem] flex flex-col gap-6 box-border pb-10">

                    <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">add new blogs</h5>

                    <div className="w-full flex flex-col gap-4 px-6">
                        <CustomInput label="blog title" placeholder="Title" type="text" name="title" value={blogsContent.title} onChange={handleChange} />
                        <CustomInput label="Blog Image" type="file" name="thumbnail" onChange={handleChange} />
                        <CustomEditor value={blogsContent.value} onChange={(val) => handleChange(val, "content")} />
                    </div>

                    <div className="w-full px-6 flex justify-center gap-2">
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