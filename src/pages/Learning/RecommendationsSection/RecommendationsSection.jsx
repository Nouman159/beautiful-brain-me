import React from 'react';

const RecommendationsSection = () => {
    return (
        <div className="bg-[#F5FFF1] mt-6">
            <div className="container mx-auto py-16 text-center">
                <h3 className="text-2xl text-black">RECOMMENDATIONS</h3>
                <h2 className="text-4xl text-black font-bold mt-4 mb-4 max-sm:px-4">Check out my list of recommendations for <br className="hidden sm:inline" />learning topics hosted on Coda</h2>
                <p className="text-lg text-gray-600 mb-6 max-sm:px-4">Check out the list of free books, podcasts, and online courses that have inspired my life.</p>
                <div className="text-center">
                    <a href="https://coda.io/d/Beautiful-Brain-Recommendations_dYsd69q9uGd/Beautiful-Brain-Recommendations_sux-u" className="inline-block bg-[#24B260] hover:text-black text-white font-bold py-5 px-6 md:px-6 rounded-full transition duration-300">CHECKOUT MY RECOMMENDATIONS</a>
                </div>
            </div>
        </div>
    );
}

export default RecommendationsSection;
