import React from 'react';

const PartnerSection = () => {
    return (
        <div className="flex justify-center items-center py-20 bg-[#FFF1DF]">
            <div className="container text-center">
                <h1 className="text-4xl font-bold mb-8">Want to partner with me in building?</h1>
                <p className="text-lg mb-8 max-sm:px-4">Get in touch with me if you have an idea that you think I would like and let's build together.</p>
                <button className="bg-[#E59F41] hover:text-black text-white font-bold py-4 px-6 rounded-full transition duration-300">CONTACT ME</button>
            </div>
        </div>
    );
}

export default PartnerSection;
