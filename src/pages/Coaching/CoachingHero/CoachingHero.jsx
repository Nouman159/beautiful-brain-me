import React from "react";

const CoachingSection = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between mb-8">
                <div className="flex-1 p-6 md:ml-28">
                    <h2 className="text-5xl font-sans mb-2">
                        Coaching, <br /> from first <br /> principles
                    </h2>
                    <p className="text-lg leading-8">
                        I help clients in the tech industry achieve their goals. I believe each
                        individual is unique, and it is magical what can be achieved in 1:1
                        personal coaching. Book an intro call so I can understand your needs
                        and create a plan together.
                    </p>
                    <a href="https://calendly.com/jose_miguel_santos/coaching-discovery-call-beautiful-brain">
                        <button className="bg-blue-600 text-white py-3 px-6 text-lg rounded-full mt-3">
                            BOOK INTRO CALL
                        </button>
                    </a>
                </div>
                <div className="flex-1 p-6 text-center">
                    <img
                        src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f50378fe0830b3d247aed_Coaching.svg"
                        alt="Image on the right side"
                        className="mx-auto"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row mb-8">
                <div className="flex-1 p-6">
                    <img
                        src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/63a1a66aa97b9320fccb2029_fotos-familia-dezembro-2022-fotografa-margarita%2Burzua-72.jpg"
                        alt="Image on the left side"
                        className="mx-auto"
                    />
                </div>
                <div className="flex-1 p-6 md:mt-32 md:ml-[-44px]">
                    <h3 className="text-3xl font-sans mb-2">
                        I love to empower people and see them grow.
                    </h3>
                    <p className="text-lg leading-8">
                        That&rsquo;s why I started coaching and have more than 400 hours of coaching with stellar reviews. I have
                        helped over 100 clients get their dream roles or find their true calling. I am an experienced product leader with 10+ years of experience across large companies and hyper-growth startups. I also have experience as a manager and manager of managers and reporting to a CEO/Founder.
                        My method is different from traditional coaches. Instead of teaching you a framework, I want to help
                        you develop your tools based on your strengths- from first principles. Please feel free to book a free
                        intro call to find out more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoachingSection;
