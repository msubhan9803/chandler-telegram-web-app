import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const faqs = [
    {
      question: "What is your refund policy?",
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      question: "Do you offer technical support?",
      answer: "No.",
    },
    // Add more FAQ items here
  ];

  return (
    <footer className="bg-blue-900">
      <div className="container mx-auto py-8">
        <div className="max-w-md mx-auto">
          <div className=" text-center font-normal text-md text-white py-4">
            Frequently Asked Questions
          </div>

          <div className="mb-8 grid grid-cols-1 md:grid-rows-2  lg:grid-cols-1 xl:grid-cols-2 ">
            {/* FAQs */}
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-900 px-1 py-1 text-left text-sm font-normal text-white focus:outline-none m-auto">
                      <span>{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-2 text-justify text-sm text-gray-300">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
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
            {/* Text in the left side of footer */}
            <p>Caldera Trade 2020 all rights are reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

function CalderaLogo() {
  return (
    <Image
      className="h-8"
      width={80}
      height={80}
      src="/Caldera-logo.png"
      alt=""
    />
  );
}
export default Footer;
