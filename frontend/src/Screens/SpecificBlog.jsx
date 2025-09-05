import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { BackendURL } from "../BackendContext.jsx";
import axios from "axios";
import Footer from "../Components/footer";
import CustomButton from "../Components/CustomButton.jsx";
import LinkedIn from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Mail from "../assets/mail.svg";
import Pintrest from "../assets/pintrest.svg";
import Facebook from "../assets/facebook.svg";

const SpecificBlog = () => {
    const { slug } = useParams();
    const URL = BackendURL();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${URL}/api/blogs/specific-blog/${slug}`);
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [URL]);

    const handleSubmitComment = (e) => {
        e.preventDefault();
        // Add your comment submission logic here
        console.log("Comment submitted:", { name, email, comment });
        alert("Thank you for your comment! It will be reviewed before publishing.");
        setComment("");
        setName("");
        setEmail("");
    };

    const handleShare = (platform) => {
        const shareUrl = window.location.href;
        const shareText = blog?.title || 'Check out this blog post from My Therapy Space';
        
        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}`,
            email: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-white">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#0BAFA6] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="font-serif text-xl text-gray-600">Loading blog post...</p>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-white">
                <div className="text-center">
                    <p className="font-serif text-4xl text-gray-700 mb-4">Blog Post Not Found</p>
                    <p className="font-serif text-lg text-gray-500">The blog post you're looking for doesn't exist or may have been removed.</p>
                </div>
            </div>
        );
    }

    const canonicalUrl = `https://mytherapyspace.com.au/blog/${blog.slug || id}`;
    const publishedDate = new Date(blog.updatedAt).toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <React.Fragment>
            {/* ================= DYNAMIC SEO META TAGS ================= */}
            <Helmet>
                <title>{blog.title} | My Therapy Space</title>
                <meta name="description" content={blog.metaDescription || blog.excerpt || `Read our article about ${blog.title} on My Therapy Space.`} />
                <meta name="keywords" content={blog.keywords || `speech therapy, occupational therapy, pediatric therapy, ${blog.title}`} />
                <link rel="canonical" href={canonicalUrl} />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.metaDescription || blog.excerpt} />
                <meta property="og:image" content={blog.thumbnail} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="My Therapy Space" />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.metaDescription || blog.excerpt} />
                <meta name="twitter:image" content={blog.thumbnail} />
                
                {/* Structured Data for SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": blog.title,
                        "description": blog.metaDescription || blog.excerpt,
                        "image": blog.thumbnail,
                        "datePublished": blog.createdAt,
                        "dateModified": blog.updatedAt,
                        "author": {
                            "@type": "Organization",
                            "name": "My Therapy Space"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "My Therapy Space",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://mytherapyspace.com.au/logo.png"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": canonicalUrl
                        }
                    })}
                </script>
            </Helmet>

            <div className="main-box bg-white items-center gap-10">
                {/* Blog Header */}
                <div className="w-full flex flex-col items-center mt-32 max-sm:mt-24 px-32 max-sm:px-8 gap-8 max-sm:gap-6">
                    <h1 className="font-serif text-4xl max-sm:text-3xl text-center capitalize text-[#0BAFA6] leading-tight">
                        {blog.title}
                    </h1>
                    
                    {/* Blog Meta Information */}
                    <div className="flex flex-col items-center gap-2 text-gray-600">
                        <span className="font-serif text-lg">Published on {publishedDate}</span>
                        {/* Add reading time estimate if needed */}
                        {/* <span className="font-serif text-sm">• 5 min read</span> */}
                    </div>

                    {blog.thumbnail && (
                        <img 
                            src={blog.thumbnail} 
                            alt={blog.imageAltText || blog.title}
                            className="rounded-xl w-full max-w-4xl h-auto max-h-96 object-cover shadow-lg"
                        />
                    )}
                </div>

                {/* Blog Content */}
                <article className="w-full px-32 max-sm:px-8 text-black font-serif flex flex-col gap-8">
                    <ReactMarkdown 
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({node, ...props}) => <h2 className="text-3xl font-bold text-[#0BAFA6] mt-12 mb-6" {...props} />,
                            h2: ({node, ...props}) => <h3 className="text-2xl font-semibold text-[#15b7ac] mt-10 mb-4" {...props} />,
                            h3: ({node, ...props}) => <h4 className="text-xl font-medium text-[#01b7ac] mt-8 mb-3" {...props} />,
                            p: ({node, ...props}) => <p className="text-lg leading-8 mb-6 text-gray-800" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc ml-8 mb-6 space-y-2" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal ml-8 mb-6 space-y-2" {...props} />,
                            li: ({node, ...props}) => <li className="text-lg text-gray-800" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-semibold text-[#0BAFA6]" {...props} />,
                            em: ({node, ...props}) => <em className="italic text-gray-700" {...props} />,
                            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-[#0BAFA6] pl-6 italic text-gray-600 my-6" {...props} />,
                            a: ({node, ...props}) => <a className="text-[#0BAFA6] hover:text-[#08887c] underline" {...props} />
                        }}
                    >
                        {blog.content}
                    </ReactMarkdown>
                </article>

                {/* Social Sharing */}
                <div className="w-[80%] box-border px-10 py-6 bg-white border border-gray-200 shadow-md rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="font-serif text-2xl max-sm:text-xl text-black uppercase font-semibold">
                        Share this post
                    </span>
                    <div className="w-fit flex gap-4 flex-wrap justify-center">
                        <button onClick={() => handleShare('facebook')} className="p-2 hover:scale-110 transition-transform">
                            <img src={Facebook} alt="Share on Facebook" className="w-8 h-8 object-contain" />
                        </button>
                        <button onClick={() => handleShare('twitter')} className="p-2 hover:scale-110 transition-transform">
                            <img src={Twitter} alt="Share on Twitter" className="w-8 h-8 object-contain" />
                        </button>
                        <button onClick={() => handleShare('linkedin')} className="p-2 hover:scale-110 transition-transform">
                            <img src={LinkedIn} alt="Share on LinkedIn" className="w-8 h-8 object-contain" />
                        </button>
                        <button onClick={() => handleShare('pinterest')} className="p-2 hover:scale-110 transition-transform">
                            <img src={Pintrest} alt="Share on Pinterest" className="w-8 h-8 object-contain" />
                        </button>
                        <button onClick={() => handleShare('email')} className="p-2 hover:scale-110 transition-transform">
                            <img src={Mail} alt="Share via Email" className="w-8 h-8 object-contain" />
                        </button>
                    </div>
                </div>

                {/* Comment Section */}
                <div className="w-[80%] flex flex-col gap-6">
                    <h3 className="font-serif text-2xl text-black capitalize border-b pb-2">
                        Leave a Comment
                    </h3>
                    <form onSubmit={handleSubmitComment} className="flex flex-col gap-4">
                        <textarea 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full bg-transparent h-40 border border-gray-200 shadow-md rounded-xl box-border px-6 py-4 font-serif text-lg resize-none"
                            placeholder="Share your thoughts..."
                            required
                        />
                        <div className="flex max-sm:flex-col max-sm:gap-4 justify-between items-center">
                            <input 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name" 
                                className="w-[48%] max-sm:w-full bg-transparent border border-gray-200 shadow-md rounded-xl p-4 font-serif text-base"
                                required
                            />
                            <input 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email" 
                                type="email"
                                className="w-[48%] max-sm:w-full bg-transparent border border-gray-200 shadow-md rounded-xl p-4 font-serif text-base"
                                required
                            />
                        </div>
                        <CustomButton type="submit" className="self-end">
                            Post Comment
                        </CustomButton>
                    </form>
                </div>

                <Footer/>
            </div>
        </React.Fragment>
    );
};

export default SpecificBlog;