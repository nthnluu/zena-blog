import Navbar from "../../components/Navbar";
import MailingListSection from "../../components/home/MailingListSection";
import Footer from "../../components/Footer";
import React from "react";
import Post from "../../lib/types/Post";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const ArticlePage: React.FC<{ post: Post }> = ({post}) => {
    return <div className="min-h-screen bg-white">
        <Navbar/>
        <head>
            <title>{post.title} | Zena Health</title>
        </head>
        <main>
            <div className="relative py-16 bg-white overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                        <svg className="absolute top-12 left-full transform translate-x-32" width={404} height={384} fill="none" viewBox="0 0 404 384">
                            <defs>
                                <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                        </svg>
                        <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width={404} height={384} fill="none" viewBox="0 0 404 384">
                            <defs>
                                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                        </svg>
                        <svg className="absolute bottom-12 left-full transform translate-x-32" width={404} height={384} fill="none" viewBox="0 0 404 384">
                            <defs>
                                <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                        </svg>
                    </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span className="block text-base text-center text-green-600 font-semibold tracking-wide uppercase">{post.category.title}</span>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{post.title}</span>
                        </h1>
                        <p className="mt-8 text-xl text-gray-500 leading-8">{post.summary}</p>
                    </div>
                    <div className="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
                        <ReactMarkdown>
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
            <MailingListSection
                heading="Follow our journey to expand access to complementary and alternative medicine."
                subheading="Sign up for our newsletter in order to receive updates about our progress."
            />
        </main>
        <Footer/>
    </div>
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } } // See the "paths" section below
        ],
        fallback: false // See the "fallback" section below
    };
}

export async function getStaticProps(context) {
    const postRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles/${context.params.id}`)
    const post = postRes.data

    return {
        props: {post}, // will be passed to the page component as props
    }
}

export default ArticlePage