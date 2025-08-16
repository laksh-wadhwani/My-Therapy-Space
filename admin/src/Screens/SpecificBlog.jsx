import React, { useEffect, useState } from "react";
import axios from "axios";
import { BackendURL } from "../BackendContext";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CustomButton from "../Components/CustomButton";
import CustomInput from "../Components/CustomInput";
import CustomEditor from "../Components/CustomEditor";
import { toast } from "react-toastify";

const SpecificBlog = ({isSidebarHovered}) => {

  const { id } = useParams();
  const URL = BackendURL();
  const naviagte = useNavigate();
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [editBlog, setEditBlog] = useState(false)
  const [blogTitle, setBlogTitle] = useState("")
  const [thumbnail, setBlogThumbnail] = useState(null)
  const [blogContent, setBlogsContent] = useState("")

  useEffect(() => {
    axios.get(`${URL}/api/blogs/specific-blog/${id}`)
    .then(response => {
      setBlogTitle(response.data.title)
      setBlogThumbnail(response.data.thumbnail)
      setBlogsContent(response.data.content)
    })
    .catch(error => {console.error(error)})
    .finally(() => setLoading(false))
  },[id, URL])

  const UpdateBlog = blogId => {
    const BlogData = new FormData();
    BlogData.append("title", blogTitle)
    BlogData.append("thumbnail", thumbnail)
    BlogData.append("content", blogContent)

    axios.put(`${URL}/api/blogs/update/${blogId}`, BlogData)
    .then(response => {
      toast.success(response.data.message)
      setTimeout(() => {naviagte(0)},2500)
    })
    .catch(error => {
      console.error("Error in updating blog: ",error)
      return toast.error(error.response?.data?.error)
    })
    .finally(() => {
      setUpdating(false)
    })
  }

  const DeleteBlog = blogId => {
    axios.delete(`${URL}/api/blogs/delete/${blogId}`)
    .then(response => {
      toast.success(response.data.message)
      setTimeout(() => {naviagte(`/manage-blogs`)},2500)
    })
    .catch(error => {
      console.error("Getting error in deleting blog: ",error)
      return toast.error(error.response?.data?.error)
    })
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-serif text-gray-500 italic">
          Loading blog...
        </p>
      </div>
    );
  }

  return(
    <React.Fragment>

      <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 px-8 pb-12`}>

        {editBlog? 
        (
          <div className="w-full flex flex-col gap-4 mt-20 px-8">
            <CustomInput label="Blog Title" type="text" value={blogTitle} onChange={e => setBlogTitle(e.target.value)}/>
            <CustomInput label="Thumbnail" type="file" onChange={e => setBlogThumbnail(e.target.files[0])}/>
            <CustomEditor value={blogContent} onChange={val => setBlogsContent(val)}/>
          </div>
        )
        : 
        (
          <>
            <div className="w-full flex flex-col gap-8 mt-12">
              <h3 className="font-sans text-[#0BAFA6] text-6xl font-semibold text-center px-16">{blogTitle}</h3>
              {thumbnail && <img src={thumbnail} alt={blogTitle} className="rounded-xl object-cover"/>}
            </div>

            <div className="w-full font-sans prose max-w-full flex flex-col gap-6 text-justify px-4">
              <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-[#0BAFA6]" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-semibold text-[#15b7ac]" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-medium text-[#01b7ac]" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc ml-6" {...props} />,
                li: ({node, ...props}) => <li className="mb-1" {...props} />,
                span: ({node, style, ...props}) => <span style={style} {...props} />
              }}>
                {blogContent}
              </ReactMarkdown>
            </div>
          </>
        )}

        {editBlog? 
        (
          <div className="w-full flex justify-evenly">
            <CustomButton className="w-[30%] bg-blue-500" disabled={updating} onClick={() => UpdateBlog(id)}>
              {updating ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "upload blog"}
            </CustomButton>
            <CustomButton className="w-[30%] bg-red-500" onClick={() => setEditBlog(false)}>Cancel</CustomButton>
          </div>
        )
        : 
        (
          <div className="w-full flex justify-evenly">
            <CustomButton className="w-[30%]" onClick={() => setEditBlog(true)}>Edit Blog</CustomButton>
            <CustomButton className="w-[30%]" onClick={() => DeleteBlog(id)}>Delete Blog</CustomButton>
          </div>
        )}
       
      </div>

    </React.Fragment>
  )
}

export default SpecificBlog