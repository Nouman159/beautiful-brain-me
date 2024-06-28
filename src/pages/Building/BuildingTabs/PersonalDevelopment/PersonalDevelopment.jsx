import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const PersonalDevelopment = () => {
    const [likes, setLikes] = useState([16, 11, 2]);
    const [liked, setLiked] = useState([false, false, false]);

    const toggleLike = (index) => {
        const newLiked = [...liked];
        const newLikes = [...likes];
        newLiked[index] = !newLiked[index];
        newLikes[index] = newLiked[index] ? newLikes[index] + 1 : newLikes[index] - 1;
        setLiked(newLiked);
        setLikes(newLikes);
    };

    return (
        <div className="main p-5 w-11/12 mx-auto">
            <div>
                <p className="text-lg md:text-xl lg:text-2xl">These are ideas to increase the speed to achieve your best self. They either are trying to improve how mindful on how you use your time and to stay on track on the important things you need to do to get to know your self better.</p>
            </div>
            <hr className="my-4" />

            {[
                {
                    title: "Personal Experimenter",
                    description: "Bring experimentation to your personal growth. A tool that allow you to track personal A/B tests and experiments and measure how you feel.",
                },
                {
                    title: "Portfolio strategy simulator",
                    description: "Create a place where you can simulate different investments' potential outcomes. I would love an easy way to test different portfolio strategies (for example, buy S&P500 every time it drops 10%) and evaluate the results using historical data. Although historical data does not mean it will happen in the future, it can help bring more people to learn about investment and the importance of a balanced portfolio.",
                },
                {
                    title: "Shortcuts tool - a mac app that overlays keyboard shortcuts for the app you are using",
                    description: "Using keyboard shortcuts can make you much more productive, but it takes time to remember. So I want to build a tool for Mac with a shortcut key that shows an overlay of the keyboard shortcuts for the app you are using (and allows you to display the ones you care about).",
                },
            ].map((idea, index) => (
                <div key={index} className="set-text mb-5">
                    <div className="text-container">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">{idea.title}</h1>
                        <p className="mt-2 text-sm md:text-base lg:text-lg">{idea.description}</p>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon
                            icon={faThumbsUp}
                            onClick={() => toggleLike(index)}
                            className={`cursor-pointer size-8 ${liked[index] ? 'text-blue-500' : 'text-gray-400'} mr-2`}
                        />
                        <span>{likes[index]}</span>
                    </div>
                    <hr className="my-4" />
                </div>
            ))}
        </div>
    );
};

export default PersonalDevelopment;