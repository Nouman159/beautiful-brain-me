import React from 'react';

const DetailsOriented = () => {


    return (
        <div className='main p-5 w-10/12 mx-auto'>

            {[
                {
                    description: "José is always able to get into the weeds, and have a knack for seeing around the corner on edge cases and things we're not talking about.",
                },
                {
                    description: "José is great at analytical problems and overall getting things done. I have been impressed by his abilities in such type of problems.",
                },
                {
                    description: "José has tremendous domain knowledge and a healthy level of skepticism. On his role, he had to collaborate with a very large XFN team and engineering teams on multiple teams/sites to arrive on a conclusion of what should be the MVP.",
                }
            ].map((idea, index) => (
                <div key={index} className='set-text mb-5'>
                    <div className='text-container'>
                        <p className='mt-2 text-lg md:text-base lg:text-xl'>{idea.description}</p>
                    </div>
                    <hr className='my-4' />
                </div>
            ))}
        </div>
    );
};

export default DetailsOriented;