import React from 'react';

const Empowering = () => {

    return (
        <div className='main p-5 w-10/12 mx-auto'>
            {[
                {
                    description: "He is highly trusting of his team, and that motivates us to put out great work (and self-manage with timelines) because we're trusted to do so.",
                },
                {
                    description: "Overall, I loved working with José, and I'm grateful to have been on his team. I think he's extremely smart and the exact type of person I want to work with -- humble, a great critical thinker, and someone willing to challenge the status-quo, even if things seem to be working well.",
                },
                {
                    description: "José has a level of clarity, kindness, and quiet strength that this world lacks.  Despite all the stress, deadlines, and moving targets - you never let it change how you treated those around you.",
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

export default Empowering;