import React from 'react';

const FirstPrinciples = () => {

    return (
        <div className='main p-5 w-10/12 mx-auto'>
            {[
                {
                    description: "José has a talent for understanding complex systems, and he has a first principles approach that allows him to identify opportunity areas quickly within these complex systems.",
                },
                {
                    description: "José is fantastic at first principles thinking which allows him to cut through complexity. He is also very good at operating at a low level of detail.",
                },
                {
                    description: "I was immediately impressed by how deep a product thinker José was. He's the epitome of first principles. Conversations with him often ended in huh, no one has ever thought of this problem in this way",
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

export default FirstPrinciples;