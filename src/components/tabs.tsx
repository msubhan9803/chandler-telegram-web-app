import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full">
      <div className="flex mb-4">
        <button
          className={`flex-1 px-4 py-2 text-center ${
            activeTab === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </button>
        <button
          className={`flex-1 px-4 py-2 text-center ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </button>
        <button
          className={`flex-1 px-4 py-2 text-center ${
            activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </button>
      </div>
      <div className="bg-gray-200 p-4">
        {/* Content for each tab */}
      </div>
    </div>
  );
};

export default Tabs;
