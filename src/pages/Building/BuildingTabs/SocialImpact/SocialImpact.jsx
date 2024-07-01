import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const SocialImpact = () => {
    const [likes, setLikes] = useState([5, 11, 2, 9, 3]);
    const [liked, setLiked] = useState([false, false, false, false, false]);

    const toggleLike = (index) => {
        const newLiked = [...liked];
        const newLikes = [...likes];
        newLiked[index] = !newLiked[index];
        newLikes[index] = newLiked[index] ? newLikes[index] + 1 : newLikes[index] - 1;
        setLiked(newLiked);
        setLikes(newLikes);
    };

    return (
        <div className="p-5 w-11/12 mx-auto">
            <div>
                <p className="text-lg md:text-xl lg:text-xl text-gray-800">These are ideas that will help motivate others to discover their best selves. The ideas are trying to increase the chances that people will discover their passion and work on themselves.</p>
            </div>

            {[
                {
                    title: "Find your therapy",
                    description: "Finding the right type of therapy and therapist for your moment in life is challenging. And lots of times people give up on therapy because they are doing one that doesn't like. Would be great to have better tools that bridge this gap.",
                },
                {
                    title: "Podcast on local businesses stories",
                    description: "Promote local entrepreneurship by interviewing local business owners. Thinking of starting on my hometown of Porto. Local businesses shape a culture of place and get much less glorified than tech entrepreneurship. Let's change that.",
                },
                {
                    title: "DiverseCrowd",
                    description: "We are getting more polarized in opinions (for example, democrats vs. republicans), and a big part is how social media reinforces by giving more of what you already think is true. I believe it is important to hear both sides, and I want to create a tool that allows you to see how balanced the people you follow are and suggest people on the other side of the coin to make it more balanced.",
                },
                {
                    title: "Clean Park Initiative- social initiative to take ownership of preserving your local park",
                    description: "After having my first son, visits to my local city park became daily. Also, it became daily the number of times I had to pick up trash or prevent my son from going to some dirty areas. Parks can be a fantastic asset to a neighborhood when well-taken care of (inspired by Madrid Rio park), but people don't feel it's theirs. The idea is to create a community way of empowering people to clean their parks and improve them to feel like they are theirs.",
                },
                {
                    title: "Local Businesses Fund - a fund to promote creation of small businesses",
                    description: "Entrepreneurship is important for society and social mobility, but for lots of folks access to capital is not easy. I would love to see a fund created to focus on empowering local entrepreneurs in small businesses.",
                },
            ].map((idea, index) => (
                <div key={index} className='set-text mb-5'>
                    <hr className='my-4' />
                    <div className='text-container'>
                        <h1 className='text-3xl md:text-xl lg:text-3xl py-4 font-bold'>{idea.title}</h1>
                        <p className='mt-2 text-xl text-gray-700 md:text-base lg:text-lg'>{idea.description}</p>
                    </div>
                    <span className='flex items-center w-[80px] py-6 rounded-full pl-4 bg-[#E59F41] mt-4'>
                        <FontAwesomeIcon
                            icon={faThumbsUp}
                            onClick={() => toggleLike(index)}
                            className={`cursor-pointer size-8 ${liked[index] ? 'text-gray-500' : 'text-white'} mr-2`}
                        />
                        <span className='mt-1'>{likes[index]}</span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default SocialImpact;