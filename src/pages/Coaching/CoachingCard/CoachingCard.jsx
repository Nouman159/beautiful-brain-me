import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const CoachingCard = () => {
    const cardData = [
        {
            name: "Michael",
            description: "I passed coinbase HC and an offer is coming next week. I want to say a HUGE thank you, your coaching was fantastic and was pivotal in helping me get this far!"
        }
        ,

        {
            name: "James",
            description: "Jose is an outstanding product management coach. He is very focused on the key learning that needs to be transferred in coaching sessions and is highly knowledgeable and skilled in the key product management responsibilities."
        }
        ,
        {
            name: "Griselda",
            description: "Feedback gotten in my sessions with Jose was actionable and really helped me improved my interview skills."
        }
        ,
        {
            name: "Yuri",
            description: "Jose was very nice, asked great questions, and gave me detailed, actionable feedback."
        }
        ,
        {
            name: "Nanda",
            description: "Jose's feedback was spot on and really helped me move on to the next round of Google interviews. I will be booking more time with him."
        }
        ,
        {
            name: "Ripudaman",
            description: "Jose was fantastic. He gave very pointed feedback on what I need to work on, and gave me a key insight on how I can improve upon a weakness that I have had for quite sometime."
        }
        ,
        {
            name: "Inoh",
            description: "Thanks for feedback, mock and additional resources. I found the written framework very helpful!"
        }
        ,
        {
            name: "Sumer",
            description: "Jose was very thorough and clear in providing feedback on where I can improve. Exactly what I was looking for"
        }
        ,
        {
            name: "Ahn",
            description: "Jose was a great coach! He was honest in his feedback and gave me great advice on how to structure my answer."
        }
        ,
        {
            name: "Micheal",
            description: "José was fantastic, gave great tips and really provided a challenging, fun mock interview"
        }
        ,
        {
            name: "James",
            description: "He sincerely cares about the comprehension and progress attained and In helping us reach our learning goals. I would highly recommend José to anyone looking to ace their product management interview."
        }
        ,
        {
            name: "Raj",
            description: "Jose tailored the interview to the company I was preparing for. Jose was very thoughtful in his feedback and provided several constructive feedback to improve my performance. Jose is also very personable and friendly."
        }
        ,

        {
            name: "Rama",
            description: "I got a really excellent feedback and insight into gaps in my interview."
        }
        ,

        {
            name: "James",
            description: "His deep understanding of and experience with product strategy, design, metrics and technical product management meant that we could deep dive on specific concepts and subtleties within questions in order to develop strong answers."
        }
        ,

        {
            name: "Asutosh",
            description: "Jose was great. I had a coaching chat with him to brainstorm on specific topics for Google interview (not a mock per-se). He helped provide a lot of clarity into how to think about my responses, how to align with Google's mission and the like. I would book him again."
        }
        ,

        {
            name: "Ranjit",
            description: "Jose was great to work with, very practical and outcome oriented. I will definitely find more time with him."
        }
        ,
        {
            name: "James",
            description: "He sincerely cares about the comprehension and progress attained and In helping us reach our learning goals. I would highly recommend José to anyone looking to ace their product management interview."
        }
        ,

        {
            name: "Gautum",
            description: "Jose was very approachable and easy to converse with. He nudged the conversation a couple of times to ensure I didn't miss key pieces of the answer. He also provided really good feedback after the interview, including positive and constructive, as well as useful tips on what to do before my actual interview."
        }
        ,

        {
            name: "Micheal",
            description: "Excellent coaching - precise feedback and benchmarks around focus area."
        }
        ,

        {
            name: "Stella",
            description: "I just received an offer from Google and your help was instrumental - I got the same question as we practiced and they told me they were very impressed with the answer."
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
        <div className="flex flex-col items-center justify-center max-sm:py-8 min-h-screen mt-8 border-b-2 border-black">
            <div className="container text-center md:mt-[-170px]">
                <p className="text-xl mb-8 max-sm:px-4">TESTIMONIALS
                </p>
                <h2 className="text-[40px] font-bold mb-4 max-sm:ml-2 text-center">See what past clients have to say about me</h2>
            </div>
            <div className="relative w-full max-w-8xl flex justify-center items-center">
                <button
                    onClick={prevCard}
                    className="absolute left-0 px-5 top-1/2 transform -translate-y-1/2 bg-[#5FBBE7] text-white p-4 rounded-full z-10 ml-28 max-sm:ml-2"
                >
                    &lt;
                </button>
                <div className="flex overflow-hidden w-full justify-between sm:justify-center">
                    {getVisibleCards().map((card, index) => (
                        <div
                            key={index}
                            className="w-80 m-2 mx-6 max-sm:w-3/4"
                            style={{ marginLeft: index === 0 ? '1rem' : '', marginRight: index === 2 ? '1rem' : '' }}
                        >
                            <div className="rounded-lg max-sm:w-[110%] max-sm:pl-8 py-8 px-4 max-sm:mr-80 overflow-hidden shadow-lg relative h-auto bg-[#F1FAFF] flex flex-col justify-between">
                                <img src='https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/639b4baba4e13f9cac47f0e3_quotation-marks%20(2)%202.svg'
                                    alt="" className='w-12 relative top-[-36px] left-28' />
                                <div className="p-4 flex-1 flex flex-col justify-center items-center">
                                    <p className="text-black mb-4">{card.description}</p>
                                    <h3 className="text-xl text-black font-semibold mb-2 ml-36">{card.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextCard}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#5FBBE7] px-5 text-white p-4 rounded-full z-10 mr-28 max-sm:mr-2"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default CoachingCard;
