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
    <div className="container py-8 flex items-center justify-center">
      <div className=" md:max-w-xl xl:max-w-4xl lg:max-w-3xl ">
        <div className="flex justify-center text-center mx-auto font-normal text-md text-white py-4">
          Frequently Asked Questions
        </div>
  
        <div className="mb-8">
          {/* FAQs */}
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-900 mx-auto  py-1 text-left text-sm font-normal text-white focus:outline-none">
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
