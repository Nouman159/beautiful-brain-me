import React, { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubscribe = () => {
        if (!email || !email.includes('@')) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        window.location.href = 'https://beautifulbrain.substack.com/';

    };

    return (
        <div className="flex flex-col md:flex-row mt-20 px-4 md:px-20 py-10 justify-between">
            {/* Left Section */}
            <div className="md:w-1/3 py-10">
                <h1 className="text-4xl font-bold">Did anything spark your interest?</h1>
                <br />
                <p className="text-lg">Subscribe to the Beautiful Brain Newsletter and get 3 inspiring stories every Sunday to spark your week.</p>
            </div>

            {/* Right Section */}
            <div className="md:w-3/5 md:ml-12 md:h-96 flex flex-col justify-center items-center border-solid border-2 border-gray-300">
                <div className="w-full flex justify-center items-center">
                    <a href="https://beautifulbrain.substack.com/">
                        <img className="h-16 w-16" src="https://substackcdn.com/image/fetch/w_170,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F26065e5d-14ec-455c-9dcf-8abe6e05b317_458x458.png" alt="" />
                    </a>
                </div>
                <a href="https://beautifulbrain.substack.com/" className="text-center font-bold underline text-2xl my-2">Brain Snacks</a>
                <div className='md:mx-24 mx-4'>
                    <p className="text-center">Feed your curiosity with short stories about nature's wonders and human&rsquo;s achievements. Delivering 3 stories every Sunday.</p>
                    <p className="text-center">By José Miguel Santos</p>
                </div>

                <div className="w-full flex justify-center items-center mt-4">
                    <div className="w-72 md:w-auto flex items-center">
                        <input
                            type="email"
                            className="h-12 w-full md:w-48 px-4 border-2 border-blue-300 rounded-l outline-none md:mb-0"
                            placeholder="Type your email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className="h-12 w-full md:w-24 bg-blue-500 text-white rounded-r hover:bg-blue-600"
                            onClick={handleSubscribe}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

                <div className="text-sm text-gray-500 mt-2 max-sm:mx-4">
                    By subscribing you agree <a href="https://substack.com/tos" className="text-gray-400 underline">Substack's Terms of Use</a>, <a href='https://substack.com/privacy' className="text-gray-400 underline">our Privacy Policy</a> and <a href="https://substack.com/ccpa?utm_source=embed_publication#personal-data-collected" className="text-gray-400 underline">our Information collection notice</a>
                </div>

                <div className="w-56 h-12 flex justify-center items-center mt-4">
                    <a href="https://substack.com/?utm_source=embed&utm_content=beautifulbrain">
                        <img className="h-6 w-full" src="https://substackcdn.com/image/fetch/w_200,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack_wordmark.black.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSignup;