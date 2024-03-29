"use client";
import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {children.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="tab-content ">
        {children[activeTab]}
      </div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <>{children}</>;
};

export { Tabs, Tab };
