import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const LearningCards = () => {
    const cardData = [
        {
            title: "The privilege of giving back",
            description: "My wife has started her maternity leave this past week. With both of us working from home, I had the unique opportunity to follow her pregnancy very closely all day.",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/639b2e3295c9c186b4fcf4e6_1671114290174-image5.jpg",
            projectUrl: "https://beautifulbrain.substack.com/p/the-privilege-of-giving-back"
        }
        ,
        {
            title: "Founder's motivation",
            description: "You are considering joining startup X. One of the key considerations you should consider is the founder's motivation.",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/639b2e3295c9c179b0fcf4e7_1671114290176-image3.jpg",
            projectUrl: "https://beautifulbrain.substack.com/p/founders-motivation"
        }
        ,
        {
            title: "Always chase the learnings",
            description: "In your career, when deciding between titles vs learnings, you should pick the learnings.",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/62cc7a48f1325f0e75624682_1657567816337-image11.jpg",
            projectUrl: "https://beautifulbrain.substack.com/p/always-chase-the-learnings"
        }
        ,
        {
            title: "People leave managers, not companies",
            description: "People leave managers, not companies, is a common saying and usually accurate. As a manager, though, your role is not to optimize reports, not to leave you.",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/639b2e32421020200345355f_1671114290231-image18.jpg",
            projectUrl: "https://beautifulbrain.substack.com/p/great-pms-ask-the-why"
        }
        ,
        {
            title: "Great PMs ask the why",
            description: "Great Product Managers question the why. Here is an example question I use with my coachees to assess this.",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/639b2e325b0c7d1aee8ebae1_1671114290147-image10.jpg",
            projectUrl: "https://beautifulbrain.substack.com/p/great-pms-ask-the-why"
        }


    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
    };

    const getVisibleCards = () => {
        const visibleCards = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % cardData.length;
            visibleCards.push(cardData[index]);
        }
        return visibleCards;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF1DF]">
            <div className="container text-center">
                <p className="text-2xl mb-2 max-sm:px-4">ARTICLES I HAVE WRITTEN</p>
                <h2 className="text-[48px] font-bold mb-4 max-sm:ml-2 text-center">Read my articles on Substack</h2>
                <a href='https://calendly.com/jose_miguel_santos/advisor-discovery-call-beautiful-brain' target='_blank'>
                    <button className="bg-[#E59F41] hover:text-black text-white font-bold py-4 px-6 rounded-full transition duration-300 mb-4">SCHEDULE A CALL</button>
                </a>
            </div>
            {/* </div> */}
            <div className="relative w-full max-w-8xl flex justify-center items-center">
                <button
                    onClick={prevCard}
                    className="absolute left-0 px-5 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full z-10 ml-28 max-sm:ml-5"
                >
                    &lt;
                </button>
                <div className="flex overflow-hidden w-full justify-between sm:justify-center">
                    {getVisibleCards().map((card, index) => (
                        <a href={card.projectUrl}>
                            <div
                                key={index}
                                className="flex-shrink-0 w-80 m-2 transition-transform transform mx-6 sm:w-70 sm:h-380px"
                                style={{ marginLeft: index === 0 ? '1rem' : '', marginRight: index === 2 ? '1rem' : '' }}
                            >
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg relative h-[440px]"
                                >
                                    <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                                        <h3 className="text-xl text-white font-semibold mb-2 mt-48">{card.title}</h3>
                                        <p className="text-white mb-4">{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <button
                    onClick={nextCard}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 px-5 text-white p-4 rounded-full z-10 mr-28 max-sm:mr-5"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default LearningCards;
