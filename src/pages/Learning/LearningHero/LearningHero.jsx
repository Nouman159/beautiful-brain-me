import React from 'react';

const LearningHero = () => {
    return (
        <div className="flex flex-col md:flex-row items-start mt-12 max-sm:mt-0 p-4 md:p-0 mb-8">
            <div className="md:w-1/2 md:pr-8 ml-16 max-sm:ml-8">
                <h1 className="text-6xl md:text-8xl font-bold mt-12 md:mt-0">
                    Learning <br /> is a lifelong <br /> process
                </h1>
                <p className="text-lg md:text-xl mt-6">
                    A growth mindset is an aspiration for me. Therefore, I must <br />
                    constantly learn to remain creative and productive. <br />
                    I share what and how I am learning and write my thoughts to help <br />
                    develop my thinking.
                </p>
                <button className="bg-green-500 text-white text-2xl rounded-full mt-4 py-4 px-8">
                    SUBSCRIBE
                </button>
            </div>
            <div className="md:w-1/2 md:pl-8 mt-12 md:mt-0">
                <img
                    src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f5841a3e25578ea213b8a_Group%2078.png"
                    alt="Image"
                    className="w-full max-w-md h-auto mx-auto md:ml-auto"
                />
            </div>
        </div>
    );
};

export default LearningHero;
