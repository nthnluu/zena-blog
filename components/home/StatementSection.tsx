import React from "react";
import Link from "next/link";

interface Props {
    imageURL: string;
    imageCaption: string;
    heading: string;
    body: string;
    stats: {
        label: string;
        value: string;
    }[];
    ctaLabel?: string;
    ctaHref?: string;
}

const StatementSection: React.FC<Props> = ({imageURL, imageCaption, heading, body, stats, ctaLabel, ctaHref}) => {
    return <div className="relative my-20">
        <div className="lg:mx-auto lg:max-w-8xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
                <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                    <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"/>
                    <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width={404}
                         height={392} fill="none" viewBox="0 0 404 392">
                        <defs>
                            <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x={0} y={0} width={20} height={20}
                                     patternUnits="userSpaceOnUse">
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                    </svg>
                </div>
                <div className="relative mx-auto px-4 max-w-2xl xl:max-w-4xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                    {/* Testimonial card*/}
                    <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                        <img className="absolute inset-0 h-full w-full object-cover" src={imageURL} alt=""/>
                        <div className="absolute inset-0 bg-green-500" style={{mixBlendMode: 'multiply'}}/>
                        <div className="absolute inset-0 bg-gradient-to-t from-green-600 via-green-600 opacity-90"/>
                        <div className="relative px-8">
                            <blockquote className="mt-8">
                                <div className="relative text-lg font-medium text-white md:flex-grow">
                                    <p className="relative">
                                        {imageCaption}
                                    </p>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                {/* Content area */}
                <div className="pt-12 sm:pt-16 lg:pt-20">
                    <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                        {heading}
                    </h2>
                    <div className="mt-6 text-gray-500 space-y-6">
                        <p className="text-lg break-all">
                            {body}
                        </p>
                    </div>
                </div>
                {/* Stats section */}
                <div className="mt-10">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                        {stats.map((stats, index) => <div key={index} className="border-t-2 border-gray-100 pt-6">
                            <dt className="text-base font-medium text-gray-500">{stats.label}</dt>
                            <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stats.value}</dd>
                        </div>)}
                    </dl>
                    {ctaLabel && <div className="mt-10">
                        <Link href={ctaHref}>
                            <a className="text-base font-medium text-green-500">
                                {ctaLabel}&nbsp;→
                            </a>
                        </Link>
                    </div>}

                </div>
            </div>
        </div>
    </div>
}

export default StatementSection