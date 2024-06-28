// MyStory.jsx
import React from 'react';

const MyStory = () => {
    return (
        <div className="container mx-auto p-4">
            <img
                src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/63a1a375468bebd3a70f7b3f_fotos-familia-dezembro-2022-fotografa-margarita%2Burzua-181.jpg"
                alt="Description of Image"
                className="w-11/12 max-sm:ml-6 md:w-full rounded-lg mx-auto"
            />
            <div className="flex flex-col md:flex-row justify-around items-start max-sm:ml-2 mt-8">
                <div className="md:w-1/2 text-left p-4 md:pl-0 md:pr-8">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        I am an out-of-box thinker with a diverse experience
                    </h3>
                    <p className="text-lg leading-relaxed">
                        Since I was young, I have liked programming and was passionate about technology, so I studied
                        Computer Science, where I learned the potential of technology to change people's lives.
                        After my degree, I wanted to learn more about business and joined McKinsey, where I learned how to be
                        great at problem-solving. I moved to New York to consolidate my business insights by doing an MBA at
                        Columbia, where I expanded my network.
                    </p>
                </div>
                <div className="md:w-1/2 text-left p-4 md:pl-8">
                    <p className="text-lg leading-relaxed">
                        I decided to get into Product Management and went to Google, where I worked in e-commerce (Google
                        Shopping) and lived through Innovator's dilemma in real time.
                        <br />
                        After, I explored the startup world at DoorDash, where I was the PM responsible for launching a new
                        product, 0→1 Storefront (”Shopify for restaurants), in the middle of the pandemic until IPO.
                        <br />

                        I moved back to Portugal to be close to family with the birth of my first son and did a sting at SWORD
                        Health as the Head of Product, growing a team from 7 to 20+, reporting to the Founder, where I scaled the
                        product team in a hyper-growth phase (Series B to Series D, $2B valuation).
                    </p>
                    <h2 className="text-xl md:text-2xl font-semibold">
                        Since establishing Beautiful Brain, I have advised different companies on their product strategy and
                        development
                    </h2>
                </div>
            </div>

        </div>
    );
};

export default MyStory;
