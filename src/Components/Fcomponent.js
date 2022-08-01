import React from "react";

export const Fcomponent = () => {
  const apple = () => {
    const time = new Date().toLocaleTimeString();

    return (
      <div>
        <h1>Functional component</h1>
        <h2>{time}</h2>
      </div>
    );
  };

};
