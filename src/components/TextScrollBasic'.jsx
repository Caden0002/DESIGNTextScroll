import React, { useEffect, useRef } from 'react';

const TextScrollBasic = () => {
    // Create a ref for the text element
    const textRef = useRef(null);

    useEffect(() => {
        // Function to handle the scroll event
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Get current scroll position
            const viewportHeight = window.innerHeight; // Get viewport height
            const startPosition = viewportHeight / 2; // Calculate start position for the effect

            // Calculate the length of the word dynamically based on scroll position
            const length = Math.max(0, Math.min(10, Math.floor((scrollPosition - startPosition) / 70)));
            const LeftWord = "Left";
            const RightWord = "Right";
            const numberArray = Array.from({ length: length }, (_, index) => index + 1);
            const word = LeftWord + numberArray.join('') + RightWord;

            // Update the text content of the DOM element if the ref exists
            if (textRef.current) {
                textRef.current.textContent = word;
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="relative min-h-screen flex bg-backgroundColorQuaternary">
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-4xl px-96">
                <div ref={textRef}></div> {/* Attach the ref to this div */}
            </div>
        </div>
    );
};

export default TextScrollBasic;
