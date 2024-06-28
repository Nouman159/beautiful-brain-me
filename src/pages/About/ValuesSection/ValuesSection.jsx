import React from 'react';

const ValuesSection = () => {
    return (
        <div className="pl-3 pr-3 md:pl-4 md:pr-4 py-5">
            <h2 className="text-3xl font-bold mb-6 pl-14 max-sm:pl-6">My values</h2>
            <div className="flex flex-col md:flex-row justify-around items-start space-y-6 md:space-y-0 pl-8 max-sm:pl-4">
                {/* Section 1 */}
                <div className="text-left pl-3 md:pl-4">
                    <img
                        src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f52e448ccb47fecd347de_celebrity%201.svg"
                        alt="Logo 1"
                        className="block mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">Diversity</h3>
                    <p className="text-lg">
                        Each individual is different and <br /> must first understand themselves <br /> to achieve their highest potential. <br /> Diverse teams allow us to capture <br /> the best of us all.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="text-left pl-3 md:pl-4">
                    <img
                        src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f52e448ccb4c3ebd347df_book%201.svg"
                        alt="Logo 2"
                        className="block mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">Lifelong learning</h3>
                    <p className="text-lg">
                        To stay relevant, you need to <br /> always be learning. I always aspire <br /> to keep a growth mindset, and <br /> spend at least 20% of my time <br /> learning new things.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="text-left pl-3 md:pl-4">
                    <img
                        src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f52e448ccb4c3ebd347df_book%201.svg"
                        alt="Logo 3"
                        className="block mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">Stoicisim</h3>
                    <p className="text-lg">
                        Hedonic adaptation is real, so <br /> important to avoid the urge to get <br /> new things. I try to constantly <br /> remind myself of that and focus on <br /> experiences over stuff.
                    </p>
                </div>

                {/* Section 4 */}
                <div className="text-left pl-3 md:pl-4">
                    <img
                        src="https://assets-global.website-files.com/62c4588dcf3dfb7ed3818e78/638f52e448ccb4520cd347dc_exchange%201.svg"
                        alt="Logo 4"
                        className="block mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">Flexibility</h3>
                    <p className="text-lg">
                        People do their best work if they <br /> can work where they perform the <br /> best. I believe remote and async <br /> will be the future of work and will <br /> allow more people to do their best <br /> work.
                    </p>
                </div>
            </div>
            <hr className="mt-6" />
        </div>
    );
};

export default ValuesSection;