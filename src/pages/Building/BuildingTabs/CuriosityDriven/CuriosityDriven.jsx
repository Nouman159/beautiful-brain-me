import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const CuriosityDriven = () => {
    const [likes, setLikes] = useState([4, 1, 6, 9]);
    const [liked, setLiked] = useState([false, false, false, false]);

    const toggleLike = (index) => {
        const newLiked = [...liked];
        const newLikes = [...likes];
        newLiked[index] = !newLiked[index];
        newLikes[index] = newLiked[index] ? newLikes[index] + 1 : newLikes[index] - 1;
        setLiked(newLiked);
        setLikes(newLikes);
    };

    return (
        <div className='main p-5 w-11/12 mx-auto'>
            <div>
                <p className='text-lg md:text-xl lg:text-xl text-gray-800'>These are ideas that will help motivate others to discover their best selves. The ideas are trying to increase the chances that people will discover their passion and work on themselves.</p>
            </div>

            {[
                {
                    title: 'Airbnb to Web3 bridge',
                    description: "Asset ownership is very important for improving people's lives, but lots of times the people cannot afford to buy an entire house. Shares in houses are hard to do, but with web3 it might be possible. The idea would be to make a bridge where an Airbnb house might distribute automatically the rent it collects into the token holders.",
                },
                {
                    title: 'Web3 ticket processing',
                    description: "I want to learn more about web3, and this is one of the ideas I think web3 can change the paradigm. Event organizers are generally against reselling tickets because they want to avoid second players getting more money. But if tickets are NFTs and they can collect a fee on reselling + giving some restrictions on reselling can be an exciting way of increasing revenue for the event organizers and making a more fluid market for attendees.",
                },
                {
                    title: 'Mercearia Moderna - modern small grocery shop',
                    description: "My great-grandfather used to have a small grocery store. There is a different level of curation that you can do in those small stores, inspired by Epicurean Trader in San Francisco. I would love that concept to exist in my hometown of Porto",
                },
                {
                    title: 'Anti-frameworks Product Management interview book',
                    description: "With 400+ hours spent coaching PMs on the interview process, I realize that frameworks sometimes do more harm than good. Therefore, I want to leverage the content I learned through this coaching to create a first principles guide to be successful in PM interviews. Also interesting to understand how to run a content business.",
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

export default CuriosityDriven;