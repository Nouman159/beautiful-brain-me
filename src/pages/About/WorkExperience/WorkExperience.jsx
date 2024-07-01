import React from 'react';

const WorkExperience = () => {
    return (
        <div className="flex flex-wrap justify-center border-b-[3px] border-black mb-8">

            <div className="w-full md:w-1/2 px-4 py-2 md:pl-24">
                <div className="text-left mb-6">
                    <h3 className="text-xl font-bold text-gray-800 pb-8">WORK EXPERIENCES</h3>
                    <h2 className="text-5xl max-sm:text-4xl text-gray-800 font-bold">Before I started Beautiful Brain:</h2>
                </div>
            </div>

            <div className="w-full md:w-1/2 px-4 py-2">
                <div>
                    <div className="flex items-center mb-4 md:flex-col">
                        <img src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/63b4576499f79b11b75e809d_feup.gif" alt="Logo" className="max-w-32 mr-4 md:mr-auto" />
                        <p className='text-xl text-gray-700'>Learned the basics of Software Engineering and made lifelong friends (MsC Software Engineering)</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center mb-4 md:flex-col">
                        <img src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f52fe6076f3a58d142d20_WE%201.svg" alt="Logo" className="max-w-32 mr-4 md:mr-auto" />
                        <p className='text-xl text-gray-700'>Learned how to think and communicate clearly, and how to ramp up fast in new industries and projects</p>
                    </div>
                </div>

                <div>
                    <div className="flex items-center mb-4 md:flex-col">
                        <img src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f52fe6076f325c0142d27_WE%202.png" alt="Logo" className="max-w-32 mr-4 md:mr-auto" />
                        <p className='text-xl text-gray-700'>Immersed myself in multi-cultural environment, developed a global network and expanded my horizons (MBA)</p>
                    </div>
                </div>

                <div>
                    <div className="flex items-center mb-4 md:flex-col">
                        <img src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f52fe6076f36331142d23_WE%203.png" alt="Logo" className="max-w-32 mr-4 md:mr-auto" />
                        <p className='text-xl text-gray-700'>Learned the ropes of product management, and how large companies get trapped in innovator's dilemma</p>
                    </div>
                </div>

                <div>
                    <div className="flex items-center mb-4 md:flex-col">
                        <img src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f52fe6076f3975a142d21_WE%204.png" alt="Logo" className="max-w-32 mr-4 md:mr-auto" />
                        <p className='text-xl text-gray-700'>Learned how one of the top startups operates and how to move really fast in validating your assumptions, built my first 0-&gt;1 product</p>
                    </div>
                </div>

                <div>
                    <div className="flex items-center mb-4 md:flex-col">
                        <img src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f52fe6076f31e12142d25_WE%205.png" alt="Logo" className="max-w-32 mr-4 md:mr-auto" />
                        <p className='text-xl text-gray-700'>Learn how to build a product team and setup product functions in a hyper-growth startup while working with CEO/Founder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;