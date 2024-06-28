import React from "react";

const AboutHero = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center p-10 max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg md:mt-8">
            <div className="lg:flex-1 p-5 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-5">
                    Meet José, <br />
                    the Beautiful <br />
                    Brain
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 mb-8">
                    Hi, my name is José, and I am Beautiful Brain's founder. <br />
                    <br />
                    I live in Porto, Portugal, with my wife and toddler son, after having lived and worked across four continents and visited more than 50 countries. <br />
                    <br />‍
                    I have worked in tech and product management for the past 10 years and started a new journey as independent in 2022.
                </p>
                <button className="px-6 py-3 text-lg bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400 transition-colors">
                    Read My Story
                </button>
            </div>
            <div className="lg:flex-1 p-5 flex justify-center">
                <img
                    src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/63a19b509fcbc2e36a9697ce_fotos-familia-dezembro-2022-fotografa-margarita%2Burzua-135.jpg"
                    alt="José with family"
                    className="max-w-full h-80 lg:h-auto rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
};

export default AboutHero;