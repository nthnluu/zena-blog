import React from "react";
import Link from "next/link";

interface Props {
    image: string;
    title: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
}

const ImageHeader: React.FC<Props> = ({image, title, primaryLabel, primaryHref, secondaryLabel, secondaryHref}) => {
    return <div className="relative z-40">
        <div className="absolute inset-x-0 bottom-0 h-1/2 h-full"/>
        <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                    <img className="h-full w-full object-cover object-top"
                         src={image}
                         alt=""/>
                    <div className="absolute inset-0 bg-black opacity-0" style={{mixBlendMode: 'multiply'}}/>
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-40 lg:px-8">
                    <h1 className="text-center text-white text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <div className="max-w-3xl mx-auto">
                            {title}
                        </div>

                    </h1>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div
                            className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                            <Link href={secondaryHref}>
                                <a
                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-green-50 sm:px-8">
                                    {secondaryLabel}
                                </a>
                            </Link>

                            <Link href={primaryHref}>
                                <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8">
                                    {primaryLabel}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ImageHeader