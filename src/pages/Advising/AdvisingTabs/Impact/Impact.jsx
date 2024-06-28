import React from 'react';

const Impact = () => {

    return (
        <div className='main p-5 w-10/12 mx-auto'>
            {[
                {
                    description: "Jose is super goal oriented. He can think extremely quickly on the spot and estimate impact of a specific feature/project and help align the team on its prioritization. He asks the hard questions and proposes alternatives.",
                },
                {
                    description: "Data driven- José is amazing at quickly determining impact and exploring alternatives (why should I care?)",
                },
                {
                    description: "José is great at differentiating opinions from facts and quickly drilling down on priorities/impact based on a few data points",
                }
            ].map((idea, index) => (
                <div key={index} className='set-text mb-5'>
                    <div className='text-container'>
                        <p className='mt-2 text-sm md:text-base lg:text-lg'>{idea.description}</p>
                    </div>
                    <hr className='my-4' />
                </div>
            ))}
        </div>
    );
};

export default Impact;