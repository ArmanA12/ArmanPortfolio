import React, { useState, useEffect } from "react";

function UrlPreviewer() {
  const arrays = Array.from({ length: 23500 }, (_, index) => index);
  const [dummy, setDummy] = useState(arrays);
  const [animatedItems, setAnimatedItems] = useState([]);

  const randomizeAnimation = () => {
    const numberOfAnimatedItems = 50;
    const newAnimatedItems = new Set();

    while (newAnimatedItems.size < numberOfAnimatedItems) {
      const randomIndex = Math.floor(Math.random() * dummy.length);
      newAnimatedItems.add(randomIndex);
    }

    setAnimatedItems(Array.from(newAnimatedItems));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      requestAnimationFrame(randomizeAnimation);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isMobile = window.innerWidth < 768;
  const itemsToRender = isMobile ? dummy.slice(0, 500) : dummy;

  return (
    <div style={{ position: "absolute", top: "0px", width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {itemsToRender.map((item) => (
          <div
            key={item}
            className={`cell ${item % 2 === 0 ? "even" : "odd"} ${animatedItems.includes(item) ? "animated-cell" : ""}`}
          >
            {/* You can add content inside the div, if needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UrlPreviewer;
