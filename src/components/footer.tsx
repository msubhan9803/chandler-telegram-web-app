import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import faqConfig from '@/utils/faq-config';

const Footer = () => {
  return (
    <footer className="bg-custom-blue">
      <div className="container py-8 flex items-center justify-center">
        <div className="w-full md:max-w-xl">
          <div className="flex justify-center text-center mx-auto font-normal text-md text-white py-4">
            <Image
              className="h-8"
              width={60}
              height={40}
              src="/faq-image.png"
              alt=""
            />
            <span>Frequently Asked Questions</span>
          </div>

          <div className="mb-8">
            {/* FAQs */}
            {faqConfig.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="w-full">
                    <Disclosure.Button className="flex w-full justify-between rounded-lg mx-auto py-1 text-left text-sm font-normal text-white focus:outline-none">
                      <span>{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-2 text-justify text-sm text-gray-300">
                      <div dangerouslySetInnerHTML={{__html: faq.answer}} />
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
          <div className="flex items-center justify-center">
            {/* Logo */}
            <Link href="/" className="-m-1.5 p-4">
              <CalderaLogo />
            </Link>
          </div>
          <div className="text-left text-sm md:text-md lg:text-md text-gray-200 pt-2 font-thin">
            <p className="text-center">
              © Caldera Trade 2022 All Rights Reserved When you visit or
              interact with our sites, services or tools, we, or our authorized
              service providers, may use cookies for storing information to help
              provide you with a better, faster and safer experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

function CalderaLogo() {
  return <Image width={80} height={80} src="/Caldera-logo.png" alt="" />;
}

export default Footer;
