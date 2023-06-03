import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="px-6 p-3 lg:px-8 xl:px-8 bg-blue-900">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <CalderaLogo />
            </Link>
          </div>
          <div>
            <button className="bg-transparent border-2 border-white text-sm text-white p-2 py-1 rounded-2xl">
              Log In
            </button>
          </div>
          <div className="flex ">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-main"
              onClick={handleDrawerToggle}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <div
          id="drawer-right-example"
          className={`fixed top-0 right-0 z-40 h-screen  p-4 overflow-y-auto transition-transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } bg-neutral-700 w-80 rounded-l-xl border-2 border-neutral-800 dark:bg-gray-800`}
          tabIndex="-1"
          aria-labelledby="drawer-right-label"
        >
          <h5
            id="drawer-right-label"
            className="flex justify-center mx-16 border-2 border-gray-200 p-2 rounded-full  mb-4 text-base font-semibold text-white "
          >
            My Profile
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleDrawerToggle}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="space-y-4">
            <div className="text-gray-200">
              <ul className="space-y-2">
                <li
                  className=" dark:text-gray-300 hover:text-blue-700
                  dark:hover:text-blue-500"
                >
                  Home
                </li>
                <li
                  className=" dark:text-gray-300 hover:text-blue-700
                  dark:hover:text-blue-500"
                >
                  Service
                </li>
                <li
                  className=" dark:text-gray-300 hover:text-blue-700
                  dark:hover:text-blue-500"
                >
                  FAQ
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-gray-200 ">
                {" "}
                Get Started
                <li
                  className=" dark:text-gray-300 hover:text-blue-700
                  dark:hover:text-blue-500 ml-4 pt-2"
                >
                  BOT Guide
                </li>
              </ul>

              <ul className="space-y-2 text-gray-200">
                {" "}
                Instroduction to Crypto
                <li
                  className=" dark:text-gray-300 hover:text-blue-700
                  dark:hover:text-blue-500 ml-4 pt-2"
                >
                  CryptoCurrency
                </li>
                <li
                  className=" dark:text-gray-300 hover:text-blue-700
                  dark:hover:text-blue-500 ml-4 "
                >
                  Wellets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CalderaLogo() {
  return (
    <Image
      className="h-8"
      width={60}
      height={60}
      src="/Caldera-logo.png"
      alt=""
    />
  );
}
