import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const CoachingServices = () => {
    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);

    return (
        <>
            <div className='services flex flex-col lg:flex-row lg:justify-between'>
                <div className='main-text m-10 lg:mr-0 lg:ml-40 my-16 lg:mb-12 lg:w-[800px] mt-24'>
                    <div className='services-holder'>
                        <p className='text-2xl lg:text-3xl'>SERVICES</p>
                        <h1 className='text-4xl lg:text-5xl font-bold mt-4'>My method is different <br />than traditional <br /> coaches.</h1>

                        <p className='mt-4 text-xl text-gray-800'>I want to help you develop your own tools based on
                            your strengths from the first principles. I advise from
                            high-level strategic thinking in your career to tactical advice on the day-to-day job and interviewing.
                            <br /><br />
                            Book a 30 min free session, and lets work together on the best plan for you.</p>
                        <a href='https://calendly.com/jose_miguel_santos/coaching-discovery-call-beautiful-brain?month=2024-06' target='_blank'>
                            <button className='mt-6 bg-[#5FBAE6] text-white text-xl font-semibold py-5 px-6 rounded-full hover:text-black'>Book a free session</button>
                        </a>
                    </div>
                </div>
                <div className='toggle max-sm:mr-12 max-sm:ml-8 lg:pl-12 md:mr-12 mt-20 flex flex-col items-start p-5  max-sm:px-0 max-sm:w-[85%] lg:w-3/4 md:mt-28'>
                    <div className='toggle-holder w-full mb-4'>
                        <button onClick={() => setShowContent1(!showContent1)} className='w-full text-left bg-none border-none cursor-pointer py-6 text-2xl flex items-center justify-between mb-2 rounded-lg transition-transform duration-300'>
                            {showContent1 ? <FontAwesomeIcon icon={faAngleUp} className='text-blue-500 mr-2' /> : <FontAwesomeIcon icon={faAngleDown} className='text-blue-500 mr-2' />}
                            <h2 className='mr-auto ml-2 text-4xl font-semibold'>Find your Everest</h2>
                        </button>
                        <p className={`transition-max-height duration-500 text-xl text-gray-800 ease-out pl-8 ${showContent1 ? 'max-h-screen opacity-100 transform scale-y-100' : 'max-h-0 opacity-0 transform scale-y-0'} overflow-hidden`}>
                            Are you not excited about your current role but don't know where to go? <br /><br />
                            I've seen the entire spectrum, from large companies to small startups. I will help <br />
                            you ask and answer the hard questions to understand deeply what you want, your <br />
                            Everest. <br /><br />
                            Learn how to go beyond your ego and find what you want.
                        </p>
                        <hr className='mt-4' />
                    </div>
                    <div className='toggle-holder w-full mb-4'>
                        <button onClick={() => setShowContent2(!showContent2)} className='w-full text-left bg-none border-none cursor-pointer py-6 text-2xl flex items-center justify-between mb-2 rounded-lg transition-transform duration-300'>
                            {showContent2 ? <FontAwesomeIcon icon={faAngleUp} className='text-blue-500 mr-2' /> : <FontAwesomeIcon icon={faAngleDown} className='text-blue-500 mr-2' />}
                            <h2 className='mr-auto ml-2 text-4xl font-semibold'>Get your dream role</h2>
                        </button>
                        <p className={`transition-max-height duration-500 text-xl text-gray-800 ease-out pl-8 ${showContent2 ? 'max-h-screen opacity-100 transform scale-y-100' : 'max-h-0 opacity-0 transform scale-y-0'} overflow-hidden`}>
                            Ready for a change and looking to find and ace the interview for your dream role? <br />
                            I've been a hiring manager and helped hundreds of candidates find their best roles. I <br /> will teach you how to bring and sell your best self. <br />
                            Achieve your dream role by working with your strengths.
                        </p>
                        <hr className='mt-4' />
                    </div>
                    <div className='toggle-holder w-full mb-4'>
                        <button onClick={() => setShowContent3(!showContent3)} className='w-full text-left bg-none border-none cursor-pointer py-6 text-2xl flex items-center justify-between mb-2 rounded-lg transition-transform duration-300'>
                            {showContent3 ? <FontAwesomeIcon icon={faAngleUp} className='text-blue-500 mr-2' /> : <FontAwesomeIcon icon={faAngleDown} className='text-blue-500 mr-2' />}
                            <h2 className='mr-auto ml-2 text-4xl font-semibold'>Achieve peak performance</h2>
                        </button>
                        <p className={`transition-max-height duration-500 text-xl text-gray-800 ease-out pl-8 ${showContent3 ? 'max-h-screen opacity-100 transform scale-y-100' : 'max-h-0 opacity-0 transform scale-y-0'} overflow-hidden`}>
                            You have your dream role but feel you are underperforming. <br />
                            The solution is rarely to work longer. I spent a year researching what science tells <br />about performance and applying it to myself. I will help you look at what is holding <br /> you back at your job (relationship with the boss, communication, etc.) and the rest of your <br /> life (sleep, exercise, nutrition).
                            Learn how to become a super athlete by focusing on the things that matter.
                        </p>
                        <hr className='mt-4' />
                    </div>
                </div>
            </div >
            <hr />
        </>
    );
};

export default CoachingServices;
