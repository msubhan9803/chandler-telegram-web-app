import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Tabs = () => {
  const { pathname } = useRouter();

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
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mx-auto w-[462px] overflow-x-scroll">
      <ul className="flex flex-wrap justify-center -mb-px">
        {tabsList.map((tab, index) => (
          <li className="mr-2" key={index}>
            <Link href={tab.route}>
              <span className={
                `inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 
                ${pathname === tab.route ? 'border-gray-300 text-gray-600 dark:text-gray-300' : 'border-transparent'}`
              }>
                {tab.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
