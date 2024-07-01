import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const AdvisingCards = () => {
    const cardData = [
        {
            title: "Low-code Developer Marketplace Strategy",
            description: "Led engagement on defining a developer marketplace GTM strategy for one of the largest low-code players",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/63bd45bca20f02c9b18b6abf_omar-flores-lQT_bOWtysE-unsplash.jpg"
        }
        ,
        {
            title: "D2C strategy for a pet brand",
            description: "Helped one of the biggest pets brands develop their D2C strategy, including their business and product and tech strategy",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/63bd461ad3a269f297ee7e4b_krista-mangulsone-9gz3wfHr65U-unsplash.jpg"
        }
        ,
        {
            title: "E-commerce category management Tool",
            description: "Built analytics foundation and tools to understand assortment gaps based on customer demand, merchant prospecting, and conversion analysis.",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/63bd446292d84e5380cea702_carlos-muza-hpjSkU2UYSU-unsplash.jpg"
        },
        {
            title: "Build 0->1 white label store",
            description: "Launched DoorDash Storefront, a white-label online ordering platform, and grew it to thousands of merchants and millions of $ in GMV",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/63bd44da4a6ccfe27594c096_DoorDash_Storefront_Phone.jpg.370x370_q85.jpg"
        }
        ,
        {
            title: "Build product function for healthcare startup",
            description: "Built product function for a unicorn healthcare startup, hired and scaled team 3x and defined the team processes",
            imageUrl: "https://assets-global.website-files.com/62c4588dcf3dfb11aa818ea9/639c59f12badb83575b9c835_alvaro-reyes-qWwpHwip31M-unsplash.jpg"
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF1DF] pb-12 border-b-2 border-black">
            {/* <div className="flex justify-center items-center py-20 bg-[#FFF1DF]"> */}
            <div className="container text-center">
                <h2 className="text-[48px] font-bold mb-4 max-sm:ml-2 text-center">Portfolio of Projects                </h2>
                <p className="text-lg mb-8 max-sm:px-4">Schedule a complimentary 30 min call to talk about your project.</p>
                <a href='https://calendly.com/jose_miguel_santos/advisor-discovery-call-beautiful-brain' target='_blank'>
                    <button className="bg-[#DB504C] hover:text-black text-white font-bold py-5 px-7 rounded-full transition duration-300 mb-4">SCHEDULE A CALL</button>
                </a>
            </div>
            {/* </div> */}
            <div className="relative w-full max-w-8xl flex justify-center items-center">
                <button
                    onClick={prevCard}
                    className="absolute left-0 px-5 top-1/2 transform -translate-y-1/2 bg-[#DB504C] text-white p-4 rounded-full z-10 ml-28 max-sm:ml-5"
                >
                    &lt;
                </button>
                <div className="flex overflow-hidden w-full justify-between sm:justify-center">
                    {getVisibleCards().map((card, index) => (
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
                                    <p className="text-black mb-4">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextCard}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#DB504C] px-5 text-white p-4 rounded-full z-10 mr-28 max-sm:mr-5"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default AdvisingCards;
