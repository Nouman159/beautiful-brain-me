import React from 'react';

const BuildingHero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start p-4 md:p-0 md:mt-16">
            <div className="flex-1">
                <h1 className="text-6xl font-bold mb-2 md:mb-4 md:ml-8" style={{ fontFamily: 'Recoleta, sans-serif' }}>
                    Wanna build <br /> for good?
                </h1>
                <p className="text-lg leading-relaxed md:ml-8 md:mt-8">
                    I started building when I learned how to code at 14, which <br />
                    eventually got me into Product management. <br />
                    Building products is crucial to scale the impact we can have in <br />
                    making more people live their true selves. <br />
                    I have more ideas than time, so I share all I have here to find more <br />
                    people interested in building them.
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                <img
                    src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f50378fe083168f247aee_Group.svg"
                    alt="Image Description"
                    className="max-w-full h-auto md:h-96"
                />
            </div>
        </div>
    );
};

export default BuildingHero;
