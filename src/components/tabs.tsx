import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

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
    <>
        <MobileViewDropdown tabsList={tabsList} pathname={pathname} />
        <OtherViewTabs tabsList={tabsList} pathname={pathname} />
    </>
  );
};

function MobileViewDropdown({ tabsList, pathname }: any) {
  const [selected, setSelected] = useState({
    label: "",
    route: "",
  });
  const router = useRouter();

  const handleOptionClick = (route: string) => router.push(route);

  useEffect(() => {
    if (pathname && tabsList.length > 0) {
      setSelected(tabsList.find((elem: any) => elem.route === pathname));
    }
  }, [pathname, tabsList]);

  return (
    <div className="block md:hidden w-full px-4 py-4">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute pl-0 py-1 px-1 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {tabsList.map((tab: any, index: any) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-600" : "text-gray-900"
                    }`
                  }
                  value={tab}
                  onClick={() => handleOptionClick(tab.route)}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {tab.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

function OtherViewTabs({ tabsList, pathname }: any) {
  return (
    <div className="hidden md:block text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 mx-auto max-w-full overflow-x-auto p-[12px]">
      <ul className="flex flex-wrap justify-center m-auto -mb-px w-[462px]">
        {tabsList.map((tab: any, index: any) => (
          <li className="mr-2" key={index}>
            <Link href={tab.route}>
              <span
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 text-slate-400 hover:border-gray-300 dark:hover:text-gray-300 
              ${
                pathname === tab.route
                  ? "border-gray-300 text-white dark:text-gray-300"
                  : "border-transparent"
              }`}
              >
                {tab.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
