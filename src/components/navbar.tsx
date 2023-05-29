import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "@/components/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <CalderaLogo />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-main"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white dark:bg-black px-6 py-6 lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <CalderaLogo />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-primary-main"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="py-6 flex-1 m-auto">
                <Button
                  text="Sign in"
                  classes="bg-primary-main disabled:bg-primary-light text-black"
                />
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </>
  );
}

function CalderaLogo() {
  return (
    <Image
      className="h-8"
      width={100}
      height={60}
      src="/Caldera-logo.png"
      alt=""
    />
  );
}
