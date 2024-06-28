import React, { useState } from 'react';
import PersonalDevelopment from './PersonalDevelopment/PersonalDevelopment';
import SocialImpact from './SocialImpact/SocialImpact';
import CuriosityDriven from './CuriosityDriven/CuriosityDriven';

const BuildingTabs = () => {
    const [tab, setTab] = useState("PersonalDevelopment");

    return (
        <div className="p-5 md:flex md:flex-col md:ml-12">
            <div className='ml-10 md:ml-[80px]'>
                <div>
                    <p className="my-5 text-left text-2xl"> IDEAS </p>
                </div>
                <div>
                    <h1 className="text-left mb-7 text-[48px]">Here is what I want to build</h1>
                </div>
                <div>
                    <p className="text-left text-xl">
                        I care more about the idea to be created than who does it, so I share my list of thoughts publicly. <br />
                        Give me feedback by providing a like in the ones that interest you, or send me a note if you want to partner.
                    </p>
                </div>
            </div>

            <div className="bg-[#f6edee] flex flex-col md:flex-row md:justify-between md:items-center mx-4 md:mx-24 mt-5 rounded-full p-3 max-sm:rounded-sm max-sm:ml-10">
                <div className={`text-center flex-1 mb-3 md:mb-0 ${tab === 'PersonalDevelopment' ? 'bg-amber-500 rounded-full' : ''}`}>
                    <button onClick={() => setTab("PersonalDevelopment")} className="border-none outline-none cursor-pointer bg-transparent block w-full py-3 px-5 hover:bg-aqua">Personal Development</button>
                </div>
                <div className={`text-center flex-1 mb-3 md:mb-0 ${tab === 'SocialImpact' ? 'bg-amber-500 rounded-full' : ''}`}>
                    <button onClick={() => setTab("SocialImpact")} className="border-none outline-none cursor-pointer bg-transparent block w-full py-3 px-5 hover:bg-aqua">Social Impact</button>
                </div>
                <div className={`text-center flex-1 ${tab === 'CuriosityDriven' ? 'bg-amber-500 rounded-full' : ''}`}>
                    <button onClick={() => setTab("CuriosityDriven")} className="border-none outline-none cursor-pointer bg-transparent block w-full py-3 px-5 hover:bg-aqua">Curiosity Driven</button>
                </div>
            </div>

            <div className="mt-5">
                {tab === "PersonalDevelopment" && <PersonalDevelopment />}
                {tab === "SocialImpact" && <SocialImpact />}
                {tab === "CuriosityDriven" && <CuriosityDriven />}
            </div>
        </div>
    );
};

export default BuildingTabs;