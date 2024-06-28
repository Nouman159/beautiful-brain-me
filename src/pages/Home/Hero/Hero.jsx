import React from 'react'

const Hero = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center p-4">
            <div className="left-side md:w-1/2 flex flex-col justify-center items-start p-8">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                    Empowering <br /> humans to live <br /> their best life
                </h1>
                <button className="learn-more-btn bg-blue-500 text-white text-lg px-8 py-3 rounded-full hover:bg-blue-600">
                    Learn More
                </button>
            </div>
            <div className="right-side md:w-1/2 flex justify-center items-center">
                <img
                    src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f258a823d9a01ee753220_Hero%20Image%202.png"
                    alt="Hero"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Hero