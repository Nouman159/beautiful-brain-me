import React from "react";

const AboutHero = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center p-10 max-w-screen-xl mx-auto bg-white rounded-lg md:mt-8">
            <div className="lg:flex-1 p-5 text-center lg:text-left">
                <h1 className="text-4xl lg:w-[590px] lg:text-8xl font-bold text-gray-800 mb-5">
                    Meet José,
                    the Beautiful
                    Brain
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 mb-8 text-left">
                    Hi, my name is José, and I am Beautiful Brain's founder. <br /><br />
                    I live in Porto, Portugal, with my wife and toddler son, after having lived and worked across four continents and visited more than 50 countries. <br />
                    <br />
                    I have worked in tech and product management for the past 10 years and started a new journey as independent in 2022.
                </p>
                <button className="px-7 py-5 text-lg max-sm:ml-[-20px] bg-blue-600 text-white rounded-full shadow-md transition-colors">
                    Read My Story
                </button>
            </div>
            <div className="lg:flex-1 p-5 flex justify-center lg:ml-40">
                <img
                    src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/63a19b509fcbc2e36a9697ce_fotos-familia-dezembro-2022-fotografa-margarita%2Burzua-135.jpg"
                    alt="José with family"
                    className="max-w-full h-80 lg:w-[130%] lg:h-[600px] max-sm:w-400px rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
};

export default AboutHero;