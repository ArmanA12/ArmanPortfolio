import React from 'react';
import { TextHoverEffect } from './TextHoverEffect';
// import Heading from '../Heading/Heading';

function JointAIFTP() {
    return (
        <div className="  relative md:py-4 py-2 overflow-hidden">
            {/* Grid Overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="w-full h-full origin-center"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "90px 90px", // More refined grid
                        transform: "perspective(800px) rotateX(45deg) scaleY(0.5)", // Adjusted perspective
                        maskImage: "radial-gradient(circle, rgba(0, 0, 0, 0.7), transparent 100%)"
                    }}
                ></div>
            </div>

            {/* Content with Hover Effect */}
            <div>
                <TextHoverEffect text="ARMAN" />
            </div>
            {/* <div className="flex justify-center">
                <div className="relative group md:-top-14 -top-2">
                
                    <div className="absolute  -inset-1 bg-gradient-to-r from-yellow-400/35 via-red-500/35 to-blue-500/35 rounded-[30px] blur opacity-75 group-hover:opacity-100 transition-all duration-300" />

                
                    <button
                        className="relative px-14 py-4 text-gray-900 font-light bg-white rounded-[30px] border border-transparent hover:text-black transition-colors"
                        style={{
                            position: "relative",
                            background: "white",
                            borderRadius: "100px",
                            border: "1px solid transparent",
                            backgroundImage:
                                "linear-gradient(white, white), linear-gradient(to right, rgba(250, 204, 21, 0.8), rgba(239, 68, 68, 0.8), rgba(59, 130, 246, 0.8))",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                        }}
                    >
                        <Heading headingText="Click Here to Join" size='medium' />
                    </button>
                </div>
            </div> */}

        </div>
    );
}

export default JointAIFTP;

