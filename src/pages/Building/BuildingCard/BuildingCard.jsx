import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const BuildingCard = () => {
    const cardData = [
        {
            title: "ADHD Operating system",
            description: "This is my operative system, which I constantly keep updated. It is specially helpful for people with ADHD, but has tactics for all.",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/63b8477b5a41cdc6b7707604_martin-adams-a_PDPUPuNZ8-unsplash.jpg",
            projectUrl: "https://coda.io/@jose-miguel-santos/beautiful-brain-operating-system"
        },
        {
            title: "ELEVATOR Simulator in python",
            description: "Elevator simulator in Python that can test and evaluate different elevator algorithm functions via simulation",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/62cc7b5901a3d9461a34c0c1_arisa-chattasa-BoQ3FmPQgZI-unsplash.jpg",
            projectUrl: "https://github.com/zemigsan/elevator_simulator_python"
        },
        {
            title: "Meal Planning Tool",
            description: "A tool to help you plan your weekly meals in a healthy way and easily generate the shopping list.",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/63b847e629fc1f5ee735974f_brooke-lark-nTZOILVZuOg-unsplash.jpg",
            projectUrl: "https://coda.io/@jose-miguel-santos/meal-planner"
        }
    ];

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
            <h2 className="text-[48px] font-bold mb-12 max-sm:ml-2 text-center">Portfolio of Projects</h2>
            <div className="relative w-full max-w-8xl flex justify-center items-center">
                <button
                    onClick={prevCard}
                    className="absolute left-0 px-5 top-1/2 transform -translate-y-1/2 bg-[#E59F41] text-white p-4 rounded-full z-10 ml-28 max-sm:ml-5"
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
                                    <div className="absolute inset-0 bg-white bg-opacity-75 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                        <p className="text-gray-700 mb-4">{card.description}</p>
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded transition duration-300">TRY IT</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <button
                    onClick={nextCard}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#E59F41] px-5 text-white p-4 rounded-full z-10 mr-28 max-sm:mr-5"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default BuildingCard;
