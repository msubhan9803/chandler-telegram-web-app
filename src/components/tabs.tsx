import React, { useState } from "react";
import Link from 'next/link';

const Tabs = () => {
  const tabsList = [
    {
      label: "OTC Trading",
      route: "/",
    },
    {
      label: "My Offers",
      route: "/my-offers",
    },
    {
      label: "OTC Trade Guide",
      route: "/otc-trade-guide",
    },
  ];

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 w-auto">
      <ul className="flex flex-wrap -mb-px">
        {tabsList.map((tab, index) => (
          <li className="mr-2" key={index}>
            <Link
              href={tab.route}
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
