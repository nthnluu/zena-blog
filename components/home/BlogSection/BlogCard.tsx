import React from "react";
import {format} from 'date-fns';
import Post from "../../../lib/types/Post";
import Link from "next/link";

interface Props {
    post: Post;
}

const BlogCard: React.FC<Props> = ({post}) => {
    return <div
        className="flex flex-col rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-150">
        <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover"
                 src={`${post.cover.formats.large.url}`}
                 alt=""/>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
                <p className="text-sm font-medium text-green-600">
                    <Link href={`/article/${post.id}`}>
                        <a className="hover:underline">
                            {post.category.title}
                        </a>
                    </Link>
                </p>
                <Link href={`/article/${post.id}`}>
                    <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                            {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                            {post.summary}
                        </p>
                    </a>
                </Link>
            </div>
            <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <a href="#">
                        <span className="sr-only">{post.author.fullName}</span>
                        <img className="h-10 w-10 rounded-full"
                             src={`${post.author.profilePicture.formats.thumbnail.url}`}
                             alt=""/>
                    </a>
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        <a href="#" className="hover:underline">
                            {post.author.fullName}
                        </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime="2020-03-16">
                            {format(new Date(post.published_at), 'MMMM d, yyyy')}
                        </time>
                        <span aria-hidden="true">
                        ·
                      </span>
                        <span>
                        6 min read
                      </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BlogCard