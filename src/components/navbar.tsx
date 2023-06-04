import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "@/components/button";
import MobileNavbar from "@/components/mobile-navbar";

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
          <div className="">
            <Link href="/" className="-m-1.5 p-1.5">
              <CalderaLogo />
            </Link>
          </div>
          <button className="bg-transparent border-2 border-white text-sm text-white p-2 py-1 rounded-2xl">
            Log In
          </button>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-main"
            onClick={handleDrawerToggle}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </nav>

        <MobileNavbar
          isDrawerOpen={isDrawerOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
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
