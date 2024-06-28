import React from 'react';

const MyStory = () => {
    return (
        <div className="text-center mt-8 md:mt-0 px-4 md:px-0">
            <h3 className="text-2xl">MY STORY</h3>
            <h2 className="text-4xl md:text-5xl my-4">
                For the past eleven years, my wife has called <br className="hidden md:inline" /> me the "Beautiful Brain."
            </h2>
            <img
                src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/63a1a06ec58a5892f4a2423c_fotos-familia-dezembro-2022-fotografa-margarita%2Burzua-213.jpg"
                alt="Description of Image"
                className="rounded-2xl my-4 mx-auto h-64 md:h-auto"
            />
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-around mt-8 md:mt-0 px-4 md:px-0">
                <div className="left text-left md:mr-8">
                    <h3 className="text-xl md:text-2xl my-4">
                        My wife would call me that because she noticed I have a different <br className="hidden md:inline" />
                        way of thinking that could solve problems in a unique way.
                    </h3>
                    <p className="my-4">
                        This was also a common way co-workers and managers described my <br className="hidden md:inline" />
                        skills, but I only started understanding why I was like that in my 30s. <br />
                        Despite those compliments, I always felt like I was underachieving <br />
                        because I would quickly lose interest when an idea would lose novelty. <br /><br />
                        After a major depression episode, and thanks to the help of therapy, I <br />
                        discovered that I had ADHD. This made me reflect and understand who I <br />
                        am, both reflecting myself and by asking for help from others.
                    </p>
                </div>
                <div className="right text-left md:ml-8">
                    <p className="my-4">
                        I decided to break free from traditional corporate life and establish my <br className="hidden md:inline" />
                        path. I want to take control of my life to focus on my well-being first and <br />
                        foremost. <br />
                        I learned that my value is not being an expert in a narrow field but rather <br />
                        my ability to bring a different perspective to any problem. Therefore, I <br />
                        read and learn daily about a variety of (politics, economics, and biology, <br />
                        among others) because I think that will help me become an overall <br />
                        thinker.
                    </p>
                    <h3 className="text-xl md:text-2xl my-4">
                        It took me 2+ years to break free from the norm, focus on what I <br className="hidden md:inline" />
                        value, and live a more authentic self. Now I want to help others.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default MyStory;

