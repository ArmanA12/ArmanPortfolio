import React, { useState, useEffect } from "react";

function UrlPreviewer() {
    // Initialize the array with meaningful values (e.g., index numbers)
    const arrays = Array.from({ length: 25000 }, (_, index) => index);
    const [dummy, setDummy] = useState(arrays);
    const [animatedItems, setAnimatedItems] = useState([]);

    // Function to randomize the items for animation
    const randomizeAnimation = () => {
        const numberOfAnimatedItems = 50; // Number of items to animate
        const newAnimatedItems = [];

        while (newAnimatedItems.length < numberOfAnimatedItems) {
            const randomIndex = Math.floor(Math.random() * dummy.length);
            if (!newAnimatedItems.includes(randomIndex)) {
                newAnimatedItems.push(randomIndex);
            }
        }

        setAnimatedItems(newAnimatedItems);
    };

    useEffect(() => {
        const interval = setInterval(randomizeAnimation, 3000); // Update every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position:"absolute", overflow:"hidden",  top:"0px", width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div style={{ display: "flex",overflow:"hidden", flexWrap: "wrap" }}>
                {
                    dummy.map((item) => (
                        <div
                            key={item}
                            className={`cell ${item % 2 === 0 ? "even" : "odd"} ${animatedItems.includes(item) ? "animated-cell" : ""}`}
                        >
                            {/* You can add content inside the div, if needed */}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default UrlPreviewer;
