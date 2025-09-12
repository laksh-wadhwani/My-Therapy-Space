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
import CustomFileUpload from "../Components/CustomFileUpload";
import CustomTextArea from "../Components/CustomTextArea";

const SpecificBlog = ({ isSidebarHovered }) => {

  const { slug, id } = useParams();
  const URL = BackendURL();
  const naviagte = useNavigate();
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [editBlog, setEditBlog] = useState(false)
  const [blogTitle, setBlogTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [imageAltText, setImageAltText] = useState("")
  const [thumbnail, setBlogThumbnail] = useState(null)
  const [blogContent, setBlogsContent] = useState("")

  useEffect(() => {
    axios.get(`${URL}/api/blogs/specific-blog/${slug}`)
      .then(response => {
        setBlogTitle(response.data.title)
        setMetaDescription(response.data.metaDescription)
        setExcerpt(response.data.excerpt)
        setImageAltText(response.data.imageAltText)
        setBlogThumbnail(response.data.thumbnail)
        setBlogsContent(response.data.content)
      })
      .catch(error => { console.error(error) })
      .finally(() => setLoading(false))
  }, [slug, URL])

  const UpdateBlog = blogId => {
    const BlogData = new FormData();
    BlogData.append("title", blogTitle)
    BlogData.append("thumbnail", thumbnail)
    BlogData.append("content", blogContent)
    BlogData.append("metaDescription", metaDescription)
    BlogData.append("excerpt", excerpt)
    BlogData.append("imageAltText", imageAltText)

    setUpdating(true)
    axios.put(`${URL}/api/blogs/update/${blogId}`, BlogData)
      .then(response => {
        toast.success(response.data.message)
        setTimeout(() => { naviagte(0) }, 2500)
      })
      .catch(error => {
        console.error("Error in updating blog: ", error)
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
        setTimeout(() => { naviagte(`/manage-blogs`) }, 2500)
      })
      .catch(error => {
        console.error("Getting error in deleting blog: ", error)
        return toast.error(error.response?.data?.error)
      })
  }

  const ChangeStatus = blogId => {
    axios.put(`${URL}/api/blogs/change-status/${blogId}`)
      .then(response => {
        toast.success(response.data.message)
        setTimeout(() => { naviagte("/manage-blogs") }, 2500)
      })
      .catch(error => {
        console.error("Getting error in changing status: ", error)
        return toast.error(error?.response?.data?.error)
      })
  }

  if (loading) {
    return (
      <div className="w-full h-dvh flex justify-center items-center">
        <p className="text-lg font-serif text-gray-500 italic text-center">
          Loading blog...
        </p>
      </div>
    );
  }

  return (
    <React.Fragment>

      <div className={`transition-all duration-300 ${isSidebarHovered ? 'w-[82%]' : 'w-[94%]'} flex flex-col max-sm:items-center gap-8 pb-12 max-sm:w-full max-sm:px-6 box-border`}>

        {editBlog ?
          (
            <div className="w-full flex flex-col gap-4 mt-20 px-8">
              <CustomInput
                label="Blog Title"
                type="text"
                value={blogTitle}
                onChange={e => setBlogTitle(e.target.value)}
              />

              <CustomInput
                label="Image Alt Text"
                type="text"
                value={imageAltText}
                onChange={e => setImageAltText(e.target.value)}
              />

              <CustomTextArea
                label="Meta Description"
                value={metaDescription}
                onChange={e => setMetaDescription(e.target.value)}
                rows="3"
                maxWords={160}
              />

              <CustomTextArea
                label="Excerpt"
                value={excerpt}
                onChange={e => setExcerpt(e.target.value)}
                rows="2"
                maxWords={30}
              />

              <CustomFileUpload label="Blog Thumbnail Image" onChange={e => setBlogThumbnail(e.target.files[0])} />

              <div>
                <label className="font-serif text-base text-black capitalize font-medium">blog content</label>
                <CustomEditor value={blogContent} onChange={(val) => setBlogsContent(val)} />
              </div>
            </div>
          )
          :
          (
            <>
              <div className="w-full flex flex-col gap-8 mt-12 max-sm:mt-24">
                <h3 className="font-sans text-[#0BAFA6] text-6xl max-sm:text-2xl font-semibold text-center px-16 max-sm:px-4">{blogTitle}</h3>
                {thumbnail && <img src={thumbnail} alt={imageAltText || blogTitle} className="rounded-xl object-cover" />}
              </div>

              <div className="w-full font-sans prose max-w-full flex flex-col gap-6 text-justify px-4">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-medium" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc ml-6" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal ml-6" {...props} />,
                    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                    span: ({ node, style, ...props }) => <span style={style} {...props} />
                  }}>
                  {blogContent}
                </ReactMarkdown>
              </div>
            </>
          )}

        {editBlog ?
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
              <CustomButton className="w-[30%]" onClick={() => ChangeStatus(id)}>Change Status</CustomButton>
            </div>
          )}

      </div>

    </React.Fragment>
  )
}

export default SpecificBlog