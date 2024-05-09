"use client";
import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="flex">
        {children.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="activeTab === index mr-2 font-extrabold text-lg text-blue-400 w-[100px] h-[40px]">
            {tab.props.title}
          </button>
        ))}
      </div>
      <hr/>
      <div className="mt-4 text-white">{children[activeTab]}</div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <>{children}</>;
};

export { Tabs, Tab };
