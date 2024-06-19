import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const header = "catalog of games.";

const TextScrollEvergrowing = () => {
    const [length, setLength] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const startPosition = viewportHeight / 2;
            const newLength = Math.max(0, Math.min(3, Math.floor((scrollPosition - startPosition) / 100)));
            setLength(newLength);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative flex h-full bg-black">
            <div className="container max-w-screen-xl mx-auto relative z-20">
                <div className="my-24 flex flex-col items-center">
                    <div className="text-6xl font-semibold flex leading-tight" style={{
                        background: '-webkit-linear-gradient(180deg, #33FF00 0%, #00FF0A 13%, #FCFF66 28%, #FF0000 43%, #FF0000 58%, #00E0FF 70%, #FF549C 87%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'rgba(255, 255, 255, 0.4)',
                    }}>
                        Evergro{Array.from({ length }, (_, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                            >
                                o
                            </motion.span>
                        ))}wing
                    </div>
                    <div className="text-6xl font-semibold text-white flex justify-center">
                        {header}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextScrollEvergrowing;
