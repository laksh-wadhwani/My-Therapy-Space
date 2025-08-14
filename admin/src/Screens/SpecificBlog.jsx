import React, { useEffect, useState } from "react";
import LinkedIn from "../assets/linkedin.svg"
import Twitter from "../assets/twitter.svg"
import Mail from "../assets/mail.svg"
import Pintrest from "../assets/pintrest.svg"
import Facebook from "../assets/facebook.svg"
import CustomButton from "../Components/CustomButton";
import CustomInput from "../Components/CustomInput";
import axios from "axios";
import { BackendURL } from "../BackendContext";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const SpecificBlog = ({isSidebarHovered}) => {

    const { id } = useParams()
    const URL = BackendURL();
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        axios.get(`${URL}/api/blogs/specific-blog/${id}`)
        .then(response => setBlog(response.data))
    },[id])

    if (!blog) return <p>Loading...</p>;

    return (
    <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 px-8`}>
      <div className="w-full flex flex-col gap-6 items-center mt-16">
        <h2 className="font-serif text-[#0BAFA6] text-4xl font-semibold">{blog.title}</h2>
        {blog.thumbnail && (
        <img src={blog.thumbnail} alt={blog.title} className="rounded-xl object-cover" />
        )}
      </div>
      
      <div className="w-full prose max-w-full font-serif">
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
          {blog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default SpecificBlog