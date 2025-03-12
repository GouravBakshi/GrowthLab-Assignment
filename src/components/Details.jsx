import React from "react";
import Card2 from "./Card2";
import Card1 from "./Card1";
import visual1 from "../assets/MediaPlus/visual1.png"
import visual3 from "../assets/MediaPlus/visual3.png"
import visual from "../assets/MediaPlus/visual.png"
import visual2 from "../assets/MediaPlus/visual2.png"
const Details = () => {
    
    const headings = ["Curate your video media collection with an AI powered library","Build, Brand & Publish your Media+", "Gate your media, capture leads & connect your CRM - it’s easy","Track your views - with detailed analytics"]
    
    const rightColors = ["#D2DB51","#AFC3CA","#D8C69E","#E4875D"]

    const images = [visual1, visual3, visual, visual2 ]

    const colors = ["#D2DB5129","#AFC3CA29","#D8C69E29","#E4875D29"]

    const descs = ["End manual video uploads and tedious metadata tasks! Hubilo AI automates SEO-optimised metadata creation along with tags and categories mapped to you media in minutes.","Publish your on-demand media faster than ever using Media+. Add your custom branding and host all your media on your website or any other custom URL of your choice.","Customize forms on Hubilo or import from HubSpot. Seamlessly push data to your CRM and enrich your marketing pipeline.","Unlock audience insights! Analyze media performance granularly to create better content and capture intent effectively."]


    return (
        <section className='flex justify-center items-center flex-col gap-20'>
            <div className='flex justify-center items-center flex-col gap-4'>
                <p className='text-[#E4875D] text-center font-bold text-2xl leading-[101%]'>Elevate your video strategy</p>
                <p className='text-[#333132] sm:text-[42px] text-[38px] text-center font-medium leading-[150%]'>Seamless <br className="md:hidden" /> Video Management</p>
                <p className='text-[#444444] text-center font-[300] text-xl mt-3'>Transform how you engage with your audience using Media+</p>
            </div>

            <div className='flex justify-center flex-wrap items-center sm:flex-row flex-col gap-5'>
                <Card1 title={"2.5X"} head={"Lead Generation"} desc={<>Boost watch time and drive <br className="block" /> more leads</>} />
                <Card1 title={"3X"} head={<>Publish Content <br className="block" /> Faster with AI</>} desc={<>Tailor made to get more views</>} />
                <Card1 title={"30min"} head={"Setup"} desc={<>Set up your video CMS in less <br className="block" /> than 30 minutes</>} />
            </div>

            <button className="-mt-8 bg-[#E4875D] text-white py-3 px-6 rounded-lg hover:bg-[#d87a70] transition-colors cursor-pointer">
                Request a Demo
            </button>


            <div>
                <div className='flex items-center justify-center flex-col gap-2'>
                    <p className='text-[#E4875D] font-bold text-[15px] sm:text-[24px]'>Why choose Media+?</p>
                    <h3 className='text-[28px] sm:text-[42px] text-[#333132] font-medium text-center'>Media+ turns <br className='block md:hidden' />
                        video engagement <br className='hidden md:block' /> into
                        customer conversions</h3>
                </div>

                <div className="">

                    <Card2 headings={headings}
                        images={images} descriptions={descs} colors={colors} rightColors={rightColors} />
                </div>
            </div>

            <div>

            </div>

        </section>
    );
};

export default Details;
