import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Card2 = ({
    headings = [],
    images = [],
    descriptions = [],
    colors = [],
    rightColors = [],
}) => {
    // Default to the first index if headings is non-empty
    const [selectedIndex, setSelectedIndex] = useState(headings.length > 0 ? 0 : null);

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    // Auto-rotate selected index every 3 seconds on desktop devices
    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth >= 768 && headings.length > 0) {
            const interval = setInterval(() => {
                setSelectedIndex((prevIndex) =>
                    prevIndex === null || prevIndex >= headings.length - 1 ? 0 : prevIndex + 1
                );
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [headings.length]);

    return (
        <>
            {/* Layout for md and larger screens: Two-column layout */}
            <section className="hidden md:grid grid-cols-2 gap-6 mt-6 max-w-[90%] mx-auto">
                {/* Left Grid - List of Cards */}
                <div className="flex flex-col gap-4">
                    {headings.map((heading, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(index)}
                            style={
                                selectedIndex === index
                                    ? { backgroundColor: colors[index] || 'inherit' }
                                    : {}
                            }
                            className="border border-[#EBECF0] p-4 rounded-[24px] cursor-pointer text-left"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className={`text-[22px] text-[#333132] ${selectedIndex === index ? 'font-bold' : 'font-normal'}`}>{heading}</h2>
                                <span className="text-2xl">
                                    {selectedIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                </span>
                            </div>
                            {selectedIndex === index && (
                                <p className="mt-4 text-[#3B3E27]">{descriptions[index]}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Grid - Selected Image Container */}
                <div
                    className="flex items-center justify-center rounded-xl"
                    style={{
                        backgroundColor:
                            selectedIndex !== null
                                ? rightColors[selectedIndex] || 'inherit'
                                : rightColors[0] || 'inherit',
                    }}
                >
                    {selectedIndex !== null && images[selectedIndex] && (
                        <div className="w-full max-w-[300px] aspect-square">
                            <img
                                src={images[selectedIndex]}
                                alt={headings[selectedIndex]}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* Layout for small devices: Display all images and their values */}
            <section className="block md:hidden mt-6 max-w-[90%] mx-auto space-y-10">
                {headings.map((heading, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2 rounded-2xl overflow-hidden border-b border-[#EBECF0]"
                    >
                        <div
                            className="rounded-2xl"
                            style={{ backgroundColor: rightColors[index] || 'inherit' }}
                        >
                            {images[index] && (
                                <img
                                    src={images[index]}
                                    alt={heading}
                                    className="w-full object-cover"
                                />
                            )}
                        </div>
                        <div
                            className="p-4 mt-1 rounded-2xl"
                            style={{ backgroundColor: colors[index] || 'inherit' }}
                        >
                            <h2 className="text-[22px] text-[#333132] font-bold">{heading}</h2>
                            <p className="mt-4 text-[#3B3E27] text-[15px]">{descriptions[index]}</p>
                        </div>
                    </div>
                ))}
            </section>

        </>
    );
};

export default Card2;
