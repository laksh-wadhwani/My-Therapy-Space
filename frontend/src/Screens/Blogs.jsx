import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import Footer from "../Components/footer";
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
        .then(response => {
            const publishedBlogs = response.data.filter(blog => blog.status === "Published")
            setBlogData(publishedBlogs)
        })
    }, []) 

    return(
        <React.Fragment>
            <Helmet>
                <title>Child Therapy & Development Blog | Expert Tips & Resources | My Therapy Space</title>
                <meta name="description" content="Explore our expert blog on pediatric speech therapy, occupational therapy, autism support, AAC, and child development strategies for parents and caregivers." />
                <link rel="canonical" href="https://mytherapyspace.com.au/blogs" />
            </Helmet>

            <div className="main-box bg-[#E0F4F5] min-h-screen items-center gap-10">

                <div className="flex-1 w-full px-8 lg:px-16 mt-24 lg:mt-32 self-start max-sm:text-center">
                    <h1 className="font-serif text-3xl uppercase text-[#0BAFA6]">Our Therapy Blog</h1>
                    <p className="font-serif text-base text-gray-400">Expert insights on speech pathology, occupational therapy, and supporting your child's development.</p>
                </div>

                {(blogsData.length === 0) ? <p className="text-3xl text-center font-serif font-semibold italic">No Blogs have been uploaded</p> :
                <div className="w-full flex box-border px-4 flex-wrap gap-12 justify-center">
                    {blogsData.map(data => (
                     
                       <Link to={`/blog/${data.slug}`} key={data._id}> 
                        <div className="w-80 h-96 shadow-md rounded-xl bg-white p-6 flex flex-col gap-6 border border-black-100 box-border">
                           
                            <img src={data.thumbnail} alt={data.imageAltText || data.title} className="w-full h-[35%] object-cover rounded-xl" />
                            <div className="flex flex-col gap-2">
                                <h2 className="font-serif text-lg text-black font-semibold line-clamp-2">{data.title}</h2>
                                <p className="font-serif font-light text-black text-base">{new Date(data.updatedAt).toLocaleDateString("en-GB")}</p>
                              
                                <p className="font-serif font-light text-base text-gray-400 line-clamp-3">
                                    {data.excerpt ? data.excerpt : (
                                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                            {data.content}
                                        </ReactMarkdown>
                                    )}
                                </p>
                                <Link to={`/blog/${data.slug}`} style={{color: 'unset'}}> 
                                    <span className="text-[#0BAFA6] font-light text-base font-serif uppercase cursor-pointer">Read More</span>
                                </Link>
                            </div>
                        </div>
                       </Link>
                    ))}
                </div>
                }
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default Blogs