import React from 'react';

const CoachingCompanies = () => {
    return (
        <div className="container bg-[#F0F7FE] min-w-full text-center py-8 border-b-2 border-black">
            <h2 className="font-bold text-4xl mb-8 py-12 max-sm:w-[95%]">I have worked with clients from</h2>

            <div className="flex flex-wrap justify-center w-[95%]">
                {[
                    "https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/639b5c2c69da8d526b9f4eee_Frame%2035.svg",
                    "https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/639b5c2c69da8d220d9f4eed_Frame%2036.svg",
                    "https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/639b5c2c69da8d087f9f4eec_Frame%2037.svg",
                    "https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/65a65b22565ca7bde0baf3ac_Doordash%20(1)-p-500.png",
                    "https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/63bc0ede1aa5652bfa0815fc_output-onlinepngtools-p-500.png",
                    "https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/63bc0f6ab853930083cadb6c_output-onlinepngtools%20(3).png",
                    "https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/65a65a5d75fff1984c4829c0_Revolut.png",
                    "https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/65a65acde4334127145d1559_Airbnb%20logo%20black.png"
                ].map((src, index) => (
                    <div
                        key={index}
                        className={`w-full sm:w-1/2 md:w-1/4 p-4 ${index === 3 ? 'mt-12' : ''} ${index === 4 ? 'mt-6 max-sm:mt-20 mb-8' : ''}`}
                    >
                        <img className="max-h-32 mx-auto" src={src} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoachingCompanies;
