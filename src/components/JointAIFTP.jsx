import React from 'react';
import { TextHoverEffect } from './TextHoverEffect';
// import Heading from '../Heading/Heading';

function JointAIFTP() {
    return (
        <div className="  relative md:py-4 py-2 overflow-hidde">
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
                        maskImage: "radial-gradient(circle, rgba(0, 0, 0, 0.7), transparent 120%)"
                    }}
                ></div>
            </div>

            {/* Content with Hover Effect */}
            <div>
                <TextHoverEffect text="ARMAN" />
            </div>

        </div>
    );
}

export default JointAIFTP;

