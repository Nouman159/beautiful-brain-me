import React from 'react';

const KnowledgeHub = () => {
    return (
        <div className="bg-[#F0F7FE] font-sans text-center p-4 mt-12">
            <h3 className="mt-12 text-lg">WHAT DO WE DO?</h3>
            <h2 className="text-4xl font-bold mt-5">Through knowledge sharing, coaching, and <br />advice, Beautiful Brain allows you to:</h2>

            <div className="container mx-auto mt-8 space-y-8">
                <div className="section flex flex-col md:flex-row items-center">
                    <img className="w-full md:w-1/2 h-auto" src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f50378fe083168f247aee_Group.svg" alt="Image 1" />
                    <div className="mt-4 md:mt-0 md:w-1/2 text-left p-4">
                        <h4 className="text-2xl">Get the tools</h4>
                        <p className="mt-2">Explore tools that I created to help people live their authentic lives. Also, see the list of ideas for future products and join in building them with me.</p>
                        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">EXPLORE</button>
                    </div>
                </div>

                <div className="section flex flex-col md:flex-row items-center">
                    <div className="mt-4 md:mt-0 md:w-1/2 text-left p-4 order-2 md:order-1">
                        <h4 className="text-2xl">Feed your Brain</h4>
                        <p className="mt-2">Read my articles and check my recommendations for books and podcasts to follow that help you live a meaningful life.</p>
                        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">START LEARNING</button>
                    </div>
                    <img className="w-full md:w-1/2 h-auto order-1 md:order-2" src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f50378fe0831418247aec_Frame.svg" alt="Image 2" />
                </div>

                <div className="section flex flex-col md:flex-row items-center">
                    <img className="w-full md:w-1/2 h-auto" src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f50378fe0830b3d247aed_Coaching.svg" alt="Image 3" />
                    <div className="mt-4 md:mt-0 md:w-1/2 text-left p-4">
                        <h4 className="text-2xl">Uncover your ideal self</h4>
                        <p className="mt-2">Get 1:1 coaching with me to help you discover your path to your whole self at your schedule and pace.</p>
                        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">FIND YOUR TRUE SELF</button>
                    </div>
                </div>

                <div className="section flex flex-col md:flex-row items-center">
                    <div className="mt-4 md:mt-0 md:w-1/2 text-left p-4 order-2 md:order-1">
                        <h4 className="text-2xl">Build better products</h4>
                        <p className="mt-2">Pick my brain to help build products and product organizations in a creative way that fulfills your goals but stays aligned with your vision.</p>
                        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">LEARN MORE</button>
                    </div>
                    <img className="w-full md:w-1/2 h-auto order-1 md:order-2" src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f50378fe08376b8247aeb_Advsior.svg" alt="Image 4" />
                </div>
            </div>
        </div>
    );
};

export default KnowledgeHub;
