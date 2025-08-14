import React, { useEffect, useState } from "react";
import Footer from "../Components/footer";
import blog_picture from "../assets/blog.png"
import { Link } from "react-router";
import axios from "axios"
import { BackendURL } from "../BackendContext";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Blogs = () => {

    const URL = BackendURL();
    const [blogsData, setBlogData] = useState([])

    useEffect(() => {
        axios.get(`${URL}/api/blogs/get-all-blogs`)
        .then(response => setBlogData(response.data))
    },[blogsData])

    return(
        <React.Fragment>
            <div className="main-box bg-white items-center gap-10">

                <div className="w-full px-16 mt-32 self-start">
                    <h2 className="font-serif text-4xl uppercase text-[#0BAFA6]">our blog articles</h2>
                    <p className="font-serif text-xl text-gray-400">Explore insightful articles and health tips for everyone.</p>
                </div>

                <div className="w-[90%] flex box-border px-16 flex-wrap gap-12 justify-center">
                    {blogsData.map(data => (
                        <div className="max-w-80 max-h-100 shadow-md rounded-xl bg-white p-6 flex flex-col gap-6 border border-black-100 box-border">
                            <img src={data.thumbnail} alt="" className="w-full h-[75%] object-cover rounded-xl" />
                            <div className="flex flex-col gap-2">
                                <h5 className="font-serif text-lg text-black font-semibold line-clamp-2">{data.title}</h5>
                                {/* <p className="font-serif font-light text-black text-base">{data.uploadDate}</p> */}
                                <p className="font-serif font-light text-base text-gray-400 line-clamp-3">
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {data.content}
                                    </ReactMarkdown>
                                </p>
                                <Link to={`/blog/${data._id}`} style={{color: 'unset'}}><a className="text-[#0BAFA6] font--light text-base font-serif uppercase cursor-pointer">Read More</a></Link>
                            </div>
                        </div>
                    ))}
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default Blogs