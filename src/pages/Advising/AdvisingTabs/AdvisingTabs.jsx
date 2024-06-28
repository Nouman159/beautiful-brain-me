import React, { useState } from 'react';
import FirstPrinciples from './FirstPrinciples/FirstPrinciples';
import Empowering from './Empowering/Empowering';
import Impact from './Impact/Impact';
import DetailsOriented from './DetailsOriented/DetailsOriented';

const AdvisingTabs = () => {
    const [tab, setTab] = useState("FirstPrinciples");

    return (
        <div className="p-5 md:flex md:flex-col md:ml-12">
            <div className='ml-10 md:ml-[110px]'>
                <div>
                    <h1 className="text-left mb-7 text-[48px]">How do I bring value
                    </h1>
                </div>
                <div>
                    <p className="text-left text-xl font-semibold">
                        Better than me talking, read what others have said about me.

                    </p>
                </div>
            </div>

            <div className="bg-[#FFF2F1] flex flex-col md:flex-row md:justify-between md:items-center mx-4 md:mx-24 mt-5 rounded-full p-3 max-sm:rounded-sm max-sm:ml-10">
                <div className={`text-center flex-1 mb-3 md:mb-0 ${tab === 'FirstPrinciples' ? 'bg-[#DB504C] rounded-full' : ''}`}>
                    <button onClick={() => setTab("FirstPrinciples")} className="border-none outline-none cursor-pointer bg-transparent block w-full py-3 px-5 hover:bg-aqua">First Principles Problem Solver</button>
                </div>
                <div className={`text-center flex-1 ${tab === 'DetailsOriented' ? 'bg-[#DB504C] rounded-full' : ''}`}>
                    <button onClick={() => setTab("DetailsOriented")} className="border-none outline-none cursor-pointer bg-transparent block w-full py-3 px-5 hover:bg-aqua">Detail-oriented Fast Learner
                    </button>
                </div>
                <div className={`text-center flex-1 ${tab === 'Impact' ? 'bg-[#DB504C] rounded-full' : ''}`}>
                    <button onClick={() => setTab("Impact")} className="border-none outline-none cursor-pointer bg-transparent block w-full py-3 px-5 hover:bg-aqua">Impact Obsessed</button>
                </div>
                <div className={`text-center flex-1 mb-3 md:mb-0 ${tab === 'Empowering' ? 'bg-[#DB504C] rounded-full' : ''}`}>
                    <button onClick={() => setTab("Empowering")} className="border-none outline-none cursor-pointer bg-transparent block w-full py-3 px-5 hover:bg-aqua">Empowering Others</button>
                </div>
            </div>

            <div className="mt-5">
                {tab === "FirstPrinciples" && <FirstPrinciples />}
                {tab === "Empowering" && <Empowering />}
                {tab === "Impact" && <Impact />}
                {tab === "DetailsOriented" && <DetailsOriented />}
            </div>
        </div>
    );
};

export default AdvisingTabs;