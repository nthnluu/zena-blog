import React, {useState} from "react";
import {Transition} from "@headlessui/react";
import ImageHeader from "../components/home/ImageHeader";
import BlogSection from "../components/home/BlogSection";
import MailingListSection from "../components/home/MailingListSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import StatementSection from "../components/home/StatementSection";
import TeamSection from "../components/home/TeamSection";
import Post from "../lib/types/Post";
import TeamMember from "../lib/types/TeamMember";

const Home: React.FC<{ pinnedArticles: Post[], teamMembers: TeamMember[] }> = ({pinnedArticles, teamMembers}) => {
    return <div className="min-h-screen bg-white">
        <Navbar/>
        <head>
            <title>Zena Health</title>
        </head>
        <main>
            <ImageHeader
                image="https://images.unsplash.com/photo-1542991214-df0aa5950676?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                title="Connecting patients with wellness practitioners."
                primaryLabel="Stay in touch"
                primaryHref="#newsletter"
                secondaryLabel="Learn more"
                secondaryHref="/article/1"

            />
            <StatementSection
                heading="On a mission to empower teams"
                body="Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae. Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae."
                imageURL="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                imageCaption="Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet."
                stats={[
                    {label: "Founded", value: "2020"},
                    {label: "Employees", value: "5"},
                    {label: "Practicioner Partners", value: "134"},
                    {label: "Amount Raised", value: "$40k"}]}
                ctaLabel="Learn more"
                ctaHref="/article/1"
            />
            <TeamSection
                heading="Meet our team"
                subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque,
                        ducimus sed."
                teamMembers={teamMembers}/>
            <BlogSection
                heading="See what we're up to"
                subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque,
                        ducimus sed."
                posts={pinnedArticles}
            />
            <MailingListSection
                heading="Follow our journey to expand access to complementary and alternative medicine."
                subheading="Sign up for our newsletter in order to receive updates about our progress."
            />
        </main>
        <Footer/>
    </div>
}

export async function getStaticProps(context) {
    const pinnedArticleRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?pinned=true`)
    const pinnedArticles = pinnedArticleRes.data

    const teamMembersRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/team-members?_sort=index:ASC`)
    const teamMembers = teamMembersRes.data

    return {
        props: {pinnedArticles, teamMembers}, // will be passed to the page component as props
    }
}

export default Home