import React, { useEffect, useRef, useState } from 'react';

const TextScroll = () => {
    // Ref for the text element
    const textRef = useRef(null);
    // State to track sticky behavior
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            // Get scroll position and viewport height
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Calculate the position when the word starts appearing
            const startPosition = viewportHeight / 2;

            // Calculate the length of "Color" based on scroll position
            const length = Math.max(0, Math.min(10, Math.floor((scrollPosition - startPosition) / 100)));

            // Update text content
            const word = "Colo" + "o".repeat(length) + "r";
            // Update the text content with sticky class if the text is not fully shown
            if (textRef.current) {
                textRef.current.textContent = word;
                setIsSticky(length > 5);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Run effect only once on component mount

    return (
        <div className={`relative min-h-screen flex bg-backgroundColorQuaternary ${isSticky ? 'sticky' : ''}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-4xl px-96">
                <div ref={textRef}>Color</div>
            </div>
        </div>
    );
}

export default TextScroll;
