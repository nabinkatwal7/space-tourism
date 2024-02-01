import React from "react";

function HomePage() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/EarthBg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={"text-8xl font-Bellefair w-screen h-screen pt-20"}
    >
      <p>So you want to space travel?</p>
    </div>
  );
}

export default HomePage;
