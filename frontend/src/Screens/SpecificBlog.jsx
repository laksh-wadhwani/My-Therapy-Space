import React, { useEffect, useState } from "react";
import blog_picture from "../assets/blog.png"
import SampleBlog from "../assets/sample blog.png"
import LinkedIn from "../assets/linkedin.svg"
import Twitter from "../assets/twitter.svg"
import Mail from "../assets/mail.svg"
import Pintrest from "../assets/pintrest.svg"
import Facebook from "../assets/facebook.svg"
import Footer from "../Components/footer";
import RButton from "../Components/Reusable_Button";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { BackendURL } from "../BackendContext.jsx"
import axios from "axios"
import CustomButton from "../Components/CustomButton.jsx";

const SpecificBlog = () => {

    const { id } = useParams()
    const URL = BackendURL();
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        axios.get(`${URL}/api/blogs/specific-blog/${id}`)
        .then(response => setBlog(response.data))
    },[id])

    if(!blog) return (<p className="font-serif text-4xl text-center mt-32">No Blog Found</p>)

    return(
        <React.Fragment>
            <div className="main-box bg-white items-center gap-10">

                <div className="w-full flex flex-col items-center mt-32 max-sm:mt-24 px-32 max-sm:px-8 gap-10 max-sm:gap-6">
                    <h2 className="font-serif text-4xl max-sm:text-3xl max-sm:text-center capitalize text-[#0BAFA6]">{blog.title}</h2>
                    {blog && (
                        <img src={blog.thumbnail} alt={blog.title} className="rounded-xl" />
                    )}
                </div>

                <div className="w-full px-32 max-sm:px-8 text-black font-serif flex flex-col gap-6">
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

                <div className="w-[80%] box-border px-10 py-4 bg-white border border-black-100 shadow-md rounded-xl flex justify-between items-center max-sm:hidden">
                    <span className="font-serif text-2xl max-sm:text-base text-black uppercase">share this post</span>
                    <div className="w-fit flex gap-6">
                        <img src={LinkedIn} alt="LinkedIn Icon" className="max-sm:size-6 object-contain cursor-pointer" />
                        <img src={Twitter} alt="Twitter Icon" className="max-sm:size-6 object-contain cursor-pointer" />
                        <img src={Mail} alt="Mail Icon" className="max-sm:size-6 object-contain cursor-pointer" />
                        <img src={Pintrest} alt="Pintrest Icon" className="max-sm:size-6 object-contain cursor-pointer" />
                        <img src={Facebook} alt="Facebook Icon" className="max-sm:size-6 object-contain cursor-pointer" />
                    </div>
                </div>

                <div className="w-[80%] flex flex-col gap-2">
                    <label className="font-serif capitalize text-lg text-black">leave a comment</label>
                    <textarea className="w-full bg-transparent h-80 border border-gray-200 shadow-md rounded-xl box-border px-8 py-4 font-serif text-lg" placeholder="Any Suggestions"/>
                </div>

                <div className="w-[80%] flex max-sm:flex-col max-sm:gap-6 justify-between items-center">
                    <input placeholder="Name" className="w-[30%] max-sm:w-full bg-transparent border border-gray-200 shadow-md rounded-xl p-4 font-serif text-base" />
                    <input placeholder="Email" className="w-[30%] max-sm:w-full bg-transparent border border-gray-200 shadow-md rounded-xl p-4 font-serif text-base" />
                    <CustomButton>Submit</CustomButton>
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default SpecificBlog
