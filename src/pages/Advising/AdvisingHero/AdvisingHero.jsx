import React from "react";

const AdvisingHero = () => {
    return (
        <div className="container mx-auto p-5">
            <div className="flex flex-wrap justify-between items-center">
                <div className="left w-full md:w-1/2 pr-5 py-12 md:pb-28">
                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-semibold mb-2">Product <br />thinking <br />delivered</h2>
                    <p className="text-xl text-gray-800 md:text-xl mb-2">Hi, My name is José Miguel Santos. I partner with companies that <br />need help solving product-related problems.</p>
                    <a href="https://calendly.com/jose_miguel_santos/advisor-discovery-call-beautiful-brain" className="inline-block px-6 py-5 bg-[#DB504C] text-white rounded-full text-lg mt-3">BOOK A FREE CONSULTATION</a>
                </div>
                <div className="right w-full mt-12 md:w-1/2 pl-5 text-center">
                    <img
                        src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f50378fe08376b8247aeb_Advsior.svg"
                        alt="Image"
                        className="min-w-full h-auto rounded-xl mb-3"
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-between items-center mt-5">
                <div className="left w-full md:w-[560px] pr-5">
                    <img
                        src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/63a1a428ae02250983e76adb_fotos-familia-dezembro-2022-fotografa-margarita%2Burzua-186.jpg"
                        alt="Image"
                        className="min-w-full h-auto max-sm:min-h-96 rounded-xl mb-3"
                    />
                </div>
                <div className="right w-full md:w-1/2 pl-3 text-center">
                    <h3 className="text-3xl max-sm:text-2xl max-sm:pt-12 max-sm:pb-4 text-left font-bold mb-2">I will fill the role needed to ensure your problem is solved, from conducting customer interviews to strategy definition.</h3>

                    <p className="text-lg text-gray-900 md:text-lg leading-relaxed text-left">I only take projects I am passionate about, but I am flexible about the arrangements (part-time, full-time, ad-hoc) and the role I need to play.<br /><br /> While I appreciate experts' value, my value comes from being a generalist. I have worked in many different industries, companies, and geographies, and the value I bring is that I can think differently about problem-solving than most. <br /> <br />I have gone through the full spectrum of product management, from b2c/b2b, e- commerce to health tech, playing IC and manager roles, and I am comfortable playing the part that is needed to get a product to be successful.</p>

                </div>
            </div>
        </div>
    );
};

export default AdvisingHero;
